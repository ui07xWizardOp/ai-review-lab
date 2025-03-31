
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const blogPosts = [
  {
    id: 1,
    title: "How to Evaluate Large Language Models: A Comprehensive Guide",
    excerpt: "Learn the key metrics and benchmarks for assessing LLM performance and making informed decisions.",
    author: "Alex Chen",
    date: "May 5, 2023",
    readTime: "8 min read",
    category: "Guides"
  },
  {
    id: 2,
    title: "The Rise of Multimodal AI: Bridging Text, Vision, and Audio",
    excerpt: "Explore how the latest multimodal models are changing the AI landscape with unified understanding across modalities.",
    author: "Sophia Martinez",
    date: "April 28, 2023",
    readTime: "6 min read",
    category: "Trends"
  },
  {
    id: 3,
    title: "Open Source vs. Commercial AI Models: Making the Right Choice",
    excerpt: "Compare the advantages and limitations of open source and commercial AI models for your specific needs.",
    author: "James Wilson",
    date: "April 15, 2023",
    readTime: "10 min read",
    category: "Analysis"
  },
  {
    id: 4,
    title: "Fine-tuning vs. RAG: Strategies for Customizing AI Models",
    excerpt: "A detailed comparison of fine-tuning and retrieval-augmented generation approaches for specialized AI applications.",
    author: "Emma Johnson",
    date: "April 8, 2023",
    readTime: "12 min read",
    category: "Technical"
  },
  {
    id: 5,
    title: "AI Agents: The Next Evolution in Autonomous Systems",
    excerpt: "Discover how AI agents are transforming automation with improved reasoning and decision-making capabilities.",
    author: "David Kim",
    date: "March 30, 2023",
    readTime: "7 min read",
    category: "Innovation"
  }
];

const BlogSection: React.FC = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplayEnabled) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % blogPosts.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplayEnabled]);

  const handleMouseEnter = () => {
    setAutoplayEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoplayEnabled(true);
  };
  
  return (
    <section 
      className="py-20 px-4 bg-gradient-to-b from-background via-background to-muted/10 section-focus"
      data-animate="true"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl">
              Deep dives, tutorials, and insights on AI models, tools, and industry trends.
            </p>
          </div>
          <Button variant="link" className="text-san-marino flex items-center group mt-4 md:mt-0">
            View all posts
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem 
                  key={post.id} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card 
                    className={`blog-card h-full hover-lift border border-border/50 overflow-hidden transition-all duration-500 ${
                      index === activeIndex ? 'ring-2 ring-turquoise/50' : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <CardHeader className="relative">
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl line-clamp-2">{post.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <User size={14} className="mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <Button variant="link" className="text-turquoise hover:text-turquoise/80 p-0">Read more</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-turquoise/20 hover:bg-turquoise/10 hover:border-turquoise/30" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-turquoise/20 hover:bg-turquoise/10 hover:border-turquoise/30" />
            </div>
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-turquoise w-6' : 'bg-muted'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
