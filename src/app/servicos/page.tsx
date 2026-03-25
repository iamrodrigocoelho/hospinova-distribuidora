import type { Metadata } from "next";
import {
  Activity,
  Warehouse,
  Stethoscope,
  Settings,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da Hospinova: rastreabilidade e monitoramento, armazenagem inteligente, suporte farmacêutico especializado, gestão operacional e soluções tecnológicas.",
};

const servicos = [
  {
    icon: Activity,
    titulo: "Rastreabilidade e Monitoramento",
    descricao:
      "Oferecemos rastreabilidade completa e em tempo real de todos os medicamentos distribuídos, desde a saída do laboratório até a entrega na unidade de saúde. Nossa plataforma proprietária integra-se ao SNGPC e ao sistema de rastreabilidade da Anvisa, garantindo conformidade regulatória e visibilidade total da cadeia.",
    beneficios: [
      "Rastreamento unitário por DataMatrix e GTIN",
      "Integração com o sistema de rastreabilidade da Anvisa",
      "Monitoramento de temperatura em tempo real (IoT)",
      "Alertas automáticos de desvio de condições de armazenagem",
      "Dashboard online para gestores com histórico completo",
      "Relatórios de conformidade para auditorias",
      "Gestão de recalls com identificação imediata dos lotes afetados",
    ],
  },
  {
    icon: Warehouse,
    titulo: "Armazenagem Inteligente",
    descricao:
      "Nossa infraestrutura de armazenagem foi projetada para atender os mais rigorosos padrões regulatórios. Com áreas especializadas para cada categoria de produto, combinadas com tecnologia de monitoramento contínuo, garantimos a integridade dos medicamentos durante todo o período de armazenagem.",
    beneficios: [
      "Áreas com controle de temperatura e umidade para cada categoria",
      "Câmaras refrigeradas (2°C a 8°C) para produtos termolábeis",
      "Câmaras frias (-20°C) para produtos ultra-refrigerados",
      "Área segregada para produtos controlados (psicotrópicos)",
      "Monitoramento contínuo 24/7 com sensores IoT",
      "Sistema PEPS (Primeiro a Expirar, Primeiro a Sair)",
      "Gestão eletrônica de inventário em tempo real",
    ],
  },
  {
    icon: Stethoscope,
    titulo: "Suporte Farmacêutico Especializado",
    descricao:
      "Nossa equipe de farmacêuticos especializados atua como parceira estratégica das farmácias das instituições clientes. Oferecemos orientação técnica, capacitação de equipes e suporte para a tomada de decisão em gestão farmacêutica, contribuindo para a segurança do paciente.",
    beneficios: [
      "Consultoria farmacêutica para gestão de estoque",
      "Suporte técnico para seleção e padronização de medicamentos",
      "Orientação sobre interações medicamentosas e substituições",
      "Capacitação de equipes em boas práticas farmacêuticas",
      "Elaboração de protocolos de dispensação",
      "Suporte para acreditação hospitalar (ONA, JCI)",
      "Atendimento de urgência por farmacêutico plantonista",
    ],
  },
  {
    icon: Settings,
    titulo: "Gestão e Acompanhamento Operacional",
    descricao:
      "Vá além da simples compra de medicamentos. Nossa gestão operacional oferece visibilidade completa dos indicadores de abastecimento da sua instituição, com relatórios gerenciais, análise de consumo e reuniões periódicas para alinhamento estratégico.",
    beneficios: [
      "Análise de consumo histórico e projeção de demanda",
      "Indicadores de desempenho (KPIs) personalizados",
      "Reuniões mensais de avaliação de nível de serviço",
      "Gestão de devoluções e produtos em quarentena",
      "Relatórios de custo por unidade consumidora",
      "Controle de validades e alertas de produtos vencendo",
      "Suporte para elaboração de budget farmacêutico",
    ],
  },
  {
    icon: Cpu,
    titulo: "Soluções Tecnológicas Integradas",
    descricao:
      "A tecnologia é um dos principais diferenciais da Hospinova. Desenvolvemos e mantemos sistemas que se integram aos ERPs hospitalares, facilitam pedidos, automatizam processos e oferecem inteligência de dados para a tomada de decisão na gestão farmacêutica.",
    beneficios: [
      "Portal do cliente com pedidos online e consulta de status",
      "Integração via API com ERPs hospitalares (TASY, MV, etc.)",
      "App móvel para acompanhamento de entregas",
      "Automação de pedidos baseada em ponto de ressuprimento",
      "Business intelligence para análise de dados farmacêuticos",
      "EDI (Troca Eletrônica de Dados) para processos de compra",
      "Notificações automatizadas de entrega e rastreamento",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Serviços
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Um ecossistema completo de serviços farmacêuticos
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              A Hospinova vai muito além da distribuição de medicamentos. Oferecemos um
              portfólio de serviços integrados para otimizar a gestão farmacêutica da
              sua instituição de ponta a ponta.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      {servicos.map((servico, idx) => (
        <section
          key={servico.titulo}
          className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
          id={`servico-${idx + 1}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3D62] flex items-center justify-center">
                    <servico.icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#22A5D9] uppercase tracking-wider">
                    Serviço {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62] mb-4">
                  {servico.titulo}
                </h2>
                <p className="text-[#1A2B3C]/80 leading-relaxed mb-6">
                  {servico.descricao}
                </p>
                <CTAButton href="/contato" variant="primary">
                  Solicitar Informações
                </CTAButton>
              </div>

              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="bg-[#0A3D62] rounded-2xl p-8 text-white">
                  <h3 className="text-lg font-bold mb-5">Benefícios incluídos</h3>
                  <ul className="space-y-3">
                    {servico.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-[#22A5D9] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-blue-100">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A3D62] to-[#1B6CA8] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar sua gestão farmacêutica?
          </h2>
          <p className="text-blue-100 mb-8">
            Entre em contato com nossa equipe e descubra qual combinação de serviços é
            ideal para a realidade da sua instituição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato" variant="white">
              Solicitar Atendimento Comercial
            </CTAButton>
            <CTAButton href="/como-atuamos" variant="secondary">
              Como Atuamos
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
