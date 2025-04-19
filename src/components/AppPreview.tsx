
import React from 'react';
import { Card } from "@/components/ui/card";
import { Smartphone, Check } from 'lucide-react';

const AppPreview = () => {
  const features = [
    "Interface intuitiva e moderna",
    "Experiência personalizada",
    "Notificações em tempo real",
    "Backup automático na nuvem",
    "Suporte técnico dedicado"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Sua agenda na palma da mão
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Gerencie seu negócio de qualquer lugar, a qualquer momento
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary-green mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Card className="bg-gray-900 text-white p-4 shadow-2xl rounded-3xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Smartphone className="h-8 w-8 text-primary-green" />
                <span className="text-xl font-bold">QuickApp Mobile</span>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-800 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-gray-800 rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gray-800 rounded-lg animate-pulse"></div>
                  <div className="h-20 bg-gray-800 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
