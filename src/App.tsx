import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileCallBar from "@/components/MobileCallBar";
import WhatsAppButton from "@/components/WhatsAppButton";
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
import SerrurierLambersart from "./pages/SerrurierLambersart";
import SerrurierMouvaux from "./pages/SerrurierMouvaux";
import SerrurierCroix from "./pages/SerrurierCroix";
import SerrurierWambrechies from "./pages/SerrurierWambrechies";
import SerrurierMons from "./pages/SerrurierMons";
import SerrurierWasquehal from "./pages/SerrurierWasquehal";
import SerrurierLomme from "./pages/SerrurierLomme";
import SerrurierLoos from "./pages/SerrurierLoos";
import SerrurierFaches from "./pages/SerrurierFaches";
import SerrurierRonchin from "./pages/SerrurierRonchin";
import SerrurierWattignies from "./pages/SerrurierWattignies";
import SerrurierHellemmes from "./pages/SerrurierHellemmes";
import SerrurierHem from "./pages/SerrurierHem";
import SerrurierPerenchies from "./pages/SerrurierPerenchies";
import SerrurierBondues from "./pages/SerrurierBondues";
import SerrurierHalluin from "./pages/SerrurierHalluin";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import VillesCouvertes from "./pages/VillesCouvertes";
import FichetLille from "./pages/FichetLille";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MobileCallBar />
        <WhatsAppButton />
        <Routes>
          <Route element={<Layout />}>
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
        <Route path="/serrurier-lambersart" element={<SerrurierLambersart />} />
        <Route path="/serrurier-mouvaux" element={<SerrurierMouvaux />} />
        <Route path="/serrurier-croix" element={<SerrurierCroix />} />
        <Route path="/serrurier-wambrechies" element={<SerrurierWambrechies />} />
        <Route path="/serrurier-mons-en-baroeul" element={<SerrurierMons />} />
        <Route path="/serrurier-wasquehal" element={<SerrurierWasquehal />} />
        <Route path="/serrurier-lomme" element={<SerrurierLomme />} />
        <Route path="/serrurier-loos" element={<SerrurierLoos />} />
        <Route path="/serrurier-faches-thumesnil" element={<SerrurierFaches />} />
        <Route path="/serrurier-ronchin" element={<SerrurierRonchin />} />
        <Route path="/serrurier-wattignies" element={<SerrurierWattignies />} />
        <Route path="/serrurier-hellemmes" element={<SerrurierHellemmes />} />
        <Route path="/serrurier-hem" element={<SerrurierHem />} />
        <Route path="/serrurier-perenchies" element={<SerrurierPerenchies />} />
        <Route path="/serrurier-bondues" element={<SerrurierBondues />} />
        <Route path="/serrurier-halluin" element={<SerrurierHalluin />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villes-couvertes" element={<VillesCouvertes />} />
          <Route path="/fichet-lille" element={<FichetLille />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
