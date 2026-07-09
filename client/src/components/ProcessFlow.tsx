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
    <section className="py-16 md:py-20 bg-white" style={{backgroundColor: '#fafafa'}}>
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

        {/* Process Flow Container - Diseño más fluido y creativo */}
        <div className="relative">
          {/* Contenedor con 4 cuadritos */}
          <div className="relative flex items-start justify-between gap-3 md:gap-4 mb-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex-1 flex flex-col items-center min-w-0">
                {/* Check verde sobrepuesto - Animación suave */}
                {index < activeStep && (
                  <div 
                    className="absolute top-0 right-0 z-50"
                    style={{
                      animation: 'scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div className="bg-emerald-500 rounded-full p-1.5 shadow-lg border-2 border-white flex items-center justify-center">
                      <Check className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                  </div>
                )}

                {/* Card del paso - Diseño mejorado y fluido */}
                <div
                  className={`transition-all duration-500 ${step.bgColor} border-2 rounded-2xl flex flex-col items-center justify-center relative overflow-visible`}
                  style={{
                    borderColor: activeStep === index ? step.borderColor : '#e5e7eb',
                    padding: '14px 8px',
                    minHeight: activeStep === index ? 'auto' : '85px',
                    width: activeStep === index ? '200px' : '160px',
                    transform: activeStep === index ? 'scaleX(1.05) scaleY(1.15) translateY(-6px)' : 'scale(1)',
                    boxShadow:
                      activeStep === index
                        ? `0 16px 32px ${step.borderColor}35, inset 0 1px 0 ${step.borderColor}15`
                        : '0 2px 8px rgba(0,0,0,0.06)',
                    zIndex: activeStep === index ? 10 : 1,
                  }}
                >
                  {/* Efecto de ola expansiva - Ripple effect */}
                  {activeStep === index && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        border: `2px solid ${step.borderColor}`,
                        animation: `wave-ripple 2s ease-out infinite`,
                        opacity: 0.6,
                      }}
                    />
                  )}

                  {/* Efecto de fondo degradado sutil - Solo cuando está activo */}
                  {activeStep === index && (
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at top right, ${step.borderColor}08, transparent)`,
                        opacity: 1,
                      }}
                    />
                  )}

                  {/* Icono con animación fluida */}
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white transition-all duration-500 flex-shrink-0 mb-1.5 relative z-10`}
                    style={{
                      transform: activeStep === index ? 'scale(1.15) rotate(0deg)' : 'scale(1) rotate(-5deg)',
                      filter: activeStep === index ? 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))' : 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Título - Tipografía mejorada */}
                  <h3 className="text-xs font-bold text-center text-gray-900 leading-tight relative z-10 px-1 transition-all duration-300" style={{
                    fontSize: activeStep === index ? '0.875rem' : '0.75rem',
                  }}>
                    {step.title}
                  </h3>

                  {/* Subtítulo - Siempre visible */}
                  <p className="text-xs text-center text-gray-600 leading-tight mt-0.5 relative z-10 px-1 transition-all duration-300" style={{
                    opacity: activeStep === index ? 1 : 0.7,
                    fontSize: activeStep === index ? '0.75rem' : '0.7rem',
                  }}>
                    {step.subtitle}
                  </p>

                  {/* Viñetas - SOLO cuando está activo, con animación suave */}
                  {activeStep === index && (
                    <div className="space-y-1 mt-2.5 w-full relative z-10 px-1" style={{
                      animation: 'slide-in-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}>
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-left" style={{
                          animation: `fade-in 0.4s ease-out ${i * 0.1}s both`,
                        }}>
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
                          <p className="text-xs text-gray-700 leading-tight line-clamp-2">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Línea conectora con círculo animado - Mejorada */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/4 -right-3 md:-right-4 w-6 md:w-8 h-1 flex items-center z-5">
                    {/* Línea de conexión con gradiente */}
                    <svg className="w-full h-full" viewBox="0 0 100 4" preserveAspectRatio="none">
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor={steps[index].borderColor}
                            stopOpacity={activeStep > index ? 1 : 0.2}
                          />
                          <stop
                            offset="100%"
                            stopColor={steps[Math.min(index + 1, steps.length - 1)].borderColor}
                            stopOpacity={activeStep > index + 1 ? 1 : 0.2}
                          />
                        </linearGradient>
                      </defs>
                      <line
                        x1="0"
                        y1="2"
                        x2="100"
                        y2="2"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{
                          transition: 'stroke 0.5s ease-out',
                        }}
                      />
                    </svg>

                    {/* Círculo animado que se rueda - Sincronizado y mejorado */}
                    {activeStep === index && (
                      <div
                        className="absolute w-3 h-3 rounded-full border-2"
                        style={{
                          borderColor: steps[index].borderColor,
                          backgroundColor: 'white',
                          left: '0',
                          animation: `roll-circle 4s ease-in-out infinite`,
                          boxShadow: `0 0 10px ${steps[index].borderColor}a0, inset 0 0 4px ${steps[index].borderColor}40`,
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Barra de progreso fluida y elegante */}
          <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full transition-all duration-700 ease-out rounded-full"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                background: `linear-gradient(90deg, ${steps[activeStep].borderColor}, ${steps[Math.min(activeStep + 1, steps.length - 1)].borderColor})`,
                boxShadow: `0 0 16px ${steps[activeStep].borderColor}60`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave-ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
            transform: scale(1);
          }
        }

        @keyframes roll-circle {
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

        @keyframes slide-in-up {
          from {
            transform: translateY(8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessFlow;
