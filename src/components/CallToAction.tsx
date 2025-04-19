
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seja um dos primeiros salões a fazer parte da revolução digital do bem-estar.
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Seu lugar no QuickApp já está reservado.
          </p>
          <Button size="lg" className="bg-primary-green hover:bg-primary-green/90 text-white group">
            Quero destacar meu salão no QuickApp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
