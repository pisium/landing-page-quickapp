
import React from 'react';
import { Code, Layout, Zap, Repeat, FileCode, PenTool } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6 text-primary-green" />,
    title: "Componentes Responsivos",
    description: "Gere componentes totalmente responsivos que funcionam em todos os tamanhos de tela."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-green" />,
    title: "Conversão Rápida",
    description: "Transforme seus designs em código em segundos, não horas ou dias."
  },
  {
    icon: <Code className="h-6 w-6 text-primary-green" />,
    title: "Múltiplas Tecnologias",
    description: "Exporte para React, HTML/CSS, ou outras tecnologias populares."
  },
  {
    icon: <Repeat className="h-6 w-6 text-primary-green" />,
    title: "Sincronização Automática",
    description: "Mantenha seu código atualizado com as mudanças no design automaticamente."
  },
  {
    icon: <FileCode className="h-6 w-6 text-primary-green" />,
    title: "Código Limpo",
    description: "Código legível e bem estruturado seguindo as melhores práticas."
  },
  {
    icon: <PenTool className="h-6 w-6 text-primary-green" />,
    title: "Fidelidade ao Design",
    description: "Preservamos cada detalhe do seu design original no código gerado."
  }
];

const FeatureSection = () => {
  return (
    <section id="recursos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Recursos que transformam seu fluxo de trabalho
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma oferece tudo o que você precisa para acelerar o desenvolvimento
            de interfaces a partir de designs do Figma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
