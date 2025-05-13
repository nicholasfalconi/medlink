
import { Card } from "@/components/ui/card";

const timeline = [
  {
    year: "2023",
    title: "Founded",
    description: "The MedLink Project was established",
  },
  {
    year: "2024",
    title: "First Cohort",
    description: "Successfully launched our first mentorship program",
  },
  {
    year: "2025",
    title: "200+ Mentees",
    description: "Reached a major milestone in student support",
  },
];

export const Journey = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-16">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                <div className={`grid grid-cols-2 gap-8 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <div className={index % 2 === 0 ? '' : 'col-start-2'}>
                    <h3 className="text-2xl font-bold text-gray-900">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-primary mt-2">{item.title}</h4>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
