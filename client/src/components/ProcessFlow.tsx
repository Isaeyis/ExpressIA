import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  bullets: string[];
}

const ProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'Cliente',
      subtitle: 'Cliente manual',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      bullets: ['Atiende clientes 24/7', 'Responde preguntas automáticamente'],
    },
    {
      id: 2,
      title: 'Express IA',
      subtitle: 'Procesa automáticamente',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
      bullets: ['Recibe el pedido', 'Gestiona los domicilios'],
    },
    {
      id: 3,
      title: 'Negocio',
      subtitle: 'Recibe información',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50',
      bullets: ['Coordina colaboradores', 'Mantiene informado al cliente'],
    },
    {
      id: 4,
      title: 'Domicilio',
      subtitle: 'Se asigna automáticamente',
      icon: <Truck className="w-6 h-6" />,
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      bullets: ['Control inventario', 'Organiza la operación del negocio'],
    },
  ];

  // Cambiar el paso activo cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es Express IA?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conoce a tu nuevo empleado digital, una plataforma de inteligencia artificial diseñada para restaurantes, comercios y empresas de domicilios que quieren automatizar su atención y operación.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Contenedor de pasos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Card del paso */}
                <div
                  className={`rounded-2xl p-5 transition-all duration-500 transform relative ${
                    step.bgColor
                  } border-2 ${
                    activeStep === index
                      ? `border-current animate-pulse`
                      : 'border-gray-200'
                  }`}
                  style={
                    activeStep === index
                      ? {
                          borderColor: step.color.includes('blue')
                            ? '#3b82f6'
                            : step.color.includes('emerald')
                            ? '#10b981'
                            : step.color.includes('teal')
                            ? '#14b8a6'
                            : '#ef4444',
                          boxShadow: `0 0 0 2px ${
                            step.color.includes('blue')
                              ? '#3b82f6'
                              : step.color.includes('emerald')
                              ? '#10b981'
                              : step.color.includes('teal')
                              ? '#14b8a6'
                              : '#ef4444'
                          }20`,
                          animation: 'pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        }
                      : {}
                  }
                >
                  {/* Check en esquina superior derecha para pasos completados */}
                  {index < activeStep && (
                    <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1 shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  )}

                  {/* Icono */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-3 mx-auto transition-all duration-500 ${
                      activeStep === index ? 'shadow-lg scale-110' : 'scale-100'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3
                    className={`text-lg font-bold text-center mb-1 transition-all duration-500 ${
                      activeStep === index ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Subtítulo */}
                  <p
                    className={`text-xs text-center mb-3 transition-all duration-500 ${
                      activeStep === index ? 'text-gray-700' : 'text-gray-500'
                    }`}
                  >
                    {step.subtitle}
                  </p>

                  {/* Viñetas */}
                  <div className="space-y-2">
                    {step.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-emerald-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p
                          className={`text-xs transition-all duration-500 ${
                            activeStep === index
                              ? 'text-gray-700 opacity-100'
                              : 'text-gray-600 opacity-75'
                          }`}
                        >
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flecha dinámica (solo cuando está activo) */}
                {activeStep === index && index < steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden md:flex">
                    <div className="animate-bounce text-emerald-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Barra de progreso animada */}
          <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full transition-all duration-500"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-border {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow;
