
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import WorkflowSection from '../components/WorkflowSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <WorkflowSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
