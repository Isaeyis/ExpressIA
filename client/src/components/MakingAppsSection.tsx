import { useState } from "react";
import { ArrowRight, Cpu, Smartphone, Globe, Palette, Zap, Code2, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software a Medida",
    desc: "Soluciones únicas adaptadas a tus procesos",
    color: "#0ea5e9",
    bg: "from-sky-500/10 to-sky-500/5",
    border: "border-sky-500/20",
    iconBg: "from-sky-400 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    desc: "Aplicaciones intuitivas para iOS y Android",
    color: "#38bdf8",
    bg: "from-cyan-500/10 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconBg: "from-cyan-400 to-sky-500",
  },
  {
    icon: Globe,
    title: "Web3 & Blockchain",
    desc: "Tecnología innovadora y segura",
    color: "#818cf8",
    bg: "from-indigo-500/10 to-indigo-500/5",
    border: "border-indigo-500/20",
    iconBg: "from-indigo-400 to-blue-700",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    desc: "Interfaces impactantes y memorables",
    color: "#fb923c",
    bg: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/20",
    iconBg: "from-orange-400 to-orange-600",
  },
];

const stats = [
  { value: "8+", label: "Años de experiencia" },
  { value: "150+", label: "Proyectos entregados" },
  { value: "50+", label: "Clientes activos" },
  { value: "4", label: "Países de operación" },
];

export default function MakingAppsSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      id="making-apps"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#050c2e" }}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #1d4ed8, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-28">

        {/* Logo de Making Apps con animación flotante */}
        <div className="flex justify-center mb-8">
          <div className="animate-float">
            <img
              src="/makingapps-logo.png"
              alt="Making Apps Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain filter drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border text-sm font-bold"
            style={{ backgroundColor: "rgba(14,165,233,0.1)", borderColor: "rgba(14,165,233,0.35)", color: "#38bdf8" }}>
            <Sparkles className="w-4 h-4" />
            EXPRESS IA FUÉ CREADA POR
          </div>
        </div>

        {/* Main title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-3 sm:mb-4 leading-none tracking-tight">
            Making{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)" }}
            >
              Apps
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Innovación Digital Transformadora
          </p>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4 sm:px-0" style={{ color: "rgba(255,255,255,0.4)" }}>
            Arquitectos digitales innovadores que transforman ideas en soluciones tecnológicas de impacto.
            Express IA es el resultado de años de experiencia en desarrollo tecnológico y automatización empresarial.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center py-4 sm:py-5 px-3 sm:px-4 rounded-2xl border"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(14,165,233,0.15)" }}
            >
              <p className="text-2xl sm:text-3xl font-black mb-1" style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.value}
              </p>
              <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission + Who we are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 md:mb-20">
          {/* Mission */}
          <div
            className="rounded-3xl p-6 sm:p-8 border relative overflow-hidden group"
            style={{ backgroundColor: "rgba(14,165,233,0.05)", borderColor: "rgba(14,165,233,0.18)" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }} />
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #1d4ed8)" }}>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-xs font-bold tracking-widest mb-2 sm:mb-3" style={{ color: "#38bdf8" }}>NUESTRA MISIÓN</p>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                Potenciar proyectos empresariales con tecnología a medida
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Desarrollamos software a medida y soluciones tecnológicas que proporcionan a nuestros clientes herramientas esenciales para alcanzar nuevos niveles de éxito.
              </p>
            </div>
          </div>

          {/* Who we are */}
          <div
            className="rounded-3xl p-6 sm:p-8 border relative overflow-hidden group"
            style={{ backgroundColor: "rgba(29,78,216,0.08)", borderColor: "rgba(99,102,241,0.2)" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{ background: "linear-gradient(135deg, #6366f1, #1d4ed8)" }}>
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-xs font-bold tracking-widest mb-2 sm:mb-3" style={{ color: "#818cf8" }}>¿QUIÉNES SOMOS?</p>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                Especialistas en software, apps móviles y marketing digital
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Somos arquitectos digitales comprometidos con crear estrategias pioneras con imaginación sin límites, transformando cada proyecto en una experiencia tecnológica única.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-10">
          <p className="text-center text-xs font-bold tracking-widest mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
            NUESTROS SERVICIOS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isHovered = hoveredService === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border cursor-pointer transition-all duration-300 group bg-gradient-to-br ${svc.bg} ${svc.border}`}
                  style={{
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHovered ? `0 20px 40px ${svc.color}30` : "none",
                  }}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${svc.iconBg} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300`}
                    style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2 leading-snug">
                    {svc.title}
                  </h4>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {svc.desc}
                  </p>
                  <a
                    href="https://makingapps.com.co/#servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold transition-all duration-200"
                    style={{ color: svc.color }}
                  >
                    Conoce más
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)" }}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <a
            href="https://makingapps.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 60%, #38bdf8 100%)",
              boxShadow: "0 0 30px rgba(14,165,233,0.35)",
            }}
          >
            Conoce más sobre Making Apps
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
