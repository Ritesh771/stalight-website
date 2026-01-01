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

          {/* Right Column - AI Technology Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full max-w-2xl relative flex items-center justify-center">
              {/* Floating decorative elements */}
              <div className="absolute inset-0">
                {/* Top-left floating element */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
                  <div className="w-8 h-8 rounded-full bg-primary/40 animate-pulse"></div>
                </div>

                {/* Top-right floating element */}
                <div className="absolute top-12 right-12 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float-delayed">
                  <div className="w-6 h-6 rounded bg-purple-400/60"></div>
                </div>

                {/* Bottom-left floating element */}
                <div className="absolute bottom-16 left-16 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float-slow">
                  <div className="w-7 h-7 rounded-full bg-blue-400/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Bottom-right floating element */}
                <div className="absolute bottom-12 right-8 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center animate-float">
                  <div className="w-5 h-5 rounded bg-indigo-400/60"></div>
                </div>

                {/* Center-left floating element */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary/15 to-fuchsia-500/15 backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-float-delayed">
                  <div className="w-4 h-4 rounded-full bg-primary/30 animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>

                {/* Center-right floating element */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-float-slow">
                  <div className="w-5.5 h-5.5 rounded bg-cyan-400/50"></div>
                </div>
              </div>

              {/* Concentric circular borders with gradients */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer blur circle */}
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-primary/25 via-fuchsia-500/25 to-transparent blur-2xl opacity-70"></div>

                {/* Animated pulse border */}
                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-primary/30 animate-pulse"></div>

                {/* Additional inner borders */}
                <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-primary/20 opacity-60"></div>
                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border border-primary/15 opacity-40"></div>
              </div>

              {/* Main AI Card */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-background/60 backdrop-blur-xl border border-primary/30 shadow-xl shadow-primary/10 flex flex-col items-center justify-center gap-2 sm:gap-3 text-center p-4 sm:p-6">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary/80 font-medium">Stalight Technology</div>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-foreground drop-shadow">
                  Intelligent Solutions
                </p>
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground leading-snug max-w-[8rem] sm:max-w-[10rem]">
                  AI • ML • Analytics • Innovation
                </p>
                <div className="mt-1 grid grid-cols-2 gap-1 sm:gap-2 w-full">
                  {['AI','ML','Analytics','Automation'].map(label => (
                    <span key={label} className="text-[8px] sm:text-[9px] lg:text-[10px] px-1 sm:px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-medium tracking-wide">
                      {label}
                    </span>
                  ))}
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