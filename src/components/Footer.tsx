import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";
import { GOOGLE_BUSINESS_URL, WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/config/site";

const Footer = () => {
  const zones = [
    { name: "Lille", slug: "serrurier-lille" },
    { name: "Roubaix", slug: "serrurier-roubaix" },
    { name: "Tourcoing", slug: "serrurier-tourcoing" },
    { name: "Villeneuve-d'Ascq", slug: "serrurier-villeneuve-ascq" },
    { name: "Marcq-en-Barœul", slug: "serrurier-marcq-en-baroeul" },
    { name: "La Madeleine", slug: "serrurier-la-madeleine" },
    { name: "Lambersart", slug: "serrurier-lambersart" },
    { name: "Lomme", slug: "serrurier-lomme" },
    { name: "Hellemmes", slug: "serrurier-hellemmes" },
    { name: "Mons-en-Barœul", slug: "serrurier-mons-en-baroeul" },
    { name: "Wasquehal", slug: "serrurier-wasquehal" },
    { name: "Croix", slug: "serrurier-croix" },
    { name: "Ronchin", slug: "serrurier-ronchin" },
    { name: "Loos", slug: "serrurier-loos" },
    { name: "Faches-Thumesnil", slug: "serrurier-faches-thumesnil" },
    { name: "Wattignies", slug: "serrurier-wattignies" },
    { name: "Wambrechies", slug: "serrurier-wambrechies" },
    { name: "Bondues", slug: "serrurier-bondues" },
    { name: "Hem", slug: "serrurier-hem" },
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
                <Phone className="h-5 w-5" />
                <a href={PHONE_HREF} className="hover:underline font-bold">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:elmsecuritemolinel@gmail.com" className="hover:underline">
                  elmsecuritemolinel@gmail.com
                </a>
              </div>
              <div className="mt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold bg-whatsapp text-whatsapp-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5" />
                <span>Disponible 24h/24<br />7 jours sur 7</span>
              </div>
              <div className="mt-4">
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-primary-foreground/90 hover:underline"
                >
                  <Star className="h-5 w-5 fill-current" />
                  Voir nos avis sur Google
                </a>
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
              <li>
                <Link to="/serrurier-dimanche-nuit-lille" className="hover:underline">
                  Urgence nuit &amp; dimanche
                </Link>
              </li>
              <li>
                <Link to="/serrurier-agree-assurance-lille" className="hover:underline">
                  Serrurier agréé assurance
                </Link>
              </li>
              <li>
                <Link to="/mise-en-securite-effraction-lille" className="hover:underline">
                  Mise en sécurité effraction
                </Link>
              </li>
              <li>
                <Link to="/serrure-a2p-3-points-lille" className="hover:underline">
                  Serrure A2P &amp; 3 points
                </Link>
              </li>
              <li>
                <Link to="/porte-claquee-que-faire" className="hover:underline">
                  Porte claquée : que faire
                </Link>
              </li>
              <li>
                <Link to="/serrure-bloquee-que-faire" className="hover:underline">
                  Serrure bloquée : que faire
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
              {zones.map((zone) => (
                <div key={zone.slug}>
                  <Link
                    to={`/${zone.slug}`}
                    className="hover:underline hover:text-primary-foreground/100 transition-colors"
                  >
                    Serrurier {zone.name}
                  </Link>
                </div>
              ))}
              <div className="pt-2 text-xs opacity-80">
                + toute la Métropole Européenne de Lille
              </div>
            </div>
          </div>
        </div>

        {/* À propos — positionnement Point Fort Fichet */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="text-sm text-secondary-foreground/90 space-y-2 max-w-2xl">
            <p className="font-semibold text-secondary-foreground">POINT FORT FICHET - ELM SÉCURITÉ</p>
            <p>Concessionnaire officiel Point Fort Fichet à Lille</p>
            <p>Le seul Point Fort Fichet de Lille disponible 24h/24, 7j/7</p>
            <p>Certifié par les compagnies d'assurance habitation</p>
            <address className="not-italic pt-2">
              143 Rue du Molinel<br />
              59800 Lille<br />
              <a href="tel:+33621660867" className="hover:underline">+33 6 21 66 08 67</a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} POINT FORT FICHET - ELM SÉCURITÉ - Tous droits réservés</p>
          <p className="mt-2 text-xs opacity-80">
            Serrurier, Dépannage, Métallerie, Vitrerie, Menuiserie à Lille et dans toute la MEL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
