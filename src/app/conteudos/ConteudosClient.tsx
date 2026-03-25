"use client";

import { useState, useMemo } from "react";
import { Search, Calendar, Clock, ChevronRight } from "lucide-react";
import { articles, categoriasFiltro } from "@/data/articles";

export default function ConteudosClient() {
  const [search, setSearch] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("Todos");

  const filtered = useMemo(() => {
    return articles.filter((art) => {
      const matchSearch =
        art.titulo.toLowerCase().includes(search.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCat =
        selectedCategoria === "Todos" || art.categoria === selectedCategoria;
      return matchSearch && matchCat;
    });
  }, [search, selectedCategoria]);

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#22A5D9] text-sm text-[#1A2B3C]"
                aria-label="Buscar artigos"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {categoriasFiltro.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategoria(cat)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                    selectedCategoria === cat
                      ? "bg-[#0A3D62] text-white"
                      : "bg-[#F8FAFC] text-[#1A2B3C] hover:bg-[#0A3D62]/10 border border-gray-200"
                  }`}
                  aria-pressed={selectedCategoria === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {filtered.length !== articles.length && (
            <p className="text-sm text-gray-500 mt-3">
              {filtered.length} artigo{filtered.length !== 1 ? "s" : ""} encontrado
              {filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Nenhum artigo encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#22A5D9] hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="h-2 bg-gradient-to-r from-[#0A3D62] to-[#22A5D9]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#22A5D9] bg-[#22A5D9]/10 px-2 py-1 rounded">
                      {article.categoria}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-[#0A3D62] mb-3 leading-snug">
                    {article.titulo}
                  </h2>
                  <p className="text-sm text-[#1A2B3C]/70 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.data}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.tempoLeitura}
                      </span>
                    </div>
                    <button className="inline-flex items-center gap-1 text-[#1B6CA8] font-semibold text-sm hover:text-[#0A3D62] transition-colors">
                      Ler mais <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-[#0A3D62] rounded-3xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Receba conteúdos exclusivos no seu e-mail
          </h3>
          <p className="text-blue-100 mb-6 text-sm max-w-xl mx-auto">
            Cadastre-se para receber análises regulatórias, guias práticos e novidades do
            setor farmacêutico diretamente na sua caixa de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-[#1A2B3C] text-sm focus:outline-none focus:ring-2 focus:ring-[#22A5D9]"
              aria-label="E-mail para newsletter"
            />
            <button className="px-6 py-3 bg-[#22A5D9] hover:bg-[#1B6CA8] text-white font-semibold rounded-lg text-sm transition-colors whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
          <p className="text-xs text-blue-300 mt-3">
            Ao se inscrever, você concorda com nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
