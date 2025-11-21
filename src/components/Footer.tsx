import logo from "@/assets/logo-4v-vinha.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="4V Vinha" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80">
              Soluções completas em topografia e regularização de imóveis
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>(11) 99999-9999</li>
              <li>contato@4vvinha.com.br</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/80">
          <p>© 2025 4V Vinha - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
