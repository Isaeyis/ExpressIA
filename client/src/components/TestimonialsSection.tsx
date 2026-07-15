import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Dueño · Restaurante El Fogón",
    avatar: "CM",
    avatarColor: "from-blue-400 to-cyan-500",
    rating: 5,
    text: "Antes perdíamos el 40% de las consultas porque no podíamos responder rápido. Con Express IA, el bot atiende en segundos y ya llevamos 3 meses sin perder un solo pedido. Las ventas subieron un 35%.",
    metric: "+35% ventas",
    metricColor: "text-emerald-500",
  },
  {
    name: "Valentina Ríos",
    role: "Gerente · Domicilios Rápidos SAS",
    avatar: "VR",
    avatarColor: "from-green-400 to-teal-500",
    rating: 5,
    text: "La integración con WhatsApp fue increíblemente sencilla. Ahora nuestros domiciliarios reciben la asignación automáticamente y los clientes siguen el pedido en tiempo real. Es un cambio total.",
    metric: "3x más pedidos",
    metricColor: "text-blue-500",
  },
  {
    name: "Andrés Castillo",
    role: "Fundador · TechStore Colombia",
    avatar: "AC",
    avatarColor: "from-purple-400 to-pink-500",
    rating: 5,
    text: "Tenía miedo de que fuera complicado pero el equipo de Express IA nos acompañó en cada paso. En 2 semanas ya teníamos la vitrina digital funcionando y el inventario sincronizado automáticamente.",
    metric: "2 semanas de setup",
    metricColor: "text-purple-500",
  },
  {
    name: "Laura Gómez",
    role: "Administradora · Burger House",
    avatar: "LG",
    avatarColor: "from-orange-400 to-red-500",
    rating: 5,
    text: "Lo que más me sorprendió fue el panel de control. Puedo ver todo en tiempo real, cuántas conversaciones activas hay, qué productos se consultan más, y ajustar el bot sin necesidad de saber programar.",
    metric: "100% visibilidad",
    metricColor: "text-orange-500",
  },
  {
    name: "Miguel Torres",
    role: "CEO · Comercializadora El Éxito",
    avatar: "MT",
    avatarColor: "from-indigo-400 to-violet-500",
    rating: 5,
    text: "Nuestra operación maneja 500+ productos. Con Express IA, el bot responde consultas de inventario, precios y disponibilidad sin que nadie tenga que estar pendiente. Ahorramos 3 personas de atención.",
    metric: "3 personas ahorradas",
    metricColor: "text-indigo-500",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const prev = () => {
    const idx = (current - 1 + testimonials.length) % testimonials.length;
    goTo(idx, "left");
  };

  const next = useCallback(() => {
    const idx = (current + 1) % testimonials.length;
    goTo(idx, "right");
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];
  const prev1 = testimonials[(current - 1 + testimonials.length) % testimonials.length];
  const next1 = testimonials[(current + 1) % testimonials.length];

  return (
    <section
      id="testimonios"
      className="py-20 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f0fdf4 0%, #ecfdf5 40%, #f8fafc 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #059669, transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-emerald-600 tracking-wider mb-3 uppercase">
            ⭐ Clientes que confían en nosotros
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">Clientes</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Historias reales de negocios que crecieron con Express IA
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Prev ghost card */}
          <div
            className="hidden lg:block w-64 flex-shrink-0 cursor-pointer"
            onClick={prev}
          >
            <div
              className="rounded-2xl p-5 bg-white/60 border border-gray-100 shadow-md opacity-50 scale-90 transition-all duration-300 hover:opacity-70"
              style={{ transform: "scale(0.88)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${prev1.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {prev1.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{prev1.name}</p>
                  <p className="text-xs text-gray-500">{prev1.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 line-clamp-3">{prev1.text}</p>
            </div>
          </div>

          {/* Main card */}
          <div className="flex-1 max-w-2xl">
            <div
              className="rounded-3xl bg-white border border-gray-100 shadow-2xl p-8 md:p-10 transition-all duration-300"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating
                  ? `translateX(${direction === "right" ? "-30px" : "30px"})`
                  : "translateX(0)",
              }}
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-emerald-500" />
                </div>
                {/* Metric badge */}
                <span
                  className={`text-sm font-bold px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 ${t.metricColor}`}
                >
                  {t.metric}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimony text */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-medium">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next ghost card */}
          <div
            className="hidden lg:block w-64 flex-shrink-0 cursor-pointer"
            onClick={next}
          >
            <div
              className="rounded-2xl p-5 bg-white/60 border border-gray-100 shadow-md opacity-50 transition-all duration-300 hover:opacity-70"
              style={{ transform: "scale(0.88)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${next1.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {next1.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{next1.name}</p>
                  <p className="text-xs text-gray-500">{next1.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 line-clamp-3">{next1.text}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border-2 border-emerald-200 bg-white flex items-center justify-center text-emerald-600 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === current ? "#10b981" : "#d1fae5",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border-2 border-emerald-200 bg-white flex items-center justify-center text-emerald-600 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { value: "500+", label: "Negocios activos" },
            { value: "98%", label: "Satisfacción" },
            { value: "24/7", label: "Soporte disponible" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white/70 rounded-2xl py-4 px-3 border border-emerald-100 shadow-sm">
              <p className="text-2xl font-bold text-emerald-500 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
