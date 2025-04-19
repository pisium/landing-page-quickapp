
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
            className="h-12 w-12"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-sm font-medium text-gray-600 hover:text-[#33463C] transition-colors">
            Início
          </a>
          <a href="#funcionalidades" className="text-sm font-medium text-gray-600 hover:text-[#33463C] transition-colors">
            Funcionalidades
          </a>
          <a href="#quem-somos" className="text-sm font-medium text-gray-600 hover:text-[#33463C] transition-colors">
            Quem somos?
          </a>
          <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-[#33463C] transition-colors">
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-[#33463C] text-[#33463C] hover:bg-[#33463C] hover:text-white">
            Sou contratante
          </Button>
          <Button className="bg-[#33463C] hover:bg-[#33463C]/90">
            Sou prestador
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
