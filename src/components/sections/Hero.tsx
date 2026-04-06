import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const carouselImages = [
    "/images/Home Page Background 1.png",
    "/images/Home Page Background 2.png",
    "/images/Home Page Background 3.png"
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (container.scrollWidth > 0 && scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const doubledImages = [...carouselImages, ...carouselImages];

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-white border-b border-gray-100">
      
      {/* Continuous Slider Carousel Background */}
      <div 
        ref={scrollRef}
        className="absolute top-0 left-0 z-0 w-full h-full flex overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {doubledImages.map((src, i) => (
          <div 
            key={i} 
            className="min-w-full w-full h-full flex-shrink-0 relative"
          >
            <img 
              src={src} 
              alt="Medical professionals" 
              className="w-full h-full object-cover"
            />
            {/* Soft gradient overlay on each image to blend them better */}
            <div className="absolute inset-0 bg-gray-900/10"></div>
          </div>
        ))}
      </div>

      {/* Hero Overlay & Content */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/80 to-white/95 flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-20 pointer-events-auto">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-sm">
            Supporting Tomorrow's <br />
            <span className="text-[#007AFF] relative inline-block">
              Doctors, Today
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
            Accessible, meaningful mentorship for aspiring medical students, entirely free of charge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              className="w-full sm:w-auto rounded-full bg-[#007AFF] hover:bg-[#0A84FF] text-white px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              asChild
            >
              <Link to="/services/mentees">Apply Now</Link>
            </Button>
            <Button 
              variant="outline"
              className="w-full sm:w-auto rounded-full border-blue-200 text-[#007AFF] hover:bg-blue-50 px-8 py-6 text-lg font-bold transition-all hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
