
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="acai-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              O melhor açaí da cidade agora no iFood!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Experimente a verdadeira essência do açaí amazônico, com sabor intenso e textura cremosa. Peça agora mesmo pelo iFood!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.ifood.com.br" 
                className="btn-ifood"
                target="_blank"
                rel="noreferrer"
              >
                <span>Pedir no iFood</span>
                <ArrowRight size={18} />
              </a>
              <a href="#produtos" className="btn-primary">
                Ver Produtos
              </a>
            </div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-photo/acai-bowl-with-strawberries-blueberries-bananas-chia-seeds_123827-21593.jpg" 
                alt="Açaí bowl com frutas" 
                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-[#EA1D2C] font-bold">iFood</span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">4.9 ★</span>
                </div>
                <p className="font-semibold">Entrega em até 30 minutos!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
