
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#33463C] leading-tight">
            Colocando o seu negócio em evidência.
          </h1>
          <p className="text-gray-600 mb-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="flex items-center gap-6">
            <Button size="lg" className="bg-[#33463C] hover:bg-[#33463C]/90 text-white text-lg px-8">
              Explorar
            </Button>
            <Button variant="ghost" size="lg" className="flex items-center gap-2 text-[#33463C]">
              <Play className="h-5 w-5" />
              Play
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-[#33463C]"
                    strokeWidth="4"
                    strokeDasharray={226.08}
                    strokeDashoffset={226.08 * (1 - 0.8)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                  80%
                </span>
              </div>
              <span className="text-lg font-medium">Mais eficiente</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-[#33463C]"
                    strokeWidth="4"
                    strokeDasharray={226.08}
                    strokeDashoffset={226.08 * (1 - 0.7)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                  70%
                </span>
              </div>
              <span className="text-lg font-medium">Menos burocrático</span>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img
            src="/lovable-uploads/14e76a96-818c-4843-88b1-da7a5225ea73.png"
            alt="App Preview"
            className="max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
