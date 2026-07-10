import { useState, useEffect } from "react";
import {
  MessageCircle,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  Star,
  Menu,
  X,
  ShoppingCart,
  Store,
  DollarSign,
  Smartphone,
  ArrowRight,
  Lightbulb,
  Settings,
  Database,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DynamicWhatsAppChat from "@/components/DynamicWhatsAppChat";
import ProcessFlow from "@/components/ProcessFlow";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counter, setCounter] = useState(50);

  // Efecto para incrementar el contador
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Actualizar el DOM del contador
  useEffect(() => {
    const counterEl = document.getElementById('counter');
    if (counterEl) {
      counterEl.textContent = `$${counter}`;
    }
  }, [counter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900 hidden sm:inline">EXPRESS IA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Características
              </a>
              <a href="#plans" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Planes
              </a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                FAQ
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Comenzar Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200" id="mobile-menu" role="navigation" aria-label="Menú principal móvil">
              <a href="#features" className="block py-2 text-gray-700 hover:text-emerald-600">
                Características
              </a>
              <a href="#plans" className="block py-2 text-gray-700 hover:text-emerald-600">
                Planes
              </a>
              <a href="#faq" className="block py-2 text-gray-700 hover:text-emerald-600">
                FAQ
              </a>
              <Button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white">
                Comenzar Ahora
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Tu empleado digital que atiende, vende y opera{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">24/7</span>
              </h1>
              <p className="text-lg font-semibold text-emerald-600 mb-4">
                Nunca vuelvas a perder una venta por no responder un WhatsApp.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mientras tú atiendes tu negocio Express IA responde clientes, recibe pedidos, agenda servicios y automatiza tu operación las 24 horas del día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-8 py-3 rounded-lg" aria-label="Adquiere Express IA ahora">
                  Adquiere Express IA
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-base px-8 py-3 rounded-lg"
                  aria-label="Ver como funciona Express IA"
                >
                  Ver como funciona
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <DynamicWhatsAppChat />
            </div>
          </div>
        </div>
      </section>

      {/* Transition Band */}
      <div className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ⚡︎ Automatización 24/7 · WhatsApp Business · Inteligencia Artificial · Más Ventas ⚡︎
          </h2>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Cuántas ventas estás <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">perdiendo</span> ahora mismo?
            </h2>
            <div className="inline-flex items-center gap-3 px-8 py-4 mb-6" style={{backgroundColor: '#d4f2eb', borderRadius: '8px', border: '2px solid #00bca5'}}>
              <span className="text-3xl font-bold" id="counter" style={{color: '#ef2a30'}}>$50</span>
              <span className="text-lg font-semibold" style={{color: '#4d4d4d'}}>en ventas perdidas esta sesión</span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada segundo que tu cliente espera una respuesta en WhatsApp es una oportunidad de venta que se va a la competencia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sin Express IA */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sin Express IA</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Cliente esperando</p>
                    <p className="text-sm text-gray-600 mt-0.5">El cliente escribe y nadie responde - Busca en otro lugar</p>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp saturado</p>
                    <p className="text-sm text-gray-600 mt-0.5">Tu equipo dedica horas respondiendo las mismas preguntas</p>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Operación manual</p>
                    <p className="text-sm text-gray-600 mt-0.5">La coordinación manual genera retrasos y es fácil cometer errores</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Con Express IA */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Con Express IA</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Respuestas Inmediatas</p>
                    <p className="text-sm text-gray-600 mt-0.5">Express IA responde al cliente en segundos, 24/7</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Automatización Total</p>
                    <p className="text-sm text-gray-600 mt-0.5">Procesa pedidos, agendas y consultas sin intervención humana</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Operación Optimizada</p>
                    <p className="text-sm text-gray-600 mt-0.5">Tu equipo se enfoca en lo importante, Express IA maneja el resto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section - Inside Comparison */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="mb-3">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500">95%</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1">de clientes espera respuesta en 5 minutos</p>
              <p className="text-xs text-gray-600">Express IA responde en segundos, 24/7</p>
            </div>

            <div className="text-center">
              <div className="mb-3">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500">3x</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1">más conversiones con respuestas inmediatas</p>
              <p className="text-xs text-gray-600">Aumenta tus ventas automáticamente</p>
            </div>

            <div className="text-center">
              <div className="mb-3">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500">24/7</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1">atención sin descanso, sin empleados</p>
              <p className="text-xs text-gray-600">Automatiza tu operación completamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* ProcessFlow Section */}
      <ProcessFlow />

      {/* Marketplace Section */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f0fdf4 30%, #c6f6d5 50%, #f0fdf4 70%, #fafafa 100%)', paddingBottom: '50px', paddingTop: '50px'
      }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-72 h-72 bg-emerald-200/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-emerald-100/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Obtén Express IA</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-700">
                y te regalamos una Vitrina Digital
              </h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Soluciones integrables adaptadas a tu negocio
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Store, label: "Tienda Digital", desc: "Catálogo automático", color: "emerald" },
                  { icon: Zap, label: "Sincronización", desc: "Automática", color: "cyan" },
                  { icon: Users, label: "Gestión de Inventario", desc: "En tiempo real", color: "teal" },
                  { icon: Database, label: "Carga Masiva", desc: "Por ERP", color: "rose" },
                ].map((item, i) => {
                  const colors: Record<string, string> = {
                    emerald: "from-emerald-400 to-emerald-600",
                    cyan: "from-cyan-400 to-cyan-600",
                    teal: "from-teal-400 to-teal-600",
                    rose: "from-rose-400 to-rose-600",
                  };
                  return (
                    <div key={i} className="group relative bg-gray-50 rounded-lg border border-gray-200 p-6 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
                      <div className="relative z-10">
                        <div className={`w-12 h-12 bg-gradient-to-br ${colors[item.color]} rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.label}</h3>
                        <p className="text-xs text-gray-600 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all rounded-lg">
                ¡Quiero una marketplace!
              </Button>
            </div>

            <div className="hidden md:flex justify-center items-center relative h-96">
              <div className="relative w-full max-w-sm" style={{
                perspective: '1200px',
                animation: 'float-3d 4s ease-in-out infinite'
              }}>
                <div className="relative mx-auto w-64 bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-gray-900">Marketplace</h3>
                      <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { gradient: "from-emerald-400 to-emerald-600" },
                        { gradient: "from-cyan-400 to-cyan-600" },
                        { gradient: "from-teal-400 to-teal-600" },
                      ].map((colors, i) => (
                        <div key={i} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex gap-2 mb-2">
                            <div className={`w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-lg`}></div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-200 rounded w-20 mb-1"></div>
                              <div className="h-1.5 bg-gray-100 rounded w-32"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float-3d {
            0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
            50% { transform: translateY(-20px) rotateX(5deg) rotateY(-5deg); }
          }
        `}</style>
      </section>



      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Express IA?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Atención inmediata", desc: "Responde a tus clientes en segundos, sin importar la hora", color: "yellow" },
              { icon: TrendingUp, title: "Más ventas", desc: "Captura más clientes y aumenta tus conversiones automáticamente", color: "green" },
              { icon: Zap, title: "Menos horas de trabajo", desc: "Tu equipo se enfoca en lo importante, Express IA maneja el resto", color: "cyan" },
              { icon: Settings, title: "Fácil de usar", desc: "Configura en minutos, sin necesidad de conocimientos técnicos", color: "purple" },
              { icon: TrendingUp, title: "Mayor control", desc: "Te brindamos un panel administrativo intuitivo donde puedes gestionar todos los aspectos del servicio y el rendimiento.", color: "cyan" },
              { icon: MessageCircle, title: "Disponible siempre", desc: "Nuestro sistema no descansa y siempre está listo para atender a tus clientes sin importar la hora o el día.", color: "pink" },
            ].map((item, i) => {
              const bgColors: Record<string, string> = {
                yellow: "bg-yellow-50 border-yellow-200",
                green: "bg-green-50 border-green-200",
                cyan: "bg-cyan-50 border-cyan-200",
                purple: "bg-purple-50 border-purple-200",
                pink: "bg-pink-50 border-pink-200",
              };
              const iconColors: Record<string, string> = {
                yellow: "bg-yellow-500",
                green: "bg-green-500",
                cyan: "bg-cyan-500",
                purple: "bg-purple-500",
                pink: "bg-pink-500",
              };
              return (
                <div key={i} className={`${bgColors[item.color]} rounded-2xl p-8 border`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${iconColors[item.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Implementación
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-500 mb-4">
              Acompañada
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo trabaja contigo en cada etapa, desde la configuración inicial hasta la puesta en marcha, asegurándonos de que la plataforma esté completamente adaptada a tu proceso y lista para comenzar a generar resultados desde el primer día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: "01", title: "Análisis y Configuración", desc: "Entendemos tu negocio y configuramos Express IA según tus necesidades", color: "blue" },
              { num: "02", title: "Carga de datos", desc: "Importamos tu catálogo, precios y configuraciones automáticamente", color: "purple" },
              { num: "03", title: "Pruebas de IA", desc: "Probamos y ajustamos las respuestas automáticas para tu negocio", color: "emerald" },
              { num: "04", title: "Integración WhatsApp", desc: "Conectamos tu WhatsApp Business de forma segura", color: "red" },
              { num: "05", title: "Pruebas y Ajustes", desc: "Realizamos pruebas exhaustivas y ajustes finales", color: "blue" },
              { num: "06", title: "Lanzamiento en Vivo", desc: "Express IA comienza a trabajar para ti, generando resultados desde el primer día", color: "orange" },
            ].map((step, i) => {
              const colorMap: Record<string, string> = {
                blue: "bg-blue-500",
                purple: "bg-purple-500",
                emerald: "bg-emerald-500",
                red: "bg-red-500",
                orange: "bg-orange-500",
              };
              return (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${colorMap[step.color]} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all rounded-lg">
              Comenzar Implementación
            </Button>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section id="features" className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Express IA para tu negocio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurantes",
                icon: ShoppingCart,
                color: "red",
                buttonClass: "bg-red-500 hover:bg-red-600",
                desc: "Convierte WhatsApp en un nuevo canal de ventas",
                features: ["Consultar el menú", "Preguntar por productos", "Realizar pedidos", "Recibir confirmaciones", "Consultar estados de entrega"]
              },
              {
                title: "Domicilios",
                icon: Smartphone,
                color: "orange",
                buttonClass: "bg-orange-500 hover:bg-orange-600",
                desc: "Gestiona todo tu servicio de entregas automáticamente",
                features: ["Solicitud de domicilios", "Cálculo de tarifas", "Notificación a domiciliarios", "Aceptación de servicios", "Seguimiento del pedido"]
              },
              {
                title: "Comercio",
                icon: Store,
                color: "purple",
                buttonClass: "bg-purple-500 hover:bg-purple-600",
                desc: "Ideal para negocios que venden productos",
                features: ["Control de inventario", "Disponibilidad de productos", "Gestión de catálogo", "Recepción de pedidos", "Atención automática"]
              },
            ].map((business, i) => {
              const colorMap: Record<string, string> = {
                red: "from-red-400 to-red-600",
                orange: "from-orange-400 to-orange-600",
                purple: "from-purple-400 to-purple-600",
              };
              const textColorMap: Record<string, string> = {
                red: "text-red-500",
                orange: "text-orange-500",
                purple: "text-purple-500",
              };
              const cta: Record<string, string> = {
                Restaurantes: "Tengo un restaurante",
                Domicilios: "Tengo una empresa de domicilios",
                Comercio: "Tengo un comercio",
              };
              return (
                <div key={i} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 overflow-hidden">
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colorMap[business.color]} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <business.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">{business.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed text-left">
                      {business.desc}
                    </p>
                    <ul className="space-y-3 mb-6 text-sm text-gray-700">
                      {business.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${textColorMap[business.color]} flex-shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${business.buttonClass} text-white font-bold py-3 rounded-lg`}>
                      {cta[business.title as keyof typeof cta]}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes adaptados a tu negocio
            </h2>
            <p className="text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button className="px-6 py-3 rounded-full font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
              🍽️ Restaurantes
            </button>
            <button className="px-6 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              🚚 Domicilios
            </button>
            <button className="px-6 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              🛍️ Comercio
            </button>
            <button className="px-6 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              🏢 Otros
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-emerald-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Estándar</h3>
              <p className="text-gray-600 mb-6">Para negocios pequeños</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$350K</span>
                <span className="text-gray-600 ml-2">por mes</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hasta 1,000 mensajes/mes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 número de WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Respuestas automáticas básicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Soporte por email</span>
                </li>
              </ul>

              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg">
                Empezar
              </Button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl border-2 border-purple-600 p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                Más Popular
              </div>

              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-purple-100 mb-6">Para negocios en crecimiento</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">$950K</span>
                <span className="text-purple-100 ml-2">por mes</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Hasta 10,000 mensajes/mes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Hasta 3 números de WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Respuestas automáticas avanzadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Integración con CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Soporte prioritario</span>
                </li>
              </ul>

              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 rounded-lg">
                Empezar
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Necesitas un plan personalizado?</p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "¿Cómo funciona Express IA?", a: "Express IA se integra con WhatsApp Business para automatizar respuestas y procesos. Responde a tus clientes 24/7, procesa pedidos y gestiona tu operación automáticamente." },
              { q: "¿Cuál es el costo?", a: "Contamos con planes flexibles según el tamaño de tu negocio. Desde $350K mensuales para negocios pequeños hasta planes personalizados para empresas grandes." },
              { q: "¿Necesito instalación?", a: "No, es 100% en la nube. Solo conecta tu WhatsApp Business y nuestro equipo se encarga del resto. Implementación acompañada en 6 pasos." },
              { q: "¿Cuánto tiempo tarda la implementación?", a: "La implementación típicamente toma entre 5-7 días hábiles. Nuestro equipo trabaja contigo en cada etapa para asegurar que todo esté perfectamente configurado." },
              { q: "¿Puedo cambiar de plan?", a: "Sí, puedes cambiar de plan en cualquier momento. Tu facturación se ajustará proporcionalmente según el plan que elijas." },
            ].map((item, i) => (
              <Card key={i} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Express IA</h3>
              <p className="text-gray-400 text-sm">Tu empleado digital que atiende, vende y opera 24/7</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#plans" className="hover:text-white transition-colors">Planes</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Express IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
