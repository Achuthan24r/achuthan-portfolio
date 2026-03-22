import React from 'react';
import { Github, Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 relative z-10 text-slate-300 border-none">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white mb-2 inline-block">
              Achuthan<span className="text-primary">.dev</span>
            </a>
            <p className="text-slate-400 max-w-sm mt-2">
              Building smart Agri-Tech solutions and full-stack applications with modern technology.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Achuthan24r" 
              target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1">
            © {new Date().getFullYear()} Achuthan Rameshkumar. Crafted with <Heart size={14} className="text-red-500" />
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
