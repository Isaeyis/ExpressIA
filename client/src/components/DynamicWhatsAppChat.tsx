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

    // Mostrar cada mensaje con delay progresivo
    CHAT_FLOW.forEach((msg, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.id]);
      }, index * 800); // 800ms entre mensajes
      timeouts.push(timeout);
    });

    // Resetear después de que todos los mensajes se muestren
    const resetTimeout = setTimeout(() => {
      setVisibleMessages([]);
    }, CHAT_FLOW.length * 800 + 3000);
    timeouts.push(resetTimeout);

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [isLooping]);

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* iPhone Frame */}
      <div
        className="relative bg-black rounded-[3rem] overflow-hidden shadow-2xl"
        style={{
          aspectRatio: "9/19.5",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

        {/* Screen Container */}
        <div
          className="absolute inset-0 bg-white rounded-[3rem] overflow-hidden flex flex-col"
          style={{ inset: "12px" }}
        >
          {/* Status Bar */}
          <div className="bg-white px-4 py-2 flex justify-between items-center text-xs font-semibold text-gray-900 border-b border-gray-200">
            <span>11:19</span>
            <div className="flex gap-0.5 text-sm">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Chat Header */}
          <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-200 flex-shrink-0">
            <button className="text-gray-600 text-lg hover:bg-gray-100 p-1 rounded">←</button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
              ⚡
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-sm">Tiffanys Shop</h3>
              <p className="text-xs text-gray-500">online</p>
            </div>
            <button className="text-gray-600 text-lg hover:bg-gray-100 p-1 rounded">⋮</button>
          </div>

          {/* Chat Messages Area with Scroll */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto bg-gray-50 px-3 py-4 space-y-3 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {visibleMessages.map((msgId) => {
              const msg = CHAT_FLOW.find((m) => m.id === msgId);
              if (!msg) return null;

              const isReceived = msg.type === "received";

              return (
                <div
                  key={msgId}
                  className={`flex ${isReceived ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div
                    className={`max-w-xs px-3 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
                      isReceived
                        ? "bg-white text-gray-900 border border-gray-200 rounded-bl-none shadow-sm"
                        : "bg-green-500 text-white rounded-br-none shadow-sm"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div
                      className={`text-xs mt-1.5 flex items-center gap-1 ${
                        isReceived ? "text-gray-500" : "text-green-100"
                      }`}
                    >
                      {msg.timestamp}
                      {!isReceived && <span>✓✓</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Bar */}
          <div className="bg-white px-3 py-3 flex items-center gap-2 border-t border-gray-200 flex-shrink-0">
            <button className="text-teal-600 text-xl hover:bg-gray-100 p-1 rounded">+</button>
            <input
              type="text"
              placeholder="Mensaje"
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-xs outline-none"
              disabled
            />
            <button className="text-teal-600 text-lg hover:bg-gray-100 p-1 rounded">📎</button>
            <button className="text-teal-600 text-lg hover:bg-gray-100 p-1 rounded">📷</button>
            <button className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-lg hover:bg-teal-700">
              🎤
            </button>
          </div>
        </div>

        {/* Side Bezels */}
        <div className="absolute left-0 top-12 bottom-12 w-1.5 bg-gradient-to-b from-gray-800 via-black to-gray-800" />
        <div className="absolute right-0 top-12 bottom-12 w-1.5 bg-gradient-to-b from-gray-800 via-black to-gray-800" />

        {/* Volume Buttons */}
        <div className="absolute -left-0.5 top-28 w-1 h-10 bg-gray-700 rounded-l" />
        <div className="absolute -left-0.5 top-44 w-1 h-10 bg-gray-700 rounded-l" />

        {/* Power Button */}
        <div className="absolute -right-0.5 top-36 w-1 h-14 bg-gray-600 rounded-r" />
      </div>
    </div>
  );
}
