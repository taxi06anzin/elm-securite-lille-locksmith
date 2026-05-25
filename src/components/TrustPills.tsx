import { Star, Shield, BadgeCheck } from "lucide-react";

/**
 * Pastilles de preuve réutilisables (note GBP, Point Fort Fichet, agréé assurances).
 * `inverted` : variante pour fond sombre (hero, CTA finaux sur image).
 */
const TrustPills = ({ inverted = false }: { inverted?: boolean }) => {
  const baseClass = inverted
    ? "bg-white/15 text-white border-white/25"
    : "bg-background text-foreground border-border";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
      <span className={`inline-flex items-center gap-1 border rounded-full px-3 py-1 font-semibold ${baseClass}`}>
        <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
        4,7/5 · 64 avis Google
      </span>
      <span className={`inline-flex items-center gap-1 border rounded-full px-3 py-1 font-semibold ${baseClass}`}>
        <Shield className="h-3.5 w-3.5" aria-hidden="true" />
        Point Fort Fichet
      </span>
      <span className={`inline-flex items-center gap-1 border rounded-full px-3 py-1 font-semibold ${baseClass}`}>
        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
        Agréé assurances
      </span>
    </div>
  );
};

export default TrustPills;
