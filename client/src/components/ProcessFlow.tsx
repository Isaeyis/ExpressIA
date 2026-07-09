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
          {/* Contenedor de pasos con gap dinámico */}
          <div className="flex justify-between items-start gap-2 mb-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex-1"
                style={{
                  minHeight: activeStep === index ? 'auto' : '140px',
                }}
              >
                {/* Card del paso */}
                <div
                  className={`rounded-xl transition-all duration-500 ${step.bgColor} border-2 overflow-hidden`}
                  style={{
                    borderColor: activeStep === index ? step.borderColor : '#e5e7eb',
                    transform: activeStep === index ? 'scale(1.2)' : 'scale(1)',
                    padding: activeStep === index ? '16px' : '12px',
                    boxShadow:
                      activeStep === index
                        ? `0 0 30px ${step.borderColor}50, inset 0 0 0 2px ${step.borderColor}`
                        : 'none',
                    zIndex: activeStep === index ? 10 : 1,
                  }}
                >
                  {/* Check en esquina superior derecha para pasos completados */}
                  {index < activeStep && (
                    <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-0.5 shadow-lg z-20">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Icono */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-2 mx-auto transition-all duration-500`}
                    style={{
                      transform: activeStep === index ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-sm font-bold text-center text-gray-900 mb-0.5 whitespace-nowrap">
                    {step.title}
                  </h3>

                  {/* Subtítulo */}
                  <p className="text-xs text-center text-gray-600 mb-0 whitespace-nowrap">
                    {step.subtitle}
                  </p>

                  {/* Viñetas - Solo se muestran cuando está activo */}
                  {activeStep === index && (
                    <div className="space-y-1.5 mt-3 pt-3 border-t border-gray-300 animate-in fade-in duration-300">
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

                {/* Flecha dinámica - Posicionada absolutamente para no ocupar espacio */}
                {activeStep === index && index < steps.length - 1 && (
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 hidden md:flex z-20"
                    style={{
                      right: '-28px',
                    }}
                  >
                    <div className="animate-bounce">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: step.borderColor }}
                      >
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
