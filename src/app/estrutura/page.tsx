import type { Metadata } from "next";
import {
  Warehouse,
  MapPin,
  Truck,
  Thermometer,
  Activity,
  ShieldCheck,
  Award,
  Camera,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Estrutura",
  description:
    "Conheça a infraestrutura logística da Hospinova: centros de distribuição, armazenagem com controle de temperatura, rastreabilidade e cobertura nacional.",
};

const centros = [
  {
    cidade: "São Paulo – SP",
    regiao: "Região Sudeste",
    area: "12.000 m²",
    desc: "Centro de distribuição principal, com estrutura completa para produtos que necessitam de controle de temperatura, câmaras frias e área segregada para produtos controlados.",
  },
  {
    cidade: "Rio de Janeiro – RJ",
    regiao: "Região Sudeste",
    area: "6.500 m²",
    desc: "Unidade estratégica para atendimento ao Rio de Janeiro, Espírito Santo e parte de Minas Gerais, com capacidade para toda a linha de produtos.",
  },
  {
    cidade: "Recife – PE",
    regiao: "Região Nordeste",
    area: "4.800 m²",
    desc: "Centro logístico que viabiliza a distribuição rápida em todo o Nordeste brasileiro, com adaptações especiais para o clima da região.",
  },
  {
    cidade: "Goiânia – GO",
    regiao: "Região Centro-Oeste",
    area: "3.200 m²",
    desc: "Unidade responsável pela cobertura do Centro-Oeste e apoio às entregas na Região Norte do país.",
  },
  {
    cidade: "Curitiba – PR",
    regiao: "Região Sul",
    area: "3.800 m²",
    desc: "Centro de distribuição para os três estados do Sul do Brasil, com infraestrutura certificada e equipe especializada.",
  },
];

const certificacoes = [
  { nome: "Autorização de Funcionamento", org: "Anvisa" },
  { nome: "Licença de Funcionamento Especial", org: "VISA Estadual" },
  { nome: "ISO 9001:2015", org: "Gestão da Qualidade" },
  { nome: "RDC 430/2020", org: "Boas Práticas de Distribuição" },
  { nome: "SNGPC Integrado", org: "Sistema Nacional de Controle" },
  { nome: "PBPQ-H", org: "Programa Brasileiro da Produtividade" },
];

