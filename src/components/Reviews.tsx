import { Helmet } from "react-helmet";
import { Star } from "lucide-react";
import { GOOGLE_BUSINESS_URL } from "@/config/site";

interface ReviewsProps {
  /** Inject minimal aggregateRating schema. Default true. */
  showSchema?: boolean;
}

/**
 * VRAIES données Google Business Profile (à mettre à jour à chaque palier).
 * Source : https://maps.app.goo.gl/THPsBgGUr7hrURWU6 (ELM Sécurité - 143 Rue du Molinel)
 * Dernière vérification : 2026-05-25
 */
const GBP_RATING = 4.7;
const GBP_REVIEW_COUNT = 64;

/**
 * Témoignages représentatifs synthétisés à partir de vrais retours clients.
 * IMPORTANT : ces témoignages sont anonymisés/synthétiques, ils ne sont PAS
 * marqués comme @type Review dans le schema (interdit par Google + DGCCRF).
 * Seul le aggregateRating global est exposé en JSON-LD, basé sur les vraies
 * données GBP.
 */
const temoignages = [
  {
    initiale: "M.",
    rating: 5,
    text: "Intervention très rapide à Lille Centre, porte ouverte en 20 minutes sans dégâts. Tarif transparent annoncé avant. Je recommande !",
  },
  {
    initiale: "T.",
    rating: 5,
    text: "Service impeccable à Marcq-en-Barœul. Serrure changée rapidement, travail soigné. Prix correct et professionnel sympathique.",
  },
  {
    initiale: "S.",
    rating: 5,
    text: "Appelé en urgence à 23h à Roubaix, serrurier arrivé en 25 min. Ouverture sans casse, facture conforme au devis. Parfait.",
  },
  {
    initiale: "L.",
    rating: 5,
    text: "Installation porte blindée à Lille Fives. Travail professionnel, conseils de qualité. Excellent rapport qualité/prix.",
  },
];

const Reviews = ({ showSchema = true }: ReviewsProps) => {
  // Schema minimal : uniquement aggregateRating (vrai), pas de Review individuels (interdit).
  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://serrurier-urgence-lille.fr/#business",
    "name": "POINT FORT FICHET - ELM SÉCURITÉ",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GBP_RATING.toString(),
      "reviewCount": GBP_REVIEW_COUNT.toString(),
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <>
      {showSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(aggregateSchema)}
          </script>
        </Helmet>
      )}

      <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              La confiance de nos clients
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.round(GBP_RATING)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="text-2xl font-bold ml-2">
                {GBP_RATING}/5
              </span>
            </div>
            <p className="text-muted-foreground">
              Basé sur {GBP_REVIEW_COUNT} avis Google vérifiés à Lille et dans la Métropole
            </p>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg border-2 border-primary bg-primary/5 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Voir tous les avis Google d'ELM Sécurité"
            >
              ⭐ Voir nos avis sur Google
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {temoignages.map((t, index) => (
              <div
                key={index}
                className="bg-background border rounded-lg p-6 shadow-card"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">Client {t.initiale}</span>
                  <span className="text-muted-foreground">
                    Témoignage représentatif
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 italic max-w-2xl mx-auto">
            Les témoignages ci-dessus sont synthétisés à partir de retours
            clients réels et présentés de manière anonyme. Pour consulter les
            avis nominatifs vérifiés, rendez-vous sur notre fiche Google Business.
          </p>
        </div>
      </section>
    </>
  );
};

export default Reviews;
