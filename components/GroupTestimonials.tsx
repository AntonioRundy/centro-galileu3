"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"] });

const testimonials = [
  {
    quote: "O meu filho transformou completamente a relação com a Matemática. A diferença está na atenção personalizada que nunca encontrámos noutro lado.",
    author: "Maria João Ferreira",
    role: "Encarregada de educação — Virtus Educação",
  },
  {
    quote: "A orientação metodológica foi decisiva para a minha dissertação. Rigor científico e disponibilidade constante, do início ao fim do processo.",
    author: "Eng. Paulo Kiala",
    role: "Investigador de pós-graduação — Virtus Consultoria",
  },
  {
    quote: "O estudo entregue deu-nos uma base de dados real para decidir com confiança. Foi o tipo de análise que não encontrávamos localmente.",
    author: "Direção de ONG parceira",
    role: "Organização apoiada — Virtus Pesquisa & Desenvolvimento",
  },
];

export default function GroupTestimonials() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0E1B33" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="label-gold block mb-4">Testemunhos</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            Impacto nas três<br />divisões do Grupo.
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {testimonials.map(({ quote, author, role }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.10 }}
              className="py-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start"
            >
              <span className={`${playfair.className} text-7xl lg:text-8xl font-black leading-none select-none`}
                style={{ color: "rgba(197,168,128,0.25)", lineHeight: 0.8, paddingTop: "0.15em" }}>
                &ldquo;
              </span>
              <div>
                <p className={`${playfair.className} text-xl sm:text-2xl lg:text-[1.7rem] font-normal italic leading-[1.55] mb-7`}
                  style={{ color: "rgba(244,244,242,0.82)" }}>
                  {quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px" style={{ backgroundColor: "#C5A880" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{author}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(244,244,242,0.40)" }}>{role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