export default function EstruturaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Estrutura
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Infraestrutura de ponta para distribuição farmacêutica segura
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Nossa rede de centros de distribuição, combinada com tecnologia avançada
              de rastreabilidade, garante a integridade dos medicamentos em cada etapa
              da cadeia logística.
            </p>
          </div>
        </div>
      </section>

      {/* Centros de Distribuição */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Centros de Distribuição"
            subtitle="Cinco unidades estrategicamente posicionadas nas principais regiões do Brasil garantem cobertura nacional e entregas ágeis."
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
                    <span className="text-xs text-[#22A5D9] font-semibold">
                      {centro.regiao}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#1A2B3C]/70 leading-relaxed mb-3">
                  {centro.desc}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Warehouse size={14} className="text-[#22A5D9]" />
                  <span className="text-xs font-semibold text-[#0A3D62]">
                    Área: {centro.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura Geográfica */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Cobertura Geográfica Nacional"
                tag="Abrangência"
              />
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
                  <div
                    key={label}
                    className="bg-white rounded-xl p-4 border border-gray-100 text-center"
                  >
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

      {/* Armazenagem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Armazenagem com Controle de Temperatura"
            subtitle="Cada categoria de medicamento requer condições específicas de armazenagem. Nossa infraestrutura atende todos os requisitos de temperatura e umidade exigidos."
            centered
            tag="Armazenagem"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Thermometer,
                titulo: "Ambiente Controlado",
                temp: "15°C a 25°C",
                desc: "Medicamentos convencionais, comprimidos, cápsulas e sólidos orais.",
              },
              {
                icon: Thermometer,
                titulo: "Câmara Refrigerada",
                temp: "2°C a 8°C",
                desc: "Insulinas, biológicos, vacinas, colírios e produtos termolábeis.",
              },
              {
                icon: Thermometer,
                titulo: "Câmara Fria",
                temp: "-20°C a -25°C",
                desc: "Hemoderivados, enzimas e produtos de alta sensibilidade térmica.",
              },
              {
                icon: ShieldCheck,
                titulo: "Área Controlada",
                temp: "Acesso restrito",
                desc: "Psicotrópicos, entorpecentes e substâncias de uso controlado.",
              },
            ].map(({ icon: Icon, titulo, temp, desc }) => (
              <div
                key={titulo}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A3D62] flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0A3D62] mb-1">{titulo}</h3>
                <p className="text-sm font-semibold text-[#22A5D9] mb-2">{temp}</p>
                <p className="text-xs text-[#1A2B3C]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rastreabilidade */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] rounded-3xl p-10 text-white order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-6">Como funciona nossa rastreabilidade</h3>
              <ol className="space-y-5">
                {[
                  "Recebimento com conferência de NF eletrônica e integridade físico-química",
                  "Cadastro no sistema integrado com código DataMatrix e GTIN",
                  "Armazenagem com monitoramento contínuo de temperatura (IoT)",
                  "Separação e embalagem com dupla conferência e registro fotográfico",
                  "Expedição com etiqueta de rastreamento e NF eletrônica",
                  "Transporte monitorado com alerta automático de desvio de temperatura",
                  "Confirmação de recebimento e registro no SNGPC quando aplicável",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#22A5D9] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-blue-100 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                title="Rastreabilidade Completa"
                tag="Tecnologia"
              />
              <p className="text-[#1A2B3C]/80 leading-relaxed mb-6">
                Nossa plataforma proprietária de rastreabilidade oferece visibilidade
                completa da cadeia de distribuição. Cada medicamento é identificado
                individualmente e seu histórico de movimentação, temperatura e
                manipulação fica registrado e disponível para consulta a qualquer momento.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Activity, label: "Monitoramento em tempo real" },
                  { icon: Camera, label: "Registro fotográfico de embalagens" },
                  { icon: ShieldCheck, label: "Integração com SNGPC" },
                  { icon: Thermometer, label: "Alertas de temperatura" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-100"
                  >
                    <Icon size={16} className="text-[#22A5D9] flex-shrink-0" />
                    <span className="text-xs font-medium text-[#0A3D62]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Segurança e Monitoramento"
            subtitle="Nossas instalações contam com sistemas de segurança de última geração, garantindo a integridade dos produtos e a conformidade operacional."
            centered
            tag="Segurança"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                titulo: "CFTV 24h",
                desc: "Sistema de monitoramento por câmeras em todas as áreas, com gravação contínua e acesso remoto.",
              },
              {
                icon: ShieldCheck,
                titulo: "Controle de Acesso",
                desc: "Acesso biométrico e por crachá eletrônico com registro de entrada e saída em todas as áreas.",
              },
              {
                icon: Thermometer,
                titulo: "Sensores IoT",
                desc: "Rede de sensores de temperatura e umidade com alertas automáticos e relatórios de conformidade.",
              },
              {
                icon: Activity,
                titulo: "Alarmes Integrados",
                desc: "Sistema de alarme conectado à central de monitoramento 24 horas, com resposta imediata a ocorrências.",
              },
              {
                icon: Award,
                titulo: "Auditoria Periódica",
                desc: "Inspeções regulares pela Anvisa e Vigilâncias Sanitárias estaduais, além de auditorias internas.",
              },
              {
                icon: ShieldCheck,
                titulo: "Rastreio de Pessoal",
                desc: "Todo o pessoal que manipula medicamentos passa por treinamento, certificação e avaliação periódica.",
              },
            ].map(({ icon: Icon, titulo, desc }) => (
              <div
                key={titulo}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A3D62]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#0A3D62]" />
                </div>
                <h3 className="font-bold text-[#0A3D62] mb-2">{titulo}</h3>
                <p className="text-sm text-[#1A2B3C]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Certificações e Autorizações"
            subtitle="Operamos com todas as certificações exigidas pela legislação sanitária brasileira."
            centered
            tag="Certificações"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certificacoes.map(({ nome, org }) => (
              <div
                key={nome}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-[#22A5D9] hover:shadow-sm transition-all"
              >
                <Award size={24} className="text-[#22A5D9] mx-auto mb-2" />
                <p className="text-xs font-bold text-[#0A3D62] leading-tight">{nome}</p>
                <p className="text-xs text-gray-400 mt-1">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A3D62] to-[#1B6CA8] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Conheça como atendemos cada segmento
          </h2>
          <p className="text-blue-100 mb-8">
            Descubra as soluções específicas que a Hospinova oferece para órgãos
            públicos, operadoras de saúde e instituições hospitalares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/como-atuamos" variant="white">
              Como Atuamos
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
