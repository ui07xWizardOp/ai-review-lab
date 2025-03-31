
import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const hero = heroRef.current;
    hero.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thanks for subscribing!",
      description: "You've been added to our newsletter.",
      variant: "default"
    });
    
    setEmail('');
  };
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center px-4"
      data-animate="true"
      style={{
        background: `radial-gradient(
          800px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
          rgba(72, 217, 189, 0.15),
          transparent 40%
        )`
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-san-marino/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-new-york-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary rounded-full">
              Trusted by AI experts and enthusiasts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Discover the </span>
              <span className="animated-gradient bg-clip-text text-transparent animate-background-pan">best AI models and tools</span>
              <span className="block"> for your needs</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We analyze and compare AI models across various metrics, helping you find the perfect AI solution for your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-turquoise to-san-marino hover:opacity-90 text-white"
                size="lg"
              >
                Compare AI Models <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-san-marino text-san-marino hover:bg-san-marino/10"
              >
                Explore Tools
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-turquoise mr-2" />
                <span>100+ Models Analyzed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-turquoise mr-2" />
                <span>Objective Metrics</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-turquoise mr-2" />
                <span>Updated Weekly</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="max-w-md w-full p-8 glass-card rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Stay ahead with AI insights</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest AI news, model updates, and exclusive insights.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-san-marino hover:bg-san-marino/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
