import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import PrayerSanctuary from './components/PrayerSanctuary';
import ClassSchedule from './components/ClassSchedule';
import Settings from './components/Settings';
import Permissions from './components/Permissions';
import { SyncProvider } from './context/SyncContext';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Dashboard />;
      case 'schedule':
        return <ClassSchedule />;
      case 'prayer':
        return <PrayerSanctuary />;
      case 'settings':
        return <Settings onNavigate={setCurrentTab} />;
      case 'permissions':
        return <Permissions onNavigate={setCurrentTab} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SyncProvider>
      <div className="min-h-screen bg-surface text-on-surface font-body pb-32">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl">
          <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
            <div className="text-indigo-900 dark:text-indigo-100 font-bold tracking-tighter text-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-900 dark:text-indigo-100">notifications_paused</span>
              <span className="font-headline">SilentSync</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center hover:bg-slate-200/50 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-primary">search</span>
              </button>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container ring-2 ring-surface">
                <img 
                  alt="User profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeSg99dd7Jui3SomPO3Qg7VIsx2ovIL7F8IYkEJMkmZaCMf6WrL8AyoBiJh05ZGKZoOnZGbfXChAIVTRMqI440OXI9rdeT7NenDDbr1wsCgagCD0CgxS5_F5MjtEuJ9icA0yozI9xfrkmg8pvX8_86PtQ2E06UZyqd16sXvUmm3N9RX0vwu6U2cEZssTPXv0se_2r4a0Icj3D2MEw-uhI6hHefc77KUO0rAYMEfAnuwYHITNj7i2PjLx6YCdNrDS0JvHASInVsSVM"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 px-6 max-w-7xl mx-auto">
          {renderContent()}
        </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-t-3xl shadow-[0_-4px_20px_rgba(24,36,66,0.06)] border-t border-slate-100/50 dark:border-slate-800/50">
          <div className="flex justify-around items-center px-4 pb-6 pt-3 max-w-7xl mx-auto">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-300 ease-out cursor-pointer ${currentTab === 'home' ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-teal-400 rounded-2xl' : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-teal-300'}`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: currentTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}>dashboard</span>
              <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Home</span>
            </button>
            <button 
              onClick={() => setCurrentTab('schedule')}
              className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-300 ease-out cursor-pointer ${currentTab === 'schedule' ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-teal-400 rounded-2xl' : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-teal-300'}`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: currentTab === 'schedule' ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
              <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Schedule</span>
            </button>
            <button 
              onClick={() => setCurrentTab('prayer')}
              className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-300 ease-out cursor-pointer ${currentTab === 'prayer' ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-teal-400 rounded-2xl' : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-teal-300'}`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: currentTab === 'prayer' ? "'FILL' 1" : "'FILL' 0" }}>auto_awesome</span>
              <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Prayer</span>
            </button>
            <button 
              onClick={() => setCurrentTab('settings')}
              className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-300 ease-out cursor-pointer ${['settings', 'permissions'].includes(currentTab) ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-teal-400 rounded-2xl' : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-teal-300'}`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: ['settings', 'permissions'].includes(currentTab) ? "'FILL' 1" : "'FILL' 0" }}>settings</span>
              <span className="font-inter text-[11px] font-medium tracking-wide uppercase mt-1">Settings</span>
            </button>
          </div>
        </nav>
      </div>
    </SyncProvider>
  );
}
