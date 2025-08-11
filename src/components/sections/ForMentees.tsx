
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const menteeExpectations = [
  "Be Clear About Your Goals",
  "Stay Engaged and Open-Minded",
  "Be Respectful of Your Mentor's Time",
  "Leverage Available Resources",
];

export const ForMentees = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">For Mentees</h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Get Support</h3>
            <p className="text-lg text-gray-600">
              Receive personalized guidance from current medical students who understand your journey. Our mentors are here to help you navigate the path to medical school.
            </p>
          </div>
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">What We Expect</h3>
            <ul className="space-y-6">
              {menteeExpectations.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
