
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import OrderSection from '@/components/OrderSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add Google Fonts for Poppins
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    // Update page title and meta description
    document.title = 'Açaí-ify | O melhor açaí no iFood';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'O melhor açaí da cidade, agora disponível para entrega pelo iFood! Experimente nosso açaí amazônico puro e natural.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
