
import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Açaí Tradicional',
    description: 'Açaí puro e cremoso, direto da Amazônia',
    price: 'A partir de R$ 14,90',
    image: 'https://img.freepik.com/free-photo/bowl-with-smoothie-acai-powder_23-2148157227.jpg'
  },
  {
    id: 2,
    name: 'Açaí com Frutas',
    description: 'Açaí com banana, morango e granola',
    price: 'A partir de R$ 18,90',
    image: 'https://img.freepik.com/free-photo/healthy-breakfast-with-acai-smoothie-bowl-with-fruits-chia-seeds_114579-68480.jpg'
  },
  {
    id: 3,
    name: 'Açaí Especial',
    description: 'Açaí com leite condensado, paçoca e chocolate',
    price: 'A partir de R$ 21,90',
    image: 'https://img.freepik.com/free-photo/acai-smoothie-bowl-with-slice-banana-cereals-blueberries-plate_123827-21614.jpg'
  },
  {
    id: 4,
    name: 'Açaí Fitness',
    description: 'Açaí com whey protein, banana e granola sem açúcar',
    price: 'A partir de R$ 22,90',
    image: 'https://img.freepik.com/free-photo/acai-bowl-with-strawberries-banana-granola-chia-seeds-frosty-smoothie-black-bowl_123827-24417.jpg'
  }
];

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="acai-container">
        <h2 className="section-title">Nossos Produtos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Preparamos nosso açaí com muito carinho, utilizando frutos selecionados da Amazônia para garantir o melhor sabor e qualidade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="card-product animate-fade-in"
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
                      className="bg-[#EA1D2C] hover:bg-[#D11520] text-white px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      <ShoppingBag size={16} />
                      Pedir no iFood
                    </a>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold text-accent">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
