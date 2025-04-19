
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary-green">QuickApp</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-sm font-medium hover:text-primary-green transition-colors">Benefícios</a>
          <a href="#sobre" className="text-sm font-medium hover:text-primary-green transition-colors">Sobre</a>
          <a href="#contato" className="text-sm font-medium hover:text-primary-green transition-colors">Contato</a>
        </nav>
        <Button className="bg-primary-green hover:bg-primary-green/90">Começar agora</Button>
      </div>
    </header>
  );
};

export default Header;
