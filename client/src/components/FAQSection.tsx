import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqItems: FAQItem[] = [
  {
    q: "¿Cómo funciona Express IA?",
    a: "Express IA se integra con tu WhatsApp Business y utiliza inteligencia artificial para responder automáticamente a tus clientes, procesar pedidos y gestionar tu operación 24/7."
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No, Express IA es fácil de configurar. Nuestro equipo te acompaña en todo el proceso de implementación."
  },
  {
    q: "¿Puedo integrar mi ERP?",
    a: "Sí, Express IA se integra con la mayoría de sistemas ERP y plataformas de e-commerce."
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Todos tus datos están encriptados y almacenados de forma segura. Cumplimos con todas las regulaciones de protección de datos."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle graphic backgrounds */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-teal-50 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-600 tracking-wider mb-3 uppercase">RESOLVEMOS TUS DUDAS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Preguntas <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent block sm:inline">Frecuentes</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Encuentra respuestas a las consultas más habituales sobre nuestra plataforma y la automatización por WhatsApp.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 group cursor-pointer ${
                  isOpen 
                    ? "border-emerald-500/80 shadow-lg shadow-emerald-500/5 bg-emerald-50/10" 
                    : "border-gray-200 hover:border-emerald-300 hover:shadow-md bg-white hover:-translate-y-0.5"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className={`text-base md:text-lg font-bold transition-colors duration-200 ${
                    isOpen ? "text-emerald-700" : "text-gray-900 group-hover:text-emerald-600"
                  }`}>
                    {item.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-emerald-500 text-white" : "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100"
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Answer container with smooth height and opacity transition */}
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "160px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease"
                  }}
                >
                  <div className="px-6 pb-6 pt-1 border-t border-gray-100/50">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info / Interactive CTA */}
        <div className="mt-14 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                ¿Aún tienes dudas?
              </h3>
              <p className="text-sm text-gray-600">
                Nuestro equipo de soporte especializado está disponible 24/7.
              </p>
            </div>
          </div>
          <a 
            href="https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C+estoy+interesado+en+sus+servicios+y+me+gustaría+recibir+más+información."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-full md:w-auto text-center"
          >
            <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-103 active:scale-98 flex items-center justify-center gap-2 whitespace-nowrap">
              Contactar Soporte
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
