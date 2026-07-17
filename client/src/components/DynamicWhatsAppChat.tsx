import { useEffect, useRef, useState } from "react";
import { Mic, Paperclip, Phone, Search, Video } from "lucide-react";

interface Message {
  id: string;
  type: "sent" | "received";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
}

const CHAT_FLOW: Message[] = [
  { id: "1", type: "sent", text: "Hola! 👋", time: "6:03 p.m.", status: "read" },
  {
    id: "2",
    type: "received",
    text: "¡Bienvenido! 🎉\nSoy Express IA, tu asistente virtual de *Burgerlucho* 🍔\n\nAquí está nuestro menú para que armes tu pedido:",
    time: "6:03 p.m.",
  },
  {
    id: "3",
    type: "received",
    text: "🛒 *Pedido recibido*\n• 1x CIRO — $59.900\n\nSubtotal: $59.900\n\n¿Alguna observación?",
    time: "6:03 p.m.",
  },
  { id: "4", type: "sent", text: "Sin observación ✅", time: "6:04 p.m.", status: "read" },
  {
    id: "5",
    type: "received",
    text: "📍 ¿A qué dirección te lo enviamos?\nComparte tu ubicación o escríbela.",
    time: "6:04 p.m.",
  },
  { id: "6", type: "sent", text: "Calle 1cz #2a - 111", time: "6:04 p.m.", status: "read" },
  {
    id: "7",
    type: "received",
    text: "¿Es esta tu dirección?\n📍 Cra. 2A, Barranquilla, Colombia",
    time: "6:04 p.m.",
  },
  { id: "8", type: "sent", text: "Sí, es correcta 👍", time: "6:05 p.m.", status: "read" },
  {
    id: "9",
    type: "received",
    text: "💰 *Resumen del pedido*\nSubtotal: $59.900\n🚚 Envío: $5.500\n*Total: $65.400*\n\n¿Cómo vas a pagar?",
    time: "6:05 p.m.",
  },
  { id: "10", type: "sent", text: "Efectivo 💵", time: "6:05 p.m.", status: "read" },
  {
    id: "11",
    type: "received",
    text: "¡Pedido confirmado! 🎊\nEstamos preparando tu orden. Te notificamos cuando esté en camino. ¡Gracias por elegirnos! 🙌",
    time: "6:06 p.m.",
  },
];

