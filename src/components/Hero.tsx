
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#FFF0F0] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/lovable-uploads/4df3b4ad-020b-4a2a-a78f-dc5a6a81d6e5.png" 
              alt="QuickApp Logo" 
              className="h-24 w-24"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#9B5F5F]">
            QuickApp
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            Colocando seu negócio em destaque
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Simplifique seu agendamento, aumente sua visibilidade e encante seus clientes
          </p>
          <Button size="lg" className="bg-[#9B5F5F] hover:bg-[#9B5F5F]/90 text-white group text-lg">
            Comece agora gratuitamente
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
