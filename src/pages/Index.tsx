
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import Benefits from '../components/Benefits';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import AppPreview from '../components/AppPreview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TargetAudience />
        <Benefits />
        <Testimonial />
        <AppPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
