import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, MapPin, Clock, Mail } from "lucide-react";
import { CallButton } from "./ui/button-variants";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Dépannage 24/7", href: "/depannage-serrurerie" },
    { name: "Ouverture de porte", href: "/ouverture-porte" },
    { name: "Changement de serrure", href: "/changement-serrure" },
    { name: "Portes blindées", href: "/porte-blindee" },
    { name: "Serrurier Fichet Lille", href: "/fichet-lille" },
    { name: "Serrurier pas cher", href: "/serrurier-pas-cher" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      {/* Top bar urgence */}
      <div className="bg-gradient-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-semibold">Disponible 24h/24 et 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Intervention en 20-30 min à Lille et MEL</span>
            </div>
            <a href="tel:0621660867" className="flex items-center gap-2 font-bold hover:underline">
              <Phone className="h-4 w-4" />
              06 21 66 08 67
            </a>
            <a 
              href="https://wa.me/33621660867?text=Bonjour,%20j'ai%20besoin%20d'un%20serrurier%20d'urgence" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 font-bold bg-[#25D366] text-white px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:elmsecuritemolinel@gmail.com" className="hidden md:flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" />
              elmsecuritemolinel@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        {/* Badge Point Fort Fichet — différenciateur principal */}
        <div className="flex justify-center lg:justify-start mb-3">
          <div className="bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <span aria-hidden="true">🔐</span>
            Concessionnaire Point Fort Fichet · 24/7
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-primary">ELM SÉCURITÉ</span>
            <span className="text-xs text-muted-foreground">Serrurier - Dépannage - Lille</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Nos services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/tarifs" className="text-foreground hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link to="/villes-couvertes" className="text-foreground hover:text-primary transition-colors">
              Villes couvertes
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <CallButton />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="block py-2 text-foreground hover:text-primary transition-colors pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              to="/tarifs"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              to="/villes-couvertes"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Villes couvertes
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <CallButton className="w-full" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
