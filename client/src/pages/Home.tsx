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
  MessageSquare,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DynamicWhatsAppChat from "@/components/DynamicWhatsAppChat";
import ProcessFlow from "@/components/ProcessFlow";
import PricingPlans from "@/components/PricingPlans";
import FAQSection from "@/components/FAQSection";
import { useState, useEffect } from "react";

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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">EXPRESS IA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Características</a>
              <a href="#plans" className="text-gray-600 hover:text-gray-900 transition-colors">Planes</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg">
                Comenzar Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Características</a>
              <a href="#plans" className="block text-gray-600 hover:text-gray-900">Planes</a>
              <a href="#faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                Comenzar Ahora
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tu empleado digital que atiende, vende y opera <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">24/7</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nunca vuelvas a perder una venta por no responder un WhatsApp.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mientras tú atiendes tu negocio Express IA responde clientes, recibe pedidos, agenda servicios y automatiza tu operación las 24 horas del día.
              </p>
              <div className="flex gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg">
                  Adquiere Express IA
                </Button>
                <Button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-8 py-3 rounded-lg">
                  Ver cómo funciona
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
      <div className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 py-12 md:py-16" style={{height: '113px', paddingTop: '43px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{fontSize: '23px', fontWeight: '400'}}>
            ⚡︎ Automatización 24/7 · WhatsApp Business · Inteligencia Artificial · Más Ventas ⚡︎
          </h2>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{fontSize: '48px'}}>
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
          <div className="mt-8 grid md:grid-cols-3 gap-4 mb-6" style={{height: '98px', width: '1005px', marginTop: '45px', paddingTop: '12px', backgroundColor: '#e9fbf3', borderRadius: '8px'}}>
            <div className="text-center">
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500" style={{fontSize: '32px'}}>95%</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1" style={{fontSize: '11px'}}>de clientes espera respuesta en 5 minutos</p>
              <p className="text-xs text-gray-600">Express IA responde en segundos, 24/7</p>
            </div>

            <div className="text-center">
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500" style={{fontSize: '32px'}}>3x</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1" style={{fontSize: '11px'}}>más conversiones con respuestas inmediatas</p>
              <p className="text-xs text-gray-600">Aumenta tus ventas automáticamente</p>
            </div>

            <div className="text-center">
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500" style={{fontSize: '32px'}}>24/7</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1" style={{fontSize: '11px'}}>atención sin descanso, sin empleados</p>
              <p className="text-xs text-gray-600">Automatiza tu operación completamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* ProcessFlow Section */}
      <ProcessFlow />

      {/* Marketplace Section */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(90deg, #fafafa 0%, #f0fdf4 30%, #c6f6d5 50%, #f0fdf4 70%, #fafafa 100%)', paddingBottom: '50px', paddingTop: '50px'
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
                y te regalamos una Marketplace
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
                    <div key={i} className="group relative bg-gray-50 rounded-lg border border-gray-200 p-6 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300" style={{height: '140px', width: '280px'}}>
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
              <img 
                src="/manus-storage/2FEEDMAKINGAPPSACTUAL(1080x1350px)(5)_6926c7a7.png" 
                alt="Marketplace Preview" 
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <style>{`
            @keyframes float-3d {
              0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
              50% { transform: translateY(-20px) rotateX(5deg) rotateY(-5deg); }
            }
          `}</style>
        </div>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontSize: '17px'}}>{item.title}</h3>
                      <p className="text-gray-700" style={{fontSize: '12px'}}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 md:py-28 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3">PROCESO TRANSPARENTE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Implementación
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Acompañada
            </h3>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo trabaja contigo en cada etapa, desde la configuración inicial hasta la puesta en marcha, asegurándose de que la plataforma esté completamente adaptada a tus procesos y lista para comenzar a generar resultados desde el primer día.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                number: "01",
                title: "Análisis y Configuración",
                desc: "Entendemos tu negocio y configuramos Express UI según tus necesidades.",
                icon: Settings,
                iconColor: "#0066FF",
                bgColor: "#e6f0ff"
              },
              {
                number: "02",
                title: "Integración de Datos",
                desc: "Conectamos tus bases de datos, inventario y procesos en la plataforma.",
                icon: Database,
                iconColor: "#7C3AED",
                bgColor: "#f3e8ff"
              },
              {
                number: "03",
                title: "Entrenamiento de IA",
                desc: "Personalizamos la inteligencia artificial con tu y procesos únicos.",
                icon: Zap,
                iconColor: "#10B981",
                bgColor: "#d1fae5"
              },
              {
                number: "04",
                title: "Integración WhatsApp",
                desc: "Configuramos Express en la WhatsApp Business para uso comercial.",
                icon: MessageSquare,
                iconColor: "#EF4444",
                bgColor: "#fee2e2"
              },
              {
                number: "05",
                title: "Pruebas y Ajustes",
                desc: "Realizamos pruebas exhaustivas y hacemos los últimos ajustes.",
                icon: CheckCircle2,
                iconColor: "#0066FF",
                bgColor: "#e6f0ff"
              },
              {
                number: "06",
                title: "Lanzamiento en Vivo",
                desc: "¡Tu expresión digital está lista! Comienza a ver resultados generales.",
                icon: Rocket,
                iconColor: "#EF4444",
                bgColor: "#fee2e2"
              }
            ].map((step, i) => (
              <div key={i} className="rounded-2xl p-6 border border-gray-300" style={{backgroundColor: step.bgColor}}>
                <div className="flex flex-col items-start gap-3 mb-4">
                  <p className="text-2xl font-bold text-gray-400">{step.number}</p>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: step.iconColor}}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2" style={{fontSize: '17px'}}>{step.title}</h4>
                <p className="text-sm text-gray-700 mb-4" style={{fontSize: '12px'}}>{step.desc}</p>
                <div className="flex items-center gap-2 text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-semibold">Completado</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 mx-auto" style={{width: '770px', maxWidth: '100%'}}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{fontSize: '17px'}}>
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto" style={{fontSize: '12px'}}>
              Nuestro equipo de expertos está disponible para comenzar tu implementación hoy mismo
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg text-base">
              Comenzar implementación
            </Button>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section id="features" className="py-20 md:py-24 bg-white" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Express IA <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">para tu negocio</span>
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones inteligentes adaptadas al tipo de tu operación
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-6">
            {[
              {
                title: "Restaurantes",
                icon: ShoppingCart,
                gradientClass: "from-blue-400 to-cyan-500",
                buttonGradient: "from-blue-400 to-cyan-500",
                desc: "Convierte WhatsApp en un nuevo canal de ventas",
                features: ["Consultar el menú", "Preguntar por productos", "Realizar pedidos", "Recibir confirmaciones", "Consultar estados de entrega"]
              },
              {
                title: "Domicilios",
                icon: Smartphone,
                gradientClass: "from-green-400 to-teal-500",
                buttonGradient: "from-green-400 to-teal-500",
                desc: "Gestiona todo tu servicio de entregas automáticamente",
                features: ["Solicitud de domicilios", "Cálculo de tarifas", "Notificación a domiciliarios", "Aceptación de servicios", "Seguimiento del pedido"]
              },
              {
                title: "Comercio",
                icon: Store,
                gradientClass: "from-purple-400 to-pink-500",
                buttonGradient: "from-purple-400 to-pink-500",
                desc: "Ideal para negocios que venden productos",
                features: ["Control de inventario", "Disponibilidad de productos", "Gestión de catálogo", "Recepción de pedidos", "Atención automática"]
              },
            ].map((business, i) => {
              return (
                <div key={i} className="flex flex-col bg-white rounded-2xl p-6" style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,.05)',
                  minHeight: '558px',
                  backgroundColor: i === 0 ? '#ebfcff' : i === 1 ? '#ebfff6' : '#fbf0ff'
                }}>
                  <div>
                    <div className={`w-18 h-18 bg-gradient-to-br ${business.gradientClass} rounded-lg flex items-center justify-center mb-6 flex-shrink-0`} style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px'
                    }}>
                      <business.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight" style={{
                      fontSize: '22px',
                      color: '#111111',
                      marginBottom: '12px'
                    }}>{business.title}</h3>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed" style={{
                      fontSize: '13px',
                      color: '#333333',
                      lineHeight: '1.5',
                      marginBottom: '20px',
                      fontWeight: '500'
                    }}>
                      {business.desc}
                    </p>
                    <ul className="space-y-3 mb-6" style={{
                      marginBottom: '20px'
                    }}>
                      {business.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{
                          fontSize: '14px',
                          color: '#444444'
                        }}>
                          <span className="text-gray-400 flex-shrink-0 mt-0.5" style={{
                            color: '#A8A8A8'
                          }}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full text-white font-bold bg-gradient-to-r ${business.buttonGradient} text-sm`} style={{
                    height: '44px',
                    borderRadius: '10px',
                    padding: '0 20px',
                    border: 'none',
                    marginTop: 'auto'
                  }}>
                    {business.title === 'Restaurantes' ? 'Tengo un restaurante' : business.title === 'Domicilios' ? 'Tengo una empresa de domicilios' : 'Tengo un comercio'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">EXPRESS IA</span>
              </div>
              <p className="text-gray-400 text-sm">Tu empleado digital que atiende, vende y opera 24/7</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Características</a></li>
                <li><a href="#" className="hover:text-white">Planes</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Acerca de</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Express IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
