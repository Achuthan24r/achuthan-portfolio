import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, ZoomIn, ZoomOut } from 'lucide-react';

const ResumeViewer = ({ isOpen, onClose }) => {
  const [scale, setScale] = useState(1.0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-8"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-slate-100 dark:bg-slate-900 w-full max-w-5xl h-full max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl relative border dark:border-slate-800"
        >
          {/* Header Controls */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-950 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-slate-850 dark:text-white hidden sm:block">Resume Preview</h3>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
                <button 
                  onClick={() => setScale(s => Math.max(0.6, s - 0.1))}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-800 rounded transition-colors text-slate-650 dark:text-slate-350"
                  aria-label="Zoom Out"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-xs font-semibold w-12 text-center text-slate-650 dark:text-slate-350">{Math.round(scale * 100)}%</span>
                <button 
                  onClick={() => setScale(s => Math.min(1.4, s + 0.1))}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-800 rounded transition-colors text-slate-650 dark:text-slate-350"
                  aria-label="Zoom In"
                >
                  <ZoomIn size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href="https://drive.google.com/file/d/1F9NAfyk2rTIsyrz6ItjHUJYf3567KLlT/view?usp=drive_link" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Download size={16} /> <span>Download PDF</span>
              </a>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors text-slate-500"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* CV Document Container */}
          <div className="flex-1 overflow-auto p-4 md:p-8 bg-slate-200 dark:bg-slate-900/60 flex justify-center custom-scrollbar">
            {/* CV Page Sheet */}
            <div 
              style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }} 
              className="w-full max-w-[800px] min-h-[1050px] bg-white text-slate-900 shadow-xl border border-slate-350 dark:border-slate-800 p-8 md:p-12 transition-transform duration-150 font-serif leading-relaxed h-fit text-sm relative"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold tracking-wide text-slate-950 mb-1">ACHUTHAN RAMESHKUMAR</h1>
                <p className="text-xs text-slate-600 mb-1">Tamil Nadu, India</p>
                <p className="text-xs text-slate-600 mb-1">
                  <a href="mailto:achuabi2419@gmail.com" className="hover:text-primary transition-colors">achuabi2419@gmail.com</a>
                  {" — "}
                  <a href="tel:+916380524775" className="hover:text-primary transition-colors">+91 6380524775</a>
                </p>
                <p className="text-xs text-slate-500 font-sans space-x-2">
                  <a href="https://github.com/Achuthan24r" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline transition-all">GitHub</a>
                  <span>|</span>
                  <a href="https://www.linkedin.com/in/achuthan-rameshkumar-48534b30a" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline transition-all">LinkedIn</a>
                  <span>|</span>
                  <a href="https://portfolio-842b6.web.app/" className="hover:text-primary hover:underline transition-all">Portfolio</a>
                </p>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Summary</h2>
                <p className="text-slate-800 text-justify">
                  Computer Science (IoT) student and Hackathon Winner focused on Agri-Tech and Smart City solutions.
                  Skilled in full-stack development and IoT automation systems. Preparing for GSOC and open-source contributions.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Skills</h2>
                <div className="space-y-1 text-slate-800">
                  <p><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS</p>
                  <p><strong>Backend:</strong> Node.js, Express.js</p>
                  <p><strong>Database:</strong> MongoDB, Firebase</p>
                  <p><strong>IoT:</strong> Sensors, Real-time Monitoring</p>
                  <p><strong>Languages:</strong> JavaScript, Python, C, R</p>
                  <p><strong>Tools:</strong> Git, VS Code, Postman</p>
                  <p><strong>AI:</strong> ChatGPT API</p>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Projects</h2>
                
                <div className="mb-3">
                  <h3 className="font-bold text-slate-950">Mushroom AI Barista</h3>
                  <ul className="list-disc pl-5 text-slate-800 space-y-0.5">
                    <li>IoT-based automation system for mushroom farming</li>
                    <li>Real-time dashboard + environmental control</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">Eco Guardian</h3>
                  <ul className="list-disc pl-5 text-slate-800 space-y-0.5">
                    <li>AI-based waste management system</li>
                    <li>Tracking, classification, and dashboard features</li>
                  </ul>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Experience</h2>
                
                <div className="mb-3">
                  <div className="flex justify-between font-bold text-slate-950">
                    <h3>Web Development Intern</h3>
                  </div>
                  <ul className="list-disc pl-5 text-slate-800">
                    <li>Built responsive apps and integrated APIs</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between font-bold text-slate-950">
                    <h3>IoT Intern</h3>
                  </div>
                  <ul className="list-disc pl-5 text-slate-800">
                    <li>Developed monitoring systems using sensors</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <h3>Coding Instructor</h3>
                  </div>
                  <ul className="list-disc pl-5 text-slate-800">
                    <li>Taught web development and mentored students</li>
                  </ul>
                </div>
              </div>

              {/* Startup */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Startup</h2>
                <p className="text-slate-800">
                  Founder of IoT-based mushroom automation startup (in progress)
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Achievements</h2>
                <p className="text-slate-800">
                  Hackathon Winner — 3 Internships — Teaching Experience — Startup Builder
                </p>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Education</h2>
                <div className="text-slate-800">
                  <p className="font-bold">B.E. Computer Science (IoT)</p>
                  <p>Sethu Institute of Technology</p>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-base font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-slate-950">Interests</h2>
                <p className="text-slate-800">
                  IoT & Smart Automation — AI Integration — Open Source (GSOC) — Agri-Tech Innovation — Problem Solving
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeViewer;
