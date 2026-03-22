import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure firebase is initialized

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (!db) throw new Error("Firebase not matching config or initialized");
      
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

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
    <section id="contact" className="py-24 bg-white dark:bg-dark-card/50">
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

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto" ref={ref}>
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's talk about everything!</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.link}
                  className="flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                >
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{info.title}</h4>
                    <p className="text-lg font-medium text-slate-800 dark:text-white group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10 rounded-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white transition-all resize-none"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">✓</div>
                  <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-xl font-medium">
                  Oops! Something went wrong. Please try again later. (Ensure Firebase config is set)
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
