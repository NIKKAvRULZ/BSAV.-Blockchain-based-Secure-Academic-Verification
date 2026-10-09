import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Terminal, ShieldCheck, Database, Layers } from 'lucide-react'
import { stack } from '../data/constants'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Extract unique categories
  const categories = ['All', ...new Set(stack.map(s => s.category))]

  const filteredStack = activeCategory === 'All'
    ? stack
    : stack.filter(s => s.category === activeCategory)

  return (
    <section id="technology" className="py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm">
            Core Technology &amp; Tooling
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Technology Stack
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Decentralized frameworks, cryptographic primitives, and smart-contract verification engines.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                  : 'bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-white hover:text-cyan-700 hover:border-cyan-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-14">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((t) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-slate-50/70 rounded-[2rem] border border-slate-200/70 hover:bg-white hover:border-cyan-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] transition-all duration-300 text-center group shadow-sm flex flex-col justify-center items-center"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-0.5 rounded-full mb-3">
                  {t.category}
                </div>
                <div className="font-extrabold text-slate-800 text-base group-hover:text-cyan-800 transition-colors">
                  {t.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Prototype Architecture Banner */}
        <div className="p-6 bg-slate-50/80 rounded-[2rem] border border-slate-200/60 text-center max-w-3xl mx-auto shadow-sm flex items-center justify-center gap-3">
          <Cpu className="w-5 h-5 text-cyan-600 shrink-0" />
          <p className="text-xs text-slate-600 font-medium">
            <strong className="text-slate-900">Prototype Testbed:</strong> Deployed on local Hardhat EVM nodes with public Pinata IPFS pinning and Certora formal smart-contract verification.
          </p>
        </div>
      </div>
    </section>
  )
}