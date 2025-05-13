
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Mail } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="flex-1 section-padding bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-[#007AFF]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Medlink Project <span className="text-[#007AFF]">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Access our comprehensive collection of resources designed to support your medical school journey
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Study Materials</h3>
                <p className="text-gray-600">MCAT preparation guides, practice questions, and study strategies</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Application Tips</h3>
                <p className="text-gray-600">Personal statement guides, interview preparation, and application timelines</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Career Insights</h3>
                <p className="text-gray-600">Medical specialties overview and career planning resources</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
              <Mail className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                For more information about our resources, please contact us
              </p>
              <a 
                href="mailto:themedlinkproject@gmail.com"
                className="inline-block w-full"
              >
                <Button 
                  size="lg"
                  className="bg-[#007AFF] hover:bg-[#0A84FF] text-white w-full"
                >
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
