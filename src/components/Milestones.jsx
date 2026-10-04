import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { milestones } from '../data/constants'

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-slate-50/60 border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">TIMELINE &amp; ASSESSMENTS</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Project Milestones</h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">Academic research roadmap and project deliverables[cite: 1, 39].</p>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-8 py-4">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline indicator */}
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                m.status === 'Completed' ? 'bg-cyan-500 text-white' : 'bg-slate-300 text-slate-600'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 block">Phase 0{idx + 1}</span>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{m.name}</h3>
                  <p className="text-sm text-slate-600 font-medium">{m.desc}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shrink-0 ${
                  m.status === 'Completed' ? 'bg-cyan-100 text-cyan-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {m.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}