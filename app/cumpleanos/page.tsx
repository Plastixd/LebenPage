import ServiceCard from "@/components/ServiceCard"; // Reutilizamos tu componente de cards

export default function CumpleanosPage() {
  const inclusiones = [
    {
      icon: "🥂",
      title: "Brindis de Bienvenida",
      description: "Copa de bienvenida para la cumpleañera y sus invitadas (opción con o sin alcohol)."
    },
    {
      icon: "💆‍♀️",
      title: "Spa Capilar",
      description: "Masaje relajante y tratamiento de hidratación profunda para todas."
    },
    {
      icon: "💅",
      title: "Manicura Express",
      description: "Esmaltado profesional con los colores de temporada."
    },
    {
      icon: "📸",
      title: "Rincón de Fotos",
      description: "Un espacio decorado con accesorios para capturar los mejores momentos."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER DE LA PÁGINA */}
      <section className="bg-rose-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-rose-300 mb-4">
          Beauty Birthday Party
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Convierte tu cumpleaños en una experiencia de lujo y relax junto a tus mejores amigas. 
          Cerramos el salón exclusivamente para ustedes.
        </p>
      </section>

      {/* DETALLES DEL PACK */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusiones.map((item, index) => (
            <ServiceCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN INFORMATIVA / PRECIOS */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-rose-300">¿Cómo funciona la reserva?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border-l-2 border-rose-500 pl-4">
              <h4 className="font-bold text-xl mb-2">Paso 1</h4>
              <p className="text-gray-400">Elige una fecha con al menos 15 días de anticipación.</p>
            </div>
            <div className="border-l-2 border-rose-500 pl-4">
              <h4 className="font-bold text-xl mb-2">Paso 2</h4>
              <p className="text-gray-400">Define la cantidad de invitadas (mínimo 4, máximo 10).</p>
            </div>
            <div className="border-l-2 border-rose-500 pl-4">
              <h4 className="font-bold text-xl mb-2">Paso 3</h4>
              <p className="text-gray-400">¡Ven a disfrutar! Nosotros nos encargamos de todo el catering y belleza.</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-2xl font-semibold mb-4">Inversión: Desde $150 por persona</p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold transition-all">
              Consultar fechas disponibles vía WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* GALERÍA SIMPLE (Placeholder) */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Nuestras últimas celebraciones</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 italic">Foto de brindis</div>
          <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 italic">Foto peinado</div>
          <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 italic">Foto grupo amigas</div>
          <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 italic">Foto pastel</div>
        </div>
      </section>
    </div>
  );
}