
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Roles } from "@/components/sections/Roles";

const ServicesMentors = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Become a <span className="text-[#007AFF]">Mentor</span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Share your knowledge and experience to help aspiring medical students navigate their journey
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border rounded-lg shadow-sm p-6 text-center">
            <p className="text-gray-700 mb-4">
              This form requires file uploads and can’t be embedded. Please open it in a new tab.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdx7BdDIJDE1sXaZNqlkXoCbGm6VzyZmS9DcJkDGmQvWe396Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#007AFF] px-6 py-3 text-white font-medium hover:bg-blue-600 transition"
            >
              Open Mentor Application
            </a>
          </div>
        </div>
      </section>
      <Roles type="mentor" />
      <Footer />
    </div>
  );
};

export default ServicesMentors;
