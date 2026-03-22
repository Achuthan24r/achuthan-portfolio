import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Layout, Flame, Settings, Bot, TerminalSquare } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "IoT & Automation",
      icon: <Settings className="text-blue-500" size={24} />,
      skills: [
        { name: "Sensor Integration", desc: "TCS34725 Color, Temp, Humidity", level: 90 },
        { name: "Automation Systems", desc: "Control & Processing Logic", level: 85 },
        { name: "Real-time Monitoring", desc: "Dashboard updates via websockets", level: 80 }
      ],
      color: "bg-blue-500"
    },
    {
      title: "Web Development",
      icon: <Layout className="text-green-500" size={24} />,
      skills: [
        { name: "React.js", desc: "Frontend UI, Hooks, State", level: 85 },
        { name: "Node.js & Express", desc: "Backend APIs & Services", level: 75 },
        { name: "MongoDB", desc: "Document Database Management", level: 70 }
      ],
      color: "bg-green-500"
    },
    {
      title: "Cloud & Tools",
      icon: <Flame className="text-orange-500" size={24} />,
      skills: [
        { name: "Firebase", desc: "Hosting, Realtime DB, Auth", level: 90 },
        { name: "Git & GitHub", desc: "Version Control", level: 85 }
      ],
      color: "bg-orange-500"
    },
    {
      title: "AI/ML (Beginner)",
      icon: <Bot className="text-purple-500" size={24} />,
      skills: [
        { name: "ChatGPT API", desc: "Integration & fine-tuning", level: 80 },
        { name: "Prompt Engineering", desc: "Optimizing AI queries", level: 85 },
        { name: "Machine Learning", desc: "Basic concepts & models", level: 60 }
      ],
      color: "bg-purple-500"
    },
    {
      title: "Programming",
      icon: <TerminalSquare className="text-yellow-500" size={24} />,
      skills: [
        { name: "Python", desc: "Scripting & Data", level: 85 },
        { name: "JavaScript", desc: "Web Logic", level: 90 },
        { name: "C / C++", desc: "Arduino & Basics", level: 75 },
        { name: "R", desc: "Statistical Computing", level: 65 }
      ],
      color: "bg-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase mb-2"
          >
            My Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A blend of modern web technologies, IoT hardware integration, and intelligent AI models to build comprehensive solutions.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-opacity-80 transition-colors`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <p className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{skill.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + (idx * 0.1) }}
                        className={`h-full ${category.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
