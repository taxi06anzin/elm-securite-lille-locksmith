import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.phone) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir au minimum votre nom et téléphone.",
        variant: "destructive",
      });
      return;
    }

    // Créer le message WhatsApp
    const message = `🔒 *Nouvelle demande serrurier*\n\n` +
      `👤 *Nom:* ${formData.name}\n` +
      `📞 *Téléphone:* ${formData.phone}\n` +
      `📍 *Adresse:* ${formData.address || 'Non précisée'}\n` +
      `📝 *Problème:* ${formData.message || 'Non précisé'}`;
    
    // Ouvrir WhatsApp avec le message pré-rempli (remplacez par votre numéro)
    const whatsappNumber = "33621660867"; // Format international sans + ni espaces
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Envoyez le message pour finaliser votre demande.",
    });

    // Reset form
    setFormData({ name: "", phone: "", address: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-card border">
      <div>
        <Label htmlFor="name">Nom complet *</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Votre nom"
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Téléphone *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="06 XX XX XX XX"
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Adresse d'intervention</Label>
        <Input
          id="address"
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          placeholder="Votre adresse à Lille"
        />
      </div>

      <div>
        <Label htmlFor="message">Description du problème</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Décrivez votre situation (porte claquée, serrure cassée, etc.)"
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
        <Send className="mr-2 h-4 w-4" />
        Demander un devis gratuit
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Ou appelez-nous directement au <a href="tel:0621660867" className="font-bold text-primary hover:underline">06 21 66 08 67</a>
      </p>
    </form>
  );
};

export default ContactForm;
