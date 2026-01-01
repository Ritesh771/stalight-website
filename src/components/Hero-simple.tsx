import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-[#030304] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column - Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/6 text-indigo-300 text-[13px] font-medium">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping inline-block" />
              AI-Powered Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight title-gradient">
              Igniting Intelligence<br />
              <span className="text-gradient">through Innovation</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Empowering the Future with Trusted AI Solutions
            </p>

            <p className="text-base text-slate-400 max-w-xl leading-relaxed">
              We build intelligent systems for campuses, safety, and automation that transform how organizations operate.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => window.open('https://neurocampus.netlify.app', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-10 flex items-center justify-center group text-sm font-inter"
              >
                Request a Demo
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="hover:bg-white/10 text-foreground font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] relative z-10 border border-white/20 text-sm font-inter"
              >
                Contact Us
              </button>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <div className="text-xs text-slate-400">Trusted by</div>
                  <div className="text-sm text-white font-medium">Leading Institutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Glass Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="glass-panel rounded-2xl p-4 w-full max-w-2xl shadow-strong">
              <div className="bg-[#0A0A0C] rounded-lg overflow-hidden border border-white/5 h-[380px] flex">
                {/* Sidebar mock */}
                <div className="w-14 md:w-56 border-r border-white/5 flex flex-col p-4 bg-[#050507]">
                  <div className="h-3 w-20 bg-white/10 rounded mb-6" />
                  <div className="space-y-3">
                    <div className="h-8 w-full bg-primary/20 rounded flex items-center px-3 text-xs text-primary">Dashboard</div>
                    <div className="h-8 w-full rounded flex items-center px-3 opacity-60 text-xs">Security</div>
                    <div className="h-8 w-full rounded flex items-center px-3 opacity-60 text-xs">Automation</div>
                    <div className="h-8 w-full rounded flex items-center px-3 opacity-60 text-xs">Analytics</div>
                  </div>
                </div>

                {/* Main mock content */}
                <div className="flex-1 p-5 md:p-6 relative">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-3 w-32 bg-white/5 rounded" />
                    <div className="h-8 w-24 bg-emerald-600/20 rounded-full flex items-center justify-center text-[11px] text-emerald-300">Online</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="glass-panel rounded-lg p-4">
                      <div className="text-xs text-white font-medium mb-2">AI Analysis</div>
                      <div className="text-sm text-slate-300">Campus security optimized by 34%</div>
                      <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[34%] bg-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="glass-panel rounded-lg p-4">
                      <div className="text-xs text-white font-medium mb-2">Active Systems</div>
                      <div className="text-2xl font-semibold text-white">12</div>
                      <div className="text-xs text-slate-400">+3 this week</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-[#121214] p-3 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <div className="text-sm text-slate-300">NeuroCampus AI Active</div>
                      </div>
                      <div className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">Running</div>
                    </div>

                    <div className="flex items-center justify-between bg-[#121214] p-3 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <div className="text-sm text-slate-300">Safety Monitoring</div>
                      </div>
                      <div className="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">Active</div>
                    </div>

                    <div className="flex items-center justify-between bg-[#121214] p-3 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <div className="text-sm text-slate-300">Automation Tasks</div>
                      </div>
                      <div className="text-[11px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">Processing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient glow */}
            <div className="absolute -top-6 -right-10 w-48 h-48 rounded-full hero-glow opacity-70 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-white border border-white/5 bg-transparent rounded-full px-4 py-2">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;