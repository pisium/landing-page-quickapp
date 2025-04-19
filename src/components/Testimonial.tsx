
import React from 'react';
import { QuoteIcon } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-50 p-10 rounded-xl relative">
          <QuoteIcon className="h-16 w-16 text-gray-200 absolute top-4 left-4" />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              "Ter meu salão no QuickApp mudou tudo. Meus clientes acham meu perfil com facilidade e minha agenda está sempre cheia."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">Patrícia Gomes</p>
                <p className="text-gray-600 text-sm">Cabeleireira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
