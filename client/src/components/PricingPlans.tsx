import { useState } from "react";
import { CheckCircle2, UtensilsCrossed, Truck, Store, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type BusinessType = "restaurantes" | "domicilios" | "comercio";

interface Plan {
  name: string;
  description: string;
  createAppPrice: string;
  monthlyPrice: string;
  features: string[];
  isPremium: boolean;
  badge?: string;
  whatsappLink: string;
}

const planExpress: Plan = {
  name: "PLAN EXPRESS",
  description: "Para negocios de mensajería y domicilios que necesitan ordenar y despachar rápido.",
  createAppPrice: "$450.000",
  monthlyPrice: "$380.000 COP/mes",
  features: [
    "Bot de pedidos por WhatsApp 24/7",
    "Toma de pedidos guiada paso a paso",
    "Gestión de domicilios y asignación de conductores",
    "Seguimiento de estados del pedido en tiempo real",
    "Cálculo automático de tarifas por distancia",
    "Panel de administración web",
    "Notificaciones automáticas a tu equipo",
    "Registro de clientes y direcciones",
  ],
  isPremium: false,
  whatsappLink: "https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C%20estoy%20interesado%20en%20adquirir%20el%20PLAN%20EXPRESS",
};

const planNegocio: Plan = {
  name: "PLAN NEGOCIO",
  description: "Para restaurantes y tiendas que venden por WhatsApp con catálogo completo.",
  createAppPrice: "$690.000",
  monthlyPrice: "$490.000 COP/mes",
  features: [
    "Bot de pedidos por WhatsApp 24/7",
    "Toma de pedidos y gestión de domicilios",
    "Seguimiento en tiempo real y panel web",
    "Catálogo digital de productos con fotos",
    "Menú web compartible por link",
    "Carrito de compras integrado",
    "Múltiples medios de pago (efectivo, transferencia, link, crédito)",
    "Comprobantes de pago con validación",
    "Recogida en tienda y comer en el local (mesas)",
    "Control de inventario y referencias por producto",
    "Pedidos fuera de horario",
    "Reportes de ventas",
  ],
  isPremium: false,
  whatsappLink: "https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C%20estoy%20interesado%20en%20adquirir%20el%20PLAN%20NEGOCIO",
};

const planInteligente: Plan = {
  name: "PLAN INTELIGENTE",
  description: "Para negocios que buscan un asesor virtual que venda y converse de forma natural, como una persona.",
  createAppPrice: "$990.000",
  monthlyPrice: "$800.000 COP/mes",
  features: [
    "Bot 24/7, catálogo y carrito de compras",
    "Asistente con Inteligencia Artificial conversacional",
    "Atención natural y humana con la personalidad de tu marca",
    "Recomendaciones inteligentes de productos",
    "Responde dudas sobre tu catálogo al instante",
    "Sugiere complementos y combos de forma natural",
    "Manejo de objeciones de precio",
    "Envío de fotos de productos en la conversación",
    "Escalamiento a asesor humano cuando se necesite",
    "Personalización del tono y estilo de tu asistente",
  ],
  isPremium: true,
  badge: "Popular",
  whatsappLink: "https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C%20estoy%20interesado%20en%20adquirir%20el%20PLAN%20INTELIGENTE",
};

const planFullLogistic: Plan = {
  name: "PLAN FULL LOGISTIC",
  description: "Solución completa: el asistente inteligente más nosotros operando tus domicilios.",
  createAppPrice: "$1.000.000",
  monthlyPrice: "$1.500.000 COP/mes",
  features: [
    "Asistente inteligente y toma de pedidos integrados",
    "Operación logística gestionada por Making Apps",
    "Flota de conductores a tu disposición (sin contratar motorizados)",
    "Tarifas de domicilio ya configuradas",
    "Gestión de despacho desde nuestro centro de operaciones",
    "Monitoreo de servicios en tiempo real por nuestro equipo",
    "Alertas y resolución de incidencias las manejamos nosotros",
    "Tu negocio solo recibe pedidos; del domicilio nos encargamos",
  ],
  isPremium: false,
  whatsappLink: "https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C%20estoy%20interesado%20en%20adquirir%20el%20PLAN%20FULL%20LOGISTIC",
};

const plansData: Record<BusinessType, Plan[]> = {
  restaurantes: [planNegocio, planInteligente, planFullLogistic],
  domicilios: [planExpress],
  comercio: [planNegocio, planInteligente, planFullLogistic],
};

export default function PricingPlans({
  selectedType: externalType,
  onTypeChange
}: {
  selectedType?: BusinessType;
  onTypeChange?: (type: BusinessType) => void;
}) {
  const [internalType, setInternalType] = useState<BusinessType>("restaurantes");

  const selectedType = externalType ?? internalType;
  const setSelectedType = onTypeChange ?? setInternalType;

  const plans = plansData[selectedType];

  return (
    <section id="plans" className="py-12 md:py-16 bg-white">
      <style>{`
        @keyframes ribbon-shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-ribbon-shine {
          background: linear-gradient(120deg, #d97706 20%, #fef08a 50%, #d97706 80%);
          background-size: 200% 100%;
          animation: ribbon-shine 3s infinite linear;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">PLANES DE PRECIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Planes adaptados <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">a tu negocio</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Elige el plan que se ajuste a tus necesidades y presupuesto
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedType("restaurantes")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedType === "restaurantes"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            Restaurantes
          </button>
          <button
            onClick={() => setSelectedType("domicilios")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedType === "domicilios"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Truck className="w-4 h-4" />
            Domicilios
          </button>
          <button
            onClick={() => setSelectedType("comercio")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedType === "comercio"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Store className="w-4 h-4" />
            Comercio
          </button>
        </div>

        {/* Plans Grid */}
        <div
          className={`grid gap-6 mx-auto items-stretch ${
            plans.length === 1
              ? "max-w-sm grid-cols-1"
              : plans.length === 2
              ? "max-w-3xl grid-cols-1 md:grid-cols-2"
              : plans.length === 3
              ? "max-w-6xl grid-cols-1 md:grid-cols-3"
              : "max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-5 transition-all duration-300 flex flex-col animate-fade-in-up hover:shadow-2xl hover:-translate-y-1.5 ${
                plan.isPremium
                  ? "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white shadow-2xl"
                  : "bg-white border-2 border-gray-200 text-gray-900 shadow-lg hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.isPremium && (
                <div 
                  className="absolute -top-3 right-6 w-16 h-16 shadow-lg flex flex-col items-center pt-2.5 animate-ribbon-shine text-gray-950 z-10"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                  }}
                >
                  <Star className="w-3.5 h-3.5 fill-gray-950 text-gray-950 mb-0.5 animate-pulse" />
                  <span className="text-[7.5px] font-black uppercase tracking-wider text-center leading-none px-0.5 whitespace-nowrap">
                    {plan.badge || "Popular"}
                  </span>
                </div>
              )}

              {/* Plan Name & Tagline */}
              <div className="mb-4">
                <h3 className={`text-xl font-black tracking-tight ${
                  plan.isPremium ? "text-white drop-shadow-sm" : "text-gray-900"
                }`}>
                  {plan.name}
                </h3>
                {plan.description && (
                  <p className={`text-[11.5px] leading-snug mt-2 ${
                    plan.isPremium ? "text-white/90" : "text-gray-600"
                  }`}>
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Pricing */}
              <div className="mb-4 pb-4 border-b border-opacity-20" style={{borderColor: plan.isPremium ? "white" : "#e5e7eb"}}>
                <div className="mb-3">
                  <p className={`text-[11px] font-medium mb-0.5 ${plan.isPremium ? "text-white/90" : "text-gray-600"}`}>
                    Implementación (Pago único):
                  </p>
                  <p className="text-base font-bold">{plan.createAppPrice}</p>
                </div>
                <div>
                  <p className={`text-[11px] font-medium mb-0.5 ${plan.isPremium ? "text-white/90" : "text-gray-600"}`}>
                    Mensual:
                  </p>
                  <p className="text-lg font-black">{plan.monthlyPrice}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        plan.isPremium ? "text-white" : "text-emerald-500"
                      }`}
                    />
                    <span className={`text-[11.5px] leading-relaxed ${
                      plan.isPremium ? "text-white/95" : "text-gray-700"
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={plan.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto block"
              >
                <Button
                  className={`w-full py-2 font-bold rounded-lg transition-all duration-300 text-xs ${
                    plan.isPremium
                      ? "bg-white text-purple-600 hover:bg-gray-100 shadow-md hover:shadow-lg"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg"
                  }`}
                >
                  Elegir plan
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



