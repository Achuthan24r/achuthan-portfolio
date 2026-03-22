import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mushroom AI Barista",
      category: "IoT & Full-Stack",
      shortDesc: "Smart Mushroom Farm Automation & Disease Detection System.",
      description: "An advanced AgTech solution featuring real-time temperature & humidity monitoring via Arduino. It includes a smart spraying/motor control system and an integrated color sensor to monitor for mushroom diseases. Deployed as a PWA, allowing farmers to control hardware directly from their smartphones.",
      techStack: ["React.js", "Firebase", "Arduino", "Tailwind CSS", "PWA"],
      image: "https://images.unsplash.com/photo-1590463426723-ba14fbfff8e6?q=80&w=2070&auto=format&fit=crop", // Placeholder image representing mushrooms/farming
      github: "https://github.com/Achuthan24r",
      live: "#"
    },
    {
      id: 2,
      title: "EcoGuardian AI",
      category: "Web App & AI",
      shortDesc: "Smart Urban Cleanliness & Green Revenue System.",
      description: "A comprehensive platform aiming to manage plastic waste systematically. Includes real-time map integration for public waste reporting, a Plastic-to-Fuel calculator estimating CO2 saved, and a smart reward system for citizens. Hosted efficiently utilizing a scalable MERN/Firebase architecture.",
      techStack: ["React.js", "Express", "Node.js", "Tailwind", "Maps API"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop", // Placeholder image for Ecology
      github: "https://github.com/Achuthan24r",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase mb-2"
          >
            My Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto" ref={ref}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 relative">
                <br className="absolute -top-6 right-8 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 text-primary group-hover:rotate-12 transition-transform z-20" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.shortDesc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-700 rounded-full text-slate-800 dark:text-white z-10 transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 sm:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 sm:left-10 right-6 z-20">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 inline-block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Project Overview</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-none text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex flex-col gap-3">
                        <a 
                          href={selectedProject.github}
                          target="_blank" rel="noreferrer"
                          className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          <Github size={20} /> View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
