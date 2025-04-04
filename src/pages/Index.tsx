
import React from 'react';
import Layout from '@/layouts/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
