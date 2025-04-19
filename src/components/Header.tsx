
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/4df3b4ad-020b-4a2a-a78f-dc5a6a81d6e5.png" 
            alt="QuickApp Logo" 
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#9B5F5F] to-[#D4A7A7] bg-clip-text text-transparent">
            QuickApp
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-[#9B5F5F] transition-colors">
            Benefícios
          </a>
          <a href="#sobre" className="text-sm font-medium text-gray-600 hover:text-[#9B5F5F] transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-[#9B5F5F] transition-colors">
            Contato
          </a>
        </nav>
        <Button className="bg-[#9B5F5F] hover:bg-[#9B5F5F]/90">
          Começar agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
