import React from 'react';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Hero / Current Status Section */}
      <section className="lg:col-span-8 flex flex-col gap-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-container p-8 lg:p-12 text-on-primary">
          {/* Glass Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary-fixed-dim/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary-fixed/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed-dim/20 flex items-center justify-center peace-pulse">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>do_not_disturb_on</span>
                </div>
                <span className="font-label text-on-tertiary-container bg-tertiary-container/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">Active Mode</span>
              </div>
              <h1 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tight">Phone is SILENT</h1>
              <p className="text-on-primary-container text-lg max-w-md font-medium">Your device is synced with <span className="text-tertiary-fixed-dim">Morning Meditation</span>. Quiet surroundings guaranteed.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="text-5xl lg:text-7xl font-headline font-bold tabular-nums tracking-tighter">
                00:42<span className="text-2xl font-medium opacity-50 ml-1">remaining</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4 relative z-10">
            <button className="bg-tertiary-fixed-dim text-tertiary px-8 py-4 rounded-xl font-bold text-sm hover:scale-95 transition-transform cursor-pointer">
              End Now
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all cursor-pointer">
              Add +15 mins
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all cursor-pointer">
              Add +1 hour
            </button>
          </div>
        </div>

        {/* Bento Grid: Secondary Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Toggle Card */}
          <div className="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col justify-between group transition-all duration-300 hover:bg-surface-bright">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h3 className="font-headline text-xl font-bold">Quick Override</h3>
              <p className="text-on-surface-variant text-sm">Need immediate peace? Trigger a 30-minute silent window with one tap.</p>
            </div>
            <button className="mt-6 w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold text-sm hover:bg-secondary transition-all hover:text-white cursor-pointer">
              Activate Instant Sync
            </button>
          </div>

          {/* Statistics Card */}
          <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <h3 className="font-headline text-xl font-bold">Focus Quality</h3>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-primary">92%</span>
                <span className="text-on-tertiary-container font-semibold mb-1">↑ 4%</span>
              </div>
              <p className="text-on-surface-variant text-sm">Your uninterrupted time has increased this week. Keep it up!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Side Content: Upcoming & History */}
      <aside className="lg:col-span-4 flex flex-col gap-8">
        {/* Upcoming Section */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-xl font-extrabold tracking-tight">Upcoming</h2>
            <span className="material-symbols-outlined text-on-surface-variant">calendar_month</span>
          </div>
          
          <div className="space-y-6">
            {/* Upcoming Item 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <div className="w-px h-full bg-outline-variant/30 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <h4 className="font-bold text-sm">CS101 Class</h4>
                <p className="text-on-surface-variant text-xs mt-1">10:00 AM — 11:30 AM</p>
              </div>
            </div>

            {/* Upcoming Item 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                </div>
                <div className="w-px h-full bg-outline-variant/30 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <h4 className="font-bold text-sm">Dhuhr Prayer</h4>
                <p className="text-on-surface-variant text-xs mt-1">01:15 PM — 01:45 PM</p>
              </div>
            </div>

            {/* Upcoming Item 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">work</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Strategy Meeting</h4>
                <p className="text-on-surface-variant text-xs mt-1">03:00 PM — 04:00 PM</p>
              </div>
            </div>
          </div>
          
          <button className="w-full text-center text-sm font-bold text-primary hover:underline transition-all cursor-pointer">
            View Full Schedule
          </button>
        </div>

        {/* History Section */}
        <div className="space-y-6 px-4">
          <h2 className="font-headline text-lg font-bold">Recently Completed</h2>
          <div className="space-y-4">
            {/* History Card 1 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">bedtime</span>
                </div>
                <div>
                  <p className="font-bold text-xs">Deep Sleep Mode</p>
                  <p className="text-[10px] text-on-surface-variant">Completed at 7:30 AM</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-tertiary-container text-sm">check_circle</span>
            </div>

            {/* History Card 2 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                </div>
                <div>
                  <p className="font-bold text-xs">Gym Focus</p>
                  <p className="text-[10px] text-on-surface-variant">Completed at 6:45 AM</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-tertiary-container text-sm">check_circle</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