function DoubleCheck({ status }: { status?: Message["status"] }) {
  if (!status) return null;
  const color = status === "read" ? "#53bdeb" : "rgba(255,255,255,0.6)";
  return (
    <span style={{ color, fontSize: "11px", marginLeft: "2px" }}>
      {status === "sent" ? "✓" : "✓✓"}
    </span>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="flex items-center gap-1 px-3 py-2.5 rounded-2xl rounded-bl-none"
        style={{ backgroundColor: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.12)" }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-400"
            style={{ animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

function formatText(text: string) {
  // Bold: *text*
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <strong key={i}>{part.slice(1, -1)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function DynamicWhatsAppChat() {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [loopKey, setLoopKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIds, showTyping]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let delay = 0;

    CHAT_FLOW.forEach((msg, i) => {
      const isReceived = msg.type === "received";

      if (isReceived && i > 0) {
        // Show typing before received messages
        timeouts.push(
          setTimeout(() => setShowTyping(true), delay)
        );
        delay += 900;
        timeouts.push(
          setTimeout(() => {
            setShowTyping(false);
            setVisibleIds((prev) => [...prev, msg.id]);
          }, delay)
        );
      } else {
        timeouts.push(
          setTimeout(() => setVisibleIds((prev) => [...prev, msg.id]), delay)
        );
      }
      delay += 1400;
    });

    // Reset loop
    timeouts.push(
      setTimeout(() => {
        setVisibleIds([]);
        setShowTyping(false);
        setLoopKey((k) => k + 1);
      }, delay + 2500)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [loopKey]);

  return (
    <div className="w-full max-w-[300px] mx-auto select-none">
      {/* Phone frame */}
      <div
        className="relative rounded-[2.8rem] overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
          padding: "10px",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-30"
          style={{
            width: "90px",
            height: "28px",
            backgroundColor: "#000",
            borderRadius: "20px",
          }}
        />

        {/* Screen */}
        <div
          className="overflow-hidden flex flex-col"
          style={{
            borderRadius: "2.2rem",
            height: "580px",
            backgroundColor: "#000",
          }}
        >
          {/* Status bar */}
          <div
            className="flex justify-between items-center px-6 pt-3 pb-1 flex-shrink-0"
            style={{ backgroundColor: "#075e54" }}
          >
            <span className="text-white text-[11px] font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                <rect x="0" y="4" width="2" height="6" rx="0.5" />
                <rect x="3" y="3" width="2" height="7" rx="0.5" />
                <rect x="6" y="1" width="2" height="9" rx="0.5" />
                <rect x="9" y="0" width="2" height="10" rx="0.5" />
              </svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                <path d="M7 1.5C9.5 1.5 11.7 2.7 13 4.6L14 3.4C12.4 1.3 9.9 0 7 0S1.6 1.3 0 3.4L1 4.6C2.3 2.7 4.5 1.5 7 1.5Z"/>
                <path d="M7 4C8.7 4 10.2 4.8 11.2 6L12.2 4.8C10.9 3.4 9.1 2.5 7 2.5S3.1 3.4 1.8 4.8L2.8 6C3.8 4.8 5.3 4 7 4Z"/>
                <circle cx="7" cy="8.5" r="1.5"/>
              </svg>
              <svg width="22" height="10" viewBox="0 0 22 10" fill="white">
                <rect x="0" y="1" width="19" height="8" rx="2" stroke="white" strokeWidth="1" fill="none"/>
                <rect x="19.5" y="3.5" width="2" height="3" rx="1" fill="white" opacity="0.5"/>
                <rect x="1" y="2" width="15" height="6" rx="1" fill="white"/>
              </svg>
            </div>
          </div>

          {/* WhatsApp Header */}
          <div
            className="flex items-center gap-2.5 px-2 py-2 flex-shrink-0"
            style={{ backgroundColor: "#075e54" }}
          >
            <button className="text-white opacity-80 text-lg leading-none">←</button>

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <img
                src="/logo.png"
                alt="Express IA"
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: "2px solid rgba(255,255,255,0.2)" }}
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  if (t.nextElementSibling) (t.nextElementSibling as HTMLElement).style.display = "flex";
                }}
              />
              <div
                className="w-9 h-9 rounded-full items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "#128C7E", display: "none" }}
              >
                IA
              </div>
              {/* Online dot */}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
                style={{ backgroundColor: "#4ade80", borderColor: "#075e54" }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight truncate">ExpressIA</p>
              <p className="text-green-300 text-[10px] leading-tight">En línea</p>
            </div>

            <div className="flex items-center gap-3 text-white opacity-80">
              <Video className="w-4 h-4" />
              <Phone className="w-4 h-4" />
              <Search className="w-4 h-4" />
            </div>
          </div>

          {/* Chat background */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-2 py-3 space-y-1"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(37,211,102,0.06) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(7,94,84,0.08) 0%, transparent 50%)
              `,
              backgroundColor: "#ece5dd",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Date badge */}
            <div className="flex justify-center mb-2">
              <span
                className="text-[10px] px-2.5 py-0.5 rounded-full"
                style={{ backgroundColor: "rgba(225,245,239,0.92)", color: "#555", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
              >
                HOY
              </span>
            </div>

            {visibleIds.map((id) => {
              const msg = CHAT_FLOW.find((m) => m.id === id);
              if (!msg) return null;
              const isSent = msg.type === "sent";

              return (
                <div
                  key={id}
                  className={`flex ${isSent ? "justify-end" : "justify-start"}`}
                  style={{ animation: "msg-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
                >
                  <div
                    className="relative max-w-[80%] px-3 py-1.5"
                    style={{
                      backgroundColor: isSent ? "#dcf8c6" : "#ffffff",
                      borderRadius: isSent
                        ? "12px 12px 2px 12px"
                        : "12px 12px 12px 2px",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.13)",
                    }}
                  >
                    {/* Bubble tail */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        [isSent ? "right" : "left"]: "-6px",
                        width: "10px",
                        height: "10px",
                        backgroundColor: isSent ? "#dcf8c6" : "#ffffff",
                        clipPath: isSent
                          ? "polygon(0 0, 100% 0, 100% 100%)"
                          : "polygon(0 0, 100% 0, 0 100%)",
                      }}
                    />

                    <p
                      className="text-[11.5px] leading-snug text-gray-800 whitespace-pre-wrap break-words"
                    >
                      {formatText(msg.text)}
                    </p>
                    <div className="flex items-center justify-end gap-0.5 mt-0.5">
                      <span className="text-[9.5px] text-gray-400">{msg.time}</span>
                      {isSent && <DoubleCheck status={msg.status} />}
                    </div>
                  </div>
                </div>
              );
            })}

            {showTyping && <TypingIndicator />}
          </div>

          {/* Input bar */}
          <div
            className="flex items-center gap-1.5 px-2 py-2 flex-shrink-0"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <div
              className="flex-1 flex items-center gap-2 bg-white rounded-full px-3 py-1.5"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
            >
              <span className="text-gray-400 text-sm">😊</span>
              <span className="text-gray-400 text-[11px] flex-1">Mensaje</span>
              <Paperclip className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            </div>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0"
              style={{ backgroundColor: "#075e54" }}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Phone side buttons */}
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-8 bg-gray-700 rounded-l" />
        <div className="absolute -left-[3px] top-[148px] w-[3px] h-8 bg-gray-700 rounded-l" />
        <div className="absolute -right-[3px] top-[120px] w-[3px] h-12 bg-gray-700 rounded-r" />
      </div>

      <style>{`
        @keyframes msg-pop {
          from { opacity: 0; transform: scale(0.85) translateY(4px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
