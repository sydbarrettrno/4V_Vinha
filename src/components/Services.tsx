import ServiceCard from "./services/ServiceCard";
import { servicesData } from "./services/servicesData";

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Nossos Serviços
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Oferecemos soluções completas para regularização e documentação de imóveis
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
