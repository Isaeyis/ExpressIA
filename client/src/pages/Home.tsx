import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Menu, X, ShoppingCart, Truck, Store, Settings, BookOpen, Rocket, Flag, Clock } from 'lucide-react';
import DynamicWhatsAppChat from '@/components/DynamicWhatsAppChat';
import ProcessFlow from '@/components/ProcessFlow';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EXPRESS IA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#characteristics" className="text-gray-700 hover:text-emerald-500 transition">Características</a>
            <a href="#plans" className="text-gray-700 hover:text-emerald-500 transition">Planes</a>
            <a href="#faq" className="text-gray-700 hover:text-emerald-500 transition">FAQ</a>
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg">
            Comenzar Ahora
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 px-4 space-y-3">
            <a href="#characteristics" className="block text-gray-700 hover:text-emerald-500">Características</a>
            <a href="#plans" className="block text-gray-700 hover:text-emerald-500">Planes</a>
            <a href="#faq" className="block text-gray-700 hover:text-emerald-500">FAQ</a>
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
              Comenzar Ahora
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Tu empleado digital que atiende, vende y opera <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">24/7</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nunca vuelvas a perder una venta por no responder un WhatsApp.
            </p>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              Mientras tú atiendes tu negocio Express IA responde clientes, recibe pedidos, agenda servicios y automatiza tu operación las 24 horas del día.
            </p>
            <div className="flex gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg text-base">
                Adquiere Express IA
              </Button>
              <Button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-bold px-8 py-3 rounded-lg text-base">
                Ver cómo funciona
              </Button>
            </div>
          </div>

          {/* WhatsApp Chat Preview */}
          <div className="flex justify-center">
            <DynamicWhatsAppChat />
          </div>
        </div>
      </section>

      {/* Transition Band */}
      <div className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 py-12 md:py-16" style={{height: '113px', paddingTop: '43px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{fontSize: '23px', fontWeight: '300'}}>
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
              <span className="text-sm font-semibold text-emerald-700">En tiempo real</span>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sin Express IA</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pierdes clientes que no responden en 5 minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Empleados cansados de responder lo mismo</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Errores en toma de pedidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cierre de operación a las 11 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-emerald-500 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">Con Express IA</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Responde en segundos, siempre</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tu equipo se enfoca en tareas estratégicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cero errores en procesamiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Operación 24/7 sin parar</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Statistics Section - Inside Comparison */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 mb-6" style={{height: '98px', width: '1005px', marginTop: '45px', paddingTop: '12px', backgroundColor: '#e9fbf3', borderRadius: '8px'}}>
            <div className="text-center" style={{height: '98px'}}>
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500" style={{fontSize: '32px'}}>95%</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1" style={{fontSize: '12px'}}>de clientes espera respuesta en 5 minutos</p>
              <p className="text-xs text-gray-600">Express IA responde en segundos, 24/7</p>
            </div>

            <div className="text-center" style={{height: '98px'}}>
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500" style={{fontSize: '32px'}}>3x</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1" style={{fontSize: '12px'}}>más conversiones con respuestas inmediatas</p>
              <p className="text-xs text-gray-600">Aumenta tus ventas automáticamente</p>
            </div>

            <div className="text-center" style={{height: '98px'}}>
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-emerald-500" style={{fontSize: '32px'}}>24/7</p>
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1" style={{fontSize: '12px'}}>atención sin descanso, sin empleados</p>
              <p className="text-xs text-gray-600">Automatiza tu operación completamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  { icon: Store, title: "Tienda Digital", desc: "Tu catálogo en línea" },
                  { icon: Settings, title: "Sincronización", desc: "Automática con tus sistemas" },
                  { icon: BookOpen, title: "Inventario", desc: "Control en tiempo real" },
                  { icon: Rocket, title: "Carga Masiva", desc: "Sube productos rápido" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <item.icon className="w-6 h-6 text-emerald-500 mb-2" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontSize: '17px'}}>{item.title}</h4>
                    <p className="text-gray-700" style={{fontSize: '12px'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="flex justify-center relative">
              <div className="w-64 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl shadow-2xl p-4 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-4">
                  <Store className="w-12 h-12 text-emerald-500 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Marketplace</h4>
                  <p className="text-xs text-gray-600 text-center">Tu vitrina digital personalizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              ¿Por qué elegir <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">Express IA</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Atención inmediata", desc: "Respuesta inmediata a cada consulta.", color: "bg-yellow-100", iconColor: "#FBBF24" },
              { icon: Rocket, title: "Más ventas", desc: "Acompaña al cliente durante todo el proceso y mantiene la conversación activa hasta convertirla en una venta.", color: "bg-green-100", iconColor: "#10B981" },
              { icon: Flag, title: "Menos tareas repetitivas", desc: "Automatiza la atención para que tus colaboradores se concentren en tareas estratégicas que realmente generen valor.", color: "bg-cyan-100", iconColor: "#06B6D4" },
              { icon: Settings, title: "Mayor control", desc: "Te brindamos un panel administrativo intuitivo donde puedes gestionar todos los aspectos del servicio y el rendimiento.", color: "bg-blue-100", iconColor: "#3B82F6" },
              { icon: CheckCircle2, title: "Disponible siempre", desc: "Nuestro sistema no descansa y siempre está listo para atender a tus clientes sin importar la hora o el día.", color: "bg-pink-100", iconColor: "#EC4899" },
              { icon: Store, title: "Fácil de usar", desc: "Instalación y configuración simple. Toda la información se centraliza para que puedas tomar decisiones con mayor rapidez y claridad.", color: "bg-purple-100", iconColor: "#A855F7" }
            ].map((item, i) => (
              <div key={i} className={`${item.color} rounded-lg p-6`}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: item.iconColor}}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontSize: '17px'}}>{item.title}</h3>
                <p className="text-gray-700" style={{fontSize: '12px'}}>{item.desc}</p>
              </div>
            ))}
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
              { number: "01", title: "Análisis y Configuración", desc: "Entendemos tu negocio y configuramos Express UI según tus necesidades.", icon: Settings, iconColor: "#0066FF", bgColor: "#dbeafe" },
              { number: "02", title: "Integración de Datos", desc: "Conectamos tus bases de datos, inventario y procesos en la plataforma.", icon: BookOpen, iconColor: "#7C3AED", bgColor: "#f3e8ff" },
              { number: "03", title: "Entrenamiento de IA", desc: "Personalizamos la inteligencia artificial con tu voz y procesos únicos.", icon: Rocket, iconColor: "#10B981", bgColor: "#d1fae5" },
              { number: "04", title: "Integración WhatsApp", desc: "Configuramos Express en tu WhatsApp Business para uso comercial.", icon: Flag, iconColor: "#EF4444", bgColor: "#fee2e2" },
              { number: "05", title: "Pruebas y Ajustes", desc: "Realizamos pruebas exhaustivas y hacemos los últimos ajustes.", icon: CheckCircle2, iconColor: "#3B82F6", bgColor: "#dbeafe" },
              { number: "06", title: "Lanzamiento en Vivo", desc: "¡Tu expresión digital está lista! Comienza a ver resultados generales.", icon: Rocket, iconColor: "#EF4444", bgColor: "#fee2e2" }
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
                desc: "Automatiza pedidos, confirmaciones y entregas a través de WhatsApp"
              },
              {
                title: "Domicilios",
                icon: Truck,
                gradientClass: "from-green-400 to-emerald-500",
                buttonGradient: "from-green-400 to-emerald-500",
                desc: "Gestiona solicitudes, tarifas y seguimiento de entregas automáticamente"
              },
              {
                title: "Comercio",
                icon: Store,
                gradientClass: "from-purple-400 to-pink-500",
                buttonGradient: "from-purple-400 to-pink-500",
                desc: "Controla inventario, catálogo y pedidos de tu tienda digital"
              }
            ].map((business, i) => {
              return (
                <div key={i} className="flex flex-col bg-white rounded-2xl p-6" style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,.05)',
                  minHeight: '550px', height: '558px', backgroundColor: i === 0 ? '#ebfcff' : i === 1 ? '#ebfff6' : '#fbf0ff'
                }}>
                  <div>
                    <div className={`w-18 h-18 bg-gradient-to-br ${business.gradientClass} rounded-lg flex items-center justify-center mb-6 flex-shrink-0`} style={{
                      width: '56px',
                      height: '56px'
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

      {/* Plans Section */}
      <section id="plans" className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Planes adaptados para tu negocio
            </h2>
            <p className="text-lg text-gray-600">
              Elige el plan que se ajuste a tus necesidades y presupuesto
            </p>
          </div>

          {/* Restaurantes Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Express IA para Restaurantes</h3>
            <p className="text-gray-700 mb-8">Convierte WhatsApp en tu nuevo canal de ventas.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              <div className="rounded-2xl p-6 bg-white border border-gray-200">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Plan Estándar</h4>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Consultar el menú</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Preguntar por productos</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Realizar pedidos</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Recibir confirmaciones</span></li>
                </ul>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded-lg text-sm">Elegir plan</Button>
              </div>
              <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-3">Plan con Delivery</h4>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Todo del plan estándar</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Consultar estados de entrega</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Coordinar entregas</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Notificación a cocina automática</span></li>
                </ul>
                <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-bold py-2 rounded-lg text-sm">Elegir plan</Button>
              </div>
            </div>
          </div>

          {/* Domicilios Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Express IA Domicilios</h3>
            <p className="text-gray-700 mb-8">Gestiona todo tu servicio de entregas de forma automática.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-3">Plan Único</h4>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Solicitud de domicilios por WhatsApp</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Cálculo de tarifas automático</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Notificación a domiciliarios</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Seguimiento en tiempo real</span></li>
                </ul>
                <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-bold py-2 rounded-lg text-sm">Elegir plan</Button>
              </div>
            </div>
          </div>

          {/* Comercio Plans */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Express IA Comercio</h3>
            <p className="text-gray-700 mb-8">Ideal para negocios que venden productos.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              <div className="rounded-2xl p-6 bg-white border border-gray-200">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Plan Estándar</h4>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Administrar catálogo</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Gestionar inventario</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Recibir pedidos</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" /><span>Atención automática</span></li>
                </ul>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded-lg text-sm">Elegir plan</Button>
              </div>
              <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-3">Plan con Delivery</h4>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Todo del plan estándar</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Marketplace personalizado</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Integración de entregas</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-100" /><span>Vitrina digital personalizada</span></li>
                </ul>
                <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-bold py-2 rounded-lg text-sm">Elegir plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa', paddingBottom: '50px', paddingTop: '50px'}}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Cómo funciona Express IA?",
                a: "Express IA se integra con tu WhatsApp Business y utiliza inteligencia artificial para responder automáticamente a tus clientes, procesar pedidos y gestionar tu operación 24/7."
              },
              {
                q: "¿Cuánto tiempo toma la implementación?",
                a: "El proceso de implementación típicamente toma entre 5-7 días hábiles, dependiendo de la complejidad de tu operación y la cantidad de datos a integrar."
              },
              {
                q: "¿Puedo cambiar de plan después?",
                a: "Sí, puedes cambiar de plan en cualquier momento. Simplemente contacta a nuestro equipo y te ayudaremos con la transición."
              },
              {
                q: "¿Qué sucede si tengo un problema?",
                a: "Contamos con soporte prioritario 24/7 para resolver cualquier inconveniente. Puedes contactarnos por WhatsApp, email o teléfono."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <span className="text-xl font-bold">EXPRESS IA</span>
              </div>
              <p className="text-gray-400">Tu empleado digital 24/7</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Características</a></li>
                <li><a href="#" className="hover:text-white">Planes</a></li>
                <li><a href="#" className="hover:text-white">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Express IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
