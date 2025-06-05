
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Peinture } from "./pages/services/Peinture";
import { Renovation } from "./pages/services/Renovation";
import { Electricite } from "./pages/services/Electricite";
import { SallesDeBains } from "./pages/services/SallesDeBains";
import { RevetementsSol } from "./pages/services/RevetementsSol";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/peinture" element={<Peinture />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/electricite" element={<Electricite />} />
          <Route path="/services/salles-de-bains" element={<SallesDeBains />} />
          <Route path="/services/revetements-sol" element={<RevetementsSol />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
