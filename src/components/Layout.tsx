import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = () => (
  <>
    <Header />
    <main id="main-content">
      <Outlet />
    </main>
    <Footer />
    {/* Réserve l'espace de la barre d'urgence fixe (EmergencyCallBar) en bas sur mobile */}
    <div aria-hidden="true" className="h-24 md:hidden" />
  </>
);

export default Layout;
