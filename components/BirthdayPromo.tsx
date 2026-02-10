export default function BirthdayPromo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-pink-50 to-rose-100 rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
        
        {/* Lado del contenido */}
        <div className="p-10 md:p-16 md:w-3/5">
          <span className="inline-block px-4 py-1 bg-rose-200 text-rose-700 rounded-full text-sm font-bold mb-4 tracking-widest uppercase">
            Celebración Exclusiva
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Reserva tu <span className="text-rose-500">Beauty Birthday</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            ¿Buscas un plan diferente? Celebra tu cumpleaños con tus amigas en un ambiente privado. Incluye peinado, manicura, brindis con champagne y una playlist personalizada. ¡Hacemos que tu día sea inolvidable!
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="h-2 w-2 bg-rose-400 rounded-full"></div>
              Grupos de 4 a 8 personas
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="h-2 w-2 bg-rose-400 rounded-full"></div>
              Regalo sorpresa para la cumpleañera
            </div>
          </div>

          <div className="flex flex-col space-x-1 space-y-1">
            <a href="https://api.whatsapp.com/send?phone=5493515911481&text=Hola!%20Quiero%20festejar%20mi%20cumplea%C3%B1os%20en%20Leben%20Salon%20%F0%9F%8E%88%E2%9C%A8" target="blank" className="bg-rose-500 hover:bg-rose-400 text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-md">
             Consultar
            </a>
            <a href="/cumpleanos" className="bg-rose-500 hover:bg-rose-400 text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-md">
             Más información
            </a>
          </div>
          
        </div>

        {/* Lado de la imagen/diseño visual */}
        <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000" alt="" className="md:w-2/5 h-full min-h-[300px] p-10"/>
       
      </div>
    </section>
  );
}