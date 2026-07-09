import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, ShoppingBag, Truck, Check } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
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
      icon: <MessageCircle className="w-7 h-7" />,
      color: 'from-blue-400 to-blue-600',
      borderColor: '#3b82f6',
      bgColor: 'bg-blue-50',
      bullets: ['Atiende clientes 24/7', 'Responde preguntas automáticamente'],
    },
    {
      id: 2,
      title: 'Express IA',
      subtitle: 'Procesa automáticamente',
      icon: <Zap className="w-7 h-7" />,
      color: 'from-emerald-400 to-emerald-600',
      borderColor: '#10b981',
      bgColor: 'bg-emerald-50',
      bullets: ['Recibe el pedido', 'Gestiona los domicilios'],
    },
    {
      id: 3,
      title: 'Negocio',
      subtitle: 'Recibe información',
      icon: <ShoppingBag className="w-7 h-7" />,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: '#06b6d4',
      bgColor: 'bg-cyan-50',
      bullets: ['Coordina colaboradores', 'Mantiene informado al cliente'],
    },
    {
      id: 4,
      title: 'Domicilio',
      subtitle: 'Se asigna automáticamente',
      icon: <Truck className="w-7 h-7" />,
      color: 'from-red-400 to-red-600',
      borderColor: '#ef4444',
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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es Express IA?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conoce a tu nuevo empleado digital, una plataforma de inteligencia artificial diseñada para restaurantes, comercios y empresas de domicilios que quieren automatizar su atención y operación.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Contenedor con 4 cuadritos */}
          <div className="flex items-stretch justify-center gap-3 md:gap-4 mb-10">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Card del paso */}
                <div
                  className={`relative flex-1 max-w-sm transition-all duration-500 ${step.bgColor} border-2 rounded-3xl overflow-hidden flex flex-col`}
                  style={{
                    borderColor: activeStep === index ? step.borderColor : '#e5e7eb',
                    padding: '20px 16px',
                    transform: activeStep === index ? 'scale(1.08) translateY(-8px)' : 'scale(1)',
                    boxShadow:
                      activeStep === index
                        ? `0 20px 40px ${step.borderColor}30, inset 0 1px 0 ${step.borderColor}20`
                        : '0 4px 12px rgba(0,0,0,0.08)',
                    animation: activeStep === index ? `pulse-${index} 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite` : 'none',
                    zIndex: activeStep === index ? 10 : 1,
                  }}
                >
                  {/* Check verde sobrepuesto - Completo y estético */}
                  {index < activeStep && (
                    <div 
                      className="absolute -top-3 -right-3 z-30 animate-in fade-in scale-in duration-300"
                      style={{
                        animation: 'scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      <div className="bg-emerald-500 rounded-full p-1.5 shadow-lg border-3 border-white flex items-center justify-center">
                        <Check className="w-5 h-5 text-white stroke-[3]" />
                      </div>
                    </div>
                  )}

                  {/* Icono con animación */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-3 transition-all duration-500 flex-shrink-0`}
                    style={{
                      transform: activeStep === index ? 'scale(1.15) rotate(0deg)' : 'scale(1)',
                      filter: activeStep === index ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-base font-bold text-center text-gray-900 mb-1">
                    {step.title}
                  </h3>

                  {/* Subtítulo - Siempre visible */}
                  <p className="text-xs text-center text-gray-600 mb-3 leading-snug">
                    {step.subtitle}
                  </p>

                  {/* Viñetas - Solo cuando está activo */}
                  {activeStep === index && (
                    <div className="space-y-2.5 mt-2 pt-3 border-t border-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-400">
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-1">
                            <svg
                              className="w-3.5 h-3.5 text-emerald-500"
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
                          <p className="text-xs text-gray-700 leading-tight">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Flecha conectora con animación fluida */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 flex items-center justify-center px-1 md:px-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        color: activeStep > index ? steps[index].borderColor : '#d1d5db',
                        opacity: activeStep > index ? 1 : 0.4,
                        strokeWidth: activeStep > index ? 2.5 : 2,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Barra de progreso fluida */}
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full transition-all duration-700 ease-out rounded-full"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                backgroundColor: steps[activeStep].borderColor,
                boxShadow: `0 0 20px ${steps[activeStep].borderColor}60`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-0 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(59, 130, 246, 0.1), 0 0 0 8px rgba(59, 130, 246, 0.1);
          }
        }
        @keyframes pulse-1 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(16, 185, 129, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(16, 185, 129, 0.1), 0 0 0 8px rgba(16, 185, 129, 0.1);
          }
        }
        @keyframes pulse-2 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15), inset 0 1px 0 rgba(6, 182, 212, 0.1), 0 0 0 8px rgba(6, 182, 212, 0.1);
          }
        }
        @keyframes pulse-3 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(239, 68, 68, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(239, 68, 68, 0.1), 0 0 0 8px rgba(239, 68, 68, 0.1);
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow;
