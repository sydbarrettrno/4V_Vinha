import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Settings, Handshake, FileText, Map, MapPin, Scale, Home, FileCheck, Building2, MessageCircle, Ruler, HardHat, ClipboardCheck } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada! Retornaremos em até 24h.');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = "https://wa.me/5548999999999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20engenheira%20sobre%20meu%20projeto.";

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">4V VINHA</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-blue-600 transition">Início</button>
            <button onClick={() => scrollToSection('servicos')} className="hover:text-blue-600 transition">Serviços</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-blue-600 transition">Sobre</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-blue-600 transition">Contato</button>
          </div>
          <Button asChild className="hidden md:block">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Fale com a Engenheira</a>
          </Button>
        </nav>
      </header>

      <section id="inicio" className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-4 inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Engenharia Civil | CREA Regularizado
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Projetos de Engenharia Civil com Responsabilidade Técnica
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Soluções completas em projetos estruturais, arquitetônicos, regularização e documentação técnica. Engenharia civil aplicada do planejamento à execução.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('servicos')}>
              <HardHat className="mr-2 h-5 w-5" />
              Ver Serviços
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar Engenheira
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a 4V Vinha?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Engenheira Civil Habilitada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Formação em Engenharia Civil com registro CREA ativo e responsabilidade técnica completa</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition">
              <CardHeader>
                <Settings className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Soluções Integradas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Da concepção do projeto ao registro final, engenharia aplicada em todas as etapas</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition">
              <CardHeader>
                <Handshake className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Atendimento Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cada projeto é único e recebe atenção técnica dedicada da engenheira responsável</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Serviços de Engenharia Civil</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Expertise técnica em projetos estruturais, regularização imobiliária e documentação técnica especializada
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-l-4 border-blue-600">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <HardHat className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Projetos Estruturais e Arquitetônicos</h3>
                    <p className="text-sm text-gray-600">Desenvolvimento completo de projetos com ART/RRT e responsabilidade técnica</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Projetos estruturais definem o sistema construtivo da edificação, dimensionando fundações, pilares, vigas e lajes para garantir segurança e estabilidade. Incluem cálculo estrutural completo, detalhamento executivo e compatibilização com projetos complementares.</p>
                <p><strong>Como funciona:</strong> Analisamos as características do terreno e requisitos arquitetônicos, desenvolvemos o dimensionamento estrutural conforme NBRs vigentes, elaboramos plantas de forma, armação e detalhes executivos, e emitimos ART de projeto e execução quando solicitado.</p>
                <p><strong>Por que contratar:</strong> Projetos estruturais bem executados garantem segurança da edificação, economia na construção através de otimização de materiais, atendimento às normas técnicas e conformidade com exigências de financiamento e aprovação em prefeituras e cartórios.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <ClipboardCheck className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Laudos Técnicos e Perícias de Engenharia</h3>
                    <p className="text-sm text-gray-600">Avaliações técnicas, vistorias e pareceres com responsabilidade técnica</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Laudos técnicos são documentos elaborados por engenheiro civil que atestam as condições de uma edificação, avaliam patologias, determinam causas de problemas estruturais ou fornecem subsídios técnicos para processos judiciais e administrativos.</p>
                <p><strong>Como funciona:</strong> Realizamos vistoria in loco com registro fotográfico detalhado, análise técnica das condições estruturais e construtivas, identificação de patologias e não conformidades, elaboração de parecer técnico fundamentado e emissão de ART de serviço técnico.</p>
                <p><strong>Por que contratar:</strong> Laudos técnicos com responsabilidade de engenheiro civil têm validade legal, fornecem segurança em processos de compra e venda, identificam problemas antes de se agravarem e servem como prova técnica em litígios e negociações.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Ruler className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Acompanhamento e Gerenciamento de Obras</h3>
                    <p className="text-sm text-gray-600">Supervisão técnica e fiscalização da execução conforme projeto</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Acompanhamento de obra é o serviço de fiscalização e supervisão técnica durante a construção, garantindo que a execução ocorra conforme projeto, normas técnicas e cronograma estabelecido, com controle de qualidade dos materiais e serviços.</p>
                <p><strong>Como funciona:</strong> Realizamos visitas periódicas programadas à obra, verificamos conformidade da execução com projetos e especificações, orientamos equipe técnica sobre procedimentos corretos, validamos ensaios de materiais e emitimos relatórios de acompanhamento com registro fotográfico.</p>
                <p><strong>Por que contratar:</strong> Evite retrabalho e desperdício de materiais, garanta qualidade na execução, identifique problemas antes de se tornarem graves, tenha documentação técnica completa do processo construtivo e segurança de que a obra está sendo executada por profissional qualificado.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Levantamento Topográfico Planialtimétrico</h3>
                    <p className="text-sm text-gray-600">Medição técnica precisa com equipamentos certificados</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Levantamento topográfico é a medição técnica que determina com precisão os limites, área, relevo e características físicas de um terreno. O planialtimétrico combina dados de planimetria e altimetria, fundamental para qualquer projeto de engenharia.</p>
                <p><strong>Como funciona:</strong> Utilizamos equipamentos de alta precisão como estação total e GNSS para coletar dados em campo, processamos as informações em software especializado e entregamos plantas topográficas, memoriais descritivos e arquivos digitais compatíveis com projetos de engenharia civil e arquitetura.</p>
                <p><strong>Por que contratar:</strong> Base técnica essencial para projetos estruturais e arquitetônicos, dados precisos evitam retrabalho e problemas na execução, necessário para aprovações em prefeituras e cartórios, e garante segurança jurídica em transações imobiliárias.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Desmembramento e Unificação de Lotes</h3>
                    <p className="text-sm text-gray-600">Projetos técnicos para parcelamento do solo com ART</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Desmembramento é o processo técnico-administrativo de divisão de um terreno em lotes independentes. Requer projeto técnico elaborado por engenheiro civil, conforme Lei de Parcelamento do Solo e legislação municipal específica.</p>
                <p><strong>Como funciona:</strong> Realizamos levantamento topográfico cadastral, elaboramos projeto de desmembramento atendendo parâmetros urbanísticos municipais, providenciamos aprovação na prefeitura com nossa responsabilidade técnica (ART), e acompanhamos registro no cartório de imóveis.</p>
                <p><strong>Por que contratar:</strong> Engenheira civil garante conformidade técnica com normas urbanísticas, agiliza aprovação em órgãos competentes, evita problemas jurídicos futuros e valoriza o patrimônio através de regularização adequada.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Map className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Retificação de Área e Memoriais Descritivos</h3>
                    <p className="text-sm text-gray-600">Correção de divergências com responsabilidade técnica</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Retificação de área é o procedimento técnico-jurídico que corrige divergências entre a metragem registrada na matrícula do imóvel e a área real medida em campo por engenheiro civil.</p>
                <p><strong>Como funciona:</strong> Executamos levantamento topográfico georeferenciado com equipamentos certificados, elaboramos memorial descritivo técnico detalhado conforme NBR 13.133 e NBR 14.166, e conduzimos processo de retificação junto ao cartório de registro de imóveis.</p>
                <p><strong>Por que contratar:</strong> Responsabilidade técnica de engenheira civil confere validade ao procedimento, regulariza situação do imóvel antes de transações e evita questionamentos jurídicos sobre limites.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Home className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Averbação de Construção e CND de Obra</h3>
                    <p className="text-sm text-gray-600">Regularização de edificações com documentação técnica completa</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Averbação é o registro oficial da edificação construída na matrícula do imóvel. Requer projeto as-built elaborado por engenheiro civil, CND de obra da Receita Federal e memorial descritivo técnico com responsabilidade técnica.</p>
                <p><strong>Como funciona:</strong> Elaboramos projeto arquitetônico as-built, preparamos documentação técnica completa incluindo ART de projeto, obtemos CND de obra junto à Receita Federal, e conduzimos processo de averbação até atualização da matrícula.</p>
                <p><strong>Por que contratar:</strong> Engenheira civil assume responsabilidade técnica perante cartório, regulariza construção para transações imobiliárias e evita multas por construção irregular.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Scale className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Usucapião - Suporte Técnico de Engenharia</h3>
                    <p className="text-sm text-gray-600">Levantamentos e memoriais técnicos em parceria jurídica</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> No processo de usucapião, o engenheiro civil é responsável pela elaboração do levantamento topográfico georeferenciado, memorial descritivo técnico e planta do imóvel. Nossa parceria com escritório jurídico oferece solução técnico-jurídica completa.</p>
                <p><strong>Como funciona:</strong> Realizamos levantamento topográfico planialtimétrico cadastral com georreferenciamento, elaboramos memorial descritivo técnico detalhado, emitimos ART de levantamento topográfico, enquanto advogados parceiros conduzem a parte processual.</p>
                <p><strong>Por que contratar:</strong> Documentação técnica elaborada por engenheira civil atende rigorosamente exigências legais e cartoriais, evita indeferimento por questões técnicas e agiliza tramitação do processo.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Incorporação Imobiliária e Instituição de Condomínio</h3>
                    <p className="text-sm text-gray-600">Projetos técnicos para empreendimentos imobiliários</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4 pt-4">
                <p><strong>O que é:</strong> Incorporação imobiliária é o regime jurídico para construção e comercialização de unidades autônomas. Instituição de condomínio divide legalmente edificação em unidades com matrículas próprias. Ambos exigem projetos técnicos elaborados por engenheiro civil.</p>
                <p><strong>Como funciona:</strong> Elaboramos memorial de incorporação com especificações técnicas completas, desenvolvemos projetos arquitetônicos e complementares, calculamos frações ideais de terreno, preparamos plantas e documentação técnica com ART, e conduzimos registro no cartório e prefeitura.</p>
                <p><strong>Por que contratar:</strong> Engenheira civil garante conformidade técnica com legislação de incorporações, elabora documentação que atende exigências da Receita Federal e Caixa Econômica, viabiliza financiamentos e vendas de unidades.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="sobre" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Engenharia Civil Aplicada com Responsabilidade</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>A 4V Vinha é comandada por engenheira civil formada e habilitada, com registro ativo no CREA. Nossa atuação se fundamenta na aplicação rigorosa de conhecimentos técnicos de engenharia civil em projetos estruturais, regularização imobiliária e documentação técnica especializada.</p>
            <p>A formação em Engenharia Civil nos capacita tecnicamente para compreender todas as variáveis envolvidas em um projeto: desde análise de cargas e dimensionamento estrutural até interpretação de legislações urbanísticas e normas técnicas brasileiras.</p>
            <p>Nosso diferencial está na integração de serviços que normalmente exigiriam múltiplos profissionais. Como engenheira civil, assumo responsabilidade técnica completa sobre projetos estruturais, laudos de vistoria, levantamentos topográficos e toda documentação necessária para aprovações.</p>
            <p>Atendemos desde proprietários residenciais que precisam regularizar uma construção até construtoras e incorporadoras que necessitam de projetos estruturais completos para empreendimentos. Em todos os casos, aplicamos os mesmos princípios: rigor técnico conforme normas ABNT, atenção aos prazos estabelecidos, comunicação transparente sobre cada etapa do processo.</p>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Responsabilidade Técnica</h3>
            <p className="text-gray-700 mb-3">Todos os serviços são executados com emissão de ART (Anotação de Responsabilidade Técnica) junto ao CREA, conforme legislação vigente. Isso significa que assumimos responsabilidade legal e técnica perante órgãos fiscalizadores, cartórios, prefeituras e demais entidades.</p>
            <p className="text-gray-700">A formação em Engenharia Civil não é apenas um título acadêmico, mas representa anos de estudo de disciplinas que fundamentam tecnicamente cada decisão tomada em um projeto.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">Precisa de uma Engenheira Civil para seu Projeto?</h2>
          <p className="text-xl mb-8">Consultoria técnica especializada com responsabilidade e compromisso profissional</p>
          <Button size="lg" variant="secondary" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Falar com a Engenheira Danielle
            </a>
          </Button>
        </div>
      </section>

      <section id="contato" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Vamos Conversar Sobre Seu Projeto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Solicite uma Consulta Técnica</CardTitle>
                <CardDescription>Preencha o formulário e a engenheira retornará em até 24 horas úteis</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input 
                      id="nome" 
                      required 
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone (WhatsApp) *</Label>
                    <Input 
                      id="telefone" 
                      type="tel" 
                      required 
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="servico">Tipo de Projeto/Serviço *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, servico: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="projeto-estrutural">Projeto Estrutural</SelectItem>
                        <SelectItem value="laudo-pericia">Laudo Técnico / Perícia</SelectItem>
                        <SelectItem value="acompanhamento">Acompanhamento de Obra</SelectItem>
                        <SelectItem value="topografia">Levantamento Topográfico</SelectItem>
                        <SelectItem value="desmembramento">Desmembramento/Unificação</SelectItem>
                        <SelectItem value="retificacao">Retificação de Área</SelectItem>
                        <SelectItem value="averbacao">Averbação de Construção</SelectItem>
                        <SelectItem value="usucapiao">Usucapião (Suporte Técnico)</SelectItem>
                        <SelectItem value="incorporacao">Incorporação/Condomínio</SelectItem>
                        <SelectItem value="outro">Consultoria / Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mensagem">Descreva seu projeto ou necessidade *</Label>
                    <Textarea 
                      id="mensagem" 
                      required 
                      rows={4}
                      placeholder="Ex: Preciso de projeto estrutural para casa de 120m²..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full">Enviar Solicitação</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">(48) 99999-9999</p>
                      <p className="text-sm text-gray-500">Atendimento ágil pela engenheira</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600">engenharia@4vvinha.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Horário de Atendimento</p>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-sm text-gray-500">Sábados: sob agendamento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Registro Profissional</p>
                      <p className="text-gray-600">CREA-SC Regularizado</p>
                      <p className="text-sm text-gray-500">Engenheira Civil Habilitada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Atendimento Personalizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Prefere falar diretamente com a engenheira? Nosso WhatsApp está sempre disponível para esclarecer dúvidas técnicas, discutir viabilidade de projetos e agendar visitas ao local.
                  </p>
                  <Button asChild className="w-full" variant="default">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Chamar no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Como Trabalhamos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold">Consulta Inicial</p>
                      <p className="text-sm text-gray-600">Análise técnica da sua necessidade</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold">Orçamento Detalhado</p>
                      <p className="text-sm text-gray-600">Proposta técnica e valores transparentes</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold">Execução com ART</p>
                      <p className="text-sm text-gray-600">Desenvolvimento com responsabilidade técnica</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-semibold">Entrega e Suporte</p>
                      <p className="text-sm text-gray-600">Documentação completa e acompanhamento</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">4V VINHA</h3>
              <p className="text-gray-400 mb-2">Engenharia Civil</p>
              <p className="text-gray-400 text-sm">Projetos estruturais, laudos técnicos e regularização imobiliária com responsabilidade técnica</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('servicos')} className="block text-gray-400 hover:text-white transition">Projetos Estruturais</button>
                <button onClick={() => scrollToSection('servicos')} className="block text-gray-400 hover:text-white transition">Laudos e Perícias</button>
                <button onClick={() => scrollToSection('servicos')} className="block text-gray-400 hover:text-white transition">Acompanhamento de Obras</button>
                <button onClick={() => scrollToSection('servicos')} className="block text-gray-400 hover:text-white transition">Regularização Imobiliária</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>WhatsApp: (48) 99999-9999</p>
                <p>Email: engenharia@4vvinha.com.br</p>
                <p>Segunda a Sexta: 8h às 18h</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-white transition">Instagram</a>
                  <a href="#" className="hover:text-white transition">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 4V Vinha - Engenharia Civil | CREA-SC | Todos os direitos reservados</p>
            <p className="mt-2">Engenharia Civil aplicada com responsabilidade técnica e compromisso profissional</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50 group"
        aria-label="Falar com a Engenheira no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Falar com a Engenheira
        </span>
      </a>
    </div>
  );
};

export default Index;
