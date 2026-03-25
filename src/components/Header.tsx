"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Como Atuamos", href: "/como-atuamos" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Serviços", href: "/servicos" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-[#0A3D62] py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Hospinova - Página Inicial">
            <div className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-lg ${
                  scrolled ? "bg-[#0A3D62]" : "bg-[#22A5D9]"
                }`}
              >
                H
              </div>
              <span
                className={`text-xl font-bold tracking-tight ${
                  scrolled ? "text-[#0A3D62]" : "text-white"
                }`}
              >
                Hospinova
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[#1A2B3C] hover:text-[#1B6CA8] hover:bg-[#F8FAFC]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contato"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-[#22A5D9] text-white hover:bg-[#1B6CA8] transition-colors duration-200"
            >
              Fale Conosco
            </Link>

            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className={scrolled ? "text-[#0A3D62]" : "text-white"} size={24} />
              ) : (
                <Menu className={scrolled ? "text-[#0A3D62]" : "text-white"} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-2 pb-4">
            <nav className="flex flex-col gap-1 mt-3" aria-label="Navegação mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-[#1A2B3C] hover:bg-[#F8FAFC]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => setMenuOpen(false)}
                className="mt-3 mx-4 px-4 py-3 rounded-lg text-sm font-semibold bg-[#22A5D9] text-white text-center hover:bg-[#1B6CA8] transition-colors"
              >
                Fale Conosco
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
