import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-4v-vinha-main.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card shadow-md" : "bg-card/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img alt="4V Vinha LTDA" className="h-16 w-auto" src={logo} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Button onClick={() => window.open("https://wa.me/5547999606002", "_blank")} className="bg-primary hover:bg-primary/90">
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Contato
              </button>
              <Button onClick={() => window.open("https://wa.me/5547999606002", "_blank")} className="bg-primary hover:bg-primary/90 w-full">
                Fale Conosco
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;
