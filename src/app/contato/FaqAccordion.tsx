"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-3" role="list" aria-label="Perguntas frequentes">
      {faqItems.map((item) => (
        <div
          key={item.id}
          className="bg-[#F8FAFC] rounded-xl border border-gray-100 overflow-hidden"
          role="listitem"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={openId === item.id}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="font-semibold text-[#0A3D62] text-sm leading-snug">
              {item.pergunta}
            </span>
            <ChevronDown
              size={18}
              className={`text-[#22A5D9] flex-shrink-0 transition-transform duration-200 ${
                openId === item.id ? "rotate-180" : ""
              }`}
            />
          </button>
          {openId === item.id && (
            <div
              id={`faq-answer-${item.id}`}
              className="px-5 pb-5 border-t border-gray-100"
            >
              <p className="text-sm text-[#1A2B3C]/80 leading-relaxed pt-4">
                {item.resposta}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
