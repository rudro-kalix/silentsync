import React from 'react';

export default function PrayerSanctuary() {
  return (
    <>
      {/* Hero Section: Master Controls */}
      <section className="mt-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4 font-headline">Prayer Sanctuary</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Your device will automatically transition into a state of deep silence during scheduled prayer times, ensuring uninterrupted focus and spiritual peace.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center gap-6 w-full shadow-sm">
              <div className="flex-1">
                <span className="block text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Prayer Auto-Silence</span>
                <span className="text-tertiary-fixed-variant font-medium">Currently Enabled</span>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <div className="w-14 h-8 bg-tertiary-fixed-dim rounded-full"></div>
                <div className="absolute left-7 top-1 w-6 h-6 bg-white rounded-full transition-transform"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Status Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Location Card */}
        <div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-xl flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 opacity-80">
              <span className="material-symbols-outlined">location_on</span>
              <span className="text-sm font-medium tracking-widest uppercase">Current Location</span>
            </div>
            <h2 className="text-3xl font-bold text-white font-headline">New York, NY</h2>
            <p className="mt-2 text-primary-fixed-dim">Detected via GPS • Updated 5 mins ago</p>
          </div>
          <div className="relative z-10 flex gap-4 mt-6">
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors backdrop-blur-md cursor-pointer">Refresh Location</button>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors backdrop-blur-md cursor-pointer">Change City</button>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-tertiary-fixed-dim/10 rounded-full blur-3xl"></div>
        </div>

        {/* Next Prayer Pulse Card */}
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
          <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 bg-tertiary-fixed-dim rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
            <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
          </div>
          <span className="text-on-surface-variant font-semibold uppercase text-xs tracking-[0.2em] mb-2">Next Sync</span>
          <h3 className="text-4xl font-black text-primary font-headline">Asr</h3>
          <span className="text-2xl font-medium text-tertiary-fixed-variant mt-1">3:42 PM</span>
        </div>
      </section>

      {/* Prayer Times List */}
      <section className="space-y-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary font-headline">Daily Schedule</h3>
            <p className="text-on-surface-variant">Adjust buffer times for each prayer session</p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
            <span className="material-symbols-outlined text-sm">history</span>
            Last Sync: Today, 05:00 AM
          </div>
        </div>

        {/* Prayer Items Container */}
        <div className="space-y-4">
          {/* Fajr Card */}
          <div className="bg-surface-container-lowest p-1 rounded-xl transition-all hover:bg-white border border-transparent hover:border-outline-variant/20 shadow-sm">
            <div className="flex flex-wrap md:flex-nowrap items-center p-6 gap-8">
              <div className="flex items-center gap-6 min-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">light_mode</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary font-headline">Fajr</h4>
                  <span className="text-on-surface-variant font-medium">05:14 AM</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer Before</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">10 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer After</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">20 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-tertiary-fixed-variant bg-tertiary-fixed/20 px-3 py-1 rounded-full">ACTIVE</span>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
              </div>
            </div>
          </div>

          {/* Dhuhr Card */}
          <div className="bg-surface-container-lowest p-1 rounded-xl transition-all hover:bg-white border border-transparent hover:border-outline-variant/20 shadow-sm">
            <div className="flex flex-wrap md:flex-nowrap items-center p-6 gap-8">
              <div className="flex items-center gap-6 min-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">wb_sunny</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary font-headline">Dhuhr</h4>
                  <span className="text-on-surface-variant font-medium">12:58 PM</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer Before</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">5 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer After</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">15 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-tertiary-fixed-variant bg-tertiary-fixed/20 px-3 py-1 rounded-full">ACTIVE</span>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
              </div>
            </div>
          </div>

          {/* Asr Card (Current) */}
          <div className="bg-white p-1 rounded-xl border-2 border-tertiary-fixed-dim shadow-xl relative scale-[1.02] z-10">
            <div className="absolute -top-3 left-6 bg-tertiary-fixed text-tertiary-container text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Upcoming Session</div>
            <div className="flex flex-wrap md:flex-nowrap items-center p-6 gap-8">
              <div className="flex items-center gap-6 min-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">partly_cloudy_day</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary font-headline">Asr</h4>
                  <span className="text-on-surface-variant font-medium">03:42 PM</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer Before</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">5 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer After</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">20 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-tertiary-fixed-variant bg-tertiary-fixed/20 px-3 py-1 rounded-full">ACTIVE</span>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
              </div>
            </div>
          </div>

          {/* Maghrib Card */}
          <div className="bg-surface-container-lowest p-1 rounded-xl transition-all hover:bg-white border border-transparent hover:border-outline-variant/20 shadow-sm">
            <div className="flex flex-wrap md:flex-nowrap items-center p-6 gap-8">
              <div className="flex items-center gap-6 min-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">wb_twilight</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary font-headline">Maghrib</h4>
                  <span className="text-on-surface-variant font-medium">06:24 PM</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer Before</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">5 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer After</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">10 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-tertiary-fixed-variant bg-tertiary-fixed/20 px-3 py-1 rounded-full">ACTIVE</span>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
              </div>
            </div>
          </div>

          {/* Isha Card */}
          <div className="bg-surface-container-lowest p-1 rounded-xl transition-all hover:bg-white border border-transparent hover:border-outline-variant/20 shadow-sm">
            <div className="flex flex-wrap md:flex-nowrap items-center p-6 gap-8">
              <div className="flex items-center gap-6 min-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">bedtime</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary font-headline">Isha</h4>
                  <span className="text-on-surface-variant font-medium">07:54 PM</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer Before</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">5 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Silent Buffer After</label>
                  <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 justify-between">
                    <span className="text-sm font-semibold">15 mins</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-tertiary-fixed-variant bg-tertiary-fixed/20 px-3 py-1 rounded-full">ACTIVE</span>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Card: Qibla/Map Visualizer */}
      <section className="mt-12">
        <div className="relative h-64 rounded-2xl overflow-hidden group">
          <img alt="Serene mosque architecture" className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5zficVXMYBHOe3ez4Ly5LfdVq_IQbzGWq68VMor68qvYfNFiGpZOBWZdhIxO0fcZxRyRx3i4RLDolPUIwCFTsfkrHK_WIv_sCB1j3XuRsB1Od7O33RK_rJOxIXsl3whEbnyyUuXszMXKOAOwMuH-KOd_o-4Pren1okVtyoSsS6_wxLa1NIC809m-3Hxv2hIooImKA6tiz8VI1Wra5M1vhHgtb8w-DvLC573QYElqYe_KKWyoPPkNDVNfiPsnU3vH64MnA0clp_VQ" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-bold font-headline">Prayer Space Insights</h3>
            <p className="text-primary-fixed-dim text-sm max-w-lg mt-2">Discover nearby quiet spaces and community prayer rooms verified for SilentSync users.</p>
            <div className="mt-4 flex gap-3">
              <button className="bg-tertiary-fixed text-primary px-6 py-2 rounded-lg font-bold text-sm cursor-pointer hover:bg-tertiary-fixed-dim transition-colors">Find Nearby</button>
            </div>
          </div>
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></div>
              <span className="text-white font-medium text-xs tracking-widest uppercase">Live Qibla: 56° NE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
