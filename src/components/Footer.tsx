
import { Instagram, Facebook, Twitter, Mail, Phone, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="melo-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-primary">Melo</span> Açaí
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              O verdadeiro sabor do açaí amazônico, agora disponível no iFood para você pedir do conforto da sua casa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-all">
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
              <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#pedido" className="text-gray-400 hover:text-white transition-colors">Pedido</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">(11) 95555-5555</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">contato@meloacai.com.br</span>
              </li>
              <li>
                <a 
                  href="https://www.ifood.com.br" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-ifood mt-2 inline-flex"
                >
                  <ShoppingBag size={18} />
                  Pedir no iFood
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Melo Açaí. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-500 text-sm mr-2">Disponível no</p>
            <a 
              href="https://www.ifood.com.br" 
              target="_blank" 
              rel="noreferrer"
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
