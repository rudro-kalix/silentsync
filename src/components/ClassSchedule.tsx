import React, { useState } from 'react';
import { useSync } from '../context/SyncContext';

export default function ClassSchedule() {
  const { classes, addClass, toggleClass, removeClass } = useSync();
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [days, setDays] = useState<number[]>([]);

  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const dayIndices = [1, 2, 3, 4, 5, 6, 0];

  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !startTime || !endTime || days.length === 0) return;
    addClass({ name, startTime, endTime, days });
    setName('');
    setStartTime('');
    setEndTime('');
    setDays([]);
  };

  const toggleDay = (dayIndex: number) => {
    setDays(prev => prev.includes(dayIndex) ? prev.filter(d => d !== dayIndex) : [...prev, dayIndex]);
  };

  const formatTime = (time: string) => {
    if (!time) return '';
    const [h, m] = time.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour.toString().padStart(2, '0')}:${m} ${ampm}`;
  };

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <>
      {/* Hero Section */}
      <section className="mt-12 mb-16">
        <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight mb-4">Class Schedule</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Seamlessly orchestrate your academic silence. Sync your existing calendars or manually craft your focus windows.
        </p>
      </section>

      {/* Sync Options & Manual Entry Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Integration Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Google Calendar</h3>
              <p className="text-on-surface-variant mb-8">Import your class schedules directly from your Google account.</p>
            </div>
            <button className="bg-primary hover:bg-primary-container text-on-primary font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 cursor-pointer">
              Sync with Google Calendar
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">event_note</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Outlook</h3>
              <p className="text-on-surface-variant mb-8">Connect your Microsoft 365 or Outlook calendar in one click.</p>
            </div>
            <button className="bg-secondary-container hover:bg-surface-container-high text-on-secondary-container font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 cursor-pointer">
              Sync with Outlook
            </button>
          </div>
        </div>

        {/* Manual Input Form */}
        <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-on-tertiary-container">edit_calendar</span>
            <h2 className="font-headline text-2xl font-bold">Manual Entry</h2>
          </div>
          <form onSubmit={handleAddClass} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-on-surface-variant mb-3">Class Name</label>
              <input value={name} onChange={e => setName(e.target.value)} required className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-tertiary-fixed-dim transition-all text-primary placeholder:text-outline-variant" placeholder="e.g. Advanced Macroeconomics" type="text" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface-variant mb-3">Start Time</label>
              <input value={startTime} onChange={e => setStartTime(e.target.value)} required className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-tertiary-fixed-dim transition-all text-primary" type="time" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface-variant mb-3">End Time</label>
              <input value={endTime} onChange={e => setEndTime(e.target.value)} required className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-tertiary-fixed-dim transition-all text-primary" type="time" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-on-surface-variant mb-3">Repeat Days</label>
              <div className="flex flex-wrap gap-3">
                {dayLabels.map((label, i) => {
                  const dayIndex = dayIndices[i];
                  const isSelected = days.includes(dayIndex);
                  return (
                    <button 
                      key={i}
                      onClick={() => toggleDay(dayIndex)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${isSelected ? 'bg-primary text-white' : 'border border-outline-variant hover:bg-primary hover:text-white'}`} 
                      type="button"
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button type="submit" className="bg-primary text-on-primary font-bold px-10 py-4 rounded-xl flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer">
                <span className="material-symbols-outlined">add</span>
                Add Class to Schedule
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Synced Classes List */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-2">Active Schedule</h2>
            <p className="text-on-surface-variant">Manage automation for your currently synced classes.</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-1 rounded-full px-4 py-2 cursor-pointer hover:bg-surface-container transition-colors">
            <span className="text-sm font-semibold text-on-surface-variant">Autumn Term 2024</span>
            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
          </div>
        </div>

        <div className="space-y-4">
          {classes.map(c => (
            <div key={c.id} className={`bg-surface-container-lowest rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-lg hover:shadow-primary/5 ${!c.isActive ? 'opacity-80' : ''}`}>
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${c.isActive ? 'bg-secondary-fixed text-primary' : 'bg-surface-container-high text-outline'}`}>
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <div>
                  <h4 className={`font-headline text-xl font-bold ${c.isActive ? 'text-primary' : 'text-on-surface-variant'}`}>{c.name}</h4>
                  <p className="text-on-surface-variant font-medium mt-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {formatTime(c.startTime)} — {formatTime(c.endTime)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                <div className="flex gap-2">
                  {c.days.map(d => (
                    <span key={d} className={`px-3 py-1 bg-surface-container text-xs font-bold rounded-lg ${c.isActive ? 'text-primary' : 'text-outline'}`}>{dayNames[d]}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold uppercase tracking-widest ${c.isActive ? 'text-on-tertiary-container' : 'text-outline-variant'}`}>
                    {c.isActive ? 'Silent Mode' : 'Inactive'}
                  </span>
                  <button onClick={() => toggleClass(c.id)} className={`w-14 h-8 rounded-full p-1 flex items-center transition-all cursor-pointer ${c.isActive ? 'bg-tertiary-fixed-dim justify-end' : 'bg-outline-variant justify-start'}`}>
                    <div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
                  </button>
                  <button onClick={() => removeClass(c.id)} className="text-error hover:bg-error/10 p-2 rounded-full transition-colors cursor-pointer flex items-center justify-center">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed right-8 bottom-32 w-16 h-16 bg-primary text-on-primary rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group cursor-pointer">
        <span className="material-symbols-outlined text-3xl">add</span>
        <span className="absolute right-20 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">New Class</span>
      </button>
    </>
  );
}
