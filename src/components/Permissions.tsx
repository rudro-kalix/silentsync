import React from 'react';

export default function Permissions({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <>
      {/* Header Section */}
      <header className="mb-12 mt-8">
        <button onClick={() => onNavigate('settings')} className="mb-4 flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="font-semibold text-sm">Back to Settings</span>
        </button>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4 font-headline">System Permissions & Power</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl font-body leading-relaxed">
          Ensure SilentSync has the necessary access to automate your device audio.
        </p>
      </header>

      {/* Core Permissions Bento Grid */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary tracking-tight font-headline">Core Permissions</h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-on-tertiary-container bg-tertiary-fixed-dim/20 px-3 py-1 rounded-full">System Health: Optimal</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Permission Card 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group border border-transparent hover:border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">do_not_disturb_on</span>
            </div>
            <h3 className="font-bold text-primary mb-1 font-headline">Do Not Disturb Access</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
              <span className="text-sm font-medium text-on-tertiary-container">Status: Active</span>
            </div>
          </div>

          {/* Permission Card 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group border border-transparent hover:border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">calendar_today</span>
            </div>
            <h3 className="font-bold text-primary mb-1 font-headline">Calendar Access</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              <span className="text-sm font-medium text-on-tertiary-container">Status: Active</span>
            </div>
          </div>

          {/* Permission Card 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group border border-transparent hover:border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <h3 className="font-bold text-primary mb-1 font-headline">Location Services</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              <span className="text-sm font-medium text-on-tertiary-container">Status: Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Power Featured Section */}
      <section className="mb-12">
        <div className="relative overflow-hidden bg-primary-container text-on-primary rounded-xl p-8 md:p-12">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>battery_charging_full</span>
                <h2 className="text-2xl font-bold tracking-tight font-headline">Automation Power</h2>
              </div>
              <h3 className="text-xl font-semibold mb-3 opacity-90 font-headline">Battery Optimization</h3>
              <p className="text-on-primary-container leading-relaxed mb-8">
                Unrestricted battery access is essential for reliable background automation. This prevents the system from putting SilentSync to sleep during critical schedule transitions.
              </p>
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10">
                Optimize Battery Settings
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <div className="w-48 h-48 rounded-3xl bg-white/5 backdrop-blur-3xl flex items-center justify-center p-8 border border-white/10">
                <span className="material-symbols-outlined text-7xl text-tertiary-fixed-dim animate-pulse">bolt</span>
              </div>
            </div>
          </div>
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-tertiary-fixed-dim opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Audio Control Engine Grid */}
      <section className="mb-24">
        <h2 className="text-xl font-bold text-primary tracking-tight mb-6 font-headline">Audio Control Engine</h2>
        <div className="bg-surface-container-low rounded-xl p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">settings_input_component</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Engine Protocol</p>
                  <p className="font-bold text-primary">API Version: 33.1</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant">verified</span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-on-tertiary-container/10 flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-xl">memory</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Service Status</p>
                  <p className="font-bold text-primary">Service Status: Running</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-on-tertiary-container rounded-full shadow-[0_0_8px_rgba(0,186,154,0.5)]"></div>
            </div>
          </div>
          <div className="mt-2 p-6 bg-surface-container-lowest rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">info</span>
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">System Integrity Check</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  All audio streams (Media, Ringer, Alarm) are correctly bound to the SilentSync automation hook. Last diagnostic sweep performed 12 minutes ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
