import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContatoForm from "./ContatoForm";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a equipe comercial da Hospinova. Formulário de contato, WhatsApp, telefone, endereço e horários de atendimento.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Contato
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Fale com nossa equipe especializada
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Nossa equipe comercial está pronta para entender as necessidades da sua
              instituição e apresentar as melhores soluções em distribuição farmacêutica.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA destacado */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F0FFF4] rounded-2xl p-6 border border-green-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0A3D62]">Atendimento imediato pelo WhatsApp</p>
                <p className="text-sm text-gray-600">Seg. a Sex., das 8h às 18h</p>
              </div>
            </div>
            <a
              href="https://wa.me/5511900000000?text=Olá,%20gostaria%20de%20solicitar%20atendimento%20comercial%20da%20Hospinova."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05a] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Iniciar conversa no WhatsApp"
            >
              <MessageCircle size={18} />
              Iniciar Conversa
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0A3D62] mb-2">
                Formulário de Contato
              </h2>
              <p className="text-[#1A2B3C]/70 mb-8 text-sm">
                Preencha o formulário abaixo e nossa equipe retornará em até 24 horas úteis.
              </p>
              <ContatoForm />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#0A3D62] mb-4">Informações de Contato</h3>
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#22A5D9] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#0A3D62] mb-0.5">Sede Administrativa</p>
                      <p className="text-sm text-[#1A2B3C]/70">
                        Av. das Nações Unidas, 12.901
                        <br />
                        São Paulo – SP, CEP 04578-910
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#22A5D9] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#0A3D62] mb-0.5">Telefone</p>
                      <p className="text-sm text-[#1A2B3C]/70">(11) 3000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#22A5D9] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#0A3D62] mb-0.5">E-mail</p>
                      <p className="text-sm text-[#1A2B3C]/70">comercial@hospinova.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#22A5D9] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#0A3D62] mb-0.5">Horário de Atendimento</p>
                      <p className="text-sm text-[#1A2B3C]/70">
                        Segunda a Sexta: 8h às 18h
                        <br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </address>
              </div>

              <div className="bg-[#0A3D62] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Atendimento por segmento</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="text-[#22A5D9] font-semibold text-xs uppercase tracking-wide mb-0.5">
                      Órgãos Públicos
                    </p>
                    <p className="text-blue-100">licitacao@hospinova.com.br</p>
                  </li>
                  <li>
                    <p className="text-[#22A5D9] font-semibold text-xs uppercase tracking-wide mb-0.5">
                      Operadoras de Saúde
                    </p>
                    <p className="text-blue-100">operadoras@hospinova.com.br</p>
                  </li>
                  <li>
                    <p className="text-[#22A5D9] font-semibold text-xs uppercase tracking-wide mb-0.5">
                      Hospitais e Clínicas
                    </p>
                    <p className="text-blue-100">hospitais@hospinova.com.br</p>
                  </li>
                  <li>
                    <p className="text-[#22A5D9] font-semibold text-xs uppercase tracking-wide mb-0.5">
                      Suporte Técnico
                    </p>
                    <p className="text-blue-100">suporte@hospinova.com.br</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#22A5D9]/10 text-[#22A5D9]">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
              Perguntas Frequentes
            </h2>
            <p className="text-[#1A2B3C]/70 mt-3">
              Encontre respostas para as dúvidas mais comuns sobre a Hospinova.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
