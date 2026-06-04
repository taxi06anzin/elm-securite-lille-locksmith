import { Phone, MessageCircle, Clock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/config/site";

/**
 * Barre d'urgence permanente mobile.
 * Visible IMMÉDIATEMENT (pas après scroll), 2 CTA (Appel + WhatsApp),
 * info délai d'intervention intégrée. Décision en <2s pour la persona "panique".
 */
const EmergencyCallBar = () => {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        bg-background border-t-2 border-urgent
        shadow-[0_-4px_20px_rgba(0,0,0,0.15)]
        pb-[env(safe-area-inset-bottom)]
      "
      role="region"
      aria-label="Contact d'urgence permanent"
    >
      {/* Ligne info délai */}
      <div className="flex items-center justify-center gap-1.5 bg-urgent/10 py-1 text-xs font-semibold text-urgent">
        <Clock className="h-3 w-3" aria-hidden="true" />
        <span>Intervention en 20-30 min à Lille</span>
      </div>
      {/* Ligne CTA */}
      <div className="grid grid-cols-[1fr_auto] gap-0">
        <a
          href={`tel:${PHONE}`}
          className="
            flex items-center justify-center gap-3
            bg-urgent text-urgent-foreground
            py-4 px-4
            font-bold text-lg
            touch-manipulation
            active:bg-urgent-pulse active:scale-[0.98]
            transition-transform
            min-h-14
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-urgent focus-visible:ring-offset-2 focus-visible:ring-offset-background
          "
          aria-label={`Appeler ELM Sécurité au ${PHONE_DISPLAY}`}
        >
          <Phone className="h-6 w-6 motion-safe:animate-pulse" aria-hidden="true" />
          <span>Appeler {PHONE_DISPLAY}</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            bg-whatsapp text-whatsapp-foreground
            px-5
            touch-manipulation
            active:opacity-80 active:scale-[0.98]
            transition-transform
            min-w-16 min-h-14
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background
          "
          aria-label="Contacter ELM Sécurité par WhatsApp"
        >
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default EmergencyCallBar;
