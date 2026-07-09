import React, { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, CheckCircle2, Store, Zap, Users, Phone, MessageSquare, Headphones } from 'lucide-react';
import ProcessFlow from '@/components/ProcessFlow';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <span className="font-black text-xl text-gray-900">EXPRESS IA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Características</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Planes</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">FAQ</a>
          </nav>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
            Comenzar Ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Tu empleado digital que atiende, vende y opera <span className="text-emerald-500">24/7</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Nunca vuelvas a perder una venta por no responder un WhatsApp.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Mientras tú atiendes tu negocio Express IA responde clientes, recibe pedidos, agenda servicios y automatiza tu operación las 24 horas del día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-3 font-bold">
                  Adquiere Express IA
                </Button>
                <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 font-bold">
                  Ver como funciona
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl">
                <div className="bg-gray-800 rounded-2xl p-4 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <p className="text-white font-semibold">Chat Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="py-6 bg-emerald-500 text-white overflow-hidden">
        <div className="flex items-center gap-8 animate-scroll whitespace-nowrap">
          <span className="flex items-center gap-2 text-lg font-bold">✨ Automatización 24/7 • WhatsApp Business • Automatiza tu WhatsApp • Inteligencia Artificial ✨</span>
          <span className="flex items-center gap-2 text-lg font-bold">✨ Automatización 24/7 • WhatsApp Business • Automatiza tu WhatsApp • Inteligencia Artificial ✨</span>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{fontSize: '60px'}}>
              ¿Cuántas ventas estás <span className="text-emerald-500">perdiendo</span> ahora mismo?
            </h2>
            <div className="inline-block bg-red-100 text-red-700 px-6 py-3 rounded-full font-bold text-xl">
              $54 en ventas perdidas esta semana
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sin Express IA */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-black">✕</span>
                </div>
                Sin Express IA
              </h3>
              <div className="space-y-4">
                {[
                  'Cliente esperando respuesta en WhatsApp',
                  'WhatsApp saturado de mensajes',
                  'Operación manual y lenta',
                  'Pérdida de ventas por no responder'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">✕</span>
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Con Express IA */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                Con Express IA
              </h3>
              <div className="space-y-4">
                {[
                  'Respuestas inmediatas a clientes',
                  'Gestión automática de conversaciones',
                  'Automatización total de procesos',
                  'Captura de todas las ventas posibles'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Express IA */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Qué es Express IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a tu nuevo empleado digital, una plataforma de inteligencia artificial diseñada para restaurantes, comercios y empresas de distribución que guarden automatizar su atención y operación.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💬', title: 'Chatbot Inteligente', desc: 'Atiende clientes 24/7' },
              { icon: '✅', title: 'Respuestas Inmediatas', desc: 'Sin esperas' },
              { icon: '📱', title: 'Integración WhatsApp', desc: 'Directamente en el chat' },
              { icon: '⚡', title: 'Automatización Total', desc: 'Procesos sin intervención' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center hover:border-emerald-300 transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      {/* NUEVA SECCIÓN: Obtén Express IA y te regalamos un Marketplace - REGALO ESPECIAL */}
      <section className="py-24 md:py-40 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f0fdf4 50%, #fafafa 100%)'
      }}>
        {/* Elementos decorativos de fondo animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl" style={{
            animation: 'float-slow 8s ease-in-out infinite'
          }}></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl" style={{
            animation: 'float-slow 10s ease-in-out infinite reverse'
          }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-50/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" style={{
            animation: 'pulse-slow 6s ease-in-out infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Título principal con emoji regalo */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6 text-6xl animate-bounce" style={{
              animation: 'bounce-gift 2s ease-in-out infinite'
            }}>🎁</div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Obtén Express IA y <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">te regalamos un Marketplace</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
              Acceso instantáneo a +50 integraciones premium, automatizaciones y soporte prioritario
            </p>
          </div>

          {/* Layout dinámico y creativo - SIN CUADRITOS */}
          <div className="relative space-y-12">
            {/* Elemento 1 - Grande y diagonal */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 relative" style={{
                animation: 'slide-in-left 0.8s ease-out'
              }}>
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border-2 border-emerald-200/50 p-12 overflow-hidden hover:border-emerald-400 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{
                        animation: 'rotate-slow 20s linear infinite'
                      }}>
                        <Store className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-gray-900 mb-3">+50 Integraciones Premium</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">Conecta con todas tus herramientas favoritas. CRM, sistemas de pago, redes sociales, email marketing y mucho más. Todo integrado en un solo lugar.</p>
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg group-hover:gap-4 transition-all duration-300 cursor-pointer">
                          <span>✨ Explorar Integraciones</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elemento visual flotante */}
              <div className="hidden md:flex justify-center items-center" style={{
                animation: 'float-main 4s ease-in-out infinite'
              }}>
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-emerald-100/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border-2 border-emerald-200/50 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento 2 - Mediano a la derecha */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Elemento visual */}
              <div className="hidden md:flex justify-center items-center" style={{
                animation: 'float-main 4s ease-in-out infinite 0.5s'
              }}>
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-100/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border-2 border-cyan-200/50 flex items-center justify-center">
                    <div className="text-5xl">⚡</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 relative" style={{
                animation: 'slide-in-right 0.8s ease-out 0.1s both'
              }}>
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border-2 border-cyan-200/50 p-12 overflow-hidden hover:border-cyan-400 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{
                        animation: 'pulse-icon 2s ease-in-out infinite'
                      }}>
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-gray-900 mb-3">Automatizaciones Listas para Usar</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">Flujos pre-configurados que puedes implementar en minutos. Sin necesidad de programación, solo configura y comienza a automatizar tu negocio.</p>
                        <div className="flex items-center gap-2 text-cyan-600 font-bold text-lg group-hover:gap-4 transition-all duration-300 cursor-pointer">
                          <span>🔧 Descubrir Automatizaciones</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento 3 - Soporte centrado y destacado */}
            <div className="flex justify-center mt-16" style={{
              animation: 'slide-up 0.8s ease-out 0.2s both'
            }}>
              <div className="w-full md:max-w-2xl relative bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl rounded-3xl border-2 border-teal-200/50 p-12 overflow-hidden hover:border-teal-400 transition-all duration-500 group" style={{
                boxShadow: '0 20px 60px rgba(16, 185, 129, 0.1)'
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-32 right-0 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg" style={{
                    animation: 'bounce-icon 2s ease-in-out infinite'
                  }}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">Soporte 24/7 Prioritario</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto">Equipo experto disponible en todo momento para resolver tus dudas, optimizar tu experiencia y ayudarte a sacar el máximo provecho del Marketplace.</p>
                  <div className="flex items-center justify-center gap-2 text-teal-600 font-bold text-lg group-hover:gap-4 transition-all duration-300 cursor-pointer">
                    <span>📞 Contactar Soporte</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal - Muy destacado */}
          <div className="text-center mt-20" style={{
            animation: 'fade-in 1s ease-out 0.5s both'
          }}>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xl px-16 py-6 font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all" style={{borderRadius: '16px'}}>
              🎉 Reclamar Mi Marketplace Ahora
            </Button>
            <p className="text-gray-600 text-base mt-6 font-semibold">Sin tarjeta de crédito. Acceso instantáneo. Oferta limitada.</p>
          </div>
        </div>

        {/* Estilos de animación */}
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(40px); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
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
          @keyframes float-main {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-icon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes bounce-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bounce-gift {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* Express IA para tu negocio */}
      <section className="py-16 md:py-24 bg-white" style={{backgroundColor: '#fafafa'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Express IA para tu negocio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🍽️', title: 'Restaurantes', desc: 'Gestiona pedidos automaticamente' },
              { icon: '🏪', title: 'Comercios', desc: 'Atiende clientes 24/7' },
              { icon: '📱', title: 'Domicilios', desc: 'Automatiza entregas' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              { q: '¿Cómo funciona Express IA?', a: 'Express IA se integra con WhatsApp Business para automatizar respuestas y procesos.' },
              { q: '¿Cuál es el costo?', a: 'Contamos con planes flexibles según el tamaño de tu negocio.' },
              { q: '¿Necesito instalación?', a: 'No, 100% en la nube. Solo conecta tu WhatsApp Business.' }
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Express IA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
