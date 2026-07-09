import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WhatsAppChat from "@/components/WhatsAppChat";
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Tu empleado digital que atiende, vende y opera{" "}
                <span className="text-emerald-500">24/7</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Inteligencia artificial para negocios que crecen más rápido y automatizan su operación en WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-8 py-6">
                  Agendar Llamada
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-base px-8 py-6"
                >
                  Ver Demo
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <WhatsAppChat />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Comparativa "Ahora Mismo" vs Express IA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cuántas ventas estás perdiendo mientras tus clientes esperan una respuesta?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Cada segundo que tu cliente espera una respuesta en WhatsApp, se convierte en una oportunidad de venta que se ve a la competencia.
            </p>
            <div className="inline-block bg-red-100 text-red-700 text-xl font-bold px-6 py-3 rounded-full mb-12">
              $313 en ventas perdidas esta sesión
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sin Express IA */}
            <Card className="p-8 bg-red-50 border-0 shadow-md">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Sin Express IA</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-red-700">
                  <User className="w-6 h-6 flex-shrink-0" />
                  <span>Cliente esperando</span>
                </li>
                <li className="flex items-center gap-3 text-red-700">
                  <MessageCircle className="w-6 h-6 flex-shrink-0" />
                  <span>WhatsApp saturado</span>
                </li>
              </ul>
            </Card>

            {/* Con Express IA */}
            <Card className="p-8 bg-emerald-50 border-0 shadow-md">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Con Express IA</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-emerald-700">
                  <Zap className="w-6 h-6 flex-shrink-0" />
                  <span>Respuesta inmediata</span>
                </li>
                <li className="flex items-center gap-3 text-emerald-700">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span>Automatización total</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Redesigned What is Express IA - Flow Diagram */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué es Express IA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un nuevo empleado digital, una plataforma de inteligencia artificial diseñada para consultantes, comercios y empresas de domicilios que quieren automatizar su atención y operación.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative">
            {/* Express IA Card */}
            <Card className="p-6 text-center shadow-md border-0 bg-gray-50 w-full md:w-1/3">
              <Lightbulb className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Express IA</h3>
              <p className="text-gray-700 text-sm">Procesa automáticamente</p>
            </Card>

            {/* Arrow 1 */}
            <div className="hidden md:block absolute left-[30%] top-1/2 -translate-y-1/2 w-16 h-1 bg-emerald-500">
              <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500" />
            </div>
            <div className="block md:hidden absolute top-[30%] left-1/2 -translate-x-1/2 h-16 w-1 bg-emerald-500">
              <ArrowRight className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-90 w-6 h-6 text-emerald-500" />
            </div>

            {/* Negocio Card */}
            <Card className="p-6 text-center shadow-md border-0 bg-emerald-50 w-full md:w-1/3">
              <Store className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Negocio</h3>
              <p className="text-emerald-700 text-sm mb-4">Recibe información</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Coordina colaboradores</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Mantiene informado al cliente</span>
                </li>
              </ul>
            </Card>

            {/* Arrow 2 */}
            <div className="hidden md:block absolute right-[30%] top-1/2 -translate-y-1/2 w-16 h-1 bg-emerald-500">
              <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500" />
            </div>
            <div className="block md:hidden absolute bottom-[30%] left-1/2 -translate-x-1/2 h-16 w-1 bg-emerald-500">
              <ArrowRight className="absolute top-0 left-1/2 -translate-x-1/2 -rotate-90 w-6 h-6 text-emerald-500" />
            </div>

            {/* Cliente Card */}
            <Card className="p-6 text-center shadow-md border-0 bg-gray-50 w-full md:w-1/3">
              <User className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cliente</h3>
              <p className="text-gray-700 text-sm">Se asigna automáticamente</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions by Business Type (Mantener) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Express IA para tu negocio
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones adaptadas a cada tipo de negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurantes",
                icon: "🍽️",
                color: "blue",
                features: [
                  "Recibir pedidos automáticamente",
                  "Confirmar disponibilidad",
                  "Notificar estado del pedido",
                  "Gestionar reservas",
                  "Enviar promociones",
                  "Coordinar entregas",
                ],
              },
              {
                title: "Domicilios",
                icon: "🚚",
                color: "green",
                features: [
                  "Gestionar pedidos en tiempo real",
                  "Asignar repartidores",
                  "Notificar entregas",
                  "Cobrar automáticamente",
                  "Recibir calificaciones",
                  "Optimizar rutas",
                ],
              },
              {
                title: "Comercio",
                icon: "🛍️",
                color: "purple",
                features: [
                  "Mostrar catálogo de productos",
                  "Procesar pagos en línea",
                  "Gestionar inventario",
                  "Enviar confirmaciones",
                  "Atender devoluciones",
                  "Generar reportes",
                ],
              },
            ].map((solution, i) => (
              <Card key={i} className="p-8 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.title}</h3>
                <ul className="space-y-3">
                  {solution.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Why Choose Express IA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Express IA?
            </h2>
            <p className="text-lg text-gray-600">
              Beneficios clave que transforman tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Análisis y Configuración",
                desc: "Simplificamos la integración y configuramos Express IA a tu medida.",
                icon: Settings,
                color: "bg-blue-100 text-blue-700",
              },
              {
                title: "Integración de Datos",
                desc: "Conectamos tu catálogo, clientes y procesos en la plataforma.",
                icon: Database,
                color: "bg-purple-100 text-purple-700",
              },
              {
                title: "Entrenamiento de IA",
                desc: "Personalizamos la inteligencia artificial para entender y atender a tus clientes.",
                icon: Lightbulb,
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                title: "Soporte Continuo",
                desc: "Nuestro equipo está disponible para ayudarte en cada paso.",
                icon: MessageCircle,
                color: "bg-yellow-100 text-yellow-700",
              },
              {
                title: "Optimización Constante",
                desc: "Mejoramos continuamente la IA para un rendimiento óptimo.",
                icon: TrendingUp,
                color: "bg-red-100 text-red-700",
              },
              {
                title: "Reportes Personalizados",
                desc: "Accede a métricas clave para tomar decisiones informadas.",
                icon: DollarSign,
                color: "bg-indigo-100 text-indigo-700",
              },
            ].map((benefit, i) => (
              <Card key={i} className={`p-6 border-0 shadow-md ${benefit.color}`}>
                <benefit.icon className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section (Mantener) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementación acompañada
            </h2>
            <p className="text-lg text-gray-600">
              Soporte a cada paso de tu camino. Tenemos todo. Llámanos
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/manus-storage/dashboard-control-panel_7f29fb4e.png"
              alt="Dashboard de Control"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Consultoría Inicial",
              "Configuración",
              "Organización del Negocio",
              "Pruebas y puesta en marcha",
            ].map((step, i) => (
              <Button
                key={i}
                variant="outline"
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              >
                {step}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Mantener) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600">
              Historias reales de negocios transformados por Express IA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Laura Martín",
                company: "Restaurante El Sabor",
                stars: 5,
                text: "Desde que implementamos Express IA, nuestros pedidos se incrementaron en un 40% en la primera semana. Los clientes aman la rapidez de respuesta.",
                stat: "+40% en ventas en la primera semana",
              },
              {
                name: "Carlos López",
                company: "Domicilios Rápido",
                stars: 5,
                text: "La automatización de pedidos nos permitió reducir el tiempo de respuesta de 15 minutos a segundos. Nuestros clientes están más satisfechos.",
                stat: "+60% en eficiencia operativa",
              },
              {
                name: "María González",
                company: "Tienda Online MG",
                stars: 5,
                text: "Express IA maneja el 80% de nuestras consultas automáticamente. Nuestro equipo ahora se enfoca en tareas de mayor valor.",
                stat: "+80% reducción en carga operativa",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 border-0 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 mb-3">{testimonial.company}</p>
                  <p className="text-sm font-semibold text-emerald-600">{testimonial.stat}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Mantener) */}
      <section id="plans" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes adaptados a tu negocio
            </h2>
            <p className="text-lg text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades y presupuesto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Delivery",
                price: "450.000",
                period: "/mes",
                description: "Perfecto para operaciones de entrega",
                features: [
                  "Integración WhatsApp",
                  "Atención 24/7 de clientes",
                  "Notificación de estados",
                  "Hasta 1,000 conversaciones/mes",
                  "Soporte por email",
                  "Panel básico",
                ],
              },
              {
                name: "Estándar",
                price: "690.000",
                period: "/mes",
                description: "La opción más popular",
                features: [
                  "Todo de Delivery +",
                  "Gestión de inventario",
                  "Hasta 5,000 conversaciones/mes",
                  "Integración con múltiples canales",
                  "Soporte prioritario",
                  "Reportes avanzados",
                ],
                highlighted: true,
              },
              {
                name: "IA",
                price: "990.000",
                period: "/mes",
                description: "Automatización completa",
                features: [
                  "Todo de Estándar +",
                  "IA avanzada personalizada",
                  "Conversaciones ilimitadas",
                  "Análisis predictivo",
                  "Soporte 24/7 dedicado",
                  "Integraciones personalizadas",
                ],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 border-0 flex flex-col ${
                  plan.highlighted ? "ring-2 ring-emerald-500 shadow-xl" : "shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Comenzar Ahora
                </Button>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Características</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Delivery</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Estándar</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">IA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Integración WhatsApp",
                  "Atención 24/7 de clientes",
                  "Notificación de estados",
                  "Hasta 1,000 conversaciones/mes",
                  "Gestión de inventario",
                  "Hasta 5,000 conversaciones/mes",
                  "Integración con múltiples canales",
                  "IA avanzada personalizada",
                  "Conversaciones ilimitadas",
                  "Análisis predictivo",
                  "Soporte 24/7 dedicado",
                  "Integraciones personalizadas",
                ].map((feature, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">{feature}</td>
                    <td className="text-center py-4 px-4">
                      {[0, 1, 2, 3].includes(i) ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {[0, 1, 2, 3, 4, 5, 6].includes(i) ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* New Section: Obtén Express IA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <Store className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Obtén Express IA
            </h2>
            <p className="text-xl mb-8">
              Y te regalamos una Vitrina Digital
            </p>
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg">
              Solicitar asesoría
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section (Mantener) */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Dudas sobre qué plan elegir?
            </h2>
            <p className="text-lg text-gray-600">
              Respuestas a las preguntas más frecuentes
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "¿Puedo cambiar de plan después?",
                a: "Sí, puedes cambiar o actualizar tu plan en cualquier momento. Los cambios se reflejarán en tu próxima facturación.",
              },
              {
                q: "¿Qué incluye el soporte?",
                a: "Todos los planes incluyen soporte por email. El plan Estándar incluye soporte prioritario, y el plan IA incluye soporte 24/7 dedicado.",
              },
              {
                q: "¿Hay contrato a largo plazo?",
                a: "No, todos nuestros planes son mensuales sin compromiso a largo plazo. Puedes cancelar en cualquier momento.",
              },
              {
                q: "¿Cómo funciona la integración con WhatsApp?",
                a: "Nos encargamos de toda la integración técnica. Solo necesitas conectar tu número de WhatsApp Business y estarás listo para empezar.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Mantener) */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Express IA</h4>
              <p className="text-gray-400 text-sm">
                Tu empleado digital que atiende, vende y opera 24/7
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Características</a></li>
                <li><a href="#" className="hover:text-white">Planes</a></li>
                <li><a href="#" className="hover:text-white">Seguridad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
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

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Express IA. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Desarrollado por <span className="font-semibold">Making Apps</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
