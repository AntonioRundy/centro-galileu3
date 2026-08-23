const proofs = [
  { text: "Rigor científico" },
  { text: "Equipa multidisciplinar" },
  { text: "+5 anos em Luanda" },
];

export default function GroupProofStrip() {
  return (
    <section className="py-8 border-b" style={{ backgroundColor: "#0E1B33", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="font-bold text-lg lg:text-xl text-center lg:text-left" style={{ color: "#F4F4F2" }}>
            Mais de{" "}
            <span style={{ color: "#16a34a" }}>500 pessoas e organizações</span>{" "}
            já confiaram no Grupo Virtus
          </p>

          <div className="hidden lg:block w-px h-10 flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.10)" }} />

          <div className="flex flex-wrap items-center justify-center gap-6">
            {proofs.map(({ text }) => (
              <div key={text} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "#C5A880" }}
                >
                  ✔
                </div>
                <span className="text-sm font-medium" style={{ color: "#F4F4F2" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
