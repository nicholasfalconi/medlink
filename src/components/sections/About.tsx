
export const About = () => {
  const stats = [
    { value: "300+", label: "Students Mentored" },
    { value: "50+", label: "Medical Student Mentors" },
    { value: "100%", label: "Free Access" }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            About The <span className="text-[#007AFF]">MedLink</span> Project
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to break down barriers and make medical school mentorship powerfully accessible to all.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-20">
          {/* Text and Story side */}
          <div className="flex-1 lg:w-1/2 flex flex-col">
            <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
              <p className="text-2xl font-medium text-gray-900 mb-8 leading-tight mt-0 pt-0">
                The journey to medical school shouldn't be defined by who you know or what you can afford.
              </p>
              <p className="mb-6">
                The MedLink Project was founded with a single goal in mind: to provide accessible, meaningful mentorship for aspiring medical students. As medical students ourselves, we understand exactly how overwhelming the path can be.
              </p>
              <p className="mb-6">
                From navigating complex applications to preparing for high-stakes interviews, the process is incredibly demanding. Unfortunately, many existing guidance programs come with steep consulting price tags - putting them out of reach for the students who could benefit from them the absolute most.
              </p>
              <p>
                We stepped in to change that. We intentionally designed The MedLink Project to be completely inclusive and absolutely free, connecting driven undergraduates directly with medical students who just successfully navigated the same exact hurdles.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#007AFF] mb-2">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values side */}
          <div className="flex-1 lg:w-1/2 relative flex flex-col pt-0 mt-0">
            <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-md mb-8 w-full block">
              <img 
                src="/images/Page 2 - Img 1.png" 
                alt="Medical mentorship collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Our Core Values</h3>
                <p className="opacity-90">What drives our community forward</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex-1 mt-auto">
              <div className="space-y-6">
                {[
                  { title: "Accessibility", description: "Making mentorship totally transparent and available to everyone, regardless of background or finances." },
                  { title: "Excellence", description: "Committed to providing high-quality, actionable, and honest guidance." },
                  { title: "Innovation", description: "Continuously improving and expanding our network to better serve the changing landscape." },
                  { title: "Community", description: "Building a deeply supportive, empathetic network of lifelong connections." }
                ].map((value, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                      <span className="text-[#007AFF] font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
