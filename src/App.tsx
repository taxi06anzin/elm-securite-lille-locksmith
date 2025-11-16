import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DepannageSerrurerie from "./pages/DepannageSerrurerie";
import OuverturePorte from "./pages/OuverturePorte";
import ChangementSerrure from "./pages/ChangementSerrure";
import PorteBlindee from "./pages/PorteBlindee";
import SerrurierPasCher from "./pages/SerrurierPasCher";
import SerrurierLille from "./pages/SerrurierLille";
import SerrurierRoubaix from "./pages/SerrurierRoubaix";
import SerrurierTourcoing from "./pages/SerrurierTourcoing";
import SerrurierVilleneuve from "./pages/SerrurierVilleneuve";
import SerrurierMarcq from "./pages/SerrurierMarcq";
import SerrurierMadeleine from "./pages/SerrurierMadeleine";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/depannage-serrurerie" element={<DepannageSerrurerie />} />
          <Route path="/ouverture-porte" element={<OuverturePorte />} />
          <Route path="/changement-serrure" element={<ChangementSerrure />} />
          <Route path="/porte-blindee" element={<PorteBlindee />} />
          <Route path="/serrurier-pas-cher" element={<SerrurierPasCher />} />
          <Route path="/serrurier-lille" element={<SerrurierLille />} />
          <Route path="/serrurier-roubaix" element={<SerrurierRoubaix />} />
          <Route path="/serrurier-tourcoing" element={<SerrurierTourcoing />} />
          <Route path="/serrurier-villeneuve-ascq" element={<SerrurierVilleneuve />} />
          <Route path="/serrurier-marcq-en-baroeul" element={<SerrurierMarcq />} />
          <Route path="/serrurier-la-madeleine" element={<SerrurierMadeleine />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
