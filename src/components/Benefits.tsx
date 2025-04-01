
import { CheckCircle2, Sparkles, Leaf } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <Leaf className="w-10 h-10 text-green-500" />,
      title: "100% Natural",
      description: "Utilizamos açaí puro, sem conservantes ou aditivos artificiais, diretamente da Amazônia."
    },
    {
      id: 2,
      icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
      title: "Qualidade Premium",
      description: "Nosso açaí é selecionado rigorosamente para garantir o melhor sabor e textura."
    },
    {
      id: 3,
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Sabor Autêntico",
      description: "Preservamos o verdadeiro sabor do açaí amazônico, sem adições que descaracterizam o produto."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-secondary/50">
      <div className="melo-container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Por que escolher o Melo Açaí
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Diferenciais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O que torna nosso açaí especial e por que você vai se apaixonar pelo nosso sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-6 rounded-xl shadow-md animate-slide-up"
              style={{animationDelay: `${0.1 * benefit.id}s`}}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Processo Artesanal
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Do Fruto à Sua Mesa
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa produção respeita o processo tradicional de preparo do açaí, preservando todos os nutrientes e o sabor autêntico do fruto amazônico. Selecionamos apenas os melhores frutos e processamos no ponto certo para garantir a cremosidade ideal.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Açaí fresco e natural, processado diariamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Mais de 20 complementos para personalizar seu açaí</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>Receitas exclusivas desenvolvidas por especialistas</span>
                </li>
              </ul>
              <a 
                href="https://www.ifood.com.br" 
                className="btn-primary self-start inline-flex items-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                Experimentar Agora
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="md:col-span-2 h-full min-h-[300px]">
              <img 
                src="https://img.freepik.com/free-photo/brazilian-dessert-frozen-acai-fruit-bowl-black-cup-with-strawberries-on-stone-board_123827-21344.jpg" 
                alt="Processo de produção do açaí" 
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
