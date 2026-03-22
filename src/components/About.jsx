import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, BookOpen, Cpu, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cards = [
    {
      icon: <User className="text-primary mb-4" size={32} />,
      title: "Who I Am",
      desc: "First-year Computer Science (IoT) student at Sethu Institute of Technology."
    },
    {
      icon: <Target className="text-primary mb-4" size={32} />,
      title: "My Goal",
      desc: "Passionate about building Agri-Tech automation solutions."
    },
    {
      icon: <Cpu className="text-primary mb-4" size={32} />,
      title: "What I Do",
      desc: "Developing real-time monitoring & intelligent systems using the MERN stack."
    },
    {
      icon: <BookOpen className="text-primary mb-4" size={32} />,
      title: "My Focus",
      desc: "Integrating IoT hardware with web technologies to solve agricultural challenges."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-card/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase mb-2"
          >
            Discover More
          </motion.p>
          <motion.h2 
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 relative"
          >
            {/* Profile Image (Ensure you save your picture as profile.jpg in the public folder) */}
            <div className="relative rounded-2xl overflow-hidden glass-card aspect-square border-4 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center bg-slate-200 dark:bg-slate-800 group">
               <img 
                 src="/profile.jpg" 
                 alt="Achuthan Rameshkumar" 
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white mb-1">Achuthan Rameshkumar</h3>
                  <p className="text-slate-300 font-medium text-sm">IoT Developer & AI Enthusiast</p>
               </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl animate-float shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1+
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">Hackathon</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Winner</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I am a first-year Computer Science (IoT) student at Sethu Institute of Technology and a multi-time Hackathon Winner. I specialize in building end-to-end full-stack applications intertwined with smart IoT hardware.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 hover:border-primary/50 transition-colors"
                >
                  {card.icon}
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{card.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
