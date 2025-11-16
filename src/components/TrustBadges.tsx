import { Clock, Shield, Euro, CheckCircle } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Clock,
      title: "Intervention 24/7",
      description: "Disponible jour et nuit",
    },
    {
      icon: Shield,
      title: "Devis gratuit",
      description: "Sans engagement",
    },
    {
      icon: Euro,
      title: "Tarifs transparents",
      description: "Pas de frais cachés",
    },
    {
      icon: CheckCircle,
      title: "Artisan qualifié",
      description: "Expérience garantie",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-card rounded-lg border shadow-card"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-sm mb-1">{badge.title}</h3>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
