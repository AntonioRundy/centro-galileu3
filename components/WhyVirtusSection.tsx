"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Layers, GraduationCap, MapPin, TrendingUp } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const reasons = [
  {
    icon: Layers,
    title: "Abordagem Multidisciplinar",
    desc: "Educação, Consultoria e Pesquisa sob o mesmo rigor científico — do ensino básico à investigação aplicada.",
    color: "#4ade80",
  },
  {
    icon: GraduationCap,
    title: "Equipa Especializada",
    desc: "Profissionais com formação avançada em cada área específica — não generalistas a fazer de tudo um pouco.",
    color: "#C5A880",
  },
  {
    icon: MapPin,
    title: "Presença Local, Padrão Internacional",
    desc: "Sediados em Luanda, com metodologias, ferramentas e critérios ao nível das melhores referências internacionais.",
    color: "#E8A048",
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    desc: "Histórico consistente de impacto real em alunos, investigadores e organizações que trabalham connosco.",
    color: "#16a34a",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60 } },
};

export default function WhyVirtusSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20 max-w-2xl"
        >
          <span className="label-gold block mb-4">Porquê o Grupo Virtus</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            Uma base sólida<br />para cada decisão.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {reasons.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group rounded-2xl p-8 transition-all duration-300"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}
              whileHover={{ borderColor: "rgba(197,168,128,0.20)", y: -4 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-bold text-base mb-3" style={{ color: "#FFFFFF" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.55)" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
