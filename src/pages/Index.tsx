
import React, { useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import NewsCarousel from '@/components/home/NewsCarousel';
import ToolFinderSection from '@/components/home/ToolFinderSection';
import BlogSection from '@/components/home/BlogSection';
import { initMouseTracker } from '@/utils/mouseTracker';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize mouse tracking for animations
    const cleanup = initMouseTracker();
    
    // Add a class to enable page transitions
    document.body.classList.add('animate-fade-in');
    
    return () => {
      cleanup();
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
        <ComparisonSection />
        <NewsCarousel />
        <ToolFinderSection />
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
