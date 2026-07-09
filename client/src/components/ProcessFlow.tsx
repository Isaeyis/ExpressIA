import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';

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
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      borderColor: '#3b82f6',
      bgColor: 'bg-blue-50',
      bullets: ['Atiende clientes 24/7', 'Responde preguntas automáticamente'],
    },
    {
      id: 2,
      title: 'Express IA',
      subtitle: 'Procesa automáticamente',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-emerald-400 to-emerald-600',
      borderColor: '#10b981',
      bgColor: 'bg-emerald-50',
      bullets: ['Recibe el pedido', 'Gestiona los domicilios'],
    },
    {
      id: 3,
      title: 'Negocio',
      subtitle: 'Recibe información',
      icon: <ShoppingBag className="w-5 h-5" />,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: '#06b6d4',
      bgColor: 'bg-cyan-50',
      bullets: ['Coordina colaboradores', 'Mantiene informado al cliente'],
    },
    {
      id: 4,
      title: 'Domicilio',
      subtitle: 'Se asigna automáticamente',
      icon: <Truck className="w-5 h-5" />,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative mb-10">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '60px' }}>
            {/* Líneas conectoras entre cuadritos */}
            {steps.map((step, index) => {
              if (index < steps.length - 1) {
                const isActive = activeStep >= index;
                const isCurrentOrPast = activeStep > index;
                return (
                  <g key={`line-${index}`}>
                    {/* Línea base */}
                    <line
                      x1={`${(index + 0.5) * 25}%`}
                      y1="0"
                      x2={`${(index + 1.5) * 25}%`}
                      y2="0"
                      stroke={isCurrentOrPast ? steps[index].borderColor : '#d1d5db'}
                      strokeWidth="2"
                      style={{
                        transition: 'stroke 0.5s ease-in-out',
                        opacity: isCurrentOrPast ? 1 : 0.3,
                      }}
                    />
                    {/* Círculo animado en la línea */}
                    {isActive && (
                      <circle
                        cx={`${(index + 0.5 + (activeStep === index ? 0.5 : 1)) * 25}%`}
                        cy="0"
                        r="5"
                        fill={steps[index].borderColor}
                        style={{
                          animation: activeStep === index ? `roll-${index} 4s ease-in-out infinite` : 'none',
                        }}
                      />
                    )}
                  </g>
                );
              }
              return null;
            })}
          </svg>

          <div className="flex justify-between items-center gap-2 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 flex flex-col items-center">
                {/* Card del paso */}
                <div
                  className={`w-full rounded-2xl transition-all duration-500 ${step.bgColor} border-2 overflow-hidden relative`}
                  style={{
                    borderColor: activeStep === index ? step.borderColor : '#e5e7eb',
                    transform: activeStep === index ? 'scale(1.08)' : 'scale(1)',
                    padding: activeStep === index ? '14px' : '12px',
                    boxShadow:
                      activeStep === index
                        ? `0 8px 24px ${step.borderColor}40`
                        : 'none',
                    animation: activeStep === index ? `echo-${index} 2s ease-out infinite` : 'none',
                    zIndex: activeStep === index ? 10 : 1,
                  }}
                >
                  {/* Check sobrepuesto en esquina superior derecha */}
                  {index < activeStep && (
                    <div className="absolute -top-3 -right-3 bg-emerald-500 rounded-full p-1 shadow-lg z-30 border-2 border-white">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  )}

                  {/* Icono */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-2 mx-auto transition-all duration-500`}
                    style={{
                      transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-sm font-bold text-center text-gray-900 mb-0.5">
                    {step.title}
                  </h3>

                  {/* Subtítulo */}
                  <p className="text-xs text-center text-gray-600 mb-0">
                    {step.subtitle}
                  </p>

                  {/* Viñetas - Solo se muestran cuando está activo */}
                  {activeStep === index && (
                    <div className="space-y-2 mt-3 animate-in fade-in duration-300">
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1.5">
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
              </div>
            ))}
          </div>

          {/* Barra de progreso animada */}
          <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden mt-12">
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
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
          }
        }
        @keyframes echo-1 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
          }
        }
        @keyframes echo-2 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(6, 182, 212, 0);
          }
        }
        @keyframes echo-3 {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
          }
        }
        @keyframes roll-0 {
          0% { cx: 12.5%; }
          100% { cx: 37.5%; }
        }
        @keyframes roll-1 {
          0% { cx: 37.5%; }
          100% { cx: 62.5%; }
        }
        @keyframes roll-2 {
          0% { cx: 62.5%; }
          100% { cx: 87.5%; }
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow;
