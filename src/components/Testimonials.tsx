
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Cliente fiel",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "O melhor açaí que já provei! A textura é perfeita e o sabor é incrível. Peço toda semana pelo iFood e nunca me decepciona.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Cliente frequente",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "A qualidade do açaí é excepcional. Já experimentei várias marcas, mas o Melo Açaí está em outro nível. Super recomendo!",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Nutricionista",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Como nutricionista, aprecio o compromisso do Melo Açaí em oferecer um produto natural e nutritivo. Meus pacientes adoram!",
    rating: 5
  },
  {
    id: 4,
    name: "Paulo Ribeiro",
    role: "Cliente",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "O sabor do açaí é fantástico e as opções de complementos são variadas. Além disso, a entrega é sempre rápida pelo iFood.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 768 ? 2 : 1;
  
  const nextSlide = () => {
    setActiveIndex((current) => 
      current === testimonials.length - itemsPerPage ? 0 : current + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - itemsPerPage : current - 1
    );
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="melo-container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A opinião de quem já experimentou o verdadeiro sabor do Melo Açaí.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full md:min-w-[50%] px-4"
                >
                  <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-xl shadow-md h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
