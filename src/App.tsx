import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ServicesMentors from "./pages/services/Mentors";
import ServicesMentees from "./pages/services/Mentees";
import Resources from "./pages/Resources";
import BlogLifeAfterUndergrad from "./pages/blog/LifeAfterUndergrad";
import { useEffect } from "react";
import { initGoogleAnalytics } from "./lib/analytics";

const queryClient = new QueryClient();

  // ← define the base URL for router
  const baseUrl = import.meta.env.BASE_URL || "/";

function App() {
  // Initialize GA once with env-provided ID
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID as string | undefined
    initGoogleAnalytics(gaId)
  }, [])

  // Track route changes (SPA page views)
  const RouteChangeTracker = () => {
    const location = useLocation()
    useEffect(() => {
      const ga = (window as any).gtag as undefined | ((...args: any[]) => void)
      if (ga) {
        ga("event", "page_view", {
          page_path: location.pathname + location.search,
          page_location: window.location.href,
          page_title: document.title,
        })
      }
    }, [location.pathname, location.search])
    return null
  }
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={baseUrl}>
          <RouteChangeTracker />
          {/* your toasters */}
          <Toaster />
          <Sonner />
          {/* your application routes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/mentors" element={<ServicesMentors />} />
            <Route path="/services/mentees" element={<ServicesMentees />} />
            {/* Blog routes */}
            <Route path="/blog" element={<Resources />} />
            <Route path="/blog/life-after-undergrad" element={<BlogLifeAfterUndergrad />} />
            {/* Legacy resources URLs (redirect to blog components) */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/life-after-undergrad" element={<BlogLifeAfterUndergrad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

