
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
            
            <div className="max-w-3xl mx-auto mb-12 text-left">
              <ul className="divide-y rounded-xl border bg-white">
                <li>
                  <Link to="/blog/life-after-undergrad" className="block p-5 hover:bg-gray-50">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Life After Undergrad</h3>
                        <p className="mt-1 text-sm text-gray-600">Plan your next steps after graduation: grad school, paid work, or gap year</p>
                        <p className="mt-2 text-xs text-gray-500">By Adam Levitan • August 9th, 2025</p>
                      </div>
                      <BookOpen className="h-5 w-5 text-[#007AFF] mt-1" />
                    </div>
                  </Link>
                </li>
                {/* Add more <li> entries here for future posts */}
              </ul>
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
