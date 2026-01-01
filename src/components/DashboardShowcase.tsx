import React from 'react';
import CanvasRevealCard from './CanvasRevealCard';
import useTypewriter from '@/hooks/useTypewriter';

const demoImages = [
  {
    src: "/lovable-uploads/2614e848-c95d-4948-8ef6-d595f235c187.png",
    title: "Faculty Dashboard Overview"
  },
  {
    src: "/lovable-uploads/a134a1df-8d92-49c6-8531-7e380127b7cc.png",
    title: "Attendance Management"
  },
  {
    src: "/lovable-uploads/3fcd3005-6fc2-4dc6-b80f-e5e023b5bc53.png",
    title: "Leave Management Portal"
  },
  {
    src: "/lovable-uploads/832f5d4e-c0ba-40b0-ab9f-2615135f3dc7.png",
    title: "Student Assignment Interface"
  },
  {
    src: "/lovable-uploads/efa6578d-d8f4-4e45-b1f5-d88501de1eff.png",
    title: "Internal Marks Tracker"
  },
  {
    src: "/lovable-uploads/904a99d9-9437-400c-9d5c-be969f43a002.png",
    title: "Admin Notifications Panel"
  }
];

const DashboardShowcase: React.FC = () => {
  const displayText = "Our Application Showcase";

  return (
    <section id="dashboard-showcase" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-[#030304]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-emerald-950/10"></div>
      
      {/* Simple background - removed aurora for better performance */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 text-white">
            Our Application <span className="title-gradient">Showcase</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 glass-panel p-4 rounded-lg inline-block">
            Explore our powerful dashboard solutions and interfaces
          </p>
        </div>
        
        <div className="showcase-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoImages.map((image, idx) => (
              <CanvasRevealCard
                key={idx}
                imageSrc={image.src}
                title={image.title}
                spotlight={true}
                className="transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
              >
                <p className="text-muted-foreground text-sm">
                  Interactive dashboard interface with real-time data visualization.
                </p>
              </CanvasRevealCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase; 