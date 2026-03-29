import type { Metadata } from "next";
import {
  Building2,
  Heart,
  Hospital,
  FileText,
  Phone,
  ClipboardList,
  Handshake,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Como Atuamos",
  description:
    "Entenda como a Hospinova atua em cada segmento: órgãos públicos, operadoras de saúde e hospitais e clínicas. Conheça nosso processo comercial.",
};

const segmentos = [
  {
    id: "publico",
    icon: Building2,
    titulo: "Órgãos Públicos",
    subtitulo: "Secretarias Estaduais e Municipais de Saúde",
    desc: "A Hospinova tem experiência consolidada no atendimento ao setor público de saúde, com equipe especializada em processos licitatórios, conformidade com a Lei de Licitações (Lei 14.133/2021) e Registro de Preços.",
    destaques: [
      "Participação em pregões eletrônicos e presenciais",
      "Registro de Preços (SRP) em âmbito estadual e municipal",
      "Atendimento à central de abastecimento farmacêutico",
      "Documentação técnica completa para habilitação em licitações",
      "Entrega fracionada conforme cronograma de distribuição",
      "Nota fiscal eletrônica com remessa direta às unidades de saúde",
      "Suporte técnico farmacêutico para elaboração de termos de referência",
    ],
    cor: "#0A3D62",
  },
  {
    id: "operadoras",
    icon: Heart,
    titulo: "Operadoras e Planos de Saúde",
    subtitulo: "Benefícios Farmacêuticos e Rede Credenciada",
    desc: "Para operadoras de planos de saúde, a Hospinova oferece soluções integradas que combinam eficiência de custos, gestão de benefícios farmacêuticos e suporte à rede credenciada.",
    destaques: [
      "Gerenciamento de benefícios de medicamentos (PBM)",
      "Abastecimento de farmácias conveniadas e próprias",
      "Relatórios de utilização e custo por beneficiário",
      "Controle de duplicidade e interações medicamentosas",
      "Integração eletrônica com sistemas de autorização",
      "Gestão de medicamentos de alto custo e biológicos",
      "Suporte ao programa de doenças crônicas",
    ],
    cor: "#1B6CA8",
  },
  {
    id: "hospitais",
    icon: Hospital,
    titulo: "Hospitais e Clínicas",
    subtitulo: "Instituições Hospitalares Públicas, Privadas e Filantrópicas",
    desc: "O atendimento hospitalar é o coração da operação da Hospinova. Desenvolvemos modelos de abastecimento customizados para cada instituição, garantindo estoque adequado e zero desabastecimento.",
    destaques: [
      "Abastecimento programado com gestão de estoque mínimo",
      "Entrega emergencial 24 horas para situações críticas",
      "Suporte de farmacêutico residente ou plantonista",
      "Implantação de farmácia satélite e dispensação automatizada",
      "Gestão de medicamentos vencendo e controle de recall",
      "Relatórios de consumo para controle de CMV",
      "Kit padronizado para UTI, cirurgia e pronto-socorro",
    ],
    cor: "#22A5D9",
  },
];

const etapasProcesso = [
  {
    icon: Phone,
    titulo: "Contato Inicial",
    desc: "Nossa equipe comercial entra em contato ou você nos aciona via formulário, WhatsApp ou telefone.",
  },
  {
    icon: ClipboardList,
    titulo: "Diagnóstico",
    desc: "Realizamos um levantamento das necessidades específicas da sua instituição, perfil de consumo e desafios atuais.",
  },
  {
    icon: FileText,
    titulo: "Proposta Personalizada",
    desc: "Desenvolvemos uma proposta comercial sob medida, com condições, prazos e serviços alinhados ao seu contexto.",
  },
  {
    icon: Handshake,
    titulo: "Contrato e Onboarding",
    desc: "Após aprovação, realizamos o onboarding completo, integrando sistemas e apresentando sua equipe de atendimento dedicada.",
  },
  {
    icon: BarChart3,
    titulo: "Operação e Monitoramento",
    desc: "Iniciamos o abastecimento com monitoramento contínuo de indicadores e reuniões periódicas de acompanhamento.",
  },
  {
    icon: RefreshCw,
    titulo: "Melhoria Contínua",
    desc: "Revisamos periodicamente os acordos de nível de serviço e buscamos oportunidades de otimização para sua operação.",
  },
];

export default function ComoAtuamosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Como Atuamos
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Soluções específicas para cada perfil de instituição de saúde
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Cada segmento do mercado de saúde tem necessidades únicas. A Hospinova
              desenvolveu modelos de atendimento especializados para órgãos públicos,
              operadoras de planos e instituições hospitalares.
            </p>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      {segmentos.map((seg, idx) => (
        <section
          key={seg.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
          id={seg.id}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: seg.cor }}
                  >
                    <seg.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#22A5D9] uppercase tracking-wider">
                      {seg.subtitulo}
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62] mb-4">
                  {seg.titulo}
                </h2>
                <p className="text-[#1A2B3C]/80 leading-relaxed mb-6">{seg.desc}</p>
                <CTAButton href="/contato" variant="primary">
                  Solicitar Atendimento
                </CTAButton>
              </div>
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{ backgroundColor: seg.cor }}
                >
                  <h3 className="text-lg font-bold mb-5">O que oferecemos</h3>
                  <ul className="space-y-3">
                    {seg.destaques.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22A5D9] mt-2 flex-shrink-0" />
                        <span className="text-sm text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Processo Comercial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nosso Processo Comercial"
            subtitle="Um processo claro e eficiente para iniciar uma parceria de sucesso com a Hospinova."
            centered
            tag="Processo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etapasProcesso.map((etapa, idx) => (
              <div
                key={etapa.titulo}
                className="relative bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-[#0A3D62] flex items-center justify-center">
                      <etapa.icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#22A5D9]">
                        Etapa {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0A3D62] mb-2">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-[#1A2B3C]/70 leading-relaxed">
                      {etapa.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A3D62] to-[#1B6CA8] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-blue-100 mb-8">
            Nossa equipe comercial especializada está pronta para entender as
            necessidades da sua instituição e propor a melhor solução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato" variant="white">
              Solicitar Atendimento Comercial
            </CTAButton>
            <CTAButton href="/medicamentos" variant="secondary">
              Ver Catálogo de Produtos
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
