
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Roles } from "@/components/sections/Roles";

const ServicesMentors = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      
      <main className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Become a <span className="text-[#007AFF]">Mentor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Share your knowledge and experience to help aspiring medical students navigate their journey.
            </p>
          </div>
          
          <div className="bg-white p-2 md:p-6 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSedzt9haDwZVUDQnPVzxupAOla2O9QqdcJbGtR4xTNcakWgWg/viewform?embedded=true"
              className="w-full border-0 rounded-2xl"
              style={{ minHeight: "800px" }}
              title="Mentor Application Form"
              loading="lazy"
            />
          </div>
        </div>
      </main>

      <Roles type="mentor" />
      <Footer />
    </div>
  );
};

export default ServicesMentors;
