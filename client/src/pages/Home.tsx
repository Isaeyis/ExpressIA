import { Card } from "@/components/ui/card";
import DynamicWhatsAppChat from "@/components/DynamicWhatsAppChat";
import ProcessFlow from "@/components/ProcessFlow";
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
import { useState } from "react";
import React from "react";

function Button({ children, className = "", variant = "default", ...props }: { children: React.ReactNode; className?: string; variant?: "default" | "outline"; [key: string]: any }) {
  const baseStyles = "font-medium rounded-lg transition-colors px-6 py-3";
  const variants: Record<string, string> = {
    default: "bg-emerald-500 hover:bg-emerald-600 text-white",
    outline: "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50",
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counter, setCounter] = useState(50);

  // Efecto para incrementar el contador
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Actualizar el DOM del contador
  React.useEffect(() => {
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
              <img src="/assets/logo.png" alt="Express IA Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-gray-900 hidden sm:inline">EXPRESS IA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium">
                Características
              </a>
              <a href="#plans" className="text-gray-700 hover:text-emerald-600 font-medium">
                Planes
              </a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-600 font-medium">
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
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
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
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-8" style={{borderRadius: '8px', paddingBottom: '10px', paddingTop: '10px'}}>
                  Adquiere Express IA
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-base px-8"
                  style={{borderRadius: '8px', paddingBottom: '10px', paddingTop: '10px'}}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{fontSize: '23px', fontWeight: '600'}}>
            ⚡︎ Automatización 24/7 · WhatsApp Business · Automatiza tu WhatsApp · Inteligencia Artificial ⚡︎
          </h2>
        </div>
      </div>

      {/* New Section: Comparativa "Ahora Mismo" vs Express IA */}
      <section className="py-16 md:py-24 bg-gray-100" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{fontSize: '60px'}}>
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
            {/* Sin Express IA - Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sin Express IA</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Cliente esperando</p>
                    <p className="text-sm text-gray-600 mt-0.5">El cliente escribe y nadie responde - Busca en otro lugar</p>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp saturado</p>
                    <p className="text-sm text-gray-600 mt-0.5">Tu equipo dedica horas respondiendo las mismas preguntas</p>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">
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

            {/* Con Express IA - Right Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Con Express IA</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Respuestas Inmediatas</p>
                    <p className="text-sm text-teal-600 mt-0.5" style={{color: '#4a5565'}}>Express IA responde al cliente en segundos, 24/7</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Automatización Total</p>
                    <p className="text-sm text-teal-600 mt-0.5" style={{color: '#4a5565'}}>Procesa pedidos, agendas y consultas sin intervención humana</p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-700">Operación Optimizada</p>
                    <p className="text-sm text-teal-600 mt-0.5" style={{color: '#4a5578'}}>Tu equipo se enfoca en lo importante, Express IA maneja el resto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned What is Express IA - Flow Diagram */}
      <ProcessFlow />

      {/* NUEVA SECCIÓN: Obtén Express IA y te regalamos un Marketplace - REGALO ESPECIAL */}
      <section className="py-28 md:py-40 relative overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #fafafa 0%, #f0fdf4 40%, #fafafa 100%)'
      }}>
        {/* Elementos decorativos de fondo - más sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-96 left-1/4 w-96 h-96 bg-emerald-200/8 rounded-full blur-3xl" style={{
            animation: 'float-bg 15s ease-in-out infinite'
          }}></div>
          <div className="absolute -bottom-96 right-1/4 w-96 h-96 bg-emerald-100/5 rounded-full blur-3xl" style={{
            animation: 'float-bg 20s ease-in-out infinite reverse'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Título principal - MUY GRANDE Y IMPACTANTE */}
          <div className="text-center mb-20">
            <div className="inline-block mb-8 text-7xl" style={{
              animation: 'bounce-slow 3s ease-in-out infinite'
            }}>🎁</div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Obtén Express IA y <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">te regalamos un Marketplace</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold leading-relaxed">
              +50 integraciones premium, automatizaciones y soporte prioritario 24/7
            </p>
          </div>

          {/* ESTRUCTURA CREATIVA Y DINÁMICA - SIN CUADRITOS IGUALES */}
          <div className="relative space-y-16">
            {/* Fila 1: Elemento grande a la izquierda con visual a la derecha */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contenido - Grande y descriptivo */}
              <div className="relative" style={{
                animation: 'slide-in-left 0.8s ease-out'
              }}>
                <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl border border-emerald-200/40 p-12 overflow-hidden group hover:border-emerald-300/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{
                        animation: 'spin-slow 30s linear infinite'
                      }}>
                        <Store className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900 mb-2">+50 Integraciones Premium</h3>
                        <p className="text-emerald-600 font-bold">Conecta todo lo que necesitas</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Desde CRM hasta sistemas de pago, redes sociales, email marketing y más. Todas tus herramientas favoritas integradas en un solo lugar para que tu negocio funcione sin interrupciones.
                    </p>
                    <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg cursor-pointer group/link">
                      <span>Explorar todas las integraciones</span>
                      <ArrowRight className="w-6 h-6 group-hover/link:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual - Elemento flotante */}
              <div className="hidden md:flex justify-center items-center h-80" style={{
                animation: 'float-element 4s ease-in-out infinite'
              }}>
                <div className="relative w-56 h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 to-emerald-100/10 rounded-3xl blur-2xl"></div>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border border-emerald-200/50 flex items-center justify-center">
                    <span className="text-7xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fila 2: Elemento mediano a la derecha con visual a la izquierda */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Visual - Elemento flotante */}
              <div className="hidden md:flex justify-center items-center h-72 order-2 md:order-1" style={{
                animation: 'float-element 5s ease-in-out infinite 0.5s'
              }}>
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-cyan-100/10 rounded-3xl blur-2xl"></div>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border border-cyan-200/50 flex items-center justify-center">
                    <span className="text-6xl">⚡</span>
                  </div>
                </div>
              </div>

              {/* Contenido - Mediano y descriptivo */}
              <div className="relative order-1 md:order-2" style={{
                animation: 'slide-in-right 0.8s ease-out 0.1s both'
              }}>
                <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl border border-cyan-200/40 p-12 overflow-hidden group hover:border-cyan-300/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-300/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{
                        animation: 'pulse-icon 2s ease-in-out infinite'
                      }}>
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900 mb-2">Automatizaciones Listas</h3>
                        <p className="text-cyan-600 font-bold">Implementa en minutos</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Flujos pre-configurados que puedes activar sin programación. Solo configura y comienza a automatizar tu negocio al instante.
                    </p>
                    <div className="flex items-center gap-3 text-cyan-600 font-bold text-lg cursor-pointer group/link">
                      <span>Descubrir automatizaciones</span>
                      <ArrowRight className="w-6 h-6 group-hover/link:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fila 3: Elemento soporte centrado y destacado */}
            <div className="flex justify-center mt-8" style={{
              animation: 'slide-up 0.8s ease-out 0.2s both'
            }}>
              <div className="w-full md:max-w-2xl relative bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-3xl border border-teal-200/40 p-12 overflow-hidden group hover:border-teal-300/60 transition-all duration-500" style={{
                boxShadow: '0 20px 60px rgba(16, 185, 129, 0.08)'
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-40 right-0 w-80 h-80 bg-teal-300/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg" style={{
                    animation: 'bounce-icon 2.5s ease-in-out infinite'
                  }}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Soporte 24/7 Prioritario</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto">
                    Equipo experto disponible en todo momento para resolver tus dudas, optimizar tu experiencia y ayudarte a sacar el máximo provecho del Marketplace.
                  </p>
                  <div className="flex items-center justify-center gap-3 text-teal-600 font-bold text-lg cursor-pointer group/link">
                    <span>Contactar soporte</span>
                    <ArrowRight className="w-6 h-6 group-hover/link:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA PRINCIPAL - MUY DESTACADO */}
          <div className="text-center mt-24" style={{
            animation: 'fade-in 1s ease-out 0.5s both'
          }}>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-2xl px-20 py-7 font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all" style={{borderRadius: '18px'}}>
              🎉 Reclamar Mi Marketplace Ahora
            </Button>
            <p className="text-gray-600 text-lg mt-8 font-semibold">Sin tarjeta de crédito • Acceso instantáneo • Oferta limitada</p>
          </div>
        </div>

        {/* Estilos de animación */}
        <style>{`
          @keyframes float-bg {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(60px); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes float-element {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-40px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-icon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
          @keyframes bounce-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
      </section>

      {/* Express IA para tu negocio */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Express IA para tu negocio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: "Restaurantes", desc: "Gestiona pedidos automáticamente" },
              { icon: Store, title: "Comercios", desc: "Atiende clientes 24/7" },
              { icon: Smartphone, title: "Domicilios", desc: "Automatiza entregas" },
            ].map((item, i) => (
              <Card key={i} className="p-8 text-center shadow-md border-0 bg-gray-50">
                <item.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
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
              { q: "¿Cómo funciona Express IA?", a: "Express IA se integra con WhatsApp Business para automatizar respuestas y procesos." },
              { q: "¿Cuál es el costo?", a: "Contamos con planes flexibles según el tamaño de tu negocio." },
              { q: "¿Necesito instalación?", a: "No, es 100% en la nube. Solo conecta tu WhatsApp Business." },
            ].map((item, i) => (
              <Card key={i} className="p-6 border-0 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Express IA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
