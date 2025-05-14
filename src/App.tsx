import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ServicesMentors from "./pages/services/Mentors";
import ServicesMentees from "./pages/services/Mentees";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

// ← define the base URL for router
const baseUrl = import.meta.env.BASE_URL || "/";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={baseUrl}>
          {/* your toasters */}
          <Toaster />
          <Sonner />
          {/* your application routes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/mentors" element={<ServicesMentors />} />
            <Route path="/services/mentees" element={<ServicesMentees />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

