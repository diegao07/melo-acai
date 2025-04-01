
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-purple-light/20 via-secondary to-white"
    >
      <div className="melo-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              100% Artesanal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              O verdadeiro sabor do <span className="purple-gradient">açaí</span> amazônico
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experimente o melhor açaí artesanal da cidade, feito com ingredientes frescos e selecionados. Peça agora pelo iFood!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.ifood.com.br" 
                className="btn-ifood"
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag size={18} />
                <span>Pedir no iFood</span>
              </a>
              <a href="#produtos" className="btn-outline">
                Ver Cardápio <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-purple/30 rounded-2xl blur-xl animate-pulse-purple"></div>
              <img 
                src="https://img.freepik.com/free-photo/acai-bowl-with-strawberries-bananas-blueberries-chia-seeds_123827-21593.jpg" 
                alt="Melo Açaí bowl com frutas" 
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover relative z-10 purple-glow"
              />
              <div className="absolute -bottom-6 -right-6 bg-white py-3 px-5 rounded-xl shadow-lg z-20 border border-purple-light/20">
                <div className="flex items-center gap-2">
                  <span className="text-[#EA1D2C] font-bold">iFood</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-1 font-medium">4.9</span>
                  </div>
                </div>
                <p className="font-medium text-gray-800">Entrega em até 30 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
