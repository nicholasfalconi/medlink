
import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, MessageSquare, ChartBar, Users, Award } from "lucide-react";

const services = [
  {
    title: "One-on-One Mentorship",
    description: "Get paired with a current medical student for personalized guidance and support.",
    icon: <Users className="h-6 w-6 text-[#007AFF]" />,
  },
  {
    title: "Application Support",
    description: "Receive guidance on crafting compelling medical school applications.",
    icon: <BookOpen className="h-6 w-6 text-[#007AFF]" />,
  },
  {
    title: "Interview Preparation",
    description: "Practice with mock interviews and get feedback from experienced mentors.",
    icon: <MessageSquare className="h-6 w-6 text-[#007AFF]" />,
  },
  {
    title: "MCAT Resources",
    description: "Access study tips and strategies for MCAT success.",
    icon: <ChartBar className="h-6 w-6 text-[#007AFF]" />,
  },
  {
    title: "Casper Preparation",
    description: "Get ready for the Casper test with practice scenarios and tips.",
    icon: <Calendar className="h-6 w-6 text-[#007AFF]" />,
  },
  {
    title: "Free Resources",
    description: "Access our library of resources and recorded workshops at no cost.",
    icon: <Award className="h-6 w-6 text-[#007AFF]" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            Our <span className="text-[#007AFF]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your medical school journey
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/3 w-full">
            <div className="rounded-3xl overflow-hidden shadow-sm sticky top-24 h-full min-h-[400px]">
              <img 
                src="/images/HomePage - Section 2.png"
                alt="Medical consultation mentorship"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-0 bg-[#F9FAFB] hover:shadow-md transition-shadow rounded-2xl">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                  <div className="text-[#007AFF] scale-90">{service.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
