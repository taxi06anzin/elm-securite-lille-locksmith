import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const zones = [
    "Lille", "Lomme", "Hellemmes", "Villeneuve-d'Ascq", "Ronchin", "La Madeleine",
    "Lambersart", "Mons-en-Barœul", "Wambrechies", "Marcq-en-Barœul", 
    "Faches-Thumesnil", "Wattignies", "Loos", "Seclin", "Bondues", 
    "Roubaix", "Tourcoing", "Wasquehal", "Croix", "Hem"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coordonnées */}
          <div>
            <h3 className="text-xl font-bold mb-4">ELM SÉCURITÉ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>143 Rue du Molinel<br />59800 Lille</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>06 21 66 08 67</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:elmsecuritemolinel@gmail.com" className="hover:underline">
                  elmsecuritemolinel@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5" />
                <span>Disponible 24h/24<br />7 jours sur 7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/depannage-serrurerie" className="hover:underline">
                  Dépannage serrurier 24/7
                </Link>
              </li>
              <li>
                <Link to="/ouverture-porte" className="hover:underline">
                  Ouverture de porte
                </Link>
              </li>
              <li>
                <Link to="/changement-serrure" className="hover:underline">
                  Changement de serrure
                </Link>
              </li>
              <li>
                <Link to="/porte-blindee" className="hover:underline">
                  Portes blindées
                </Link>
              </li>
              <li>
                <Link to="/serrurier-pas-cher" className="hover:underline">
                  Serrurier pas cher
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="hover:underline">
                  Tarifs transparents
                </Link>
              </li>
            </ul>
          </div>

          {/* Marques */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos spécialités</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fichet-lille" className="hover:underline">
                  Fichet Lille
                </Link>
              </li>
              <li>
                <Link to="/fichet-lille" className="hover:underline">
                  Serrurier Fichet
                </Link>
              </li>
              <li>
                <Link to="/fichet-lille" className="hover:underline">
                  Point Fort Fichet
                </Link>
              </li>
              <li>Vitrerie</li>
              <li>Menuiserie</li>
              <li>
                <Link to="/serrurier-pas-cher" className="hover:underline">
                  Tarifs accessibles
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zones d'intervention MEL</h3>
            <div className="text-sm space-y-1">
              {zones.slice(0, 12).map((zone) => (
                <div key={zone}>{zone}</div>
              ))}
              <div className="pt-2 text-xs opacity-80">
                + toute la Métropole Européenne de Lille
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ELM SÉCURITÉ - Serrurier Lille - Tous droits réservés</p>
          <p className="mt-2 text-xs opacity-80">
            Serrurier, Dépannage, Métallerie, Vitrerie, Menuiserie à Lille et dans toute la MEL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
