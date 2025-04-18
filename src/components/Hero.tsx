
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Figma } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-green/10 rounded-full mb-6">
            <Figma size={16} className="text-primary-green" />
            <Code size={16} className="text-secondary-blue" />
            <span className="text-sm font-medium">Figma para código em minutos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme seus designs do Figma em código pronto para usar
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            FigmaFlow Brasil é a maneira mais rápida de transformar seus designs do Figma em código React, HTML e CSS de alta qualidade - economizando tempo e acelerando seu fluxo de trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-green hover:bg-primary-green/90 text-white">
              Começar gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="group">
              Ver demonstração <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <Figma size={48} className="text-primary-green" />
                <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                <Code size={48} className="text-secondary-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
