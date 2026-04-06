
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Roles } from "@/components/sections/Roles";

const ServicesMentees = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      
      <main className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Get <span className="text-[#007AFF]">Mentored</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Receive personalized guidance from current medical students who understand your journey.
            </p>
          </div>
          
          <div className="bg-white p-2 md:p-6 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdQUk-EZAl_hrCDV_JUnYbx0mj9DwlkWWKD4MxM_voZTht3pQ/viewform?embedded=true"
              className="w-full border-0 rounded-2xl"
              style={{ minHeight: "1800px" }}
              title="Mentee Application Form"
              loading="lazy"
            />
          </div>
        </div>
      </main>

      <Roles type="mentee" />
      <Footer />
    </div>
  );
};

export default ServicesMentees;
