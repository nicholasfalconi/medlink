
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MenuItems = () => (
    <>
      <Link to="/" className="text-sm font-medium tracking-wide hover:text-[#007AFF] transition-colors">
        Home
      </Link>
      <Link to="/about" className="text-sm font-medium tracking-wide hover:text-[#007AFF] transition-colors">
        About Us
      </Link>
      <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen} className="relative">
        <CollapsibleTrigger className="text-sm font-medium tracking-wide hover:text-[#007AFF] transition-colors flex items-center gap-1">
          Services <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="absolute z-50 top-full left-0 w-56 bg-white rounded-md shadow-lg py-2 mt-2">
          <Link 
            to="/services/mentors" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007AFF] transition-colors"
          >
            For Mentors
          </Link>
          <Link 
            to="/services/mentees" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007AFF] transition-colors"
          >
            For Mentees
          </Link>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible open={isResourcesOpen} onOpenChange={setIsResourcesOpen} className="relative">
        <CollapsibleTrigger className="text-sm font-medium tracking-wide hover:text-[#007AFF] transition-colors flex items-center gap-1">
          Resources <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="absolute z-50 top-full left-0 w-64 bg-white rounded-md shadow-lg py-2 mt-2">
          <Link 
            to="/resources" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007AFF] transition-colors"
          >
            All Resources
          </Link>
          <Link 
            to="/resources/life-after-undergrad" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007AFF] transition-colors"
          >
            Life After Undergrad
          </Link>
        </CollapsibleContent>
      </Collapsible>
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/295f508c-d6ac-4b69-985a-d18e2020c21c.png"
            alt="MedLink Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight text-gray-900">The MedLink Project</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <MenuItems />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-6 pt-16">
              <MenuItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
