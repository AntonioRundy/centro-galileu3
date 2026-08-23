import Link from "next/link";
import { GraduationCap, FileText, LineChart, MessageCircle } from "lucide-react";

const WA_URL = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Grupo Virtus.")}`;

const options = [
  { icon: GraduationCap, name: "Educação", desc: "Explicações e apoio escolar", href: "/educacao", color: "#4ade80" },
  { icon: FileText, name: "Consultoria", desc: "Orientação científica académica", href: "/consultoria", color: "#C5A880" },
  { icon: LineChart, name: "Pesquisa", desc: "Estudos e inteligência de dados", href: "/pesquisa", color: "#E8A048" },
];

export default function GroupCTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
      <div className="absolute top-0 left-1/3 w-[500px] h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(22,163,74,0.12)" }} />
      <div className="absolute bottom-0 right-1/3 w-80 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(212,175,55,0.10)" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: "#F4F4F2" }}>
          Qual divisão é{" "}
          <span className="gradient-text">para si?</span>
        </h2>
        <p className="text-xl leading-relaxed mb-14 max-w-2xl mx-auto" style={{ color: "rgba(244,244,242,0.65)" }}>
          Escolha a área que melhor responde à sua necessidade — cada divisão tem a sua própria equipa especializada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {options.map(({ icon: Icon, name, desc, href, color }) => (
            <Link
              key={name}
              href={href}
              className="card-lift group rounded-2xl p-7 text-left transition-all"
              style={{ backgroundColor: "rgba(30,18,8,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <Icon size={26} className="mb-4" style={{ color }} />
              <h3 className="font-bold text-base mb-2" style={{ color: "#F4F4F2" }}>{name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(244,244,242,0.55)" }}>{desc}</p>
              <span className="inline-block text-xs font-semibold group-hover:translate-x-1 transition-transform" style={{ color }}>
                Explorar →
              </span>
            </Link>
          ))}
        </div>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
          style={{ backgroundColor: "#16a34a", color: "#ffffff", boxShadow: "0 4px 32px rgba(22,163,74,0.30)" }}
        >
          <MessageCircle size={18} />
          Ainda tem dúvidas? Fale connosco
        </a>
      </div>
    </section>
  );
}
