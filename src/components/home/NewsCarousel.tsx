
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "OpenAI Releases GPT-4o with Enhanced Multimodal Capabilities",
    excerpt: "The latest model from OpenAI sets new benchmarks in understanding and generating content across text, images, and audio.",
    date: "2 days ago",
    category: "Product Launch",
    image: "/public/lovable-uploads/196fa4e9-4575-4f7a-9897-11c675f585ae.png"
  },
  {
    id: 2,
    title: "Anthropic's Claude 3 Opus Excels in Factuality Testing",
    excerpt: "Independent tests show Claude 3 Opus outperforming competitors in factual accuracy and reduced hallucinations.",
    date: "4 days ago",
    category: "Research"
  },
  {
    id: 3,
    title: "Meta Releases Llama 3 as Open Source Model",
    excerpt: "Meta's latest open source model bridges the gap between commercial and freely available AI capabilities.",
    date: "1 week ago",
    category: "Open Source"
  },
  {
    id: 4,
    title: "Stability AI Unveils New Stable Diffusion XL Turbo",
    excerpt: "The newest image generation model offers real-time generation while maintaining high quality outputs.",
    date: "1 week ago",
    category: "Image Generation"
  },
  {
    id: 5,
    title: "Google Updates Gemini with Enhanced Coding Capabilities",
    excerpt: "The latest update to Google's Gemini model significantly improves performance on programming tasks.",
    date: "2 weeks ago",
    category: "Update"
  }
];

const NewsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    let scrollInterval: NodeJS.Timeout;
    
    const checkScrollable = () => {
      if (!carousel) return;
      setCanScrollLeft(carousel.scrollLeft > 0);
      setCanScrollRight(carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - 10);
    };
    
    const startAutoScroll = () => {
      if (isPaused) return;
      
      scrollInterval = setInterval(() => {
        if (!carousel || isPaused) return;
        
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10) {
          // Reached the end, reset to beginning
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width (approx 320px + gap)
          carousel.scrollBy({ left: 340, behavior: 'smooth' });
        }
        
        checkScrollable();
      }, 5000);
    };
    
    startAutoScroll();
    carousel.addEventListener('scroll', checkScrollable);
    checkScrollable();
    
    return () => {
      clearInterval(scrollInterval);
      carousel.removeEventListener('scroll', checkScrollable);
    };
  }, [isPaused]);
  
  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };
  
  return (
    <section className="py-20 px-4 section-focus" data-animate="true">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Latest AI News</h2>
            <p className="text-muted-foreground">
              Stay up-to-date with the latest developments in the AI industry.
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="hover:bg-muted"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="hover:bg-muted"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-none scroll-smooth"
          >
            {newsItems.map((item) => (
              <Card 
                key={item.id} 
                className="flex-shrink-0 w-[300px] md:w-[350px] hover-lift"
              >
                {item.image && (
                  <div 
                    className="h-48 bg-muted rounded-t-lg overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}
                <CardHeader className={`${item.image ? 'pt-4' : 'pt-6'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-san-marino/10 text-san-marino">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock size={12} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
