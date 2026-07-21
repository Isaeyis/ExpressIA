import { useState } from "react";
import { X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=573241729686&text=Hola%2C%20me%20interesa%20Express%20IA";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Tooltip Message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-gray-800 animate-fade-in relative">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>¿Habla con nosotros por WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-gray-400 hover:text-white transition-colors p-0.5"
            aria-label="Cerrar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

        {/* Clean Crisp WhatsApp Icon */}
        <svg
          className="w-8 h-8 fill-white relative z-10 drop-shadow"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.477 1.332 4.992L2 22l5.147-1.349c1.458.796 3.097 1.215 4.86 1.215 5.508 0 9.99-4.479 9.99-9.986C22.002 6.478 17.518 2 12.012 2zm.005 18.314c-1.5 0-2.97-.404-4.256-1.168l-.305-.181-3.16.828.843-3.08-.198-.315c-.84-1.337-1.284-2.886-1.283-4.472.003-4.595 3.742-8.332 8.339-8.332 4.597 0 8.338 3.737 8.339 8.332 0 4.596-3.742 8.338-8.324 8.338zm4.569-6.241c-.251-.126-1.484-.733-1.714-.817-.23-.083-.397-.126-.565.126-.168.252-.649.817-.796.985-.147.168-.294.189-.545.063-.251-.126-1.06-.391-2.02-1.247-.746-.665-1.25-1.488-1.397-1.74-.147-.252-.016-.388.11-.513.113-.112.251-.294.377-.441.126-.147.168-.252.251-.42.084-.168.042-.315-.021-.441-.063-.126-.565-1.363-.775-1.867-.203-.491-.41-.424-.565-.432-.147-.007-.315-.007-.483-.007-.168 0-.441.063-.671.315-.23.252-.881.861-.881 2.099 0 1.238.902 2.434 1.028 2.602.126.168 1.776 2.712 4.302 3.802.601.26 1.07.415 1.436.531.603.192 1.152.165 1.586.1.484-.072 1.484-.607 1.693-1.194.21-.587.21-1.091.147-1.194-.063-.105-.23-.168-.481-.294z" />
        </svg>

        {/* Clean Notification Dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
