import { Award, Cog, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChoose = () => {
  const features = [
    {
      icon: Award,
      title: "Profissionais Habilitados",
      description: "Equipe técnica registrada com experiência comprovada",
    },
    {
      icon: Cog,
      title: "Processo Completo",
      description: "Do levantamento ao registro, cuidamos de todas as etapas",
    },
    {
      icon: Handshake,
      title: "Parcerias Especializadas",
      description: "Rede de parceiros jurídicos e técnicos",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Por Que Escolher a 4V Vinha
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
