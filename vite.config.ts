import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// Liste de toutes les routes à pré-générer
const routes = [
  "/",
  "/depannage-serrurerie",
  "/ouverture-porte",
  "/changement-serrure",
  "/porte-blindee",
  "/serrurier-pas-cher",
  "/serrurier-lille",
  "/serrurier-roubaix",
  "/serrurier-tourcoing",
  "/serrurier-villeneuve-ascq",
  "/serrurier-marcq-en-baroeul",
  "/serrurier-la-madeleine",
  "/serrurier-lambersart",
  "/serrurier-mouvaux",
  "/serrurier-croix",
  "/serrurier-wambrechies",
  "/serrurier-mons-en-baroeul",
  "/serrurier-wasquehal",
  "/serrurier-lomme",
  "/serrurier-loos",
  "/serrurier-faches-thumesnil",
  "/serrurier-ronchin",
  "/serrurier-wattignies",
  "/serrurier-hellemmes",
  "/serrurier-hem",
  "/serrurier-perenchies",
  "/serrurier-bondues",
  "/serrurier-halluin",
  "/tarifs",
  "/contact",
  "/villes-couvertes",
  "/fichet-lille"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && prerender({ 
      routes,
      staticDir: path.resolve(__dirname, "dist")
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  }
}));
