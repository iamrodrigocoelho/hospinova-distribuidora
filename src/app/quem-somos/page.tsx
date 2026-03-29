import type { Metadata } from "next";
import { Target, Eye, Heart, ShieldCheck, Award, Users, MapPin, Warehouse, Truck } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Hospinova, distribuidora farmacêutica especializada em soluções para instituições de saúde há mais de 15 anos. Nossa história, missão, visão e valores.",
};

const valores = [
  {
    icon: ShieldCheck,
    titulo: "Integridade",
    desc: "Agimos com ética, transparência e responsabilidade em todas as relações, respeitando a legislação e os mais altos padrões de conduta.",
  },
  {
    icon: Heart,
    titulo: "Compromisso com a Vida",
    desc: "Colocamos a saúde dos pacientes no centro de tudo que fazemos. Cada medicamento distribuído representa nossa responsabilidade com vidas humanas.",
  },
  {
    icon: Award,
    titulo: "Excelência Operacional",
    desc: "Buscamos a melhoria contínua em processos, tecnologia e pessoas, superando as expectativas dos clientes e parceiros.",
  },
  {
    icon: Users,
    titulo: "Colaboração",
    desc: "Acreditamos que os melhores resultados emergem de parcerias sólidas, baseadas na confiança e no respeito mútuo.",
  },
];

