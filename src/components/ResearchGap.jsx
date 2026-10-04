import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react'
import { gaps, researchQuestion, gapSummary, evaluationTests, limitations, evaluationNote } from '../data/constants'

export default function ResearchGap() {
  return (
    <section id="gap" className="py-32 bg-white border-t border-slate-100 relative overflow-hidden soft-mesh-bg">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-4 py-1.5 bg-cyan-50/80 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm"
          >
            Problem Domain
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Research Gap &amp; System Vulnerabilities
          </motion.h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            {gapSummary}
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Central Research Question Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-50/70 via-sky-50/50 to-indigo-50/60 border border-cyan-100/90 p-8 md:p-10 rounded-[2.5rem] mb-16 text-center max-w-4xl mx-auto shadow-sm backdrop-blur-md"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-800 bg-cyan-100/80 px-3.5 py-1 rounded-full mb-3 inline-block">
            Central Research Question
          </span>
          <p className="text-lg md:text-xl font-semibold text-slate-800 italic leading-relaxed">
            "{researchQuestion}"
          </p>
        </motion.div>

        {/* Four Identified Research Gaps */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {gaps.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 bg-slate-50/70 backdrop-blur-md rounded-[2.25rem] border border-slate-200/70 hover:border-cyan-300 hover:bg-white hover:shadow-[0_20px_45px_-15px_rgba(14,165,233,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-5 border border-slate-200/80 text-cyan-700 shadow-sm group-hover:scale-110 group-hover:bg-cyan-50 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Evaluation Coverage & Implementation Boundaries */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-slate-50/80 rounded-[2.5rem] border border-slate-200/70 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-1.5">Integration &amp; Functional Tests</h3>
            <p className="text-xs text-slate-400 font-medium mb-6">{evaluationNote}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {evaluationTests.map((test) => (
                <div key={test} className="flex items-center gap-2.5 p-3 bg-white rounded-2xl border border-slate-100 text-xs font-semibold text-slate-700 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="truncate">{test}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-amber-50/30 rounded-[2.5rem] border border-amber-200/60 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Prototype Scope Limitations</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Implementation Boundaries</h3>
              <div className="space-y-3.5">
                {limitations.map((lim) => (
                  <div key={lim.title} className="p-4 bg-white/90 rounded-2xl border border-amber-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{lim.title}</h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">{lim.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-medium mt-4">
              Detailed in Paper Section 10.3 to guide production consortium migration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}