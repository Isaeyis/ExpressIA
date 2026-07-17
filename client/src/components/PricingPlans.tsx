import { useState } from "react";
import { CheckCircle2, UtensilsCrossed, Truck, Store, Palette, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type BusinessType = "restaurantes" | "domicilios" | "comercio";

interface Plan {
  name: string;
  createAppPrice: string;
  monthlyPrice: string;
  features: string[];
  isPremium: boolean;
}

const plansData: Record<BusinessType, Plan[]> = {
  restaurantes: [
    {
      name: "Estándar",
      createAppPrice: "$450K",
      monthlyPrice: "$350K",
      features: [
        "Convertir menú",
        "Preguntar sobre productos",
        "Realizar pedidos",
        "Confirmaciones automáticas",
        "Notificación a cocina",
        "Seguimiento de entregas",
        "Hasta 1,000 conversaciones/mes",
      ],
      isPremium: false,
    },
    {
      name: "Premium",
      createAppPrice: "$690K",
      monthlyPrice: "$590K",
      features: [
        "Todo del plan Estándar",
        "Solicitud de domicilios por WhatsApp",
        "Cálculo automático de tarifas",
        "Notificación a domiciliarios",
        "Aceptación de pedidos",
        "Actualización de estados en tiempo real",
        "Hasta 5,000 conversaciones/mes",
      ],
      isPremium: true,
    },
  ],
  domicilios: [
    {
      name: "Domicilios",
      createAppPrice: "$450K",
      monthlyPrice: "$350K",
      features: [
        "Solicitud de domicilios por WhatsApp",
        "Cálculo de tarifas",
        "Notificación a domiciliarios disponibles",
        "Aceptación de servicios",
        "Actualización de estados",
        "Seguimiento del pedido",
        "Cliente, domiciliario y negocio conectados en un solo flujo",
      ],
      isPremium: false,
    },
  ],
  comercio: [
    {
      name: "Estándar",
      createAppPrice: "$450K",
      monthlyPrice: "$350K",
      features: [
        "Administrar catálogo",
        "Gestionar productos",
        "Control de inventario",
        "Disponibilidad de productos",
        "Gestión de pedidos",
        "Atención automática",
        "Hasta 1,000 conversaciones/mes",
      ],
      isPremium: false,
    },
    {
      name: "Premium",
      createAppPrice: "$690K",
      monthlyPrice: "$590K",
      features: [
        "Todo del plan Estándar",
        "Marketplace personalizado",
        "Vitrina digital personalizada",
        "Solicitud de domicilios por WhatsApp",
        "Cálculo automático de tarifas",
        "Notificación a domiciliarios",
        "Hasta 5,000 conversaciones/mes",
      ],
      isPremium: true,
    },
  ],
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className={`grid gap-5 ${
            plans.length === 1 ? "max-w-sm mx-auto" : "md:grid-cols-2 max-w-3xl mx-auto"
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
                  className="absolute -top-3 right-6 w-14 h-16 shadow-lg flex flex-col items-center pt-2.5 animate-ribbon-shine text-gray-950 z-10"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                  }}
                >
                  <Star className="w-3.5 h-3.5 fill-gray-950 text-gray-950 mb-1 animate-pulse" />
                  <span className="text-[8.5px] font-black uppercase tracking-wider text-center leading-none">
                    Popular
                  </span>
                </div>
              )}
              {/* Plan Name */}
              <div className="mb-4">
                <h3 className={`text-xl sm:text-[22px] font-black tracking-tight ${
                  plan.isPremium ? "text-white drop-shadow-sm" : "text-gray-900"
                }`}>
                  {plan.name}
                </h3>
              </div>

              {/* Pricing */}
              <div className="mb-4 pb-4 border-b border-opacity-20" style={{borderColor: plan.isPremium ? "white" : "#e5e7eb"}}>
                <div className="mb-3">
                  <p className={`text-[11px] font-medium mb-0.5 ${plan.isPremium ? "text-white/90" : "text-gray-600"}`}>
                    Costo único (Incluye implementación):
                  </p>
                  <p className="text-xl font-bold" style={{fontSize: '18px'}}>{plan.createAppPrice}</p>
                </div>
                <div>
                  <p className={`text-[11px] font-medium mb-0.5 ${plan.isPremium ? "text-white/90" : "text-gray-600"}`}>
                    Mensual:
                  </p>
                  <p className="text-xl font-bold" style={{fontSize: '18px'}}>{plan.monthlyPrice}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-5">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        plan.isPremium ? "text-white" : "text-emerald-500"
                      }`}
                    />
                    <span className={`text-[11.5px] leading-relaxed ${plan.isPremium ? "text-white" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-1.5 font-bold rounded-lg transition-all duration-300 text-xs mt-auto ${
                  plan.isPremium
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white"
                }`}
              >
                Elegir plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
