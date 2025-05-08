
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const mentorExpectations = [
  "Provide Guidance",
  "Foster a Supportive Environment",
  "Be Professional and Reliable",
  "Set Boundaries",
];

export const ForMentors = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">For Mentors</h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">What We Expect</h3>
            <ul className="space-y-6">
              {mentorExpectations.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Make a Difference</h3>
            <p className="text-lg text-gray-600">
              Share your knowledge and experience to help aspiring medical students navigate their journey. Your guidance can make a significant impact on someone's future in medicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
