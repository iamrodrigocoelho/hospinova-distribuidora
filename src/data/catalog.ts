export interface Medication {
  id: number;
  nome: string;
  laboratorio: string;
  categoria: string;
  apresentacao: string;
  principioAtivo: string;
}

export const medications: Medication[] = [
  {
    id: 1,
    nome: "Amoxicilina 500mg",
    laboratorio: "EMS",
    categoria: "Antibióticos",
    apresentacao: "Cápsulas - Caixa com 21 unidades",
    principioAtivo: "Amoxicilina tri-hidratada",
  },
  {
    id: 2,
    nome: "Dipirona Sódica 1g/2mL",
    laboratorio: "Hipolabor",
    categoria: "Analgésicos e Antitérmicos",
    apresentacao: "Solução injetável - Ampola 2mL",
    principioAtivo: "Dipirona sódica",
  },
  {
    id: 3,
    nome: "Metformina 850mg",
    laboratorio: "Neo Química",
    categoria: "Antidiabéticos",
    apresentacao: "Comprimidos revestidos - Caixa com 30 unidades",
    principioAtivo: "Cloridrato de metformina",
  },
  {
    id: 4,
    nome: "Omeprazol 20mg",
    laboratorio: "Medley",
    categoria: "Gastrointestinal",
    apresentacao: "Cápsulas - Caixa com 28 unidades",
    principioAtivo: "Omeprazol",
  },
  {
    id: 5,
    nome: "Losartana Potássica 50mg",
    laboratorio: "Eurofarma",
    categoria: "Anti-hipertensivos",
    apresentacao: "Comprimidos revestidos - Caixa com 30 unidades",
    principioAtivo: "Losartana potássica",
  },
  {
    id: 6,
    nome: "Captopril 25mg",
    laboratorio: "Teuto",
    categoria: "Anti-hipertensivos",
    apresentacao: "Comprimidos - Caixa com 30 unidades",
    principioAtivo: "Captopril",
  },
  {
    id: 7,
    nome: "Atorvastatina 20mg",
    laboratorio: "Sandoz",
    categoria: "Cardiovasculares",
    apresentacao: "Comprimidos revestidos - Caixa com 30 unidades",
    principioAtivo: "Atorvastatina cálcica",
  },
  {
    id: 8,
    nome: "Azitromicina 500mg",
    laboratorio: "EMS",
    categoria: "Antibióticos",
    apresentacao: "Comprimidos revestidos - Caixa com 3 unidades",
    principioAtivo: "Azitromicina di-hidratada",
  },
  {
    id: 9,
    nome: "Insulina Regular 100UI/mL",
    laboratorio: "Bionovis",
    categoria: "Antidiabéticos",
    apresentacao: "Solução injetável - Frasco 10mL",
    principioAtivo: "Insulina humana recombinante",
  },
  {
    id: 10,
    nome: "Cloreto de Sódio 0,9%",
    laboratorio: "Fresenius Kabi",
    categoria: "Soluções Parenterais",
    apresentacao: "Solução injetável - Bolsa 500mL",
    principioAtivo: "Cloreto de sódio",
  },
  {
    id: 11,
    nome: "Furosemida 40mg",
    laboratorio: "Hipolabor",
    categoria: "Diuréticos",
    apresentacao: "Comprimidos - Caixa com 20 unidades",
    principioAtivo: "Furosemida",
  },
  {
    id: 12,
    nome: "Clonazepam 2mg",
    laboratorio: "Eurofarma",
    categoria: "Psicotrópicos",
    apresentacao: "Comprimidos - Caixa com 30 unidades",
    principioAtivo: "Clonazepam",
  },
];

export const categorias = [
  "Todos",
  "Antibióticos",
  "Analgésicos e Antitérmicos",
  "Antidiabéticos",
  "Gastrointestinal",
  "Anti-hipertensivos",
  "Cardiovasculares",
  "Soluções Parenterais",
  "Diuréticos",
  "Psicotrópicos",
];

export const laboratorios = [
  "Todos",
  "Bionovis",
  "EMS",
  "Eurofarma",
  "Fresenius Kabi",
  "Hipolabor",
  "Medley",
  "Neo Química",
  "Sandoz",
  "Teuto",
];
