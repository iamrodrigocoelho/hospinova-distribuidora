"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Filter, FlaskConical } from "lucide-react";
import { medications, categorias, laboratorios } from "@/data/catalog";

export default function CatalogClient() {
  const [search, setSearch] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("Todos");
  const [selectedLab, setSelectedLab] = useState("Todos");

  const filtered = useMemo(() => {
    return medications.filter((med) => {
      const matchSearch =
        med.nome.toLowerCase().includes(search.toLowerCase()) ||
        med.principioAtivo.toLowerCase().includes(search.toLowerCase()) ||
        med.laboratorio.toLowerCase().includes(search.toLowerCase());
      const matchCat =
        selectedCategoria === "Todos" || med.categoria === selectedCategoria;
      const matchLab =
        selectedLab === "Todos" || med.laboratorio === selectedLab;
      return matchSearch && matchCat && matchLab;
    });
  }, [search, selectedCategoria, selectedLab]);

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative md:col-span-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Buscar por nome, princípio ativo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
                aria-label="Buscar medicamento"
              />
            </div>

            {/* Categoria */}
            <div className="relative">
              <Filter
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <select
                value={selectedCategoria}
                onChange={(e) => setSelectedCategoria(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C] bg-white appearance-none"
                aria-label="Filtrar por categoria"
              >
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "Todos" ? "Todas as categorias" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Laboratório */}
            <div className="relative">
              <FlaskConical
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <select
                value={selectedLab}
                onChange={(e) => setSelectedLab(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C] bg-white appearance-none"
                aria-label="Filtrar por laboratório"
              >
                {laboratorios.map((lab) => (
                  <option key={lab} value={lab}>
                    {lab === "Todos" ? "Todos os laboratórios" : lab}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {filtered.length === medications.length
                ? `Exibindo todos os ${medications.length} produtos (amostra do catálogo)`
                : `${filtered.length} produto${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`}
            </p>
            {(search || selectedCategoria !== "Todos" || selectedLab !== "Todos") && (
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategoria("Todos");
                  setSelectedLab("Todos");
                }}
                className="text-sm text-[#1B6CA8] hover:text-[#0A3D62] font-semibold transition-colors"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <FlaskConical size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#0A3D62] mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500 text-sm">
              Tente ajustar os filtros ou entre em contato para verificar disponibilidade.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((med) => (
              <article
                key={med.id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="bg-[#F8FAFC] flex items-center justify-center p-6 border-b border-gray-100">
                  <Image
                    src="/images/catalogo/caixa-remedio-hospinova.jpg"
                    alt={med.nome}
                    width={160}
                    height={120}
                    className="h-44 w-auto object-contain"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-xs font-bold text-[#22A5D9] bg-[#22A5D9]/10 px-2 py-0.5 rounded">
                      {med.categoria}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-[#0A3D62] mb-1">
                    {med.nome}
                  </h2>
                  <p className="text-xs text-gray-500 mb-1">
                    <span className="font-semibold">Laboratório:</span> {med.laboratorio}
                  </p>
                  <p className="text-xs text-gray-500 mb-1">
                    <span className="font-semibold">Princípio Ativo:</span>{" "}
                    {med.principioAtivo}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    <span className="font-semibold">Apresentação:</span>{" "}
                    {med.apresentacao}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/5511900000000?text=Olá,%20gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(med.nome)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20c05a] text-white text-sm font-semibold transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Comprar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Note */}
        <div className="mt-12 bg-[#0A3D62]/5 rounded-2xl p-6 border border-[#0A3D62]/10 text-center">
          <p className="text-sm text-[#1A2B3C]/70">
            <strong className="text-[#0A3D62]">Nota:</strong> Este catálogo exibe uma
            amostra representativa dos nossos produtos. Nossa carteira completa conta com
            mais de 10.000 itens de 200+ laboratórios parceiros. Entre em contato para
            verificar a disponibilidade de produtos específicos.
          </p>
        </div>
      </div>
    </section>
  );
}
