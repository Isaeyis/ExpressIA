import {
  MessageCircle,
  Users,
  TrendingUp,
  TrendingDown,
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
  Briefcase,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DynamicWhatsAppChat from "@/components/DynamicWhatsAppChat";
import ProcessFlow from "@/components/ProcessFlow";
import PricingPlans from "@/components/PricingPlans";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MakingAppsSection from "@/components/MakingAppsSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counter, setCounter] = useState(50);
  const [selectedPricingType, setSelectedPricingType] = useState<"restaurantes" | "domicilios" | "comercio">("restaurantes");
  const [activeOnboardingStep, setActiveOnboardingStep] = useState(0);

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
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 cursor-pointer group"
              aria-label="Ir al inicio"
            >
              <img src="/logo.png" alt="Express IA" className="w-8 h-8 rounded-lg object-cover group-hover:scale-105 transition-transform" />
              <span className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">EXPRESS IA</span>
            </a>

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
              <a 
                href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+quiero+empezar+con+Express+IA."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg">
                  Comenzar Ahora
                </Button>
              </a>
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
              <a 
                href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+quiero+empezar+con+Express+IA."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                  Comenzar Ahora
                </Button>
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="animate-fade-in-up text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 leading-tight">
                Tu empleado digital que atiende, vende y opera <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">24/7</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold mb-5 leading-relaxed">
                Nunca vuelvas a perder una venta por no responder un WhatsApp.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Mientras tú atiendes tu negocio, <span className="text-emerald-500 font-bold">Express IA</span> responde clientes, recibe pedidos, agenda servicios y automatiza tu operación las 24 horas del día.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a 
                  href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+estoy+interesado+en+adquirir+Express+IA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform flex items-center justify-center gap-2">
                    Adquiere ExpressIA &rarr;
                  </Button>
                </a>
                <Button variant="outline" className="w-full sm:w-auto border-emerald-500 text-emerald-500 bg-transparent hover:bg-emerald-500 hover:text-white font-bold px-6 sm:px-8 py-3 rounded-lg hover:-translate-y-1 transition-all duration-300 transform flex items-center justify-center gap-2">
                  ▶ Ver cómo funciona
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in mt-6 md:mt-0">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs">
                <DynamicWhatsAppChat />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Band */}
      <div className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 py-5 md:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base md:text-xl font-medium text-white leading-relaxed">
            ⚡︎ Automatización 24/7 · WhatsApp Business · Inteligencia Artificial · Más Ventas ⚡︎
          </p>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-12 md:py-20 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">DIAGNÓSTICO COMERCIAL</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Cuántas ventas estás <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">perdiendo ahora mismo?</span>
            </h2>
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 mb-6 animate-pulse-soft" style={{backgroundColor: '#d4f2eb', borderRadius: '16px', border: '2px solid #00bca5'}}>
              <span className="text-2xl sm:text-3xl font-extrabold" id="counter" style={{color: '#ef2a30'}}>$50</span>
              <span className="text-sm sm:text-lg font-bold" style={{color: '#4d4d4d'}}>en ventas perdidas esta sesión</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cada segundo que tu cliente espera una respuesta en WhatsApp es una oportunidad de venta que se va a la competencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Sin Express IA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-500">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Sin Express IA</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">Cliente esperando</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Tu cliente escribe - Nadie responde - Compra en otro lugar</p>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">WhatsApp saturado</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Tu equipo dedica horas respondiendo las mismas preguntas</p>
                  </div>
                </div>
                <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">Operación manual</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">La coordinación manual genera retrasos y es fácil cometer errores</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Con Express IA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Con Express IA</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-600 text-sm sm:text-base">Respuestas Inmediatas</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Express IA responde al cliente en segundos, 24/7</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-600 text-sm sm:text-base">Automatización Total</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Procesa pedidos, agendas y consultas sin intervención humana</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-600 text-sm sm:text-base">Operación Optimizada</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Tu equipo se enfoca en lo importante, Express IA maneja el resto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section - Inside Comparison */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6" style={{marginTop: '45px', paddingTop: '24px', paddingBottom: '24px', backgroundColor: '#e9fbf3', border: '1px solid #c6f6d5', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)'}}>
            <div className="text-center px-4 py-3 sm:py-0">
              <span className="font-bold text-emerald-500 text-3xl sm:text-4xl md:text-5xl animate-text-pulse">95%</span>
              <p className="font-semibold text-gray-500 mt-2.5 text-xs sm:text-sm leading-relaxed">de clientes esperan respuesta en <br /> 5 minutos</p>
            </div>
            <div className="text-center px-4 py-3 sm:py-0">
              <span className="font-bold text-emerald-500 text-3xl sm:text-4xl md:text-5xl animate-text-pulse">3x</span>
              <p className="font-semibold text-gray-500 mt-2.5 text-xs sm:text-sm leading-relaxed">más conversiones con respuesta <br /> inmediata</p>
            </div>
            <div className="text-center px-4 py-3 sm:py-0">
              <span className="font-bold text-emerald-500 text-3xl sm:text-4xl md:text-5xl animate-text-pulse">24/7</span>
              <p className="font-semibold text-gray-500 mt-2.5 text-xs sm:text-sm leading-relaxed">atención sin descanso, sin <br /> errores</p>
            </div>
          </div>

          {/* Subtitle and CTA button below statistics */}
          <p className="text-center text-gray-500 font-medium text-sm sm:text-base mt-12 mb-5">
            No esperes más. Cada segundo cuenta.
          </p>
          <div className="flex justify-center mb-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+quiero+detener+mis+ventas+perdidas+con+Express+IA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform">
                Detén las ventas perdidas ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ProcessFlow Section */}
      <ProcessFlow />

      {/* Marketplace Section */}
      <section id="marketplace" className="py-12 md:py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(90deg, #fafafa 0%, #f0fdf4 30%, #c6f6d5 50%, #f0fdf4 70%, #fafafa 100%)'
      }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-72 h-72 bg-emerald-200/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-emerald-100/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-emerald-500 rounded-full bg-white text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Gift className="w-3.5 h-3.5" />
                Regalo Exclusivo
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Obtén Express IA</span> <span className="block sm:inline">y te regalamos una Vitrina Digital</span>
              </h2>
              <p className="text-[15px] sm:text-base text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                Cuándo adquieras Express IA recibirás acceso completo a tu vitrina digital personalizada, exhibe tus productos 100% con tus colores y logo, gestión de inventario en tiempo real y sincroniza automáticamente todos los cambios sin depender de plataformas externas.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { icon: ShoppingBag, label: "Vitrina Digital", desc: "Personalizada" },
                  { icon: Users, label: "Gestión de Inventario", desc: "En Tiempo Real" },
                  { icon: TrendingUp, label: "Sincronización", desc: "Automática" },
                  { icon: Zap, label: "Carga Masiva", desc: "Por ERP" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col justify-between bg-[#f2fbf7] rounded-xl border border-[#c6f6d5] p-3 sm:p-3.5 hover:border-emerald-300 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-800 text-[11px] sm:text-xs leading-tight">{item.label}</span>
                    </div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-medium text-xs sm:text-sm mt-1.5 w-fit">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <a 
                  href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+me+gustaría+obtener+Express+IA+y+la+vitrina+digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base overflow-hidden shadow-lg hover:shadow-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' }}
                  >
                    <span className="relative z-10">Obtener Express IA + Vitrina Digital</span>
                    <Zap className="w-4 h-4 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </a>
              </div>
            </div>

            {/* Desktop right side image and stats */}
            <div className="hidden md:flex flex-col items-center justify-center gap-6">
              {/* Tight relative container for the phone + orbiting box */}
              <div className="relative">
                {/* Floating Orbiting Box */}
                <div 
                  className="absolute z-20 bg-[#d1fae5] flex items-center justify-center hover:scale-105 transition-all duration-300"
                  style={{
                    top: '20px',
                    right: '-25px',
                    width: '72px',
                    height: '72px',
                    animation: 'bounce-poing 1.4s infinite',
                    borderRadius: '20px',
                  }}
                >
                  <ShoppingBag className="w-9 h-9 text-emerald-600 stroke-[1.8]" />
                </div>

                <img 
                  src="/GIFTMP.png" 
                  alt="Marketplace Preview" 
                  className="h-auto object-contain drop-shadow-2xl"
                  style={{ maxHeight: '460px', width: 'auto' }}
                />
              </div>

              {/* Stats Box with Floating Icon (Transparent Layout, No Overlap) */}
              <div className="flex items-center gap-5 mt-4 max-w-sm w-full">
                {/* Floating Circle Icon */}
                <div className="animate-float-icon w-14 h-14 rounded-full bg-[#e9fbf3] border border-[#c6f6d5] flex items-center justify-center text-emerald-500 shadow-md flex-shrink-0">
                  <TrendingUp className="w-7 h-7" />
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 flex-1 text-center">
                  <div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold text-base sm:text-lg w-fit mx-auto">100%</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-semibold mt-0.5">Personalizado</p>
                  </div>
                  <div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold text-base sm:text-lg w-fit mx-auto">24/7</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-semibold mt-0.5">Disponible</p>
                  </div>
                  <div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold text-base sm:text-lg w-fit mx-auto">∞</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-semibold mt-0.5">Productos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Show image and stats on mobile below text */}
            <div className="flex md:hidden flex-col items-center justify-center mt-4 gap-4">
              <img 
                src="/GIFTMP.png" 
                alt="Marketplace Preview" 
                className="max-w-xs w-full h-auto object-contain drop-shadow-xl"
              />
              
              {/* Mobile Stats Box with Floating Icon (Transparent Layout, No Overlap) */}
              <div className="flex items-center gap-4 mt-4 max-w-xs w-full">
                {/* Floating Circle Icon */}
                <div className="animate-float-icon w-12 h-12 rounded-full bg-[#e9fbf3] border border-[#c6f6d5] flex items-center justify-center text-emerald-500 shadow-md flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 flex-1 text-center">
                  <div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold text-sm sm:text-base w-fit mx-auto">100%</p>
                    <p className="text-[9px] text-gray-500 font-semibold mt-0.5">Personalizado</p>
                  </div>
                  <div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold text-sm sm:text-base w-fit mx-auto">24/7</p>
                    <p className="text-[9px] text-gray-500 font-semibold mt-0.5">Disponible</p>
                  </div>
                  <div>
                    <p className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold text-sm sm:text-base w-fit mx-auto">∞</p>
                    <p className="text-[9px] text-gray-500 font-semibold mt-0.5">Productos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes bounce-poing {
              0%, 100% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
              }
              50% {
                transform: translateY(-32px);
                animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
              }
            }
            @keyframes float-icon {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            .animate-float-icon {
              animation: float-icon 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Business Types Section */}
      <section id="features" className="py-12 md:py-20 bg-white" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">ADAPTABILIDAD</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Express IA <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">para tu negocio</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Soluciones inteligentes adaptadas al tipo de tu operación
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Restaurantes",
                icon: Briefcase,
                gradientClass: "from-blue-400 to-cyan-500",
                buttonGradient: "from-blue-400 to-cyan-500",
                desc: "Convierte WhatsApp en tu nuevo canal de ventas",
                features: ["Consultar el menú", "Preguntar por productos", "Realizar pedidos", "Recibir confirmaciones", "Consultar estados de entrega"]
              },
              {
                title: "Domicilios",
                icon: Truck,
                gradientClass: "from-green-400 to-teal-500",
                buttonGradient: "from-green-400 to-teal-500",
                desc: "Gestiona todo tu servicio de entregas automáticamente",
                features: ["Solicitud de domicilios", "Cálculo de tarifas", "Notificación a domiciliarios", "Aceptación de servicios", "Seguimiento del pedido"]
              },
              {
                title: "Comercio",
                icon: ShoppingCart,
                gradientClass: "from-purple-400 to-pink-500",
                buttonGradient: "from-purple-400 to-pink-500",
                desc: "Ideal para negocios que venden productos",
                features: ["Gestión de catálogo", "Control de inventario", "Disponibilidad de productos", "Recepción de pedidos", "Atención automática"]
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
                      color: '#718096',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      fontWeight: '400'
                    }}>
                      {business.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {business.features.map((feature, j) => (
                        <li 
                          key={j} 
                          className="flex items-start gap-2.5 text-sm transition-all duration-200 hover:translate-x-1 group/item cursor-default"
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 transition-colors duration-200" 
                            style={{
                              backgroundColor: bulletColors[i],
                            }}
                          />
                          <span 
                            className="text-gray-600 transition-colors duration-200 group-hover/item:text-gray-950"
                            style={{
                              fontSize: '13.5px',
                              lineHeight: '1.4'
                            }}
                          >
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
      <section className="py-12 md:py-20" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">VENTAJAS COMPETITIVAS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              ¿Por qué elegir
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Express IA?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La combinación perfecta de inteligencia artificial, rapidez y automatización para hacer crecer tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: Clock, title: "Atención inmediata", desc: "Responde a tus clientes en segundos, sin importar la hora", color: "yellow" },
              { icon: TrendingUp, title: "Más ventas", desc: "Acompaña al cliente durante todo el proceso y mantiene la conversación activa hasta convertirla en una venta.", color: "green" },
              { icon: Zap, title: "Menos tareas repetitivas", desc: "Tu equipo se enfoca en lo importante, Express IA maneja el resto", color: "cyan" },
              { icon: Settings, title: "Fácil de usar", desc: "Configuración simple, toda la información se centraliza para que puedas tomar decisiones con mayor rapidez y claridad.", color: "purple" },
              { icon: TrendingUp, title: "Mayor control", desc: "Se convierte en un vendedor digital capaz de recomendar productos, resolver dudas, tomar pedidos", color: "cyan" },
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
                  className={`${bgColors[item.color]} rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-default`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${iconGradients[item.color]} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md text-white`}>
                      <item.icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug" style={{ fontSize: '17px' }}>
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
      <section className="py-12 md:py-20 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3">PROCESO TRANSPARENTE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Implementación <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">Acompañada</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo trabaja contigo en cada etapa, desde la configuración inicial hasta la puesta en marcha, asegurándose de que la plataforma esté completamente adaptada a tus procesos y lista para comenzar a generar resultados desde el primer día.
            </p>
          </div>

          {/* Steps Grid (Interactive Dynamic Dashboard & Timeline) */}
          {(() => {
            const steps = [
              { 
                number: "01", 
                title: "Análisis y Configuración", 
                desc: "Entendemos tu negocio y configuramos Express IA según tus necesidades.", 
                detailedDesc: "Realizamos un mapeo detallado de tu proceso de ventas, identificando las preguntas más frecuentes de tus clientes, el tono ideal de tu marca y las respuestas clave. Con esta información configuramos la lógica central de la IA.",
                icon: Settings, 
                iconColor: "#3b82f6", 
                bgColor: "bg-blue-50/10", 
                borderColor: "border-blue-200" 
              },
              { 
                number: "02", 
                title: "Integración de Datos", 
                desc: "Conectamos tus bases de datos, inventario y procesos en la plataforma.", 
                detailedDesc: "Sincronizamos tu catálogo completo, niveles de stock, listas de precios y horarios de atención. Ya sea mediante archivos masivos o integraciones con tu ERP actual, garantizamos información 100% exacta y en tiempo real.",
                icon: Database, 
                iconColor: "#8b5cf6", 
                bgColor: "bg-purple-50/10", 
                borderColor: "border-purple-200" 
              },
              { 
                number: "03", 
                title: "Entrenamiento de IA", 
                desc: "Personalizamos la inteligencia artificial con tu marca y procesos únicos.", 
                detailedDesc: "Alimentamos a la inteligencia artificial con tus políticas de envíos, catálogos, promociones e instrucciones de venta consultiva. La IA aprende a recomendar productos y cerrar ventas tal como lo haría tu mejor vendedor.",
                icon: Zap, 
                iconColor: "#10b981", 
                bgColor: "bg-emerald-50/10", 
                borderColor: "border-emerald-200" 
              },
              { 
                number: "04", 
                title: "Integración WhatsApp", 
                desc: "Configuramos Express IA en la API de WhatsApp Business para uso comercial.", 
                detailedDesc: "Conectamos el sistema a tu número de WhatsApp Business a través de la API oficial de Meta. Configuramos plantillas preaprobadas y accesos seguros para que la IA atienda todas las conversaciones entrantes de forma inmediata.",
                icon: MessageSquare, 
                iconColor: "#ef4444", 
                bgColor: "bg-rose-50/10", 
                borderColor: "border-rose-200" 
              },
              { 
                number: "05", 
                title: "Pruebas y Ajustes", 
                desc: "Realizamos pruebas exhaustivas y hacemos los últimos ajustes.", 
                detailedDesc: "Ejecutamos simulaciones masivas con clientes para auditar la precisión de las respuestas, la fluidez de las cotizaciones y la velocidad de entrega, puliendo los últimos detalles antes de salir a producción.",
                icon: CheckCircle2, 
                iconColor: "#3b82f6", 
                bgColor: "bg-blue-50/10", 
                borderColor: "border-blue-200" 
              },
              { 
                number: "06", 
                title: "Lanzamiento en Vivo", 
                desc: "¡Tu empleado digital está listo! Comienza a ver resultados desde el día uno.", 
                detailedDesc: "¡Paso final completado! Tu línea oficial de WhatsApp queda 100% automatizada. Express IA comienza a gestionar cientos de chats en paralelo las 24 horas del día, incrementando tus ventas de forma inmediata y automática.",
                icon: Rocket, 
                iconColor: "#ef4444", 
                bgColor: "bg-rose-50/10", 
                borderColor: "border-rose-200" 
              },
            ];

            const current = steps[activeOnboardingStep];

            return (
              <div className="mb-14">
                {/* Horizontal Timeline Path Navigation */}
                <div className="relative flex justify-between items-center max-w-4xl mx-auto mb-10 px-4 sm:px-8">
                  {/* Connection Line */}
                  <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[3px] bg-gray-200 z-0">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 transition-all duration-500"
                      style={{ width: `${(activeOnboardingStep / 5) * 100}%` }}
                    />
                  </div>

                  {/* Step Nodes */}
                  {steps.map((step, idx) => {
                    const isCompleted = idx < activeOnboardingStep;
                    const isActive = idx === activeOnboardingStep;
                    const StepIcon = step.icon;

                    return (
                      <button
                        key={step.number}
                        onClick={() => setActiveOnboardingStep(idx)}
                        className="relative z-10 flex flex-col items-center group focus:outline-none"
                      >
                        <div 
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            isActive 
                              ? "bg-white text-emerald-600 scale-110 shadow-lg border-emerald-500 ring-4 ring-emerald-100" 
                              : isCompleted 
                                ? "bg-emerald-500 border-emerald-500 text-white shadow-sm" 
                                : "bg-white border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          ) : (
                            <StepIcon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                          )}
                        </div>
                        {/* Desktop Step Title underneath node */}
                        <span className={`hidden md:block absolute -bottom-7 whitespace-nowrap text-[11px] font-bold tracking-wide uppercase transition-all duration-200 ${
                          isActive ? "text-emerald-600 font-extrabold" : "text-gray-400 group-hover:text-gray-600"
                        }`}>
                          {step.title.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Dashboard grid panel */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xl relative overflow-hidden mt-12 md:mt-16">
                  {/* Left Side: Step Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-4">
                    <div>
                      {/* Step Number pill */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200/50 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        Paso {current.number} de 06
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                        {current.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 font-semibold leading-relaxed">
                        {current.desc}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {current.detailedDesc}
                      </p>
                    </div>

                    {/* Step Navigation buttons */}
                    <div className="flex items-center gap-3 mt-6 lg:mt-8 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => setActiveOnboardingStep(prev => (prev - 1 + 6) % 6)}
                        className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-200"
                      >
                        Atrás
                      </button>

                      <button
                        onClick={() => setActiveOnboardingStep(prev => (prev + 1) % 6)}
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-105 transition-all text-white rounded-xl text-xs sm:text-sm font-bold shadow-md active:scale-98"
                      >
                        <span>Siguiente Paso</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Interactive Visual Screen */}
                  <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-150 rounded-2xl p-5 sm:p-6 flex flex-col justify-center min-h-[300px] relative overflow-hidden shadow-inner">
                    {/* Step 1: Config checklist */}
                    {activeOnboardingStep === 0 && (
                      <div className="space-y-3.5 animate-fadeIn">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Checklist de Configuración</h4>
                        {[
                          { text: "Mapear flujos de venta base", done: true },
                          { text: "Definir tono y voz de la marca", done: true },
                          { text: "Determinar respuestas a preguntas comunes", done: false, active: true },
                          { text: "Configurar catálogo inicial", done: false },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200/80 shadow-sm transition-all duration-300">
                            {item.done ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            ) : item.active ? (
                              <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center flex-shrink-0 relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                            )}
                            <span className={`text-[12.5px] font-medium ${item.done ? 'text-gray-500 line-through' : item.active ? 'text-gray-800 font-bold' : 'text-gray-400'}`}>
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 2: Database integration */}
                    {activeOnboardingStep === 1 && (
                      <div className="flex flex-col items-center justify-center space-y-6 animate-fadeIn py-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Conector de Datos Express IA</h4>
                        <div className="flex items-center justify-between w-full max-w-sm relative px-6">
                          {/* Connection line dots */}
                          <div className="absolute left-1/4 right-1/4 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-emerald-500/30 overflow-hidden">
                            <div className="w-full h-full animate-flow-data bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0" />
                          </div>

                          {/* Data source */}
                          <div className="flex flex-col items-center z-10">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-200 flex items-center justify-center text-purple-600">
                              <Database className="w-7 h-7" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 mt-2">Tu Catálogo / ERP</span>
                          </div>

                          {/* Target */}
                          <div className="flex flex-col items-center z-10">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-emerald-200 flex items-center justify-center text-emerald-500 relative">
                              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/40 animate-pulse-soft" />
                              <Zap className="w-7 h-7" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 mt-2">Express IA Cloud</span>
                          </div>
                        </div>

                        {/* Status logs */}
                        <div className="bg-white p-3 rounded-xl border border-gray-200/80 w-full max-w-xs shadow-sm text-center">
                          <p className="text-[11px] font-bold text-emerald-600 animate-pulse">● SINCRONIZACIÓN EXITOSA</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">1,248 productos actualizados en tiempo real.</p>
                        </div>
                      </div>
                    )}

                    {/* Step 3: AI training status */}
                    {activeOnboardingStep === 2 && (
                      <div className="space-y-4 animate-fadeIn">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Entrenamiento del Cerebro de la IA</h4>
                        
                        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] font-bold text-emerald-600">Nivel de Precisión del Modelo</span>
                            <span className="text-xs font-extrabold text-emerald-500">98.6%</span>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[94%] animate-progress-loading" />
                          </div>
                        </div>

                        {/* Logs screen */}
                        <div className="bg-gray-900 text-emerald-400 p-3 rounded-xl border border-gray-950 font-mono text-[10px] space-y-1 shadow-md">
                          <p className="text-emerald-500/70">{`> Indexando política_de_domicilios.pdf... OK`}</p>
                          <p className="text-emerald-500/70">{`> Entrenando respuestas base de catálogo... OK`}</p>
                          <p className="text-emerald-500/90 animate-pulse">{`> Procesando indicaciones de venta cruzada...`}</p>
                        </div>
                      </div>
                    )}

                    {/* Step 4: WhatsApp business integration */}
                    {activeOnboardingStep === 3 && (
                      <div className="space-y-3.5 animate-fadeIn">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Simulador de Conversación de Venta</h4>
                        
                        {/* Chatbox UI */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-md overflow-hidden max-w-sm mx-auto">
                          {/* Header of chat */}
                          <div className="bg-[#075e54] text-white px-3 py-2 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-[10px] font-bold text-white uppercase">IA</div>
                            <div>
                              <p className="text-[11px] font-bold">Vendedor Digital Express IA</p>
                              <p className="text-[8px] text-emerald-200">En línea (Atendido por IA)</p>
                            </div>
                          </div>
                          
                          {/* Messages area */}
                          <div className="p-3 bg-[#efeae2] space-y-2.5 min-h-[120px] flex flex-col justify-end">
                            {/* Client bubble */}
                            <div className="self-start bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-[10.5px] text-gray-800 leading-normal">
                              Hola! Tienen la hamburguesa doble en combo y con envío a la Calle 70? Domicilio gratis?
                            </div>
                            
                            {/* Bot bubble */}
                            <div className="self-end bg-[#dcf8c6] p-2 rounded-lg rounded-tr-none shadow-sm max-w-[80%] text-[10.5px] text-gray-800 leading-normal border-l-2 border-emerald-500">
                              ¡Hola! Sí, la tenemos disponible en combo por $18,900. La Calle 70 aplica para Domicilio Gratis por compras superiores a $15,000, ¡así que tu envío es 100% gratis! 🍔🛵 ¿Te gustaría que la agende ahora mismo?
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Stress test and adjustments */}
                    {activeOnboardingStep === 4 && (
                      <div className="space-y-4 animate-fadeIn">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Auditoría de Rendimiento</h4>
                        
                        <div className="grid grid-cols-2 gap-3.5">
                          {[
                            { label: "Tasa de Acierto", val: "99.4%", desc: "Precisión de la IA", color: "text-emerald-500" },
                            { label: "Tiempo de Respuesta", val: "0.8s", desc: "Entrega instantánea", color: "text-emerald-500" },
                            { label: "Seguridad de Catálogo", val: "100%", desc: "Datos consistentes", color: "text-emerald-500" },
                            { label: "Pruebas de Estrés", val: "APROBADO", desc: "Carga concurrente", color: "text-emerald-500 font-extrabold" },
                          ].map((item, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200/80 shadow-sm text-center">
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                              <p className={`text-lg font-bold ${item.color} mt-1`}>{item.val}</p>
                              <p className="text-[9px] text-gray-500 mt-0.5">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 6: Live Launch monitor */}
                    {activeOnboardingStep === 5 && (
                      <div className="flex flex-col items-center justify-center space-y-4 animate-fadeIn py-3 text-center">
                        {/* Live active badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-300 rounded-full text-[10px] font-bold text-emerald-600 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          OPERACIÓN EN PRODUCCIÓN ACTIVA
                        </div>
                        
                        <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-md relative mt-2">
                          <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-ping" />
                          <Rocket className="w-10 h-10 animate-bounce-poing 1.4s infinite" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-2">
                          <div className="bg-white p-2 rounded-xl border border-gray-200/80 shadow-sm">
                            <p className="text-[9px] text-gray-400 font-bold uppercase">Chats Hoy</p>
                            <p className="text-sm font-extrabold text-emerald-600 mt-0.5">384</p>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-gray-200/80 shadow-sm">
                            <p className="text-[9px] text-gray-400 font-bold uppercase">Ventas IA</p>
                            <p className="text-sm font-extrabold text-emerald-600 mt-0.5">42</p>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-gray-200/80 shadow-sm">
                            <p className="text-[9px] text-gray-400 font-bold uppercase">Ahorro H</p>
                            <p className="text-sm font-extrabold text-emerald-600 mt-0.5">92%</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                  .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                  }
                  @keyframes flow-data {
                    from { background-position: 0% 0; }
                    to { background-position: 100% 0; }
                  }
                  .animate-flow-data {
                    background-image: linear-gradient(95deg, transparent 0%, #10b981 50%, transparent 100%);
                    background-size: 200% 100%;
                    animation: flow-data 1.5s linear infinite;
                  }
                  @keyframes progress-loading {
                    from { width: 0%; }
                    to { width: 94%; }
                  }
                  .animate-progress-loading {
                    animation: progress-loading 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                  }
                `}</style>
              </div>
            );
          })()}

          {/* CTA Section */}
          <div className="text-center max-w-2xl mx-auto mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-6 max-w-xl mx-auto">
              Nuestro equipo de expertos está disponible para comenzar tu implementación hoy mismo
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+estoy+interesado+en+sus+servicios+y+me+gustaría+recibir+más+información."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                className="text-white font-bold px-8 py-4 sm:py-5 rounded-2xl text-base sm:text-lg transition-all duration-300 shadow-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:brightness-105 active:scale-95 shadow-emerald-500/25 hover:shadow-emerald-500/40"
                style={{ animation: 'button-jump 2s infinite ease-in-out', fontWeight: 'bold' }}
              >
                Comenzar implementación
              </Button>
            </a>
            <style>{`
              @keyframes button-jump {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-8px) scale(1.02); }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="panel" className="py-12 md:py-20 bg-white" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-gray-600 tracking-wider mb-3">GESTIÓN CENTRALIZADA</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Panel de control <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">Intuitivo</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Gestiona toda tu operación desde una plataforma web moderna y fácil de usar
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-xl sm:shadow-2xl w-full overflow-hidden">
              <img 
                src="/dashboard.png" 
                alt="Panel de Control Intuitivo" 
                className="w-full h-auto block"
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
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 mb-4 cursor-pointer group w-fit"
                aria-label="Ir al inicio"
              >
                <img src="/logo.png" alt="Express IA" className="w-8 h-8 rounded-lg object-cover group-hover:scale-105 transition-transform" />
                <span className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">EXPRESS IA</span>
              </a>
              <p className="text-gray-400 text-sm">Tu empleado digital que atiende, vende y opera 24/7</p>
              {/* Social Buttons */}
              <div className="flex items-center gap-3.5 mt-5">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/makingappsco/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-500 hover:to-yellow-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-700/40 hover:border-transparent hover:-translate-y-1 hover:shadow-lg shadow-sm"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                
                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@makingappsco" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-700/40 hover:border-gray-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25 shadow-sm"
                  aria-label="TikTok"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/making-apps/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0077b5] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-700/40 hover:border-transparent hover:-translate-y-1 hover:shadow-lg shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* Web */}
                <a 
                  href="https://makingapps.com.co/blogs.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-700/40 hover:border-transparent hover:-translate-y-1 hover:shadow-lg shadow-sm"
                  aria-label="Website"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm sm:text-base">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#plans" className="hover:text-white transition-colors">Planes</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm sm:text-base">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#making-apps" className="hover:text-white transition-colors">Acerca de</a></li>
                <li><a href="https://makingapps.com.co/blogs.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2026 Express IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
