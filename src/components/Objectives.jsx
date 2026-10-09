import { motion } from 'framer-motion'
import { Target, CheckCircle2 } from 'lucide-react'
import { objectives } from '../data/constants'

export default function Objectives() {
  return (
    <section id="objectives" className="py-32 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm">
            Deliverables &amp; Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Research Objectives
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Specific design targets defined to realize the four-component integrity framework.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Smooth Objectives Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {objectives.map((obj, idx) => (
            <motion.div
              key={obj}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="p-7 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/70 hover:border-cyan-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-black text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full">
                  OBJECTIVE 0{idx + 1}
                </span>
                <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-cyan-500 transition-colors" />
              </div>

              <p className="text-sm font-semibold text-slate-800 group-hover:text-cyan-900 transition-colors leading-relaxed">
                {obj}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}