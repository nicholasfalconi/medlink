
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProgramFlow = () => {
  const resources = [
    { title: "Casper Test Preparation", description: "Tips, strategies, and sample scenarios" },
    { title: "MCAT Guidance", description: "Comprehensive advice on study plans and accessing resources" },
    { title: "Interview Prep", description: "Insights into different interview formats and techniques" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Does The <span className="text-[#007AFF]">Program</span> Work?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting aspiring medical students with experienced mentors
          </p>
        </div>
        <div className="prose prose-lg mx-auto text-gray-600 mb-16 max-w-3xl">
          <p>
            The MedLink Project connects undergraduate students with current medical students who have recently navigated the path to medical school. Through one-on-one mentorship, students receive personalized guidance on applications, interviews, and preparing for a career in medicine.
          </p>
          <p>
            While we work to match students with mentors, we provide comprehensive resources to ensure every participant receives meaningful support in their journey to medical school.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 prose prose-lg mx-auto text-gray-600 max-w-3xl">
          <p>
            Beyond these resources, we offer a library of recorded virtual events and workshops covering critical topics. Our program meets students wherever they are in their journey, providing the tools, knowledge, and confidence needed to pursue their dreams of becoming medical professionals.
          </p>
          <p>
            To access these resources please contact <a href="mailto:themedlinkproject@gmail.com" className="text-blue-500 hover:text-blue-600">themedlinkproject@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};
