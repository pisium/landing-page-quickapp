
import React from 'react';
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-primary-green" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-green to-emerald-600 bg-clip-text text-transparent">
            QuickApp
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors">
            Benefícios
          </a>
          <a href="#sobre" className="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-primary-green transition-colors">
            Contato
          </a>
        </nav>
        <Button className="bg-primary-green hover:bg-primary-green/90">
          Começar agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
