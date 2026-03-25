export interface Article {
  id: number;
  titulo: string;
  categoria: string;
  data: string;
  excerpt: string;
  slug: string;
  tempoLeitura: string;
}

export const articles: Article[] = [
  {
    id: 1,
    titulo: "SCTIE 2024: Mudanças na política de medicamentos do componente especializado",
    categoria: "Regulatório",
    data: "18 de março de 2026",
    excerpt:
      "O Ministério da Saúde publicou novas diretrizes que impactam diretamente a distribuição do componente especializado da assistência farmacêutica. Entenda o que muda para distribuidores e gestores de saúde pública.",
    slug: "sctie-2024-mudancas-medicamentos-componente-especializado",
    tempoLeitura: "6 min",
  },
  {
    id: 2,
    titulo: "Rastreabilidade de medicamentos: como a SNGPC protege pacientes e o sistema de saúde",
    categoria: "Rastreabilidade",
    data: "10 de março de 2026",
    excerpt:
      "O Sistema Nacional de Gerenciamento de Produtos Controlados evoluiu significativamente nos últimos anos. Saiba como a rastreabilidade eletrônica garante segurança e transparência em toda a cadeia farmacêutica.",
    slug: "rastreabilidade-medicamentos-sngpc-protege-pacientes",
    tempoLeitura: "8 min",
  },
  {
    id: 3,
    titulo: "Boas Práticas de Distribuição e Armazenagem: guia completo para gestores de saúde",
    categoria: "Boas Práticas",
    data: "28 de fevereiro de 2026",
    excerpt:
      "A RDC 430/2020 da Anvisa estabelece padrões rigorosos para a distribuição de medicamentos. Conheça os principais requisitos e como a conformidade com estas normas impacta a qualidade do serviço prestado.",
    slug: "boas-praticas-distribuicao-armazenagem-guia-gestores",
    tempoLeitura: "10 min",
  },
  {
    id: 4,
    titulo: "Licitações hospitalares: estratégias para garantir abastecimento contínuo de medicamentos",
    categoria: "Gestão Hospitalar",
    data: "15 de fevereiro de 2026",
    excerpt:
      "A gestão de compras por licitação exige planejamento estratégico e parceiros confiáveis. Descubra como hospitais públicos e privados podem otimizar seus processos de aquisição para evitar desabastecimento.",
    slug: "licitacoes-hospitalares-estrategias-abastecimento-continuo",
    tempoLeitura: "7 min",
  },
  {
    id: 5,
    titulo: "Cadeia fria de medicamentos: desafios e soluções para distribuição em regiões remotas",
    categoria: "Logística",
    data: "3 de fevereiro de 2026",
    excerpt:
      "Manter a integridade de biológicos, imunobiológicos e medicamentos termolábeis durante o transporte é um dos maiores desafios da logística farmacêutica no Brasil. Veja como superar esses obstáculos.",
    slug: "cadeia-fria-medicamentos-desafios-solucoes-regioes-remotas",
    tempoLeitura: "9 min",
  },
  {
    id: 6,
    titulo: "Incorporação tecnológica na farmácia hospitalar: o papel do distribuidor como parceiro estratégico",
    categoria: "Tecnologia e Inovação",
    data: "20 de janeiro de 2026",
    excerpt:
      "A farmácia hospitalar moderna demanda muito mais do que fornecimento de medicamentos. Entenda como distribuidores especializados podem agregar valor por meio de tecnologia, dados e suporte farmacêutico especializado.",
    slug: "incorporacao-tecnologica-farmacia-hospitalar-distribuidor-parceiro",
    tempoLeitura: "8 min",
  },
];

export const categoriasFiltro = [
  "Todos",
  "Regulatório",
  "Rastreabilidade",
  "Boas Práticas",
  "Gestão Hospitalar",
  "Logística",
  "Tecnologia e Inovação",
];
