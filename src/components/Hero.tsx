
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Colocando seu negócio em evidência
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            A plataforma que conecta salões de beleza e profissionais com clientes que valorizam experiência, praticidade e estilo.
          </p>
          <Button size="lg" className="bg-primary-green hover:bg-primary-green/90 text-white group">
            Quero destacar meu salão
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
