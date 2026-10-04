import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import { gitBranches } from '../data/constants'

export default function GitBranchesInfographic() {
  return (
    <section id="branches" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">IMPLEMENTATION HISTORY</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Git Repository Branch Architecture</h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">
            Modular feature development tracked across research Git branches for component isolation[cite: 1, 33].
          </p>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gitBranches.map((b) => (
            <motion.div
              key={b.branch}
              whileHover={{ y: -4 }}
              className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-cyan-500 hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-lg">
                  {b.module}
                </span>
                <GitBranch className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
              </div>
              <div className="font-mono font-bold text-xs text-slate-900 mb-2 truncate">{b.branch}</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}