import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          Pronto para Regularizar Seu Imóvel?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Fale conosco agora e receba orientação personalizada
        </p>
        <Button
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          size="lg"
          variant="secondary"
          className="text-lg px-8"
        >
          <MessageCircle className="mr-2" />
          Chamar no WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default CTA;
