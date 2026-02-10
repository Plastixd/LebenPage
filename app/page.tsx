import Image from 'next/image';
import ServiceCard from "@/components/ServiceCard";
import BirthdayPromo from "@/components/BirthdayPromo"

export default function Home() {

    // 1. Definimos los datos en un solo lugar
  const servicios = [
    {
      icon: "✂️",
      title: "Corte de Autor",
      description: "Diseño personalizado según tu tipo de rostro y estilo de vida."
    },
    {
      icon: "🎨",
      title: "Colorimetría",
      description: "Balayage, reflejos y tintes con productos orgánicos.",
      isFeatured: true
    },
    {
      icon: "🧔",
      title: "Barbería",
      description: "Ritual de afeitado clásico con toalla caliente y perfilado."
    },
    {
      icon: "✨",
      title: "Tratamientos",
      description: "Hidratación profunda y keratina para un brillo espectacular."
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      
      {/* --- SECCIÓN HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">

        <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            ESTILO QUE <span className="text-blue-500">DEFINE</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Expertos en cortes modernos, colorimetría y cuidado capilar. Ven a vivir la experiencia de transformación que mereces.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href='https://api.whatsapp.com/send?phone=5493515911481&text=Hola!%20Quiero%20reservar%20una%20cita%20en%20Leben%20Sal%C3%B3n' target='blank' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
              Reservar Cita
            </a>
          </div>
        </div>
      </section>

      <BirthdayPromo/>
      
      {/* --- SOBRE NOSOTROS --- */}

      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Más de 7 años creando confianza</h2>
            <p className="text-gray-400 mb-6 italic">
              "No solo cortamos el cabello, escuchamos a nuestros clientes para proyectar su mejor versión al mundo."
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✅ Estilistas certificados</li>
              <li className="flex items-center gap-2">✅ Productos L&apos;Oréal y Kérastase</li>
              <li className="flex items-center gap-2">✅ Wi-Fi y Café de cortesía</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-40 bg-blue-600 rounded-lg animate-pulse opacity-20">
              <img
                src="/test.png" 
                alt="Peluqueria" 
                className="w-full h-full object-contain  " 
              />
             </div>
             <div className="h-40 bg-gray-700 rounded-lg">
                <img
                  src="/trabajosrealizados1.png" 
                  alt="Peluqueria" 
                  className="w-full h-full object-contain  " 
                />
             </div>
             <div className="h-40 bg-gray-700 rounded-lg">
                <img
                  src="/trabajosrealizados2.png" 
                  alt="Peluqueria" 
                  className="w-full h-full object-contain  " 
                 />
             </div>
             <div className="h-40 bg-blue-600 rounded-lg animate-pulse opacity-20">
                <img
                  src="/trabajosrealizados3.png" 
                  alt="Peluqueria" 
                  className="w-full h-full object-contain  " 
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN SERVICIOS --- */}


      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <ServiceCard 
              key={index}
              icon={servicio.icon}
              title={servicio.title}
              description={servicio.description}
              isFeatured={servicio.isFeatured}
            />
          ))}
        </div>
      </section>

      {/* --- UBICACION --- */}
      <section className="max-w-6xl mx-auto overflow-hidden shadow-xl flex flex-col md:flex-row items-center ">
        <div className='p-10 md:p-16 md:w-3/5'>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Dónde encontrarnos
          </h2>
          <p>
            Bv Los Alemanes 4285, Córdoba, Argentina
          </p>
          <p>
            Lunes a Domigos de 9 a 20hs
          </p>
        </div>


          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212.97275579122243!2d-64.22518835505258!3d-31.343409498081268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1770757717707!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }} // En React se usa doble llave para estilos
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='md:w-2/5 h-full min-h-[300px] p-10'
          ></iframe>
        

      </section>

      

      {/* --- PIE DE PÁGINA --- */}
      <footer className="py-10 border-t border-gray-200 text-center">
        <p className="text-gray-500">© 2026 Leben Salon. Todos los derechos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">Bv Los Alemanes 4285, Córdoba, Argentina.</p>
      </footer>

    </div>
  );
}