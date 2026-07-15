import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Image } from 'lucide-react';

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white p-6 rounded-2xl w-full max-w-sm border border-slate-200 dark:border-slate-850 shadow-2xl relative"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-650 dark:hover:text-slate-300 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          
          <h3 className="text-xl font-bold text-center mb-4 mt-2">Download Resume</h3>
          <p className="text-sm text-slate-500 dark:text-slate-405 text-center mb-6">
            Choose your preferred format:
          </p>
          
          <div className="space-y-4">
            <a 
              href="/resume.pdf" 
              download="Achuthan_Resume.pdf"
              onClick={onClose}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary bg-slate-50 dark:bg-slate-950 transition-all group font-semibold text-base"
            >
              <div className="w-10 h-10 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-800 dark:text-slate-100">PDF Document</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">Standard PDF for printing/applying</p>
              </div>
            </a>
            
            <a 
              href="/resume.jpg" 
              download="Achuthan_Resume.jpg"
              onClick={onClose}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary bg-slate-50 dark:bg-slate-950 transition-all group font-semibold text-base"
            >
              <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-800 dark:text-slate-100">JPG Image</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">High-quality image from assets</p>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DownloadModal;
