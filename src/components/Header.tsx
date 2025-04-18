
import React from 'react';
import { Button } from "@/components/ui/button";
import { Code, Figma } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Figma size={24} className="text-primary-green" />
          <span className="text-xl font-semibold">FigmaFlow Brasil</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary-green transition-colors">Como funciona</a>
          <a href="#recursos" className="text-sm font-medium hover:text-primary-green transition-colors">Recursos</a>
          <a href="#precos" className="text-sm font-medium hover:text-primary-green transition-colors">Preços</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <Code size={16} />
            <span>Documentação</span>
          </Button>
          <Button className="bg-primary-green hover:bg-primary-green/90">Começar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
