
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
              The MedLink Project <span className="text-[#007AFF]">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Updates, guides, and stories from the MedLink team and community
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <Link to="/blog/life-after-undergrad" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Life After Undergrad</h3>
                <p className="text-xs text-gray-500 mb-2">By Adam Levitan</p>
                <p className="text-gray-600">Plan your next steps after graduation: grad school, paid work, or gap year</p>
              </Link>
              {/* Future posts can be added here as more content is published */}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
              <Mail className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">Have a topic you want us to cover on the blog? Send us a note.</p>
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
