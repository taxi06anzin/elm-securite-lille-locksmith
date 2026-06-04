/**
 * URL de la fiche Google Business / Google Maps (ELM SÉCURITÉ - Serrurier Lille).
 */
export const GOOGLE_BUSINESS_URL =
  "https://maps.app.goo.gl/THPsBgGUr7hrURWU6";

/** Téléphone — source de vérité unique (NAP). */
export const PHONE = "0621660867";
export const PHONE_DISPLAY = "06 21 66 08 67";
export const PHONE_HREF = `tel:${PHONE}`;

/** WhatsApp — source de vérité unique. */
export const WHATSAPP_NUMBER = "33621660867";
export const WHATSAPP_MESSAGE =
  "Bonjour, j'ai besoin d'un serrurier d'urgence à Lille";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
