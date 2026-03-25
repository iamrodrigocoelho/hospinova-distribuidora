import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hospinova | Distribuidora Farmacêutica Especializada",
    template: "%s | Hospinova",
  },
  description:
    "A Hospinova é uma distribuidora farmacêutica especializada em soluções para instituições de saúde. Atendemos hospitais, clínicas, operadoras e órgãos públicos com segurança, rastreabilidade e agilidade.",
  keywords: [
    "distribuidora farmacêutica",
    "medicamentos hospitalares",
    "distribuição de medicamentos",
    "farmácia hospitalar",
    "rastreabilidade de medicamentos",
    "licitação de medicamentos",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Hospinova",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1A2B3C]">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
