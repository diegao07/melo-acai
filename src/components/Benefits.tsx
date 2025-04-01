
import { Leaf, Star, Clock, ChevronRight } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "100% Natural",
      description: "Utilizamos açaí puro, sem conservantes ou aditivos artificiais, diretamente da Amazônia."
    },
    {
      id: 2,
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Qualidade Premium",
      description: "Nosso açaí é selecionado rigorosamente para garantir o melhor sabor e textura."
    },
    {
      id: 3,
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Entrega Rápida",
      description: "Peça pelo iFood e receba seu açaí fresquinho em até 30 minutos."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 bg-purple-50">
      <div className="acai-container">
        <h2 className="section-title">Nossos Diferenciais</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          O que torna nosso açaí tão especial e por que você vai se apaixonar pelo nosso sabor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-6 rounded-xl shadow-md animate-fade-in"
              style={{animationDelay: `${0.1 * benefit.id}s`}}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                A Melhor Experiência de Açaí
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa missão é oferecer o melhor açaí da cidade, com um atendimento de excelência e entrega rápida pelo iFood. Trabalhamos com produtos frescos e de alta qualidade para garantir sua satisfação.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-accent mr-2" />
                  <span>Açaí puro e natural, sem xaropes ou conservantes</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-accent mr-2" />
                  <span>Mais de 20 complementos para você escolher</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-accent mr-2" />
                  <span>Opções para dietas específicas (sem açúcar, vegano)</span>
                </li>
              </ul>
              <a 
                href="https://www.ifood.com.br" 
                className="btn-ifood self-start"
                target="_blank"
                rel="noreferrer"
              >
                Experimentar Agora
              </a>
            </div>
            <div className="h-full min-h-[300px]">
              <img 
                src="https://img.freepik.com/free-photo/brazilian-dessert-frozen-acai-fruit-bowl-black-cup-with-strawberries-on-stone-board_123827-21344.jpg" 
                alt="Açaí especial" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
