
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 dark:bg-valhalla/40 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-full bg-turquoise flex items-center justify-center text-white">AI</div>
              <span className="animated-gradient bg-clip-text text-transparent font-bold">AIReviewLab</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Your trusted source for objective, data-driven AI model and tool comparisons.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Mail size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">AI Models</h3>
            <ul className="space-y-2">
              <FooterLink to="/models/llm">Large Language Models</FooterLink>
              <FooterLink to="/models/image">Image Generation</FooterLink>
              <FooterLink to="/models/audio">Audio Models</FooterLink>
              <FooterLink to="/models/multimodal">Multimodal Models</FooterLink>
              <FooterLink to="/models/compare">Compare Models</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">AI Tools</h3>
            <ul className="space-y-2">
              <FooterLink to="/tools/text">Text & Writing</FooterLink>
              <FooterLink to="/tools/image">Image & Design</FooterLink>
              <FooterLink to="/tools/productivity">Productivity</FooterLink>
              <FooterLink to="/tools/development">Development</FooterLink>
              <FooterLink to="/tools/find">Find Your Tool</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/news">News</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/newsletter">Newsletter</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AIReviewLab. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/cookie" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-turquoise hover:text-white transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;
