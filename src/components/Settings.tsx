import React from 'react';

export default function Settings({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <>
      {/* Editorial Header */}
      <section className="mb-12 mt-8">
        <h1 className="font-headline font-extrabold text-5xl text-primary tracking-tight mb-2">Settings</h1>
        <p className="font-body text-on-surface-variant text-lg">Orchestrate your quiet moments with precision.</p>
      </section>

      {/* Automation Section (Bento Style) */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <h2 className="font-headline font-bold text-xl text-primary uppercase tracking-widest text-sm">Automation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Default Silent Mode Card */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="font-headline font-bold text-primary mb-4">Default Silent Mode</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">do_not_disturb_on</span>
                  <span className="font-body font-medium text-primary">Do Not Disturb</span>
                </div>
                <input defaultChecked className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="silent_mode" type="radio" />
              </label>
              <label className="flex items-center justify-between p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">vibration</span>
                  <span className="font-body font-medium text-primary">Vibrate</span>
                </div>
                <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="silent_mode" type="radio" />
              </label>
              <label className="flex items-center justify-between p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">volume_off</span>
                  <span className="font-body font-medium text-primary">Silent</span>
                </div>
                <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="silent_mode" type="radio" />
              </label>
            </div>
          </div>

          {/* Automatic Reply & Exception Grid Column */}
          <div className="flex flex-col gap-6">
            {/* Automatic Reply */}
            <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline font-bold text-xl">Automatic Reply</h3>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-primary-container rounded-full cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 transition duration-200 ease-in-out bg-tertiary-fixed-dim rounded-full translate-x-6"></div>
                  </div>
                </div>
                <p className="text-on-primary-container text-sm leading-relaxed mb-4">Send a custom text when calls are blocked while in silent mode.</p>
                <div className="bg-primary-container/50 p-3 rounded-lg text-xs font-mono text-on-tertiary-container italic border border-on-tertiary-container/20">
                  "I'm currently in a SilentSync zone. I'll get back to you soon."
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
              </div>
            </div>

            {/* Exception List */}
            <div className="bg-secondary-container p-6 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-secondary-fixed transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-on-secondary-container text-secondary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-secondary-container">Exception List</h3>
                  <p className="text-on-secondary-container/70 text-sm">Allow Starred Contacts</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-secondary-container group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>
        </div>
      </section>

      {/* General Settings Section */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-slate-400">settings</span>
          <h2 className="font-headline font-bold text-xl text-primary uppercase tracking-widest text-sm">General</h2>
        </div>
        <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm">
          {/* Notifications */}
          <div className="p-6 flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <div>
                <h4 className="font-body font-semibold text-primary">Notifications</h4>
                <p className="text-on-surface-variant text-sm">Manage alerts and sound preferences</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">chevron_right</span>
          </div>

          {/* Theme */}
          <div className="p-6 flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer border-t border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <div>
                <h4 className="font-body font-semibold text-primary">Appearance</h4>
                <p className="text-on-surface-variant text-sm">Currently set to Light Mode</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-surface p-1 rounded-full border border-outline-variant/20">
              <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-sm">light_mode</span>
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline cursor-pointer hover:bg-surface-container-highest">
                <span className="material-symbols-outlined text-sm">dark_mode</span>
              </button>
            </div>
          </div>

          {/* Account */}
          <div className="p-6 flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer border-t border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <h4 className="font-body font-semibold text-primary">Account</h4>
                <p className="text-on-surface-variant text-sm">Profile, Security, and Data synchronization</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">chevron_right</span>
          </div>

          {/* Privacy */}
          <div onClick={() => onNavigate('permissions')} className="p-6 flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer border-t border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h4 className="font-body font-semibold text-primary">Privacy & Security</h4>
                <p className="text-on-surface-variant text-sm">Contact permissions and app locks</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">chevron_right</span>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="mb-32 flex justify-center">
        <button className="px-8 py-3 rounded-xl border border-error/20 text-error font-body font-semibold hover:bg-error-container/30 transition-colors cursor-pointer">
          Log Out from SilentSync
        </button>
      </section>
    </>
  );
}
