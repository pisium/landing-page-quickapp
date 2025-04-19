
import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { Card } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            O que dizem nossos usuários
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 shadow-lg relative bg-gradient-to-br from-white to-gray-50">
            <QuoteIcon className="h-8 w-8 text-primary-green/20 absolute top-4 left-4" />
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                "O QuickApp revolucionou a forma como gerencio meu salão. Minha agenda está sempre cheia!"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary-green/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800">Ana Silva</p>
                  <p className="text-gray-600 text-sm">Cabeleireira</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-lg relative bg-gradient-to-br from-white to-gray-50">
            <QuoteIcon className="h-8 w-8 text-primary-green/20 absolute top-4 left-4" />
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                "Meus clientes adoram a facilidade de agendar pelo aplicativo. Recomendo!"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary-green/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800">Carlos Santos</p>
                  <p className="text-gray-600 text-sm">Barbeiro</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-lg relative bg-gradient-to-br from-white to-gray-50">
            <QuoteIcon className="h-8 w-8 text-primary-green/20 absolute top-4 left-4" />
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                "Diminuí drasticamente as faltas dos clientes com as notificações automáticas."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary-green/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800">Marina Costa</p>
                  <p className="text-gray-600 text-sm">Manicure</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
