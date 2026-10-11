import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, Download, Layers } from 'lucide-react'

export default function SystemArchitectureDiagram() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="architecture-diagram" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Soft Parallax Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-cyan-400/5 via-indigo-400/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-4 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm">
            System Schematic
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            High-Level System Architecture
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Complete architectural framework mapping data flow from institutional ingestion to zero-knowledge verification.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Diagram Card Container */}
        <div className="max-w-6xl mx-auto bg-slate-50/70 backdrop-blur-xl p-4 md:p-8 rounded-[2.5rem] border border-slate-200/80 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.06)] relative group">
          <div 
            className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 shadow-inner cursor-zoom-in" 
            onClick={() => setIsOpen(true)}
          >
            <img
              src="/diagrams/system-architecture.png"
              alt="BSAV High-Level System Architecture Diagram"
              className="w-full h-auto object-contain max-h-[600px] mx-auto p-2 md:p-6 transition-transform duration-500 group-hover:scale-[1.01]"
              onError={(e) => {
                e.target.style.display = 'none'
                document.getElementById('diagram-fallback').style.display = 'flex'
              }}
            />

            {/* Hover Zoom Overlay */}
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs flex items-center gap-2 shadow-lg scale-95 group-hover:scale-100 transition-all duration-300">
                <ZoomIn className="w-4 h-4 text-cyan-600" /> Click to Expand Diagram
              </span>
            </div>

            {/* Fallback Placeholder */}
            <div id="diagram-fallback" className="hidden py-24 flex-col items-center justify-center text-slate-400 text-center">
              <Layers className="w-12 h-12 text-cyan-500 mb-3" />
              <p className="text-sm font-semibold text-slate-700 px-4">Place your PP2 architecture diagram inside:</p>
              <code className="text-xs font-mono text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md mt-1 break-all">
                public/diagrams/system-architecture.png
              </code>
            </div>
          </div>

          {/* Captions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2 text-xs text-slate-500 font-medium">
            <span>Figure 1: End-to-end BSAV four-component cryptographic integrity pipeline.</span>
            <a
              href="/diagrams/system-architecture.png"
              download="BSAV_System_Architecture.png"
              className="inline-flex items-center gap-1.5 text-cyan-700 hover:text-cyan-800 font-bold"
            >
              <Download className="w-3.5 h-3.5" /> Download Full Resolution
            </a>
          </div>
        </div>

        {/* Zoom Lightbox Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25 }}
                src="/diagrams/system-architecture.webp"
                alt="Architecture Diagram Fullscreen"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl bg-white p-2 md:p-4 shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}