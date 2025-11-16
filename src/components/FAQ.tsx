import { Helmet } from "react-helmet";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "Quel est le prix d'une ouverture de porte à Lille ?",
    answer: "Le tarif pour une ouverture de porte à Lille commence à partir de 89€ TTC en journée. Ce prix inclut le déplacement, le diagnostic et l'ouverture sans casse si possible. Pour une intervention de nuit, week-end ou jour férié, des frais supplémentaires peuvent s'appliquer. Un devis gratuit vous est systématiquement proposé avant toute intervention."
  },
  {
    question: "Intervenez-vous la nuit et le dimanche ?",
    answer: "Oui, notre service de dépannage serrurerie est disponible 24h/24 et 7j/7 à Lille et dans toute la MEL (59000, 59800, 59260). Nous intervenons également les week-ends, jours fériés et durant la nuit pour toutes vos urgences de serrurerie : porte claquée, clé perdue, serrure bloquée."
  },
  {
    question: "Quel délai pour une intervention d'urgence ?",
    answer: "Notre serrurier intervient en 20 à 30 minutes maximum à Lille et dans les communes de la Métropole Européenne de Lille. Dès votre appel au 06 21 66 08 67, nous organisons un déplacement immédiat pour résoudre votre problème de serrurerie dans les plus brefs délais."
  },
  {
    question: "Couvrez-vous tous les quartiers de Lille ?",
    answer: "Oui, nous intervenons dans tous les quartiers de Lille : Centre, Vieux-Lille, Wazemmes, Fives, Vauban-Esquermes, Bois-Blancs, Moulins, Lille-Sud, Saint-Maurice Pellevoisin. Nous couvrons également toutes les communes de la MEL : Roubaix, Tourcoing, Villeneuve-d'Ascq, Marcq-en-Barœul, Lomme, La Madeleine, Lambersart, et bien d'autres."
  },
  {
    question: "Acceptez-vous les paiements par carte ?",
    answer: "Oui, nous acceptons tous les modes de paiement : espèces, chèque et carte bancaire. Le paiement s'effectue après l'intervention et la validation du devis. Aucun acompte n'est demandé avant notre arrivée sur place."
  }
];

const FAQ = ({ items = defaultFAQItems }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-card border rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-shadow"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <h3 className="font-bold text-lg pr-4">{item.question}</h3>
              <ChevronDown 
                className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2">
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
