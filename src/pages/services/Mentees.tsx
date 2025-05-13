
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Roles } from "@/components/sections/Roles";

const ServicesMentees = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get <span className="text-[#007AFF]">Mentored</span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Receive personalized guidance from current medical students who understand your journey
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <iframe
            src="https://forms.gle/ttUJVP84rCVLHd7H7"
            className="w-full h-[800px] border-0"
            title="Mentee Application Form"
          />
        </div>
      </section>
      <Roles type="mentee" />
      <Footer />
    </div>
  );
};

export default ServicesMentees;
