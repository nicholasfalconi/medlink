
import { Card } from "@/components/ui/card";
import { FileText, GitBranch, Video } from "lucide-react";

const steps = [
  {
    title: "Application Form",
    description: "Complete our application process",
    icon: <FileText className="w-12 h-12 text-primary" />,
  },
  {
    title: "Smart Matching",
    description: "Get paired with the perfect mentor through our algorithm",
    icon: <GitBranch className="w-12 h-12 text-primary" />,
  },
  {
    title: "Virtual Meeting",
    description: "Connect with your mentor through email, phone or virtually",
    icon: <Video className="w-12 h-12 text-primary" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            The simple steps to start your mentorship journey
          </p>
        </div>
        
        <div className="bg-[#E9EDE9]/40 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-sm border border-gray-100">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Get Started with <br /> MedLink
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              We aim to offer clear and comprehensive guidance across all steps.
              Following these steps ensures that mentees are paired with the optimal mentors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center shadow-md">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mt-8 md:mt-0">
             <img 
               src="/images/why_choose_us_doc_1775250658858.png"
               alt="Doctor pointing"
               className="absolute inset-0 w-full h-full object-cover object-center"
             />
          </div>
        </div>
      </div>
    </section>
  );
};
