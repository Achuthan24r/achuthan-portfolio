import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Printer, Download } from 'lucide-react';
import ResumeDocument from './ResumeDocument';
import DownloadModal from './DownloadModal';

const ResumeViewer = ({ isOpen, onClose }) => {
  const [scale, setScale] = useState(1.0);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

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
              <h3 className="text-lg font-bold text-slate-800 dark:text-white hidden sm:block">Resume Preview</h3>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
                <button 
                  onClick={() => setScale(s => Math.max(0.6, s - 0.1))}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400"
                  aria-label="Zoom Out"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-xs font-semibold w-12 text-center text-slate-600 dark:text-slate-400">{Math.round(scale * 100)}%</span>
                <button 
                  onClick={() => setScale(s => Math.min(1.4, s + 0.1))}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400"
                  aria-label="Zoom In"
                >
                  <ZoomIn size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-750 hover:bg-slate-750 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Printer size={16} /> <span className="hidden sm:inline">Print CV</span>
              </button>
              <button 
                onClick={() => setIsDownloadModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Download size={16} /> <span>Download Resume</span>
              </button>
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
            <ResumeDocument scale={scale} />
          </div>
        </motion.div>
      </motion.div>
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </AnimatePresence>
  );
};

export default ResumeViewer;
