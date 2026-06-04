import { Star } from "lucide-react";
import { GOOGLE_BUSINESS_URL } from "@/config/site";

/**
 * VRAIES données Google Business Profile (à mettre à jour à chaque palier).
 * Source : https://maps.app.goo.gl/THPsBgGUr7hrURWU6 (ELM Sécurité - 143 Rue du Molinel)
 * Dernière vérification : 2026-06-03 (note 4,7 — 65 avis)
 */
const GBP_RATING = 4.7;
const GBP_REVIEW_COUNT = 65;

/**
 * Avis Google authentiques publiés sur la fiche Google Business ELM Sécurité.
 * Sélection d'avis réels (texte, nom et date repris tels que publiés
 * publiquement par les clients). L'intégralité des avis reste consultable sur
 * la fiche Google liée ci-dessous.
 *
 * Note conformité : on n'émet PAS de balisage @type Review pour ces avis (ils
 * sont collectés par Google, pas en first-party). Seul l'aggregateRating réel
 * est exposé en JSON-LD (composant JsonLd), adossé à ces avis visibles + lien.
 */
const avisGoogle = [
  {
    nom: "Étienne Coyaud",
    rating: 5,
    date: "décembre 2025",
    text: "Excellente prestation à un tarif raisonnable. Délais du devis à la pose respectés, bonne communication et installation impeccable d'une serrure de sécurité, isolation et bas de porte sur une porte ancienne, en y passant le temps qu'il fallait pour que le rendu soit nickel. Les artisans étaient très pro et sympathiques. Merci pour ce très bon travail !",
  },
  {
    nom: "Pierrick Chatillon",
    rating: 5,
    date: "février 2026",
    text: "Très compétent, professionnel, rapide. Est venu dépanner notre petit-fils qui avait claqué la porte avec les clés à l'intérieur.",
  },
  {
    nom: "Pascalis Gogalis",
    rating: 5,
    date: "mai 2026",
    text: "Très bon accueil, écoute, conseils. Devis rapide, précis et compétitif, délai respecté. Un vrai professionnel.",
  },
  {
    nom: "Lucie Tran Van",
    rating: 5,
    date: "mai 2026",
    text: "Conseils et rabotage de notre porte ancienne. Artisans honnêtes et à l'écoute. Je pense que le travail a été efficace ! Délai rapide !",
  },
  {
    nom: "Nicolas Noiret",
    rating: 5,
    date: "avril 2026",
    text: "Professionnels très efficaces, très sérieux, très minutieux. Travail très propre et soigné.",
  },
  {
    nom: "Colette Baillie",
    rating: 5,
    date: "avril 2026",
    text: "Super équipe, rapidité, efficacité et extrêmement gentils. Je les recommande, topissime.",
  },
  {
    nom: "Valentin Hu",
    rating: 5,
    date: "mai 2026",
    text: "Super expérience avec Sofia et Point Fort Fichet en règle générale.",
  },
  {
    nom: "Julie Pestiaux",
    rating: 5,
    date: "avril 2026",
    text: "Très compétent, rapide et efficace.",
  },
];

const Reviews = () => {
  // L'aggregateRating est émis une seule fois, au niveau de l'entité
  // LocalBusiness (composant JsonLd, présent sur toutes les pages). Ce
  // composant ne rend que la preuve sociale visible + le lien vers la fiche
  // Google Business — pas de second bloc JSON-LD (évite la duplication).
  return (
    <>
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
            {avisGoogle.map((avis, index) => (
              <div
                key={index}
                className="bg-background border rounded-lg p-6 shadow-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(avis.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">
                    Avis Google
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{avis.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">{avis.nom}</span>
                  <span className="text-muted-foreground">{avis.date}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 italic max-w-2xl mx-auto">
            Avis authentiques publiés par nos clients sur notre fiche Google
            Business. Sélection d'avis récents — l'intégralité des {GBP_REVIEW_COUNT}{" "}
            avis est consultable sur Google.
          </p>
        </div>
      </section>
    </>
  );
};

export default Reviews;
