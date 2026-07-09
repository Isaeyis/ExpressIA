import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  type: "sent" | "received";
  text: string;
  timestamp: string;
}

const CHAT_FLOW: Message[] = [
  { id: "1", type: "sent", text: "hola", timestamp: "6:03 p.m." },
  {
    id: "2",
    type: "received",
    text: "¡Bienvenido, stef! 👋\n\nBienvenido a Burgerlucho 🍔\n\nAquí está nuestro menú:\nhttps://expresiacol.vercel.app/m/burgerlucho\n\nÁbrelo, arma tu pedido y envíanoslo desde la página. ¡Te esperamos!",
    timestamp: "6:03 p.m.",
  },
  {
    id: "3",
    type: "received",
    text: "¡Recibí tu pedido! 🎉\n\n• 1x CIRO ($59.900)\n\nSubtotal: $59.900\n\n¿Tienes alguna observación? (ej: hamburguesa sin cebolla)\nEscríbela o selecciona una opción:",
    timestamp: "6:03 p.m.",
  },
  { id: "4", type: "sent", text: "Sin observación", timestamp: "6:03 p.m." },
  {
    id: "5",
    type: "received",
    text: "¿A qué dirección te lo enviamos? Comparte tu 📍 ubicación o escríbela.",
    timestamp: "6:03 p.m.",
  },
  { id: "6", type: "sent", text: "calle 1cz #2a - 111", timestamp: "6:03 p.m." },
  {
    id: "7",
    type: "received",
    text: "¿Es esta tu dirección de entrega?\n📍 Cra. 2A, Barranquilla, Atlántico, Colombia",
    timestamp: "6:03 p.m.",
  },
  { id: "8", type: "sent", text: "Sí, es correcta", timestamp: "6:03 p.m." },
  {
    id: "9",
    type: "received",
    text: "Total: $ 65.400\nSubtotal: $ 59.900\n🚚 Envío: $ 5.500\n\n¿Cómo vas a pagar?",
    timestamp: "6:05 p.m.",
  },
  { id: "10", type: "sent", text: "Efectivo", timestamp: "6:05 p.m." },
  {
    id: "11",
    type: "received",
    text: "¡Pedido confirmado! 🎉\n\nEstamos preparando tu orden. Pronto te notificaremos cuando esté lista. ¡Gracias por elegirnos!",
    timestamp: "6:05 p.m.",
  },
];

export default function DynamicWhatsAppChat() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [isLooping, setIsLooping] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  // Animación del chat
  useEffect(() => {
    if (!isLooping) return;

    const timeouts: NodeJS.Timeout[] = [];

    // Mostrar cada mensaje con delay progresivo (1200ms entre mensajes)
    CHAT_FLOW.forEach((msg, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.id]);
      }, index * 1200); // 1200ms entre mensajes (más lento)
      timeouts.push(timeout);
    });

    // Resetear después de que todos los mensajes se muestren (sin pausa, loop inmediato)
    const resetTimeout = setTimeout(() => {
      setVisibleMessages([]);
    }, CHAT_FLOW.length * 1200); // Loop inmediato sin pausa
    timeouts.push(resetTimeout);

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [isLooping]);

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* iPhone Frame - Más pequeño */}
      <div
        className="relative bg-black rounded-[2.5rem] overflow-hidden shadow-xl"
        style={{
          aspectRatio: "9/19.5",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />

        {/* Screen Container */}
        <div
          className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden flex flex-col"
          style={{ inset: "10px" }}
        >
          {/* Status Bar - WhatsApp style */}
          <div className="bg-white px-3 py-1.5 flex justify-between items-center text-xs font-medium text-gray-900 border-b border-gray-100" style={{backgroundColor: '#6e6e6e'}}>
            <span className="text-xs">11:19</span>
            <div className="flex gap-0.5 text-xs">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Chat Header - WhatsApp style */}
          <div className="bg-white px-3 py-2.5 flex items-center gap-2.5 border-b border-gray-100 flex-shrink-0" style={{backgroundColor: '#171717'}}>
            <button className="text-gray-700 text-base hover:bg-gray-100 p-0.5 rounded">←</button>
            
            {/* Logo de Express IA */}
            <img 
              src="/assets/logo.png" 
              alt="Express IA" 
              className="w-8 h-8 rounded-full object-cover flex-shrink-0" style={{backgroundColor: '#fcfcfc'}}
            />
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-xs" style={{color: '#ffffff'}}>ExpressIA</h3>
              <p className="text-xs text-gray-500" style={{color: '#b0b0b0'}}>En linea</p>
            </div>
            <button className="text-gray-700 text-base hover:bg-gray-100 p-0.5 rounded">⋮</button>
          </div>

          {/* Chat Messages Area with Scroll - WhatsApp style */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto bg-white px-2.5 py-3 space-y-2 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><defs><pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"%23f0f0f0\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"%23ffffff\" /><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\" /></svg>')",
            }}
          >
            {visibleMessages.map((msgId) => {
              const msg = CHAT_FLOW.find((m) => m.id === msgId);
              if (!msg) return null;

              const isReceived = msg.type === "received";

              return (
                <div
                  key={msgId}
                  className={`flex ${isReceived ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-1 duration-300`}
                >
                  <div
                    className={`max-w-xs px-2.5 py-1.5 rounded-lg text-xs leading-relaxed break-words ${
                      isReceived
                        ? "bg-gray-200 text-gray-900 rounded-bl-none"
                        : "bg-green-500 text-white rounded-br-none"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div
                      className={`text-xs mt-1 flex items-center gap-0.5 justify-end ${
                        isReceived ? "text-gray-600" : "text-green-100"
                      }`}
                    >
                      <span className="text-xs">{msg.timestamp}</span>
                      {!isReceived && <span className="text-xs">✓✓</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Bar - WhatsApp style */}
          <div className="bg-white px-2.5 py-2 flex items-center gap-1.5 border-t border-gray-100 flex-shrink-0">
            <button className="text-gray-500 text-sm hover:bg-gray-100 p-1 rounded">+</button>
            <input
              type="text"
              placeholder="Mensaje"
              className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-xs outline-none"
              disabled
            />
            <button className="text-gray-500 text-sm hover:bg-gray-100 p-1 rounded">📎</button>
            <button className="text-gray-500 text-sm hover:bg-gray-100 p-1 rounded">📷</button>
            <button className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-green-600">
              🎤
            </button>
          </div>
        </div>

        {/* Side Bezels */}
        <div className="absolute left-0 top-10 bottom-10 w-1 bg-gradient-to-b from-gray-800 via-black to-gray-800" />
        <div className="absolute right-0 top-10 bottom-10 w-1 bg-gradient-to-b from-gray-800 via-black to-gray-800" />

        {/* Volume Buttons */}
        <div className="absolute -left-0.5 top-24 w-0.5 h-8 bg-gray-700 rounded-l" />
        <div className="absolute -left-0.5 top-36 w-0.5 h-8 bg-gray-700 rounded-l" />

        {/* Power Button */}
        <div className="absolute -right-0.5 top-32 w-0.5 h-10 bg-gray-600 rounded-r" />
      </div>
    </div>
  );
}
