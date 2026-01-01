import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';
import './advanced-animations.css';
// import ScrollManager from '@/utils/scrollManager'; // Disabled for better performance

const Hero = () => {
  // Removed useEffect and ScrollManager for better performance

  const scrollToSection = (sectionId) => {
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
              New design — spotlight hero
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight title-gradient">
              Supercharge collaboration with beautiful AI-powered workflows.
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Smart suggestions, prioritized tasks, and an elegant interface — designed to keep teams focused and shipping faster.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <GlassmorphicButton
                onClick={() => window.open('https://neurocampus.netlify.app', '_blank')}
                className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md"
                glowEffect={true}
              >
                Get Early Access
              </GlassmorphicButton>

              <GlassmorphicButton
                variant="outline"
                onClick={() => scrollToSection('demo')}
                className="px-5 py-3 rounded-full border border-white/10 text-white/90"
              >
                See Live Demo
              </GlassmorphicButton>
            </div>

            <div className="mt-6 flex items-center gap-6 reveal delay-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">N</div>
                <div>
                  <div className="text-xs text-slate-400">Trusted by</div>
                  <div className="text-sm text-white font-medium">Remote teams worldwide</div>
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
                  <div className="h-3 w-16 bg-white/10 rounded mb-6" />
                  <div className="space-y-3">
                    <div className="h-8 w-full bg-white/5 rounded flex items-center px-3">Overview</div>
                    <div className="h-8 w-full rounded flex items-center px-3 opacity-60">Tasks</div>
                    <div className="h-8 w-full rounded flex items-center px-3 opacity-60">Team</div>
                  </div>
                </div>

                {/* Main mock content */}
                <div className="flex-1 p-5 md:p-6 relative">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-3 w-48 bg-white/5 rounded" />
                    <div className="h-8 w-20 bg-indigo-600/20 rounded-full flex items-center justify-center text-[11px] text-indigo-300">+ New</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 glass-panel rounded-lg p-4">
                      <div className="text-xs text-white font-medium mb-2">Workflow Suggestion</div>
                      <div className="text-sm text-slate-300">Move "Q4 Roadmap" to Sprint B to increase completion probability.</div>
                    </div>
                    <div className="glass-panel rounded-lg p-4 flex flex-col items-start justify-between">
                      <div className="text-xs text-slate-400">Score</div>
                      <div className="text-2xl font-semibold text-white">94.2</div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between bg-[#121214] p-3 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        <div className="text-sm text-slate-300">Review API Documentation</div>
                      </div>
                      <div className="text-[11px] px-2 py-0.5 rounded bg-red-500/10 text-red-400">High</div>
                    </div>

                    <div className="flex items-center justify-between bg-[#121214] p-3 rounded opacity-80">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="text-sm text-slate-400">Update design system</div>
                      </div>
                      <div className="text-[11px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400">Medium</div>
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
