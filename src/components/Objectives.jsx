import { motion } from 'framer-motion'
import { objectives } from '../data/constants'

export default function Objectives() {
  return (
    <section id="objectives" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">PROJECT DELIVERABLES</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Research Objectives</h2>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {objectives.map((obj, idx) => (
            <motion.div
              key={obj}
              whileHover={{ scale: 1.01 }}
              className="p-5 bg-white rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-cyan-400 hover:shadow-md transition-all shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                0{idx + 1}
              </div>
              <span className="text-sm md:text-base font-bold text-slate-800">{obj}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}