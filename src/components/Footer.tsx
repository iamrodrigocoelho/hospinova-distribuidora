import Link from "next/link";
import { Globe, Share2, Rss, MessageCircle } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Como Atuamos", href: "/como-atuamos" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Serviços", href: "/servicos" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Contato", href: "/contato" },
];

const footerLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
  { label: "Canal de Ética", href: "/canal-de-etica" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Fornecedores", href: "/fornecedores" },
  { label: "Recalls", href: "/recalls" },
];

const socialLinks = [
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn da Hospinova" },
  { icon: Share2, href: "https://instagram.com", label: "Instagram da Hospinova" },
  { icon: Rss, href: "https://facebook.com", label: "Facebook da Hospinova" },
  { icon: MessageCircle, href: "https://youtube.com", label: "YouTube da Hospinova" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white">
      {/* WhatsApp CTA */}
      <div className="bg-[#1B6CA8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Fale com um especialista agora</h3>
            <p className="text-blue-100 mt-1 text-sm">
              Nossa equipe está pronta para atender sua instituição de saúde
            </p>
          </div>
          <a
            href="https://wa.me/5511900000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Hospinova."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
            aria-label="Conversar no WhatsApp"
          >
            <MessageCircle size={20} />
            Conversar no WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#22A5D9] flex items-center justify-center font-bold text-white text-lg">
                H
              </div>
              <span className="text-xl font-bold">Hospinova</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Distribuidor farmacêutico especializado em soluções para instituições de saúde. Segurança, rastreabilidade e agilidade em todo o Brasil.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#22A5D9] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-[#22A5D9]">
              Navegação
            </h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-[#22A5D9]">
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-[#22A5D9]">
              Contato
            </h4>
            <address className="not-italic text-blue-200 text-sm space-y-3">
              <p>
                <strong className="text-white">Sede Administrativa</strong>
                <br />
                Av. das Nações Unidas, 12.901
                <br />
                São Paulo – SP, CEP 04578-910
              </p>
              <p>
                <strong className="text-white">Telefone</strong>
                <br />
                (11) 3000-0000
              </p>
              <p>
                <strong className="text-white">E-mail Comercial</strong>
                <br />
                comercial@hospinova.com.br
              </p>
              <p>
                <strong className="text-white">Horário de Atendimento</strong>
                <br />
                Seg. a Sex.: 8h às 18h
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Hospinova Distribuidora Farmacêutica Ltda. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00 | Alvará Sanitário: ANVISA 0000000000</p>
        </div>
      </div>
    </footer>
  );
}
