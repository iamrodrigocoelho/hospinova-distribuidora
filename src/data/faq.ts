export interface FaqItem {
  id: number;
  pergunta: string;
  resposta: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 1,
    pergunta: "Quais segmentos a Hospinova atende?",
    resposta:
      "A Hospinova atende instituições de saúde públicas e privadas em todo o território nacional, incluindo hospitais, clínicas, operadoras de planos de saúde, secretarias estaduais e municipais de saúde, e órgãos governamentais que realizam compras por meio de licitação. Nossa estrutura foi desenvolvida para atender as particularidades de cada segmento com agilidade e conformidade regulatória.",
  },
  {
    id: 2,
    pergunta: "Como funciona o processo de solicitação de atendimento comercial?",
    resposta:
      "O processo é simples: preencha o formulário de contato nesta página ou entre em contato pelo nosso WhatsApp. Um consultor especializado da Hospinova entrará em contato em até 24 horas úteis para entender suas necessidades, apresentar nossa carteira de produtos e propor a melhor solução para sua instituição. Para licitações, disponibilizamos suporte técnico completo para elaboração de documentação.",
  },
  {
    id: 3,
    pergunta: "A Hospinova opera em quais estados do Brasil?",
    resposta:
      "Atuamos em mais de 25 estados brasileiros, com centros de distribuição estrategicamente posicionados para garantir cobertura nacional. Nossa logística própria e parceiros certificados nos permitem entregar medicamentos com segurança e dentro dos prazos acordados em regiões urbanas, metropolitanas e de difícil acesso no interior do país.",
  },
  {
    id: 4,
    pergunta: "Como é garantida a rastreabilidade dos medicamentos distribuídos?",
    resposta:
      "Utilizamos tecnologia de ponta integrada ao SNGPC (Sistema Nacional de Gerenciamento de Produtos Controlados) e ao sistema de rastreabilidade da Anvisa. Cada medicamento possui registro de movimentação desde a saída do laboratório até a entrega na instituição, com monitoramento em tempo real de temperatura e condições de armazenagem. Todos os dados ficam disponíveis para consulta e auditoria a qualquer momento.",
  },
  {
    id: 5,
    pergunta: "A Hospinova fornece medicamentos controlados e psicotrópicos?",
    resposta:
      "Sim. A Hospinova possui todas as autorizações e licenças exigidas pela Anvisa e demais órgãos reguladores para distribuição de medicamentos sujeitos a controle especial, incluindo psicotrópicos, entorpecentes e substâncias de uso controlado. Todo o processo segue rigorosamente a legislação sanitária vigente, com rastreabilidade completa e documentação adequada.",
  },
  {
    id: 6,
    pergunta: "Quais são os diferenciais da Hospinova em relação a outros distribuidores?",
    resposta:
      "Nossos principais diferenciais são: mais de 15 anos de experiência exclusiva no segmento institucional e hospitalar; suporte farmacêutico especializado dedicado a cada cliente; tecnologia proprietária de rastreabilidade e monitoramento; estrutura de armazenagem com controle rigoroso de temperatura; parceria com mais de 200 laboratórios nacionais e multinacionais; e equipe comercial especializada por segmento, que conhece as particularidades do setor público, das operadoras e do segmento hospitalar privado.",
  },
];
