
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="melo-container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Melo</span> Açaí
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="font-medium hover:text-primary transition-colors">Início</a>
          <a href="#produtos" className="font-medium hover:text-primary transition-colors">Produtos</a>
          <a href="#diferenciais" className="font-medium hover:text-primary transition-colors">Diferenciais</a>
          <a href="#depoimentos" className="font-medium hover:text-primary transition-colors">Depoimentos</a>
          <a href="#pedido" className="font-medium hover:text-primary transition-colors">Pedido</a>
          <a 
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noreferrer"
            className="btn-ifood"
          >
            <ShoppingBag size={18} />
            Pedir no iFood
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#produtos" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#diferenciais" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </a>
            <a 
              href="#depoimentos" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#pedido" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pedido
            </a>
            <a 
              href="https://www.ifood.com.br"
              target="_blank"
              rel="noreferrer"
              className="btn-ifood"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag size={18} />
              Pedir no iFood
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
