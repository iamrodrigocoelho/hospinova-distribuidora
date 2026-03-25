"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContatoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0A3D62] mb-2">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-[#1A2B3C]/70 text-sm">
          Nossa equipe entrará em contato em até 24 horas úteis. Obrigado pelo interesse
          na Hospinova.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
      aria-label="Formulário de contato"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Nome */}
        <div className="md:col-span-1">
          <label htmlFor="nome" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
          />
        </div>

        {/* Empresa */}
        <div className="md:col-span-1">
          <label htmlFor="empresa" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Empresa / Instituição <span className="text-red-500">*</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            placeholder="Nome da instituição"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
          />
        </div>

        {/* Cargo */}
        <div className="md:col-span-1">
          <label htmlFor="cargo" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Cargo
          </label>
          <input
            id="cargo"
            name="cargo"
            type="text"
            placeholder="Seu cargo"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
          />
        </div>

        {/* E-mail */}
        <div className="md:col-span-1">
          <label htmlFor="email" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
          />
        </div>

        {/* Telefone */}
        <div className="md:col-span-1">
          <label htmlFor="telefone" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Telefone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            placeholder="(11) 90000-0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
          />
        </div>

        {/* Cidade/Estado */}
        <div className="md:col-span-1">
          <label htmlFor="cidade" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Cidade / Estado
          </label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            placeholder="São Paulo – SP"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
          />
        </div>

        {/* Tipo de organização */}
        <div className="md:col-span-1">
          <label htmlFor="tipo" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Tipo de organização <span className="text-red-500">*</span>
          </label>
          <select
            id="tipo"
            name="tipo"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C] bg-white"
          >
            <option value="">Selecione...</option>
            <option value="hospital-privado">Hospital Privado</option>
            <option value="hospital-publico">Hospital Público</option>
            <option value="clinica">Clínica</option>
            <option value="operadora">Operadora de Saúde / Plano</option>
            <option value="secretaria-estadual">Secretaria Estadual de Saúde</option>
            <option value="secretaria-municipal">Secretaria Municipal de Saúde</option>
            <option value="upa">UPA / Pronto-Socorro</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        {/* Assunto */}
        <div className="md:col-span-1">
          <label htmlFor="assunto" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Assunto <span className="text-red-500">*</span>
          </label>
          <select
            id="assunto"
            name="assunto"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C] bg-white"
          >
            <option value="">Selecione...</option>
            <option value="atendimento-comercial">Atendimento Comercial</option>
            <option value="licitacao">Licitação / Pregão Eletrônico</option>
            <option value="catalogo">Consulta ao Catálogo</option>
            <option value="suporte-tecnico">Suporte Técnico Farmacêutico</option>
            <option value="parceria">Proposta de Parceria / Fornecedor</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        {/* Mensagem */}
        <div className="md:col-span-2">
          <label htmlFor="mensagem" className="block text-xs font-semibold text-[#0A3D62] mb-1.5">
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={5}
            placeholder="Descreva suas necessidades ou dúvidas. Quanto mais informações você fornecer, melhor poderemos atendê-lo."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C] resize-none"
          />
        </div>

        {/* LGPD */}
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              name="lgpd"
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#1B6CA8] focus:ring-[#22A5D9]"
              aria-required="true"
            />
            <span className="text-xs text-[#1A2B3C]/70 leading-relaxed">
              Concordo com o tratamento dos meus dados pessoais pela Hospinova para fins
              de atendimento comercial, conforme a{" "}
              <a
                href="/politica-de-privacidade"
                className="text-[#1B6CA8] underline hover:text-[#0A3D62]"
              >
                Política de Privacidade
              </a>{" "}
              e a Lei Geral de Proteção de Dados (LGPD). <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-[#0A3D62] hover:bg-[#1B6CA8] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar Mensagem
            </>
          )}
        </button>
      </div>
    </form>
  );
}
