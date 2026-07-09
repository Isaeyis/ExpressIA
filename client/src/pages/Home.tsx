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

      {/* NUEVA SECCIÓN: Obtén Express IA y te regalamos un Marketplace */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f0fdf4 30%, #c6f6d5 50%, #f0fdf4 70%, #fafafa 100%)', paddingBottom: '50px', paddingTop: '50px'
      }}>
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-72 h-72 bg-emerald-200/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-emerald-100/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Layout: Contenido a la izquierda, imagen 3D a la derecha */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div style={{height: '738px', width: '674px'}}>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Obtén Express IA</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight" style={{color: '#8a8a8a'}}>
                y te regalamos una Vitrina Digital
              </h3>
              <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                Soluciones integrables adaptadas a tu negocio
              </p>


              {/* Grid de 4 elementos - 2x2 Dinámico */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Elemento 1 - Tienda Digital */}
                <div className="group relative bg-gray-50 rounded-lg border border-gray-200 p-6 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Store className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Tienda Digital</h3>
                    <p className="text-xs text-gray-600 font-medium">100% Personalizada</p>
                  </div>
                </div>

                {/* Elemento 2 - Sincronización */}
                <div className="group relative bg-gray-50 rounded-lg border border-gray-200 p-6 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Sincronización</h3>
                    <p className="text-xs text-gray-600 font-medium">Automática</p>
                  </div>
                </div>

                {/* Elemento 3 - Inventario */}
                <div className="group relative bg-gray-50 rounded-lg border border-gray-200 p-6 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Gestión de Inventario</h3>
                    <p className="text-xs text-gray-600 font-medium">En tiempo real</p>
                  </div>
                </div>

                {/* Elemento 4 - Carga Masiva */}
                <div className="group relative bg-gray-50 rounded-lg border border-gray-200 p-6 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Carga Masiva</h3>
                    <p className="text-xs text-gray-600 font-medium">Por ERP</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all" style={{borderRadius: '10px'}}>
                ¡Quiero una marketplace!
              </Button>
            </div>

            {/* Imagen 3D a la derecha - Marketplace en celular */}
            <div className="hidden md:flex justify-center items-center relative h-96" style={{height: '492px', width: '494px'}}>
              <div className="relative w-full max-w-sm" style={{
                perspective: '1200px',
                animation: 'float-3d 4s ease-in-out infinite'
              }}>
                {/* Celular con marketplace */}
                <div className="relative mx-auto w-64 bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>
                  
                  {/* Pantalla */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 pt-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-gray-900">Marketplace</h3>
                      <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                    </div>
                    
                    {/* Cards en el marketplace */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-gray-200 rounded w-20 mb-1"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-32"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-gray-200 rounded w-20 mb-1"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-32"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-gray-200 rounded w-20 mb-1"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-32"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estilos de animación */}
        <style>{`
          @keyframes float-3d {
            0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
            50% { transform: translateY(-20px) rotateX(5deg) rotateY(-5deg); }
          }
        `}</style>
      </section>

      {/* Express IA para tu negocio */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Express IA para tu negocio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta Restaurantes */}
            <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Restaurantes</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed text-left">
                  Convierte WhatsApp en un nuevo canal de ventas
                </p>
                <ul className="space-y-3 mb-6 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Consultar el menú</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Preguntar por productos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Realizar pedidos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Recibir confirmaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Consultar estados de entrega</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 shadow-md hover:shadow-lg transition-all" style={{borderRadius: '10px'}}>
                  Tengo un restaurante
                </Button>
              </div>
            </div>

            {/* Tarjeta Domicilios */}
            <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Domicilios</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed text-left">
                  Gestiona todo tu servicio de entregas automáticamente
                </p>
                <ul className="space-y-3 mb-6 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Solicitud de domicilios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Cálculo de tarifas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Notificación a domiciliarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Aceptación de servicios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Seguimiento del pedido</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 shadow-md hover:shadow-lg transition-all" style={{borderRadius: '10px'}}>
                  Tengo una empresa de domicilios
                </Button>
              </div>
            </div>

            {/* Tarjeta Comercio */}
            <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Comercio</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed text-left">
                  Ideal para negocios que venden productos
                </p>
                <ul className="space-y-3 mb-6 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Control de inventario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Disponibilidad de productos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Gestión de catálogo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Recepción de pedidos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>Atención automática</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 shadow-md hover:shadow-lg transition-all" style={{borderRadius: '10px'}}>
                  Tengo un comercio
                </Button>
              </div>
            </div>
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
