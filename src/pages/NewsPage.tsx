
import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">News</h1>
          <p className="text-muted-foreground mb-12">
            The latest updates and developments from the AI industry.
          </p>
          
          <div className="text-center py-20">
            <p className="text-xl font-medium">Coming Soon</p>
            <p className="text-muted-foreground">
              Our news section is under development.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
