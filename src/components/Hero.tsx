import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Regularize Seu Imóvel com Segurança Técnica e Jurídica
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          Soluções completas em topografia, projetos e documentação imobiliária. Da medição ao
          registro, cuidamos de tudo para você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8"
          >
            Nossos Serviços
          </Button>
          <Button
            onClick={() => window.open("https://wa.me/5547999606002", "_blank")}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
          >
            <MessageCircle className="mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
