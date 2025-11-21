import { Split, Merge, Ruler, FileCheck, MapPin, Building, FileText, Building2 } from "lucide-react";

export const servicesData = [
  {
    icon: Split,
    title: "Desmembramento de Lote",
    summary: "Divida seu terreno em lotes independentes com matrícula própria",
    details: [
      "O desmembramento de lote é o processo técnico e jurídico que permite dividir um terreno maior em lotes menores, cada um com matrícula independente no Cartório de Registro de Imóveis. Este procedimento é fundamental para proprietários que desejam vender partes do seu terreno ou realizar empreendimentos imobiliários.",
      "Realizamos todo o levantamento topográfico da área, elaboramos o projeto de desmembramento conforme as normas municipais, acompanhamos a aprovação na Prefeitura e realizamos o registro no cartório competente. Nossa equipe cuida de toda a documentação necessária, incluindo certidões, plantas e memoriais descritivos.",
      "O processo garante total segurança jurídica, permitindo que cada lote seja negociado de forma independente. Trabalhamos em conformidade com o Plano Diretor Municipal e legislação urbanística vigente, assegurando a valorização do seu patrimônio."
    ]
  },
  {
    icon: Merge,
    title: "Unificação de Lotes",
    summary: "Transforme terrenos contíguos em um único lote unificado",
    details: [
      "A unificação de lotes é o procedimento que permite juntar dois ou mais terrenos contíguos em uma única matrícula. Ideal para quem possui lotes vizinhos e deseja construir um empreendimento maior ou simplesmente facilitar a gestão patrimonial.",
      "Nossa equipe técnica realiza o levantamento topográfico dos lotes, verifica a viabilidade da unificação junto aos órgãos competentes, elabora o projeto e acompanha todo o trâmite legal até o registro da nova matrícula unificada no Cartório de Registro de Imóveis.",
      "Este serviço traz benefícios como maior facilidade na gestão do patrimônio, possibilidade de construções maiores e redução de custos com taxas e impostos. Todo o processo é conduzido com rigor técnico e jurídico, garantindo a regularidade e segurança da operação."
    ]
  },
  {
    icon: Ruler,
    title: "Retificação de Área",
    summary: "Corrija divergências entre área registrada e real",
    details: [
      "A retificação de área é o processo que corrige divergências entre a área registrada na matrícula do imóvel e a área real medida em campo. Essas diferenças são comuns em imóveis antigos e podem gerar problemas em transações imobiliárias, financiamentos e até questões tributárias.",
      "Através de levantamento topográfico georreferenciado, identificamos com precisão a área real do terreno e elaboramos toda a documentação técnica necessária para a retificação junto ao Cartório de Registro de Imóveis. Nossa equipe acompanha todo o processo administrativo e, se necessário, judicial.",
      "A regularização da área do imóvel é fundamental para dar segurança jurídica às transações, evitar problemas futuros com vizinhos e garantir a correta base de cálculo de impostos. Realizamos o serviço com total conformidade à legislação vigente e normas técnicas da profissão."
    ]
  },
  {
    icon: FileCheck,
    title: "Usucapião (Parceria Jurídica)",
    summary: "Transforme posse em propriedade legalmente reconhecida",
    details: [
      "A usucapião é o instituto jurídico que permite a aquisição da propriedade de um imóvel através da posse contínua e pacífica durante determinado período de tempo. É a solução legal para quem ocupa um terreno há anos mas não possui a escritura.",
      "Trabalhamos em parceria com escritórios jurídicos especializados para viabilizar todo o processo de usucapião. Nossa responsabilidade técnica inclui o levantamento topográfico georreferenciado da área, elaboração de plantas, memoriais descritivos e toda a documentação técnica necessária para instruir o processo judicial ou extrajudicial.",
      "Este serviço transforma a situação de fato em direito reconhecido, permitindo que o possuidor obtenha a matrícula do imóvel em seu nome. Atuamos em diferentes modalidades de usucapião (urbana, rural, extraordinária, ordinária), sempre com o suporte jurídico adequado e rigor técnico nas medições e documentos."
    ]
  },
  {
    icon: MapPin,
    title: "Levantamento Topográfico Planialtimétrico",
    summary: "Medição precisa de limites, área e relevo do terreno",
    details: [
      "O levantamento topográfico planialtimétrico é a base de qualquer projeto de regularização, construção ou planejamento de uso do solo. Através de equipamentos de alta precisão (estação total, GPS geodésico), realizamos a medição detalhada dos limites, área, curvas de nível e características do terreno.",
      "Este serviço fornece plantas técnicas completas com coordenadas georreferenciadas, memorial descritivo detalhado e todas as informações necessárias para projetos arquitetônicos, licenciamentos ambientais, processos de regularização e documentação cartorial. Utilizamos tecnologia de ponta para garantir precisão milimétrica nas medições.",
      "O levantamento topográfico é essencial para evitar invasões de área, identificar problemas de divisas com vizinhos, planejar obras de terraplanagem e drenagem, além de ser documento obrigatório em diversos processos de regularização fundiária e urbana."
    ]
  },
  {
    icon: Building,
    title: "Averbação de Construção",
    summary: "Registre oficialmente sua edificação na matrícula",
    details: [
      "A averbação de construção é o processo que registra oficialmente na matrícula do imóvel as edificações realizadas no terreno. Essencial para regularizar construções, obter financiamentos, realizar vendas e estar em conformidade com a legislação municipal.",
      "Elaboramos toda a documentação técnica necessária, incluindo projeto arquitetônico as built (como construído), levantamento da área construída, ART/RRT dos responsáveis técnicos e memoriais. Providenciamos a aprovação junto à Prefeitura (quando necessário) e realizamos o registro no Cartório de Imóveis.",
      "Com a construção devidamente averbada, o imóvel se valoriza, fica regular perante a Prefeitura e Receita Federal, além de permitir transações imobiliárias sem entraves. Cuidamos de todo o processo burocrático, tornando simples o que geralmente é complexo para o proprietário."
    ]
  },
  {
    icon: FileText,
    title: "CND de Obra (Receita Federal)",
    summary: "Certidão negativa de débitos para regularização",
    details: [
      "A Certidão Negativa de Débitos (CND) de Obra é um documento emitido pela Receita Federal que comprova a quitação de todas as obrigações tributárias relacionadas à construção civil. É documento obrigatório para averbar construções e fundamental para a regularização de imóveis.",
      "Nossa equipe especializada cuida de todo o processo de obtenção da CND, incluindo o preenchimento correto das declarações, cálculo de tributos devidos, recolhimento de guias e acompanhamento do processo junto à Receita Federal. Evitamos erros que podem gerar multas e atrasos.",
      "A CND é requisito essencial para registrar construções no cartório de imóveis e comprova a regularidade fiscal da obra. Trabalhamos com agilidade e conhecimento técnico para garantir que você obtenha este documento sem complicações, permitindo finalizar o processo de regularização do seu imóvel."
    ]
  },
  {
    icon: Building2,
    title: "Instituição de Condomínio e Incorporação",
    summary: "Divida edificações em unidades autônomas legalmente",
    details: [
      "A instituição de condomínio e incorporação é o processo que transforma uma edificação única em múltiplas unidades autônomas, cada uma com matrícula própria. Fundamental para edifícios residenciais, comerciais ou de uso misto, permitindo a venda individual de apartamentos, salas ou lojas.",
      "Elaboramos toda a documentação técnica exigida por lei, incluindo memorial de incorporação, convenção de condomínio, especificação das unidades autônomas, cálculo de frações ideais, plantas e projetos. Acompanhamos o registro no Cartório de Imóveis e na Prefeitura, garantindo total conformidade legal.",
      "Este serviço viabiliza economicamente empreendimentos imobiliários, permitindo a comercialização de unidades ainda na planta ou após a construção. Nossa experiência garante que todo o processo seja conduzido com segurança jurídica, atendendo rigorosamente à legislação e às normas técnicas da engenharia e arquitetura."
    ]
  }
];
