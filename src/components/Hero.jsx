import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold tracking-wider uppercase mb-4 text-sm md:text-base"
          >
            Welcome to my portfolio
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gradient">Achuthan Rameshkumar</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8 h-16 md:h-12"
          >
            I am a{' '}
            <TypeAnimation
              sequence={[
                'Full-Stack IoT Developer',
                2000,
                'CSE (IoT) Student',
                2000,
                'AI Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about building Agri-Tech automation solutions by integrating IoT hardware with modern full-stack web technologies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Contact Me <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-full font-semibold transition-all shadow-md group w-full sm:w-auto justify-center flex items-center gap-2"
            >
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1F9NAfyk2rTIsyrz6ItjHUJYf3567KLlT/view?usp=drive_link" 
              target="_blank" rel="noreferrer"
              className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-full font-semibold transition-all shadow-md group w-full sm:w-auto justify-center flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
            <a 
              href="https://github.com/Achuthan24r" 
              target="_blank" rel="noreferrer"
              className="p-4 bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:text-primary dark:hover:text-primary rounded-full transition-all shadow-md sm:flex hidden items-center justify-center"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#about" className="flex flex-col items-center text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors animate-bounce">
          <span className="text-sm font-medium mb-2 tracking-widest uppercase">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
