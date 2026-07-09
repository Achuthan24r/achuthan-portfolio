import React from 'react';

const ResumeDocument = ({ scale = 1.0 }) => {
  return (
    <div 
      id="print-area"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }} 
      className="w-full max-w-[800px] min-h-[1050px] bg-white text-slate-900 shadow-xl border border-slate-350 dark:border-slate-800 p-8 md:p-12 transition-transform duration-150 font-serif leading-relaxed h-fit text-sm relative"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold tracking-wide text-slate-950 mb-1">ACHUTHAN RAMESHKUMAR</h1>
        <p className="text-xs text-slate-605 mb-1">Tamil Nadu, India</p>
        <p className="text-xs text-slate-605 mb-1">
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
  );
};

export default ResumeDocument;
