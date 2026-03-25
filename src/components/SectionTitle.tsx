interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  tag?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
  tag,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
            light
              ? "bg-white/20 text-white"
              : "bg-[#22A5D9]/10 text-[#22A5D9]"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-[#0A3D62]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-blue-100" : "text-[#1A2B3C]/70"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${
          centered ? "mx-auto" : ""
        } ${light ? "bg-[#22A5D9]" : "bg-[#22A5D9]"}`}
      />
    </div>
  );
}
