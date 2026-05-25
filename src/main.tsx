import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Si react-snap a pré-rendu la page, on hydrate le HTML existant.
// Sinon (dev mode ou première visite sans pré-rendu), on rend normalement.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
