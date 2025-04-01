
import { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Açaí Tradicional',
    description: 'Açaí puro e cremoso da Amazônia',
    price: 'R$14,90',
    sizes: ['300ml', '500ml', '700ml'],
    image: 'https://img.freepik.com/free-photo/bowl-with-smoothie-acai-powder_23-2148157227.jpg'
  },
  {
    id: 2,
    name: 'Açaí com Frutas',
    description: 'Açaí com banana, morango e granola',
    price: 'R$18,90',
    sizes: ['300ml', '500ml', '700ml'],
    image: 'https://img.freepik.com/free-photo/healthy-breakfast-with-acai-smoothie-bowl-with-fruits-chia-seeds_114579-68480.jpg'
  },
  {
    id: 3,
    name: 'Açaí Especial',
    description: 'Açaí com leite condensado e chocolate',
    price: 'R$21,90',
    sizes: ['300ml', '500ml', '700ml'],
    image: 'https://img.freepik.com/free-photo/acai-smoothie-bowl-with-slice-banana-cereals-blueberries-plate_123827-21614.jpg'
  },
  {
    id: 4,
    name: 'Açaí Fitness',
    description: 'Açaí com whey protein e granola',
    price: 'R$22,90',
    sizes: ['300ml', '500ml', '700ml'],
    image: 'https://img.freepik.com/free-photo/acai-bowl-with-strawberries-banana-granola-chia-seeds-frosty-smoothie-black-bowl_123827-24417.jpg'
  }
];

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="melo-container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nosso Cardápio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sabores para todos os gostos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preparamos nosso açaí com frutos selecionados da Amazônia para garantir o melhor sabor e qualidade. Conheça nossas opções!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{animationDelay: `${0.1 * product.id}s`}}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <a 
                      href="https://www.ifood.com.br" 
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#EA1D2C] hover:bg-[#D11520] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <ShoppingBag size={16} />
                      Pedir no iFood
                    </a>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-primary text-lg">{product.price}</p>
                  <div className="flex gap-1">
                    {product.sizes.map((size) => (
                      <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver Cardápio Completo
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
