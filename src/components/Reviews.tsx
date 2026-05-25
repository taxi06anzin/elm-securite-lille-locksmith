import { Helmet } from "react-helmet";
import { Star } from "lucide-react";
import { GOOGLE_BUSINESS_URL } from "@/config/site";

interface ReviewsProps {
  showSchema?: boolean;
}

const Reviews = ({ showSchema = true }: ReviewsProps) => {
  const reviews = [
    {
      author: "Marie D.",
      rating: 5,
      text: "Intervention très rapide à Lille Centre, porte ouverte en 20 minutes sans dégâts. Tarif transparent annoncé avant. Je recommande !",
      date: "2024-01-10"
    },
    {
      author: "Thomas L.",
      rating: 5,
      text: "Service impeccable à Marcq-en-Barœul. Serrure changée rapidement, travail soigné. Prix correct et professionnel sympathique.",
      date: "2024-01-08"
    },
    {
      author: "Sophie M.",
      rating: 5,
      text: "Appelé en urgence à 23h à Roubaix, serrurier arrivé en 25 min. Ouverture sans casse, facture conforme au devis. Parfait.",
      date: "2024-01-05"
    },
    {
      author: "Laurent B.",
      rating: 5,
      text: "Installation porte blindée à Lille Fives. Travail professionnel, conseils de qualité. Excellent rapport qualité/prix.",
      date: "2024-01-03"
    }
  ];

  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ELM Sécurité - Serrurier Lille",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "64",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text
    }))
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
              Avis clients vérifiés
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
              <span className="text-2xl font-bold ml-2">4.7/5</span>
            </div>
            <p className="text-muted-foreground">
              Basé sur 64 avis clients à Lille et la Métropole
            </p>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg border-2 border-primary bg-primary/5 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ⭐ Voir nos avis sur Google
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-background border rounded-lg p-6 shadow-card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{review.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
