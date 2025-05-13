
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const mentorExpectations = [
  "Provide Guidance",
  "Foster a Supportive Environment",
  "Be Professional and Reliable",
  "Set Boundaries",
];

const menteeExpectations = [
  "Be Clear About Your Goals",
  "Stay Engaged and Open-Minded",
  "Be Respectful of Your Mentor's Time",
  "Leverage Available Resources",
];

type RolesProps = {
  type: 'mentor' | 'mentee';
};

export const Roles = ({ type }: RolesProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Roles and <span className="text-[#007AFF]">Expectations</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Fostering meaningful and productive relationships between mentors and mentees
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {type === 'mentor' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">For Mentors</h2>
              <Card className="p-8 shadow-lg bg-white mb-6">
                <h3 className="text-xl font-semibold mb-6">What We Expect</h3>
                <ul className="space-y-4">
                  {mentorExpectations.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-[#007AFF]" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="prose prose-lg">
                <p className="text-gray-600">
                  Mentors are not expected to provide exhaustive resources or services, but rather to offer guidance, share personal experiences, and serve as a supportive presence. The mentorship process can range from one-off advice to long-term guidance, depending on the preferences of both parties.
                </p>
              </div>
            </div>
          )}

          {type === 'mentee' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">For Mentees</h2>
              <div className="prose prose-lg mb-6">
                <p className="text-gray-600">
                  We understand that each student's needs are different. Some mentees may want a one-time meeting to discuss a specific concern, while others may seek ongoing mentorship throughout their application process.
                </p>
              </div>
              <Card className="p-8 shadow-lg bg-white">
                <h3 className="text-xl font-semibold mb-6">What We Expect</h3>
                <ul className="space-y-4">
                  {menteeExpectations.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-[#007AFF]" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
