import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, ShoppingBag, Truck } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
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
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
      borderColor: '#3b82f6',
      bgColor: 'bg-blue-50',
      bullets: ['Atiende clientes 24/7', 'Responde preguntas automáticamente'],
    },
    {
      id: 2,
      title: 'Express IA',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-emerald-400 to-emerald-600',
      borderColor: '#10b981',
      bgColor: 'bg-emerald-50',
      bullets: ['Recibe el pedido', 'Gestiona los domicilios'],
    },
    {
      id: 3,
      title: 'Negocio',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: '#06b6d4',
      bgColor: 'bg-cyan-50',
      bullets: ['Coordina colaboradores', 'Mantiene informado al cliente'],
    },
    {
      id: 4,
      title: 'Domicilio',
      icon: <Truck className="w-6 h-6" />,
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
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es Express IA?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conoce a tu nuevo empleado digital, una plataforma de inteligencia artificial diseñada para restaurantes, comercios y empresas de domicilios que quieren automatizar su atención y operación.
          </p>
        </div>

        {/* Process Flow - Distribución exacta del PDF */}
        <div className="relative">
          {/* Contenedor principal con 4 cuadritos */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Card del paso - Compacto */}
                <div
                  className={`relative transition-all duration-500 ${step.bgColor} border-2 rounded-2xl overflow-hidden`}
                  style={{
                    borderColor: activeStep === index ? step.borderColor : '#e5e7eb',
                    width: '100%',
                    maxWidth: '140px',
                    padding: activeStep === index ? '16px' : '12px',
                    transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                    boxShadow:
                      activeStep === index
                        ? `0 0 0 12px ${step.borderColor}20, 0 8px 24px ${step.borderColor}40`
                        : 'none',
                    animation: activeStep === index ? `echo-${index} 2s ease-out infinite` : 'none',
                    zIndex: activeStep === index ? 10 : 1,
                  }}
                >
                  {/* Check verde sobrepuesto */}
                  {index < activeStep && (
                    <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-0.5 shadow-lg z-30 border-2 border-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Icono */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-2 transition-all duration-500`}
                    style={{
                      transform: activeStep === index ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-sm font-bold text-center text-gray-900 mb-0">
                    {step.title}
                  </h3>

                  {/* Viñetas - Solo cuando está activo */}
                  {activeStep === index && (
                    <div className="space-y-2 mt-3 animate-in fade-in duration-300">
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-emerald-500"
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

                {/* Flecha entre cuadritos */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        color: activeStep > index ? steps[index].borderColor : '#d1d5db',
                        transition: 'color 0.5s ease-in-out',
                        opacity: activeStep > index ? 1 : 0.3,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Barra de progreso */}
          <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500 rounded-full"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                backgroundColor: steps[activeStep].borderColor,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes echo-0 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7), 0 8px 24px rgba(59, 130, 246, 0.25);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0), 0 8px 24px rgba(59, 130, 246, 0.25);
          }
        }
        @keyframes echo-1 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7), 0 8px 24px rgba(16, 185, 129, 0.25);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(16, 185, 129, 0), 0 8px 24px rgba(16, 185, 129, 0.25);
          }
        }
        @keyframes echo-2 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7), 0 8px 24px rgba(6, 182, 212, 0.25);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(6, 182, 212, 0), 0 8px 24px rgba(6, 182, 212, 0.25);
          }
        }
        @keyframes echo-3 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7), 0 8px 24px rgba(239, 68, 68, 0.25);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(239, 68, 68, 0), 0 8px 24px rgba(239, 68, 68, 0.25);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow;
