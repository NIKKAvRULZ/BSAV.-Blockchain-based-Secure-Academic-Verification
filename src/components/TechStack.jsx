import { motion } from 'framer-motion'
import { stack } from '../data/constants'

export default function TechStack() {
  return (
    <section id="technology" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">TOOLS &amp; FRAMEWORKS</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Technology Stack</h2>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Stack Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {stack.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-md transition-all text-center group shadow-sm"
            >
              <div className="text-[10px] font-black uppercase text-cyan-600 tracking-wider mb-1">{t.category}</div>
              <div className="font-extrabold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">{t.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Prototype status banner */}
        <div className="p-4 bg-slate-100/90 border border-slate-200 rounded-xl text-center text-xs font-medium text-slate-600">
          <strong className="text-slate-900">Prototype Testbed:</strong> Local Hardhat EVM node with content-addressed IPFS pinned via Pinata and Certora formal verification[cite: 1, 10, 47].
        </div>
      </div>
    </section>
  )
}