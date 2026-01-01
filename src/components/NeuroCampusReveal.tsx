import React, { useEffect, useRef, useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Learning",
    description: "Our neural network algorithms adapt to each student's learning style and pace, creating a truly personalized educational experience."
  },
  {
    title: "Immersive Campus Experience",
    description: "Experience campus life in a fully digital environment with virtual classrooms, labs, and social spaces."
  },
  {
    title: "Blockchain Certification",
    description: "Every achievement is securely recorded and verifiable through our blockchain-based certification system."
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive analytics provide insights into student performance, engagement, and areas for improvement."
  }
];

const NeuroCampusReveal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    // Only keep animated dots, remove scroll-based 3D/rotation for smoothness
    if (svgRef.current) {
      const svg = svgRef.current;
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      dotsRef.current = [];
      const dotCount = 200;
      for (let i = 0; i < dotCount; i++) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", `${Math.random() * width}`);
        circle.setAttribute("cy", `${Math.random() * height}`);
        circle.setAttribute("r", `${Math.random() * 2 + 1}`);
        circle.setAttribute("fill", "#9b87f5");
        circle.setAttribute("opacity", `${Math.random() * 0.5 + 0.2}`);
        svg.appendChild(circle);
        dotsRef.current.push(circle);
      }
    }
    const animateDots = () => {
      if (!svgRef.current) return;
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      dotsRef.current.forEach(dot => {
        const x = parseFloat(dot.getAttribute("cx") || "0");
        const y = parseFloat(dot.getAttribute("cy") || "0");
        const newX = x + (Math.random() - 0.5) * 2;
        const newY = y + (Math.random() - 0.5) * 2;
        dot.setAttribute("cx", `${newX < 0 ? width : (newX > width ? 0 : newX)}`);
        dot.setAttribute("cy", `${newY < 0 ? height : (newY > height ? 0 : newY)}`);
      });
      requestAnimationFrame(animateDots);
    };
    const animation = requestAnimationFrame(animateDots);
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  useEffect(() => {
    // Removed scroll-based feature switching for better performance
    // Features are now displayed statically
  }, []);

  return (
    <section id="neuro-campus" className="py-24 relative overflow-hidden bg-[#030304]">
      {/* Simple background - removed aurora for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
      
      {/* Gemini-style SVG effect */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <svg ref={svgRef} className="w-full h-full" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins title-gradient">
            Introducing NEURO CAMPUS
          </h2>
          <p className="text-xl text-slate-400">
            The future of education technology, powered by AI and blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassmorphicCard key={index} className="card-spotlight p-6 h-full">
              <div className="canvas-reveal rounded-xl overflow-hidden mb-4 aspect-[4/3] card-spotlight">
                <img 
                  src={`/lovable-uploads/photo-1461749280684-dccba630e2f6.avif`} 
                  alt={feature.title}
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.currentTarget.src = `/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png`;
                  }}
                />
                <div className="canvas-dots absolute inset-0 opacity-0"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 title-gradient">
                {feature.title}
              </h3>
              <p className="text-slate-400 mb-4">
                {feature.description}
              </p>
              <button className="text-stalight-primary flex items-center text-sm transition-all hover:translate-x-2">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeuroCampusReveal;
