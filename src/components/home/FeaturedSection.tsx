
import React, { useRef, useEffect } from 'react';
import { ArrowRight, Star, BarChart2, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredModels = [
  {
    id: 1,
    name: "GPT-4o",
    category: "Large Language Model",
    company: "OpenAI",
    rating: 4.9,
    benchmarkScore: 89,
    description: "Advanced multimodal model with exceptional text understanding and generation capabilities.",
    image: "/public/lovable-uploads/24e7471d-a2e8-4407-b766-5ebd25d022dc.png"
  },
  {
    id: 2,
    name: "Claude 3 Opus",
    category: "Large Language Model",
    company: "Anthropic",
    rating: 4.8,
    benchmarkScore: 87,
    description: "State-of-the-art LLM focused on helpful, harmless, and honest AI responses."
  },
  {
    id: 3,
    name: "Gemini Pro",
    category: "Multimodal Model",
    company: "Google",
    rating: 4.7,
    benchmarkScore: 85,
    description: "Versatile multimodal model with strong performance across text, image, and code tasks."
  }
];

const FeaturedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));
    
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-valhalla/30 section-focus"
      data-animate="true"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured AI Models</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover top-performing AI models based on our comprehensive analysis and benchmarking.
            </p>
          </div>
          <Button variant="link" className="text-san-marino flex items-center group mt-4 md:mt-0">
            View all models
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModels.map((model, index) => (
            <Card 
              key={model.id} 
              className="feature-card hover-lift hover-glow border border-border/50 overflow-hidden opacity-0"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-turquoise via-san-marino to-new-york-pink"></div>
              <CardHeader className="relative">
                <div className="absolute top-4 right-4 flex items-center">
                  <Star size={16} className="fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{model.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">{model.company}</p>
                <CardTitle className="flex items-start justify-between">
                  <span>{model.name}</span>
                </CardTitle>
                <p className="text-sm font-medium text-san-marino">{model.category}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{model.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart2 size={18} className="text-turquoise mr-2" />
                    <span className="text-sm">Benchmark Score:</span>
                  </div>
                  <div className="font-semibold">{model.benchmarkScore}/100</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
