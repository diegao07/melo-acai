
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="acai-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-accent">Açaí</span>-ify
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              O melhor açaí da cidade agora disponível no iFood para você pedir do conforto da sua casa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#diferenciais" className="text-gray-400 hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#pedido" className="text-gray-400 hover:text-white transition-colors">Pedido</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Av. das Palmeiras, 1000</li>
              <li>São Paulo - SP</li>
              <li>(11) 95555-5555</li>
              <li>contato@acaiify.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Açaí-ify. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">Peça pelo</p>
            <a 
              href="https://www.ifood.com.br" 
              target="_blank" 
              rel="noreferrer" 
              className="ml-2"
            >
              <img 
                src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-4.png" 
                alt="iFood" 
                className="h-6" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
