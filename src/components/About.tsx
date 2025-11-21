import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Expertise Técnica e Compromisso com Resultados
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A 4V Vinha é uma empresa especializada em topografia e regularização de imóveis, formada
                por profissionais habilitados e experientes no mercado de agrimensura e documentação
                fundiária. Nossa missão é transformar processos técnicos complexos em soluções simples e
                seguras para nossos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com anos de atuação no setor, desenvolvemos uma metodologia própria que combina
                tecnologia de ponta em levantamentos topográficos com profundo conhecimento da legislação
                urbanística e imobiliária. Utilizamos equipamentos de alta precisão (estação total, GPS
                geodésico) e softwares especializados para garantir a exatidão técnica em todos os nossos
                trabalhos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa diferença está no atendimento personalizado e no compromisso com prazos e
                resultados. Sabemos que regularizar um imóvel envolve aspectos técnicos, jurídicos e
                emocionais para nossos clientes. Por isso, mantemos comunicação transparente em todas as
                etapas, explicando cada procedimento e acompanhando de perto a evolução dos processos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Além da nossa equipe técnica interna, contamos com uma rede de parceiros qualificados,
                incluindo advogados especializados em direito imobiliário, despachantes e profissionais de
                diversas áreas. Essa estrutura nos permite oferecer soluções completas, desde o
                levantamento topográfico inicial até o registro final no cartório.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seja para desmembrar um terreno, retificar uma área, averbar uma construção ou
                regularizar uma situação de posse através de usucapião, a 4V Vinha tem a solução técnica e
                o suporte necessário. Trabalhamos com total conformidade às normas do CREA, legislação
                municipal e federal, garantindo segurança jurídica em todos os nossos serviços.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
