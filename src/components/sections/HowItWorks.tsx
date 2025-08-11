
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
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
