
import React from 'react';
import { Users, Star, TrendingUp } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Desenvolvido para profissionais como você
            </h2>
            <p className="text-lg text-gray-600">
              Ideal para salões de beleza, cabeleireiros, manicures e profissionais autônomos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-green/10 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aumente sua clientela</h3>
              <p className="text-gray-600">
                Tenha mais visibilidade e atraia novos clientes constantemente
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-green/10 p-4 rounded-full inline-block mb-4">
                <Star className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fidelize clientes</h3>
              <p className="text-gray-600">
                Melhore a experiência e construa relacionamentos duradouros
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-green/10 p-4 rounded-full inline-block mb-4">
                <TrendingUp className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cresça seu negócio</h3>
              <p className="text-gray-600">
                Otimize seu tempo e aumente sua rentabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
