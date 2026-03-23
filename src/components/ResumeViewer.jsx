import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';

// Set up worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeViewer = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

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
          className="bg-white dark:bg-dark-card w-full max-w-5xl h-full max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
        >
          {/* Header */}
          <div className="p-4 border-b dark:border-slate-800 flex justify-between items-center bg-white dark:bg-dark-card sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white hidden sm:block">Resume Preview</h3>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                <button 
                  onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors text-slate-600 dark:text-slate-300"
                  aria-label="Zoom Out"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-sm font-medium w-12 text-center text-slate-600 dark:text-slate-300">{Math.round(scale * 100)}%</span>
                <button 
                  onClick={() => setScale(s => Math.min(2, s + 0.1))}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors text-slate-600 dark:text-slate-300"
                  aria-label="Zoom In"
                >
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
               <a 
                href="/resume.pdf" 
                download="Achuthan_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold transition-colors"
              >
                <Download size={18} /> <span className="hidden sm:inline">Download</span>
              </a>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* PDF Viewer Area */}
          <div className="flex-1 overflow-auto p-4 md:p-8 bg-slate-100 dark:bg-slate-900 flex justify-center custom-scrollbar">
            <Document
              file="/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                  <Loader2 className="animate-spin mb-4" size={40} />
                  <p>Loading Resume...</p>
                </div>
              }
              error={
                <div className="text-center py-20 text-red-500">
                  <p className="text-lg font-bold">Failed to load resume.</p>
                  <p className="text-sm">Please ensure resume.pdf exists in the public directory.</p>
                </div>
              }
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-xl"
              />
            </Document>
          </div>

          {/* Footer Controls */}
          {numPages > 1 && (
            <div className="p-4 border-t dark:border-slate-800 flex justify-center items-center gap-6 bg-white dark:bg-dark-card">
              <button
                disabled={pageNumber <= 1}
                onClick={() => changePage(-1)}
                className="p-2 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors font-bold text-primary"
              >
                <ChevronLeft size={28} />
              </button>
              <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                Page {pageNumber} of {numPages}
              </p>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => changePage(1)}
                className="p-2 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors font-bold text-primary"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Resume;
