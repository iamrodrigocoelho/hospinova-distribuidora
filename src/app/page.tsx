import Link from "next/link";
import {
  Shield,
  MapPin,
  Zap,
  Headphones,
  Activity,
  Warehouse,
  Stethoscope,
  Settings,
  Cpu,
  ArrowRight,
  Building2,
  Heart,
  Hospital,
  ChevronRight,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import { articles } from "@/data/articles";

const diferenciais = [
  {
    icon: Shield,
    title: "Segurança",
    desc: "Processos rigorosos de controle de qualidade e conformidade com todas as exigências da Anvisa e legislação sanitária vigente.",
  },
  {
    icon: MapPin,
    title: "Rastreabilidade",
    desc: "Monitoramento em tempo real de cada medicamento, da origem ao destino final, com tecnologia integrada ao SNGPC.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    desc: "Logística eficiente e cadeia de distribuição otimizada para garantir entregas pontuais em todo o território nacional.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    desc: "Equipe de farmacêuticos e consultores dedicados ao atendimento das necessidades específicas de cada instituição.",
  },
];

const indicadores = [
  { valor: "15+", label: "anos de atuação" },
  { valor: "25+", label: "estados atendidos" },
  { valor: "200+", label: "laboratórios parceiros" },
  { valor: "1.000+", label: "instituições atendidas" },
];

const segmentos = [
  {
    icon: Building2,
    title: "Órgãos Públicos",
    desc: "Atendimento especializado para secretarias estaduais e municipais de saúde, com expertise em processos licitatórios e conformidade legal.",
  },
  {
    icon: Heart,
    title: "Operadoras e Planos",
    desc: "Soluções customizadas para operadoras de planos de saúde, com foco em eficiência de custos e gestão de benefícios farmacêuticos.",
  },
  {
    icon: Hospital,
    title: "Hospitais e Clínicas",
    desc: "Parceria estratégica com instituições hospitalares privadas e filantrópicas, garantindo abastecimento contínuo e suporte farmacêutico.",
  },
];

const servicos = [
  {
    icon: Activity,
    title: "Rastreabilidade e Monitoramento",
    desc: "Tecnologia de ponta para rastreamento completo da cadeia de medicamentos.",
  },
  {
    icon: Warehouse,
    title: "Armazenagem Inteligente",
    desc: "Infraestrutura com controle rigoroso de temperatura e umidade para cada categoria de produto.",
  },
  {
    icon: Stethoscope,
    title: "Suporte Farmacêutico",
    desc: "Equipe técnica especializada para orientação e suporte ao cliente.",
  },
  {
    icon: Settings,
    title: "Gestão Operacional",
    desc: "Acompanhamento de indicadores e relatórios gerenciais para tomada de decisão.",
  },
  {
    icon: Cpu,
    title: "Soluções Tecnológicas",
    desc: "Integração de sistemas e plataformas digitais para otimizar processos.",
  },
];

const parceiros = [
  "EMS",
  "Eurofarma",
  "Medley",
  "Aché",
  "Hypera",
  "Sandoz",
  "Neo Química",
  "Teuto",
  "Hipolabor",
  "Bionovis",
  "Blau",
  "Fresenius Kabi",
];

export default function HomePage() {
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white min-h-[420px] md:min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden"
        aria-label="Seção principal"
      >
        {/* Banner de fundo */}
        <div className="absolute inset-0">
          <picture className="block w-full h-full">
            <source media="(max-width: 767px)" srcSet="/images/hero-banner-mobile.webp" />
            <img
              src="/images/hero-banner.webp"
              alt=""
              aria-hidden="true"
              className="block w-full h-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-[#0A3D62]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Distribuição Farmacêutica Especializada
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Medicamentos de alto custo com segurança e agilidade.
            </h1>
            {/* <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              A Hospinova atua em todo o Brasil garantindo segurança, integridade
              e agilidade no acesso a medicamentos de alto custo.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4">
             {/*  <CTAButton href="/contato" variant="white">
                Solicitar Atendimento Comercial
              </CTAButton> */}
              <Link
                href="/medicamentos"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm md:text-base border-2 border-white text-white hover:bg-white hover:text-[#0A3D62] transition-all duration-200"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white" aria-labelledby="diferenciais-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Por que escolher a Hospinova?"
            subtitle="Nossa atuação é orientada por quatro pilares que garantem excelência em cada etapa da cadeia de distribuição farmacêutica."
            centered
            tag="Nossos Diferenciais"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#22A5D9] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A3D62]/10 group-hover:bg-[#0A3D62] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-[#0A3D62] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0A3D62] mb-2">{title}</h3>
                <p className="text-sm text-[#1A2B3C]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicadores */}
      <section
        className="py-16 bg-gradient-to-r from-[#0A3D62] to-[#1B6CA8]"
        aria-label="Indicadores da empresa"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {indicadores.map(({ valor, label }) => (
              <div key={label} className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold text-[#22A5D9]">{valor}</p>
                <p className="text-blue-200 mt-2 text-sm md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos Atendidos */}
      <section className="py-20 bg-[#F8FAFC]" aria-labelledby="segmentos-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Segmentos Atendidos"
            subtitle="Desenvolvemos soluções sob medida para cada tipo de instituição de saúde, respeitando suas particularidades regulatórias e operacionais."
            centered
            tag="Quem Atendemos"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segmentos.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 hover:border-[#22A5D9] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0A3D62] flex items-center justify-center mb-6">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-3">{title}</h3>
                <p className="text-[#1A2B3C]/70 leading-relaxed">{desc}</p>
                <Link
                  href="/como-atuamos"
                  className="inline-flex items-center gap-1 mt-4 text-[#1B6CA8] font-semibold text-sm hover:text-[#0A3D62] transition-colors"
                >
                  Saiba mais <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo em Destaque */}
      <section className="py-20 bg-white" aria-labelledby="catalogo-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] rounded-3xl p-10 md:p-16 text-white text-center">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Catálogo de Produtos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mais de 10.000 itens disponíveis
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa ampla carteira de medicamentos, incluindo ético, genérico,
              similar, biológico e importado. Trabalhamos com os principais laboratórios
              do Brasil e do mundo.
            </p>
            <CTAButton href="/medicamentos" variant="white">
              Explorar Catálogo Completo <ArrowRight size={18} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-[#F8FAFC]" aria-labelledby="servicos-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Além da distribuição, a Hospinova oferece um ecossistema completo de serviços para otimizar a gestão farmacêutica da sua instituição."
            centered
            tag="Serviços"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-[#22A5D9] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#22A5D9]/10 group-hover:bg-[#22A5D9] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-[#22A5D9] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-[#0A3D62] mb-2">{title}</h3>
                <p className="text-sm text-[#1A2B3C]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
            <div className="bg-[#0A3D62] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  Precisa de uma solução personalizada?
                </h3>
                <p className="text-sm text-blue-200 leading-relaxed">
                  Nossa equipe pode desenvolver um modelo de atendimento específico para
                  sua instituição.
                </p>
              </div>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-1 mt-4 text-[#22A5D9] font-semibold text-sm hover:text-white transition-colors"
              >
                Ver todos os serviços <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20 bg-white" aria-labelledby="cobertura-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Cobertura Nacional com Capilaridade Regional"
                subtitle="A Hospinova opera por meio de uma rede logística integrada que combina centros de distribuição estratégicos com parceiros certificados em todo o Brasil."
                tag="Cobertura"
              />
              <ul className="space-y-4">
                {[
                  "Centros de distribuição em 5 regiões do país",
                  "Cobertura em mais de 25 estados e o Distrito Federal",
                  "Entrega em capitais em até 24 horas",
                  "Atendimento ao interior com rastreabilidade completa",
                  "Transporte com controle de temperatura e monitoramento GPS",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22A5D9] mt-2 flex-shrink-0" />
                    <span className="text-[#1A2B3C]/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href="/estrutura" variant="primary">
                  Conhecer Nossa Estrutura
                </CTAButton>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Presença em números</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "5", label: "Centros de Distribuição" },
                  { val: "25+", label: "Estados Atendidos" },
                  { val: "24h", label: "Entrega em Capitais" },
                  { val: "99%", label: "Índice de Pontualidade" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center p-4 bg-white/10 rounded-xl">
                    <p className="text-3xl font-bold text-[#22A5D9]">{val}</p>
                    <p className="text-blue-200 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-16 bg-[#F8FAFC]" aria-labelledby="parceiros-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Laboratórios Parceiros"
            subtitle="Trabalhamos com os principais laboratórios nacionais e multinacionais para oferecer a mais ampla carteira de produtos do mercado."
            centered
            tag="Parceiros"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {parceiros.map((lab) => (
              <div
                key={lab}
                className="bg-white rounded-xl p-4 flex items-center justify-center text-center border border-gray-100 hover:border-[#22A5D9] hover:shadow-sm transition-all duration-300"
              >
                <span className="text-sm font-semibold text-[#0A3D62]">{lab}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdos Recentes */}
      <section className="py-20 bg-white" aria-labelledby="conteudos-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle
              title="Conteúdos Recentes"
              subtitle="Acompanhe as últimas novidades do setor farmacêutico e dicas para gestores de saúde."
              tag="Conteúdos"
            />
            <Link
              href="/conteudos"
              className="flex-shrink-0 inline-flex items-center gap-1 text-[#1B6CA8] font-semibold hover:text-[#0A3D62] transition-colors"
            >
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300"
              >
                <div className="h-3 bg-gradient-to-r from-[#0A3D62] to-[#22A5D9]" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#22A5D9] bg-[#22A5D9]/10 px-2 py-1 rounded">
                      {article.categoria}
                    </span>
                    <span className="text-xs text-gray-400">{article.tempoLeitura} de leitura</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A3D62] mb-3 leading-snug line-clamp-2">
                    {article.titulo}
                  </h3>
                  <p className="text-sm text-[#1A2B3C]/70 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.data}</span>
                    <Link
                      href="/conteudos"
                      className="text-[#1B6CA8] font-semibold text-sm hover:text-[#0A3D62] transition-colors inline-flex items-center gap-1"
                    >
                      Ler mais <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-20 bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8]"
        aria-labelledby="cta-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para otimizar sua cadeia de suprimentos?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato com nossa equipe comercial e descubra como a Hospinova pode
            transformar a gestão farmacêutica da sua instituição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contato" variant="white">
              Solicitar Atendimento Comercial <ArrowRight size={18} />
            </CTAButton>
            <CTAButton href="/medicamentos" variant="secondary">
              Explorar Catálogo
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
