import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, ShoppingBag, Truck } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
}

const ProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'Cliente',
      subtitle: 'Cliente manual',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Express IA',
      subtitle: 'Procesa automáticamente',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'Procesa pedidos\nGestiona domicilios',
    },
    {
      id: 3,
      title: 'Negocio',
      subtitle: 'Recibe informativo',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      title: 'Domicilio',
      subtitle: 'Se asigna automáticamente',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es Express IA?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce a tu nuevo empleado digital, una plataforma de inteligencia artificial diseñada para restaurantes, comercios y empresas de domicilios que quieren automatizar su atención y operación.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Contenedor de pasos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Card del paso */}
                <div
                  className={`rounded-3xl p-8 transition-all duration-500 transform ${
                    activeStep === index
                      ? `${step.bgColor} border-2 border-${step.color.split('-')[1]}-500 shadow-2xl scale-105`
                      : `${step.bgColor} border-2 border-gray-200 opacity-60 scale-95`
                  }`}
                >
                  {/* Icono */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 mx-auto transition-all duration-500 ${
                      activeStep === index ? 'shadow-lg' : ''
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Título */}
                  <h3
                    className={`text-2xl font-bold text-center mb-2 transition-all duration-500 ${
                      activeStep === index ? 'text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Subtítulo */}
                  <p
                    className={`text-sm text-center mb-4 transition-all duration-500 ${
                      activeStep === index ? 'text-gray-700' : 'text-gray-500'
                    }`}
                  >
                    {step.subtitle}
                  </p>

                  {/* Descripción expandida (solo cuando está activo) */}
                  {activeStep === index && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-300 animate-in fade-in duration-500">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Flechas dinámicas (solo cuando está activo) */}
                {activeStep === index && index < steps.length - 1 && (
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-2">
                    <div className="animate-bounce text-emerald-500">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="animate-bounce text-emerald-500" style={{ animationDelay: '0.2s' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Barra de progreso animada */}
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full transition-all duration-500"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Indicadores de paso */}
          <div className="flex justify-between mt-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-12 rounded-full transition-all duration-500 ${
                  index <= activeStep ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
