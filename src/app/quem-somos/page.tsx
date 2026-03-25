import type { Metadata } from "next";
import { Target, Eye, Heart, ShieldCheck, Award, Users } from "lucide-react";
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

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-20 md:py-28">
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
              <div className="space-y-4 text-[#1A2B3C]/80 leading-relaxed">
                <p>
                  A Hospinova é uma distribuidora farmacêutica de capital nacional,
                  fundada com a missão de transformar a cadeia de abastecimento de
                  medicamentos para o setor de saúde institucional. Desde a nossa
                  fundação, atuamos com foco exclusivo no segmento B2B, atendendo
                  hospitais, clínicas, operadoras de saúde, secretarias estaduais e
                  municipais de saúde e órgãos governamentais.
                </p>
                <p>
                  Nossa operação está fundamentada em três pilares inegociáveis:
                  conformidade regulatória, tecnologia de rastreabilidade e suporte
                  farmacêutico especializado. Esses pilares nos permitem oferecer
                  muito mais do que a simples entrega de medicamentos — somos parceiros
                  estratégicos dos nossos clientes na gestão farmacêutica.
                </p>
                <p>
                  Com presença em mais de 25 estados brasileiros e uma carteira de mais
                  de 200 laboratórios parceiros, a Hospinova é referência no mercado
                  de distribuição farmacêutica institucional, reconhecida pela
                  confiabilidade, agilidade e pelo compromisso com a cadeia de cuidado
                  ao paciente.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2009", label: "Ano de Fundação" },
                { val: "15+", label: "Anos de Mercado" },
                { val: "500+", label: "Colaboradores" },
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

      {/* História */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossa Trajetória"
            subtitle="Uma história de crescimento, superação e compromisso com a saúde brasileira."
            centered
            tag="História"
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#22A5D9]/30 md:-translate-x-1/2" />
              {[
                {
                  ano: "2009",
                  titulo: "Fundação",
                  desc: "A Hospinova é fundada em São Paulo com foco exclusivo na distribuição de medicamentos para o setor hospitalar privado.",
                },
                {
                  ano: "2012",
                  titulo: "Expansão Regional",
                  desc: "Inauguração do segundo centro de distribuição, no Rio de Janeiro, ampliando a cobertura para toda a Região Sudeste.",
                },
                {
                  ano: "2015",
                  titulo: "Entrada no Setor Público",
                  desc: "Início das operações com secretarias estaduais de saúde, desenvolvendo expertise em processos licitatórios e compras governamentais.",
                },
                {
                  ano: "2018",
                  titulo: "Tecnologia e Rastreabilidade",
                  desc: "Implementação do sistema proprietário de rastreabilidade integrado ao SNGPC, tornando-nos referência em compliance farmacêutico.",
                },
                {
                  ano: "2021",
                  titulo: "Cobertura Nacional",
                  desc: "Atingimos presença em 25 estados brasileiros, com novos centros de distribuição no Nordeste, Centro-Oeste e Sul do país.",
                },
                {
                  ano: "2024",
                  titulo: "Inovação e Crescimento",
                  desc: "Lançamento da plataforma digital de gestão para clientes e superação da marca de 1.000 instituições atendidas em todo o Brasil.",
                },
              ].map((item, idx) => (
                <div
                  key={item.ano}
                  className={`relative flex items-start gap-6 mb-10 md:w-1/2 ${
                    idx % 2 === 0 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"
                  } pl-12 md:pl-0`}
                >
                  <div className="absolute left-0 md:left-auto md:right-auto w-8 h-8 rounded-full bg-[#0A3D62] flex items-center justify-center text-xs font-bold text-white flex-shrink-0 md:hidden">
                    {idx + 1}
                  </div>
                  <div
                    className={`hidden md:flex absolute w-8 h-8 rounded-full bg-[#0A3D62] items-center justify-center text-xs font-bold text-white flex-shrink-0 top-1 ${
                      idx % 2 === 0 ? "-left-4" : "-right-4"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <span className="text-xs font-bold text-[#22A5D9] uppercase tracking-wider">
                      {item.ano}
                    </span>
                    <h3 className="text-base font-bold text-[#0A3D62] mt-1 mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-[#1A2B3C]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-white">
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
                Distribuir medicamentos com segurança, rastreabilidade e eficiência,
                contribuindo para a qualidade da assistência farmacêutica e o cuidado
                com a saúde da população brasileira.
              </p>
            </div>
            <div className="bg-[#1B6CA8] rounded-2xl p-8 text-white text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser a distribuidora farmacêutica mais confiável e inovadora do Brasil,
                reconhecida pela excelência no atendimento ao setor institucional de
                saúde público e privado.
              </p>
            </div>
            <div className="bg-[#22A5D9] rounded-2xl p-8 text-white text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Propósito</h3>
              <p className="text-blue-100 leading-relaxed">
                Acreditamos que o acesso a medicamentos de qualidade é um direito
                fundamental. Existimos para garantir que este acesso seja possível em
                cada canto do Brasil.
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

      {/* Governança e Compliance */}
      <section className="py-20 bg-[#F8FAFC]">
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
