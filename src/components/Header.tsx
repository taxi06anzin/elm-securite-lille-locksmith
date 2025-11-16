import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, MapPin, Clock } from "lucide-react";
import { CallButton } from "./ui/button-variants";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Dépannage 24/7", href: "/depannage-serrurerie" },
    { name: "Ouverture de porte", href: "/ouverture-porte" },
    { name: "Changement de serrure", href: "/changement-serrure" },
    { name: "Portes blindées", href: "/porte-blindee" },
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
            <a href="tel:0626160687" className="flex items-center gap-2 font-bold hover:underline">
              <Phone className="h-4 w-4" />
              06 26 16 06 87
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
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
