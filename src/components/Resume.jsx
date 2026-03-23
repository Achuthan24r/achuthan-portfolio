import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Rocket, Calendar, MapPin, Eye } from 'lucide-react';
import ResumeViewer from './ResumeViewer';

const Resume = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Web Development Intern",
      company: "2 Internships",
      period: "Recent",
      description: [
        "Built responsive web applications using React.js",
        "Worked on UI/UX design and API integration",
        "Improved performance and usability of applications",
        "Followed real-world development workflows using Git"
      ],
      icon: <Briefcase size={20} />
    },
    {
      title: "IoT Intern",
      company: "1 Internship",
      period: "Recent",
      description: [
        "Developed IoT systems for real-time monitoring and automation",
        "Integrated sensors and connected hardware with web dashboards"
      ],
      icon: <Briefcase size={20} />
    },
    {
      title: "Coding Instructor",
      company: "Independent",
      period: "Ongoing",
      description: [
        "Conducted coding and web development classes for students",
        "Taught HTML, CSS, JavaScript, and basic web development",
        "Mentored students and guided them in building projects"
      ],
      icon: <Briefcase size={20} />
    }
  ];

  const education = {
    school: "Sethu Institute of Technology",
    degree: "Bachelor of Engineering – Computer Science (IoT)",
    period: "First Year (Ongoing)",
    location: "Tamil Nadu, India",
    icon: <GraduationCap size={20} />
  };

  const startup = {
    title: "Agri-Tech Startup",
    role: "Founder",
    status: "In Progress (Registration & Funding stage)",
    description: [
      "Focused on IoT-based mushroom automation systems",
      "Working on product development for smart agriculture solutions"
    ],
    icon: <Rocket size={20} />
  };

  return (
    <section id="resume" className="py-24 bg-white dark:bg-dark-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase mb-2"
          >
            My Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Work & <span className="text-primary">Education</span>
          </motion.h2>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" /> Experience
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 md:before:left-0 md:before:right-full md:before:mr-10">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-12 md:pl-0"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary z-10 md:-left-12">
                    {exp.icon}
                  </div>
                  <div className="glass-card p-6 border-l-4 border-l-primary group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{exp.period}</span>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, iIdx) => (
                        <li key={iIdx} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Startup & Education */}
          <div className="space-y-12">
            {/* Startup Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-8">
                <Rocket className="text-primary" /> Startup Initiative
              </h3>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-8 border-t-4 border-t-emerald-500 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 p-8 opacity-5">
                  <Rocket size={100} />
                </div>
                <div className="relative z-10">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest">{startup.status}</span>
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-white mt-3">{startup.title}</h4>
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">{startup.role}</p>
                  <ul className="space-y-3">
                    {startup.description.map((item, idx) => (
                      <li key={idx} className="text-slate-600 dark:text-slate-400 flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card p-7 border-l-4 border-l-blue-500"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">{education.degree}</h4>
                  <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">{education.period}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">{education.school}</p>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                  <MapPin size={14} /> {education.location}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* View Full Resume Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto w-fit">
            <button 
              onClick={() => setIsViewerOpen(true)}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-3 group ring-4 ring-primary/10"
            >
              <Eye size={22} className="group-hover:scale-110 transition-transform" /> 
              View Full Resume (PDF)
            </button>
            <a 
              href="https://drive.google.com/file/d/1F9NAfyk2rTIsyrz6ItjHUJYf3567KLlT/view?usp=drive_link" 
              target="_blank" rel="noreferrer"
              className="px-8 py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-full font-bold transition-all shadow-lg flex items-center gap-3 group"
            >
              <Download size={22} />
              Download Resume
            </a>
          </div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
            Interactive PDF viewer or direct download link
          </p>
        </motion.div>

        {/* PDF Modal */}
        <ResumeViewer 
          isOpen={isViewerOpen} 
          onClose={() => setIsViewerOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Resume;
