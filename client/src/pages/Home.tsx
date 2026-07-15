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
  Gift,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DynamicWhatsAppChat from "@/components/DynamicWhatsAppChat";
import ProcessFlow from "@/components/ProcessFlow";
import PricingPlans from "@/components/PricingPlans";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MakingAppsSection from "@/components/MakingAppsSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counter, setCounter] = useState(50);
  const [selectedPricingType, setSelectedPricingType] = useState<"restaurantes" | "domicilios" | "comercio">("restaurantes");

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
              <img src="/logo.png" alt="Express IA" className="w-8 h-8 rounded-lg object-cover" />
              <span className="font-bold text-lg text-gray-900">EXPRESS IA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#que-es" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">¿Qué es?</a>
              <a href="#marketplace" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">Marketplace</a>
              <a href="#features" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">Negocios</a>
              <a href="#panel" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">Panel</a>
              <a href="#plans" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">Planes</a>
              <a href="#testimonios" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">Opiniones</a>
              <a href="#making-apps" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">Creadores</a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-semibold whitespace-nowrap">FAQ</a>
            </nav>

            <div className="hidden lg:block">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg">
                Comenzar Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-3">
              <a href="#que-es" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">¿Qué es?</a>
              <a href="#marketplace" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">Marketplace</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">Negocios</a>
              <a href="#panel" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">Panel</a>
              <a href="#plans" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">Planes</a>
              <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">Opiniones</a>
              <a href="#making-apps" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">Creadores</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 font-semibold">FAQ</a>
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
            <div className="animate-fade-in-up">
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
                <a 
                  href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+estoy+interesado+en+sus+servicios+y+me+gustaría+recibir+más+información."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform">
                    Adquiere Express IA
                  </Button>
                </a>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform">
                  Ver cómo funciona
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in">
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
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">DIAGNÓSTICO COMERCIAL</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Cuántas ventas estás <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">perdiendo ahora mismo?</span>
            </h2>
            <div className="inline-flex items-center gap-3 px-8 py-4 mb-6" style={{backgroundColor: '#d4f2eb', borderRadius: '8px', border: '2px solid #00bca5'}}>
              <span className="text-3xl font-bold" id="counter" style={{color: '#ef2a30'}}>$50</span>
              <span className="text-lg font-semibold" style={{color: '#4d4d4d'}}>en ventas perdidas esta sesión</span>
            </div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Cliente esperando</p>
                    <p className="text-sm text-gray-600 mt-0.5">El cliente escribe y nadie responde - Busca en otro lugar</p>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp saturado</p>
                    <p className="text-sm text-gray-600 mt-0.5">Tu equipo dedica horas respondiendo las mismas preguntas</p>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Respuestas Inmediatas</p>
                    <p className="text-sm text-gray-600 mt-0.5">Express IA responde al cliente en segundos, 24/7</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Automatización Total</p>
                    <p className="text-sm text-gray-600 mt-0.5">Procesa pedidos, agendas y consultas sin intervención humana</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
          <div className="mt-8 grid grid-cols-3 gap-4 mb-6" style={{marginTop: '45px', paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#e9fbf3', borderRadius: '8px'}}>
            <div className="text-center px-2">
              <div className="mb-1">
                <p className="font-bold text-emerald-500" style={{fontSize: '32px'}}>95%</p>
              </div>
              <p className="font-semibold text-gray-900 mb-1" style={{fontSize: '14px'}}>de clientes espera respuesta en 5 minutos</p>
              <p className="text-gray-600" style={{fontSize: '13px'}}>Express IA responde en segundos, 24/7</p>
            </div>

            <div className="text-center px-2">
              <div className="mb-1">
                <p className="font-bold text-emerald-500" style={{fontSize: '32px'}}>3x</p>
              </div>
              <p className="font-semibold text-gray-900 mb-1" style={{fontSize: '14px'}}>más conversiones con respuestas inmediatas</p>
              <p className="text-gray-600" style={{fontSize: '13px'}}>Aumenta tus ventas automáticamente</p>
            </div>

            <div className="text-center px-2">
              <div className="mb-1">
                <p className="font-bold text-emerald-500" style={{fontSize: '32px'}}>24/7</p>
              </div>
              <p className="font-semibold text-gray-900 mb-1" style={{fontSize: '14px'}}>atención sin descanso, sin empleados</p>
              <p className="text-gray-600" style={{fontSize: '13px'}}>Automatiza tu operación completamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* ProcessFlow Section */}
      <ProcessFlow />

      {/* Marketplace Section */}
      <section id="marketplace" className="py-12 md:py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(90deg, #fafafa 0%, #f0fdf4 30%, #c6f6d5 50%, #f0fdf4 70%, #fafafa 100%)', paddingBottom: '50px', paddingTop: '50px'
      }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-72 h-72 bg-emerald-200/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-emerald-100/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-emerald-500 rounded-full bg-white text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <Gift className="w-3.5 h-3.5" />
                Regalo Exclusivo
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Obtén Express IA</span> <span className="block sm:inline">y te regalamos una Marketplace</span>
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-md">
                Cuándo adquieras Express IA recibirás acceso completo a tu vitrina digital personalizada, exhibe tus productos 100% con tus colores y logo, gestión de inventario en tiempo real y sincroniza automáticamente todos los cambios sin depender de plataformas externas.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Store, label: "Tienda Digital", desc: "Catálogo automático" },
                  { icon: Zap, label: "Sincronización", desc: "Automática" },
                  { icon: Users, label: "Gestión de Inventario", desc: "En tiempo real" },
                  { icon: Database, label: "Carga Masiva", desc: "Por ERP" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                    <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs leading-tight">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+me+gustaría+obtener+Express+IA+y+la+marketplace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="group relative inline-flex items-center gap-2.5 px-10 py-4.5 rounded-xl font-bold text-white text-base overflow-hidden shadow-lg hover:shadow-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 60%, #047857 100%)' }}
                >
                  <span className="relative z-10">🎁 OBTÉN EXPRESSIA + MARKETPLACE</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </a>
            </div>

            <div className="hidden md:flex justify-center items-center relative" style={{height: '520px'}}>
              {/* Floating Orbiting Box */}
              <div 
                className="absolute z-20 bg-white p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  top: '-15px',
                  right: '-25px',
                  width: '90px',
                  height: '90px',
                  animation: 'float-slow 4s ease-in-out infinite',
                  borderRadius: '24px',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <ShoppingBag className="w-8 h-8 stroke-[1.8]" />
                </div>
              </div>

              <img 
                src="/GIFTMP.png" 
                alt="Marketplace Preview" 
                className="max-w-full object-contain drop-shadow-2xl"
                style={{height: '510px', width: '440px'}}
              />
            </div>
          </div>

          <style>{`
            @keyframes float-3d {
              0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
              50% { transform: translateY(-20px) rotateX(5deg) rotateY(-5deg); }
            }
            @keyframes float-slow {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-15px) rotate(2deg); }
            }
          `}</style>
        </div>
      </section>

      {/* Business Types Section */}
      <section id="features" className="py-20 md:py-24 bg-white" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">ADAPTABILIDAD</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Express IA <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">para tu negocio</span>
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
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
                desc: "Convierte WhatsApp en tu nuevo canal de ventas",
                features: ["Consultar el menú", "Preguntar por productos", "Realizar pedidos", "Recibir confirmaciones", "Consultar estado de entrega"]
              },
              {
                title: "Domicilios",
                icon: Smartphone,
                gradientClass: "from-green-400 to-teal-500",
                buttonGradient: "from-green-400 to-teal-500",
                desc: "Gestión todo domicilios automatizada automáticamente",
                features: ["Gestión de domicilios", "Consulta de tarifas", "Notificación a domiciliarios", "Aceptación de pedidos", "Seguimiento de pedidos"]
              },
              {
                title: "Comercio",
                icon: Store,
                gradientClass: "from-purple-400 to-pink-500",
                buttonGradient: "from-purple-400 to-pink-500",
                desc: "Venta de productos automatizada productos",
                features: ["Gestión de inventario", "Gestión de inventario", "Consulta de productos", "Recepción de pagos", "Seguimiento de envíos"]
              },
            ].map((business, i) => {
              const borderColors = [
                "border-blue-100 hover:border-blue-300 hover:shadow-blue-200/50",
                "border-emerald-100 hover:border-emerald-300 hover:shadow-emerald-200/50",
                "border-purple-100 hover:border-purple-300 hover:shadow-purple-200/50"
              ];
              const bulletColors = ["#3b82f6", "#10b981", "#d946ef"];
              const buttonShadows = [
                "0 4px 14px rgba(59,130,246,0.35)",
                "0 4px 14px rgba(16,185,129,0.35)",
                "0 4px 14px rgba(217,70,239,0.35)"
              ];
              return (
                <div 
                  key={i} 
                  className={`flex flex-col bg-white rounded-3xl p-6 border group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${borderColors[i]}`} 
                  style={{
                    minHeight: '430px',
                    backgroundColor: i === 0 ? '#ebfcff' : i === 1 ? '#ebfff6' : '#fbf0ff'
                  }}
                >
                  <div>
                    <div 
                      className={`w-18 h-18 bg-gradient-to-br ${business.gradientClass} rounded-lg flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '10px'
                      }}
                    >
                      <business.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight" style={{
                      fontSize: '20px',
                      color: '#111111',
                      marginBottom: '10px'
                    }}>{business.title}</h3>
                    <p className="text-base text-gray-700 leading-relaxed" style={{
                      fontSize: '13px',
                      color: '#2d3748',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                      fontWeight: '500'
                    }}>
                      {business.desc}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {business.features.map((feature, j) => (
                        <li 
                          key={j} 
                          className="flex items-start gap-2 text-sm transition-all duration-200 hover:translate-x-1 group/item cursor-default"
                        >
                          <span 
                            className="flex-shrink-0 mt-0.5 transition-colors duration-200" 
                            style={{
                              color: bulletColors[i],
                              fontSize: '16px',
                              lineHeight: '13px'
                            }}
                          >
                            •
                          </span>
                          <span className="text-gray-800 transition-colors duration-200 group-hover/item:text-black">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    onClick={() => {
                      const typeKey = business.title === 'Restaurantes' ? 'restaurantes' : business.title === 'Domicilios' ? 'domicilios' : 'comercio';
                      setSelectedPricingType(typeKey);
                      document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full text-white font-bold bg-gradient-to-r ${business.buttonGradient} text-sm transition-all duration-300 hover:scale-102 hover:brightness-105 active:scale-98`} 
                    style={{
                      height: '40px',
                      borderRadius: '10px',
                      padding: '0 20px',
                      border: 'none',
                      marginTop: 'auto',
                      boxShadow: buttonShadows[i]
                    }}
                  >
                    {business.title === 'Restaurantes' ? 'Tengo un restaurante' : business.title === 'Domicilios' ? 'Tengo una empresa de domicilios' : 'Tengo un comercio'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)', paddingBottom: '70px', paddingTop: '50px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">VENTAJAS COMPETITIVAS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              ¿Por qué elegir
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Express IA?
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La combinación perfecta de inteligencia artificial, rapidez y automatización para hacer crecer tu negocio.
            </p>
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
                yellow: "bg-amber-50/40 border-amber-200/80 hover:border-amber-400/50 hover:shadow-amber-100/80",
                green: "bg-emerald-50/40 border-emerald-200/80 hover:border-emerald-400/50 hover:shadow-emerald-100/80",
                cyan: "bg-sky-50/40 border-sky-200/80 hover:border-sky-400/50 hover:shadow-sky-100/80",
                purple: "bg-purple-50/40 border-purple-200/80 hover:border-purple-400/50 hover:shadow-purple-100/80",
                pink: "bg-rose-50/40 border-rose-200/80 hover:border-rose-400/50 hover:shadow-rose-100/80",
              };
              const iconGradients: Record<string, string> = {
                yellow: "from-amber-400 to-amber-500 shadow-amber-200",
                green: "from-emerald-400 to-emerald-500 shadow-emerald-200",
                cyan: "from-sky-400 to-sky-500 shadow-sky-200",
                purple: "from-purple-400 to-purple-500 shadow-purple-200",
                pink: "from-rose-400 to-rose-500 shadow-rose-200",
              };
              return (
                <div 
                  key={i} 
                  className={`${bgColors[item.color]} rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-default`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${iconGradients[item.color]} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white`}>
                      <item.icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug" style={{ fontSize: '18px' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                        {item.desc}
                      </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Implementación <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">Acompañada</span>
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo trabaja contigo en cada etapa, desde la configuración inicial hasta la puesta en marcha, asegurándose de que la plataforma esté completamente adaptada a tus procesos y lista para comenzar a generar resultados desde el primer día.
            </p>
          </div>

          {/* Steps Grid */}
          {(() => {
            const steps = [
              { number: "01", title: "Análisis y Configuración", desc: "Entendemos tu negocio y configuramos Express UI según tus necesidades.", icon: Settings, iconColor: "#0066FF", bgColor: "#e6f0ff" },
              { number: "02", title: "Integración de Datos", desc: "Conectamos tus bases de datos, inventario y procesos en la plataforma.", icon: Database, iconColor: "#7C3AED", bgColor: "#f3e8ff" },
              { number: "03", title: "Entrenamiento de IA", desc: "Personalizamos la inteligencia artificial con tu y procesos únicos.", icon: Zap, iconColor: "#10B981", bgColor: "#d1fae5" },
              { number: "04", title: "Integración WhatsApp", desc: "Configuramos Express en la WhatsApp Business para uso comercial.", icon: MessageSquare, iconColor: "#EF4444", bgColor: "#fee2e2" },
              { number: "05", title: "Pruebas y Ajustes", desc: "Realizamos pruebas exhaustivas y hacemos los últimos ajustes.", icon: CheckCircle2, iconColor: "#0066FF", bgColor: "#e6f0ff" },
              { number: "06", title: "Lanzamiento en Vivo", desc: "¡Tu expresión digital está lista! Comienza a ver resultados generales.", icon: Rocket, iconColor: "#EF4444", bgColor: "#fee2e2" },
            ];
            const Connector = () => (
              <div className="hidden md:flex items-center flex-shrink-0" style={{ width: '32px' }}>
                <div style={{ flex: 1, height: '2px', backgroundColor: '#CBD5E1' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#CBD5E1', flexShrink: 0 }} />
              </div>
            );
            const CardItem = ({ step }: { step: typeof steps[0] }) => (
              <div className="flex-1 rounded-2xl p-6 border border-gray-300 min-w-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-gray-400 cursor-default" style={{ backgroundColor: step.bgColor }}>
                <div className="flex flex-col items-start gap-3 mb-4">
                  <p className="text-2xl font-bold text-gray-400">{step.number}</p>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: step.iconColor }}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontSize: '17px' }}>{step.title}</h4>
                <p className="text-sm text-gray-700" style={{ fontSize: '12px' }}>{step.desc}</p>
              </div>
            );
            return (
              <div className="mb-12 space-y-6">
                {/* Row 1 */}
                <div className="flex items-stretch gap-0">
                  <CardItem step={steps[0]} />
                  <Connector />
                  <CardItem step={steps[1]} />
                  <Connector />
                  <CardItem step={steps[2]} />
                </div>
                {/* Row 2 */}
                <div className="flex items-stretch gap-0">
                  <CardItem step={steps[3]} />
                  <Connector />
                  <CardItem step={steps[4]} />
                  <Connector />
                  <CardItem step={steps[5]} />
                </div>
              </div>
            );
          })()}

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 mx-auto" style={{width: '770px', maxWidth: '100%'}}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{fontSize: '17px'}}>
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto" style={{fontSize: '12px'}}>
              Nuestro equipo de expertos está disponible para comenzar tu implementación hoy mismo
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+estoy+interesado+en+sus+servicios+y+me+gustaría+recibir+más+información."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg text-base">
                Comenzar implementación
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="panel" className="py-16 md:py-20 bg-white" style={{backgroundColor: '#FFFFFF', paddingBottom: '70px', paddingTop: '50px'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3">GESTIÓN CENTRALIZADA</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Panel de control <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">Intuitivo</span>
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Gestiona toda tu operación desde una plataforma web moderna y fácil de usar
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative rounded-2xl border border-gray-200/80 shadow-2xl max-w-5xl w-full" style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0, 0, 0)' }}>
              <img 
                src="/dashboard.png" 
                alt="Panel de Control Intuitivo" 
                className="w-full h-auto rounded-2xl block mx-auto"
                style={{ imageRendering: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <PricingPlans selectedType={selectedPricingType} onTypeChange={setSelectedPricingType} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Making Apps Section */}
      <MakingAppsSection />

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
