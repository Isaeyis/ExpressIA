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
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
      borderColor: '#3b82f6',
      bgColor: 'bg-blue-50',
      bullets: ['Atiende clientes 24/7', 'Responde preguntas automáticamente'],
    },
    {
      id: 2,
      title: 'Express IA',
      subtitle: 'Procesa automáticamente',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-emerald-400 to-emerald-600',
      borderColor: '#10b981',
      bgColor: 'bg-emerald-50',
      bullets: ['Recibe el pedido', 'Gestiona los domicilios'],
    },
    {
      id: 3,
      title: 'Negocio',
      subtitle: 'Recibe información',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: '#06b6d4',
      bgColor: 'bg-cyan-50',
      bullets: ['Coordina colaboradores', 'Mantiene informado al cliente'],
    },
    {
      id: 4,
      title: 'Domicilio',
      subtitle: 'Se asigna automáticamente',
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es Express IA?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Conoce a tu nuevo empleado digital, una plataforma de inteligencia artificial diseñada para restaurantes, comercios y empresas de domicilios que quieren automatizar su atención y operación.
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="relative mb-12">
          {/* Contenedor con 4 cuadritos - Mejor espaciado */}
          <div className="relative flex items-start justify-between gap-4 md:gap-6 mb-12">
            {steps.map((step, index) => (
              <div className="relative flex-1 flex flex-col items-center min-w-0 max-w-xs">
                {/* Check verde sobrepuesto - Justo encima de la esquina */}
                {index < activeStep && (
                  <div 
                    className="absolute -top-2 -right-2 z-50"
                    style={{
                      animation: 'scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div className="bg-emerald-500 rounded-full p-0.5 shadow-lg border-2 border-white flex items-center justify-center">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                  </div>
                )}

                {/* Card del paso - Más estrecho, sin línea divisora */}
                <div
                  className={`w-full transition-all duration-500 ${step.bgColor} border-2 rounded-3xl flex flex-col items-center justify-center relative`}
                  style={{
                    borderColor: activeStep === index ? step.borderColor : '#e5e7eb',
                    padding: '12px 8px',
                    minHeight: activeStep === index ? 'auto' : '90px',
                    transform: activeStep === index ? 'scale(1.12) translateY(-8px)' : 'scale(1)',
                    boxShadow:
                      activeStep === index
                        ? `0 20px 40px ${step.borderColor}40, inset 0 1px 0 ${step.borderColor}20`
                        : '0 4px 12px rgba(0,0,0,0.08)',
                    animation: activeStep === index ? `pulse-${index} 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite` : 'none',
                    zIndex: activeStep === index ? 10 : 1,
                  }}
                >
                  {/* Efecto de eco - Solo cuando está activo */}
                  {activeStep === index && (
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        border: `2px solid ${step.borderColor}`,
                        animation: `echo-${index} 2s ease-out infinite`,
                      }}
                    />
                  )}

                  {/* Icono con animación */}
                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white transition-all duration-500 flex-shrink-0 mb-1 relative z-10`}
                    style={{
                      transform: activeStep === index ? 'scale(1.2)' : 'scale(1)',
                      filter: activeStep === index ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-xs font-bold text-center text-gray-900 leading-tight relative z-10 px-1">
                    {step.title}
                  </h3>

                  {/* Subtítulo - Siempre visible */}
                  <p className="text-xs text-center text-gray-600 leading-tight mt-0.5 relative z-10 px-1">
                    {step.subtitle}
                  </p>

                  {/* Viñetas - SOLO cuando está activo, SIN LÍNEA DIVISORA */}
                  {activeStep === index && (
                    <div className="space-y-1 mt-2 w-full animate-in fade-in slide-in-from-bottom-2 duration-400 relative z-10 px-1">
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1 text-left">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg
                              className="w-2.5 h-2.5 text-emerald-500"
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

                {/* Línea conectora con círculo animado - ENTRE CUADRITOS */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/4 -right-5 md:-right-7 w-10 md:w-14 h-1 flex items-center">
                    {/* Línea de conexión */}
                    <div
                      className="w-full h-1 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: activeStep > index ? steps[index].borderColor : '#d1d5db',
                        opacity: activeStep > index ? 1 : 0.3,
                      }}
                    />
                    
                    {/* Círculo animado que se rueda - Sincronizado */}
                    {activeStep === index && (
                      <div
                        className="absolute w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: steps[index].borderColor,
                          left: '0',
                          animation: `roll-circle-sync 4s ease-in-out infinite`,
                          boxShadow: `0 0 8px ${steps[index].borderColor}80`,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Barra de progreso fluida - Debajo de todo */}
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
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(59, 130, 246, 0.1), 0 0 0 12px rgba(59, 130, 246, 0.1);
          }
        }
        @keyframes pulse-1 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(16, 185, 129, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(16, 185, 129, 0.1), 0 0 0 12px rgba(16, 185, 129, 0.1);
          }
        }
        @keyframes pulse-2 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(6, 182, 212, 0.1), 0 0 0 12px rgba(6, 182, 212, 0.1);
          }
        }
        @keyframes pulse-3 {
          0%, 100% {
            box-shadow: 0 20px 40px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(239, 68, 68, 0.2);
          }
          50% {
            box-shadow: 0 20px 40px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(239, 68, 68, 0.1), 0 0 0 12px rgba(239, 68, 68, 0.1);
          }
        }
        @keyframes echo-0 {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
          }
        }
        @keyframes echo-1 {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
          }
        }
        @keyframes echo-2 {
          0% {
            box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(6, 182, 212, 0);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(6, 182, 212, 0);
          }
        }
        @keyframes echo-3 {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
          }
        }
        @keyframes roll-circle-sync {
          0% {
            left: 0;
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
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
