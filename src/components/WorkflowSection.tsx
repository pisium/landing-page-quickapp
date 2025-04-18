
import React from 'react';
import { ArrowRight, FileSymlink, FileCheck, Code } from "lucide-react";

const steps = [
  {
    icon: <FileSymlink className="h-10 w-10 text-secondary-blue" />,
    title: "1. Importe seu design do Figma",
    description: "Conecte-se diretamente com o Figma ou faça upload do seu arquivo de design"
  },
  {
    icon: <Code className="h-10 w-10 text-secondary-blue" />,
    title: "2. Configure as opções de exportação",
    description: "Escolha entre React, HTML/CSS e outras tecnologias para seu projeto"
  },
  {
    icon: <FileCheck className="h-10 w-10 text-secondary-blue" />,
    title: "3. Receba seu código pronto para usar",
    description: "Baixe ou integre diretamente com seu repositório de código"
  }
];

const WorkflowSection = () => {
  return (
    <section id="como-funciona" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Como funciona o FigmaFlow Brasil
          </h2>
          <p className="text-lg text-gray-600">
            Nosso processo é simples e direto, transformando designs em código em três passos fáceis
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-secondary-blue/10 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 z-20">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 rounded-xl bg-primary-green/10 text-center">
          <h3 className="text-2xl font-semibold mb-4">Pronto para experimentar?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Comece gratuitamente hoje e transforme a forma como você converte designs em código.
          </p>
          <button className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-3 rounded-lg font-medium">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
