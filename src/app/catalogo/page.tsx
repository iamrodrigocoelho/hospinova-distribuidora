import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo de Medicamentos",
  description:
    "Explore o catálogo de medicamentos da Hospinova. Mais de 10.000 itens disponíveis de 200+ laboratórios parceiros. Filtre por categoria ou laboratório.",
};

export default function CatalogoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Catálogo de Produtos
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Catálogo de Medicamentos
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Explore nossa carteira de produtos com mais de 10.000 itens de 200+
              laboratórios parceiros. Utilize os filtros para encontrar o que sua
              instituição precisa.
            </p>
          </div>
        </div>
      </section>

      <CatalogClient />
    </>
  );
}
