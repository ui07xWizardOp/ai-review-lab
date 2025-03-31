
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'py-2 bg-white/90 dark:bg-valhalla/90 backdrop-blur-md shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-bold text-xl text-primary hover:text-secondary transition-colors duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-turquoise flex items-center justify-center text-white">AI</div>
            <span className="animated-gradient bg-clip-text text-transparent font-bold">AIReviewLab</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/models">AI Models</NavLink>
              <NavLink to="/tools">AI Tools</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/find-tool">Find Your Tool</NavLink>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="hover-lift"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-foreground/80 hover:text-foreground font-medium animated-underline py-1 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default NavBar;