const centros = [
  {
    cidade: "Rio de Janeiro – RJ",
    regiao: "Região Sudeste",
    area: "12.000 m²",
    desc: "Centro de distribuição principal, com estrutura completa para produtos que necessitam de controle de temperatura, câmaras frias e área segregada para produtos controlados.",
  },
  {
    cidade: "Espírito Santo – ES",
    regiao: "Região Sudeste",
    area: "6.500 m²",
    desc: "Unidade estratégica para atendimento ao Espírito Santo e Bahia, com capacidade para toda a linha de produtos.",
  },
  {
    cidade: "Minas Gerais – MG",
    regiao: "Região Sudeste",
    area: "4.800 m²",
    desc: "Centro logístico que viabiliza a distribuição rápida em todo o Nordeste brasileiro, com adaptações especiais para o clima da região.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Quem Somos
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Uma empresa comprometida com a saúde do Brasil
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Há mais de 15 anos, a Hospinova conecta laboratórios farmacêuticos a
              instituições de saúde em todo o território nacional, com segurança,
              rastreabilidade e excelência operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Quem é a Hospinova"
                tag="Apresentação"
              />
              <div className="space-y-4 text-[#1A2B3C]/80 leading-relaxed text-justify">
                <p>
                  Fundada em 2014, a Hospinova, empresa do Grupo Venancio, consolidou-se 
                  como uma distribuidora nacional de medicamentos de alto custo, atuando 
                  com o propósito de garantir que o cuidado chegue a quem mais precisa.
                </p>
                <p>
                  Com presença em todo o território brasileiro, atendemos hospitais, clínicas, 
                  operadoras de saúde e órgãos públicos, oferecendo soluções inovadoras, 
                  ágeis e seguras em toda a cadeia de distribuição farmacêutica.
                </p>
                <p>
                  Mais do que distribuir medicamentos, participamos ativamente da continuidade 
                  do cuidado e do tratamento de milhares de pacientes, assegurando excelência em 
                  armazenamento, transporte e entrega, sempre com rigorosos padrões de qualidade 
                  e segurança.
                </p>
                <p>
                  Por meio de uma equipe técnica especializada, a Hospinova mantém o compromisso 
                  permanente com o acesso à saúde, a integridade dos medicamentos e a excelência 
                  no atendimento, de forma personalizada e confiável.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2014", label: "Ano de Fundação" },
                { val: "12+", label: "Anos de Mercado" },
                { val: "100+", label: "Colaboradores" },
                { val: "R$ 1B+", label: "em produtos distribuídos/ano" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="bg-[#F8FAFC] rounded-2xl p-6 text-center border border-gray-100"
                >
                  <p className="text-3xl font-bold text-[#0A3D62]">{val}</p>
                  <p className="text-sm text-[#1A2B3C]/60 mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Missão, Visão e Valores"
            subtitle="Os princípios que guiam nossas decisões e definem quem somos."
            centered
            tag="Propósito"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#0A3D62] rounded-2xl p-8 text-white text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-blue-100 leading-relaxed">
                Garantir o acesso seguro e ágil a medicamentos de alto custo, com 
                excelência operacional, qualidade e atendimento personalizado em 
                toda a cadeia de distribuição farmacêutica.
              </p>
            </div>
            <div className="bg-[#1B6CA8] rounded-2xl p-8 text-white text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser referência nacional na distribuição de medicamentos de alto custo, 
                reconhecida pela confiança, eficiência, ética e compromisso com a saúde.
              </p>
            </div>
            <div className="bg-[#22A5D9] rounded-2xl p-8 text-white text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Propósito</h3>
              <p className="text-blue-100 leading-relaxed">
                Contribuir para a continuidade do cuidado em saúde, garantindo acesso seguro, 
                ágil e confiável a medicamentos de alto custo em todo o Brasil.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#0A3D62] text-center mb-8">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map(({ icon: Icon, titulo, desc }) => (
              <div
                key={titulo}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A3D62]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#0A3D62]" />
                </div>
                <h4 className="text-base font-bold text-[#0A3D62] mb-2">{titulo}</h4>
                <p className="text-sm text-[#1A2B3C]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centros de Distribuição */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Centros de Distribuição"
            subtitle="Três unidades estrategicamente posicionadas nas principais regiões do Brasil garantem cobertura nacional e entregas ágeis."
            centered
            tag="Logística"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centros.map((centro) => (
              <div
                key={centro.cidade}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0A3D62] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3D62]">{centro.cidade}</h3>
                    <span className="text-xs text-[#22A5D9] font-semibold">{centro.regiao}</span>
                  </div>
                </div>
                <p className="text-sm text-[#1A2B3C]/70 leading-relaxed mb-3">{centro.desc}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Warehouse size={14} className="text-[#22A5D9]" />
                  <span className="text-xs font-semibold text-[#0A3D62]">Área: {centro.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura Geográfica Nacional */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Cobertura Geográfica Nacional" tag="Abrangência" />
              <p className="text-[#1A2B3C]/80 leading-relaxed mb-6">
                A Hospinova atende todos os 26 estados brasileiros e o Distrito Federal,
                por meio de uma combinação de frota própria e parceiros logísticos
                certificados. Nossa malha de distribuição foi desenhada para garantir
                velocidade e segurança, independentemente da localização da instituição.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "26 estados", label: "+ Distrito Federal" },
                  { val: "5.000+", label: "municípios atendidos" },
                  { val: "24h", label: "prazo em capitais" },
                  { val: "72h", label: "prazo no interior" },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <p className="text-xl font-bold text-[#0A3D62]">{val}</p>
                    <p className="text-xs text-[#1A2B3C]/60 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A3D62] rounded-3xl p-10 text-white">
              <h3 className="text-xl font-bold mb-6">Nossa Malha Logística</h3>
              <ul className="space-y-4">
                {[
                  "Frota própria refrigerada para medicamentos termolábeis",
                  "Parceiros logísticos certificados pela Anvisa",
                  "Monitoramento GPS em tempo real de todos os veículos",
                  "Roteirização inteligente para otimização de entregas",
                  "Gestão de última milha em regiões de difícil acesso",
                  "Plataforma digital de rastreamento para clientes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Truck size={16} className="text-[#22A5D9] mt-1 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Governança e Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Governança e Compliance"
                tag="Conformidade"
              />
              <div className="space-y-4 text-[#1A2B3C]/80 leading-relaxed">
                <p>
                  A Hospinova opera sob rígidos padrões de governança corporativa e
                  conformidade regulatória. Todas as nossas atividades são conduzidas em
                  estrita observância à legislação sanitária brasileira, às normas da
                  Anvisa e às boas práticas de distribuição e armazenagem.
                </p>
                <p>
                  Nosso Programa de Compliance abrange políticas de anticorrupção,
                  código de conduta, canal de ética e treinamentos regulares para todos
                  os colaboradores. Acreditamos que a integridade é o alicerce de
                  relações comerciais duradouras.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Licença Anvisa",
                  "ISO 9001:2015",
                  "PBPQ-H",
                  "RDC 430/2020",
                  "SNGPC",
                  "Canal de Ética",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-100"
                  >
                    <ShieldCheck size={16} className="text-[#22A5D9] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0A3D62]">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A3D62] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Nosso Compromisso</h3>
              <ul className="space-y-5">
                {[
                  "Conformidade total com a legislação sanitária vigente",
                  "Rastreabilidade 100% dos medicamentos distribuídos",
                  "Armazenagem com monitoramento contínuo de temperatura",
                  "Programa de Gerenciamento de Risco ativo",
                  "Canal de denúncias e código de ética disponíveis 24h",
                  "Auditorias periódicas internas e externas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22A5D9] mt-2 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A3D62] to-[#1B6CA8] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Conheça nossa estrutura e como atuamos
          </h2>
          <p className="text-blue-100 mb-8">
            Descubra como a Hospinova pode ser o parceiro estratégico que sua
            instituição de saúde precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/estrutura" variant="white">
              Nossa Estrutura
            </CTAButton>
            <CTAButton href="/contato" variant="secondary">
              Fale Conosco
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
