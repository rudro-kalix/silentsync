import React, { createContext, useState, useEffect, useContext } from 'react';
import { DeviceService } from '../services/DeviceService';

export interface ClassEvent {
  id: string;
  name: string;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  days: number[];    // 0 = Sun, 1 = Mon, etc.
  isActive: boolean;
}

export interface Prayer {
  name: string;
  time: string; // "HH:MM"
  bufferBefore: number; // minutes
  bufferAfter: number;  // minutes
  isActive: boolean;
}

interface SyncContextType {
  classes: ClassEvent[];
  addClass: (c: Omit<ClassEvent, 'id' | 'isActive'>) => void;
  removeClass: (id: string) => void;
  toggleClass: (id: string) => void;
  prayers: Prayer[];
  updatePrayerBuffer: (name: string, before: number, after: number) => void;
  togglePrayer: (name: string) => void;
  deviceState: {
    isSilent: boolean;
    activeEvent: string | null;
    timeRemainingMins: number;
  };
  triggerQuickOverride: () => void;
}

export const SyncContext = createContext<SyncContextType | null>(null);

export const useSync = () => {
  const context = useContext(SyncContext);
  if (!context) throw new Error("useSync must be used within a SyncProvider");
  return context;
};

const timeToMins = (timeStr: string) => {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
};

export const SyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [classes, setClasses] = useState<ClassEvent[]>([
    { id: '1', name: 'Design Foundations', startTime: '09:00', endTime: '11:30', days: [1, 3], isActive: true },
    { id: '2', name: 'Quantum Physics', startTime: '13:45', endTime: '15:15', days: [2, 4], isActive: true },
  ]);

  const [prayers, setPrayers] = useState<Prayer[]>([
    { name: 'Fajr', time: '05:14', bufferBefore: 10, bufferAfter: 20, isActive: true },
    { name: 'Dhuhr', time: '12:58', bufferBefore: 5, bufferAfter: 15, isActive: true },
    { name: 'Asr', time: '15:42', bufferBefore: 5, bufferAfter: 20, isActive: true },
    { name: 'Maghrib', time: '18:24', bufferBefore: 5, bufferAfter: 10, isActive: true },
    { name: 'Isha', time: '19:54', bufferBefore: 5, bufferAfter: 15, isActive: true },
  ]);

  const [deviceState, setDeviceState] = useState({
    isSilent: false,
    activeEvent: null as string | null,
    timeRemainingMins: 0,
  });

  const [quickOverrideEnd, setQuickOverrideEnd] = useState<number | null>(null);

  // Fetch real prayer times
  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        // Using Aladhan API for New York as default. In a real app, use Geolocation.
        const res = await fetch('https://api.aladhan.com/v1/timingsByCity?city=New York&country=US&method=2');
        const data = await res.json();
        const timings = data.data.timings;
        
        setPrayers(prev => prev.map(p => ({
          ...p,
          time: timings[p.name] || p.time
        })));
      } catch (e) {
        console.error("Failed to fetch prayer times", e);
      }
    };
    fetchPrayers();
  }, []);

  // Main Synchronization Loop
  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      const currentMins = now.getHours() * 60 + now.getMinutes();
      const currentDay = now.getDay();

      let newActiveEvent: string | null = null;
      let newTimeRemaining = 0;

      // 1. Check Quick Override
      if (quickOverrideEnd && currentMins < quickOverrideEnd) {
        newActiveEvent = "Quick Override";
        newTimeRemaining = quickOverrideEnd - currentMins;
      } else {
        if (quickOverrideEnd && currentMins >= quickOverrideEnd) {
          setQuickOverrideEnd(null); // Clear expired override
        }

        // 2. Check Classes
        const activeClass = classes.find(c => 
          c.isActive && 
          c.days.includes(currentDay) && 
          currentMins >= timeToMins(c.startTime) && 
          currentMins < timeToMins(c.endTime)
        );

        if (activeClass) {
          newActiveEvent = activeClass.name;
          newTimeRemaining = timeToMins(activeClass.endTime) - currentMins;
        } else {
          // 3. Check Prayers
          const activePrayer = prayers.find(p => {
            if (!p.isActive || !p.time) return false;
            const pMins = timeToMins(p.time);
            return currentMins >= (pMins - p.bufferBefore) && currentMins < (pMins + p.bufferAfter);
          });

          if (activePrayer) {
            newActiveEvent = `${activePrayer.name} Prayer`;
            newTimeRemaining = (timeToMins(activePrayer.time) + activePrayer.bufferAfter) - currentMins;
          }
        }
      }

      // State transition logic
      setDeviceState(prev => {
        const shouldBeSilent = newActiveEvent !== null;
        
        // Trigger native device commands only when state changes
        if (shouldBeSilent && !prev.isSilent) {
          DeviceService.setSilentMode();
        } else if (!shouldBeSilent && prev.isSilent) {
          DeviceService.setNormalMode();
        }

        return {
          isSilent: shouldBeSilent,
          activeEvent: newActiveEvent,
          timeRemainingMins: newTimeRemaining
        };
      });
    };

    // Run immediately, then every 10 seconds
    checkSchedule();
    const interval = setInterval(checkSchedule, 10000);
    return () => clearInterval(interval);
  }, [classes, prayers, quickOverrideEnd]);

  const addClass = (c: Omit<ClassEvent, 'id' | 'isActive'>) => {
    setClasses(prev => [...prev, { ...c, id: Date.now().toString(), isActive: true }]);
  };

  const removeClass = (id: string) => {
    setClasses(prev => prev.filter(c => c.id !== id));
  };

  const toggleClass = (id: string) => {
    setClasses(prev => prev.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c));
  };

  const updatePrayerBuffer = (name: string, before: number, after: number) => {
    setPrayers(prev => prev.map(p => p.name === name ? { ...p, bufferBefore: before, bufferAfter: after } : p));
  };

  const togglePrayer = (name: string) => {
    setPrayers(prev => prev.map(p => p.name === name ? { ...p, isActive: !p.isActive } : p));
  };

  const triggerQuickOverride = () => {
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    setQuickOverrideEnd(currentMins + 30); // 30 mins override
  };

  return (
    <SyncContext.Provider value={{
      classes, addClass, removeClass, toggleClass,
      prayers, updatePrayerBuffer, togglePrayer,
      deviceState, triggerQuickOverride
    }}>
      {children}
    </SyncContext.Provider>
  );
};
