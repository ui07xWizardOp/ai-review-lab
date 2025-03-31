
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!carouselRef.current) return;
    
    let interval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      if (isPaused) return;
      
      interval = setInterval(() => {
        if (isPaused) return;
        
        setActiveIndex(prev => {
          const next = (prev + 1) % blogPosts.length;
          scrollToCard(next);
          return next;
        });
      }, 5000);
    };
    
    startAutoScroll();
    
    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);
  
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    
    const cards = carouselRef.current.querySelectorAll('.blog-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-valhalla/30 section-focus" data-animate="true">
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
          ref={carouselRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`blog-card hover-lift border border-border/50 overflow-hidden transition-all duration-500 ${
                index === activeIndex ? 'ring-2 ring-turquoise' : ''
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
              <CardFooter className="flex justify-between">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <Button variant="link" className="text-san-marino p-0">Read more</Button>
              </CardFooter>
            </Card>
          ))}
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
                  scrollToCard(index);
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
