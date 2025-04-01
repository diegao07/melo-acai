
import { MapPin, Clock, ShoppingBag } from 'lucide-react';

const OrderSection = () => {
  return (
    <section id="pedido" className="py-20 bg-gradient-to-br from-purple-deep via-primary to-purple-medium text-white">
      <div className="melo-container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Peça Agora
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente o Melhor Açaí da Cidade</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Faça seu pedido pelo iFood e receba o Melo Açaí no conforto da sua casa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg border border-purple-light/30">
              <h3 className="text-2xl font-bold text-primary mb-6">Faça seu pedido</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-light/30 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Nosso Endereço</h4>
                    <p className="text-gray-600">Av. das Acácias, 500 - Centro</p>
                    <p className="text-gray-600">São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-light/30 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sábado: 11h às 22h</p>
                    <p className="text-gray-600">Domingo: 12h às 20h</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://www.ifood.com.br" 
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ifood w-full flex justify-center items-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Pedir via iFood
                </a>
                <p className="text-sm text-center text-gray-500">
                  Tempo médio de entrega: 30 minutos (dependendo da localização)
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -inset-1 bg-purple/30 rounded-xl blur-xl animate-pulse-purple"></div>
              <img 
                src="https://img.freepik.com/free-photo/acai-smoothie-bowl-with-banana-strawberries-blueberries-side-view_141793-15553.jpg" 
                alt="Melo Açaí delivery" 
                className="rounded-xl shadow-xl w-full h-[450px] object-cover relative z-10 purple-glow"
              />
              <div className="absolute -bottom-6 -left-6 bg-white py-3 px-5 rounded-xl shadow-lg text-gray-800 z-20 border border-purple-light/20">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-[#EA1D2C] text-white text-xs px-2 py-1 rounded-md">iFood</div>
                  <div className="font-bold">FRETE GRÁTIS</div>
                </div>
                <p className="text-sm">No seu primeiro pedido pelo app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
