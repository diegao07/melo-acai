
import { MapPin, Phone, ShoppingBag } from 'lucide-react';

const OrderSection = () => {
  return (
    <section id="pedido" className="py-16 bg-primary text-white">
      <div className="acai-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Peça Agora Mesmo</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Faça seu pedido pelo iFood e receba o melhor açaí da cidade no conforto da sua casa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Estamos no iFood!</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#EA1D2C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Nosso Endereço</h4>
                    <p>Av. das Palmeiras, 1000 - Centro</p>
                    <p>São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#EA1D2C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Contato</h4>
                    <p>(11) 95555-5555</p>
                    <p>contato@acaiify.com.br</p>
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
                  O prazo de entrega pode variar de acordo com a sua localização
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <img 
              src="https://img.freepik.com/free-photo/brazilian-dessert-frozen-acai-fruit-bowl-with-bananas-on-stone-board_123827-21345.jpg" 
              alt="Açaí delivery" 
              className="rounded-xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 right-6 bg-[#EA1D2C] p-5 rounded-lg shadow-lg text-white">
              <div className="text-xl font-bold mb-1">FRETE GRÁTIS</div>
              <p className="text-sm">No seu primeiro pedido pelo iFood</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
