import type { Metadata } from "next";
import ConteudosClient from "./ConteudosClient";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Artigos, guias e novidades do setor farmacêutico e de saúde institucional. Regulatório, logística, gestão hospitalar e muito mais.",
};

export default function ConteudosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Conteúdos
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Conhecimento especializado para gestores de saúde
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Artigos, guias e análises sobre regulatório farmacêutico, logística de
              saúde, gestão hospitalar e inovação no setor. Conteúdo produzido por
              especialistas da Hospinova.
            </p>
          </div>
        </div>
      </section>

      <ConteudosClient />
    </>
  );
}
