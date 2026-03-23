import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Secured first place for developing the Mushroom AI Barista, outperforming numerous competing teams with a comprehensive IoT and Full-Stack solution that tackles real-world agricultural problems.",
      icon: <Trophy className="text-yellow-500 w-12 h-12" />,
      date: "2024",
      color: "bg-yellow-500/10 border-yellow-500/20"
    },
    {
      id: 2,
      title: "3 Internships Completed",
      description: "Successfully completed 3 internships (2 in Web Development, 1 in IoT), working on real-world React.js applications and IoT sensor integration.",
      icon: <Award className="text-blue-500 w-12 h-12" />,
      date: "Ongoing",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      id: 3,
      title: "Founded Agri-Tech Startup",
      description: "Currently leading an Agri-Tech startup focused on smart mushroom automation, presently in the registration and funding stage.",
      icon: <Star className="text-emerald-500 w-12 h-12" />,
      date: "Ongoing",
      color: "bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase mb-2 flex items-center justify-center gap-2"
          >
            <Star size={16} /> Milestones
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            My <span className="text-primary">Achievements</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8" ref={ref}>
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`glass-card p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start sm:items-center border ${item.color} hover:shadow-lg transition-shadow relative overflow-hidden group`}
            >
              <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              
              <div className="flex-shrink-0 p-4 bg-white dark:bg-dark-bg rounded-2xl shadow-inner border border-slate-100 dark:border-slate-800 z-10">
                {item.icon}
              </div>
              
              <div className="z-10 flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
