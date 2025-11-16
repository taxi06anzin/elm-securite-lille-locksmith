import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const MobileCallBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:0621660867"
        className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 shadow-2xl transition-colors"
        aria-label="Appeler le serrurier"
      >
        <Phone className="h-6 w-6 animate-pulse" />
        <span className="font-bold text-lg">Appelez maintenant : 06 21 66 08 67</span>
      </a>
    </div>
  );
};

export default MobileCallBar;
