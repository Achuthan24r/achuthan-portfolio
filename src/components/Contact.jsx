import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "achuabi2419@gmail.com",
      link: "mailto:achuabi2419@gmail.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "+91 6380524775",
      link: "tel:+916380524775"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Tamil Nadu, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wide uppercase flex items-center justify-center gap-2 mb-2"
          >
            <MessageSquare size={16} /> Get In Touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Contact <span className="text-primary">Me</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Let's talk about everything!</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.a 
                key={idx} 
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl glass-card hover:border-primary/50 transition-all group"
              >
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all shadow-sm">
                  {info.icon}
                </div>
                <h4 className="text-xs font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-2">{info.title}</h4>
                <p className="text-base font-medium text-slate-800 dark:text-white group-hover:text-primary transition-colors break-all">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
