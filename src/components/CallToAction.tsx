
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary-green/20 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-green">
            Comece a transformar seu negócio hoje
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Junte-se a milhares de profissionais que já estão revolucionando a forma de trabalhar
          </p>
          <Button size="lg" className="bg-primary-green hover:bg-primary-green/90 text-white group text-lg">
            Experimente grátis por 14 dias
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Não é necessário cartão de crédito
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
