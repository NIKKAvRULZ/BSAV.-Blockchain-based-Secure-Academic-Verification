import { motion } from 'framer-motion'
import { BookOpen, Sparkles, ArrowUpRight } from 'lucide-react'
import { related, relatedConclusion } from '../data/constants'

export default function LiteratureSurvey() {
  return (
    <section id="literature" className="py-32 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Soft Ambient Mesh Background */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50/90 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm"
          >
            Academic Context &amp; Prior Art
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Literature Survey
          </motion.h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Examining existing distributed educational registries and their architectural boundaries[cite: 12].
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Softened Literature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {related.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="p-8 bg-white/80 backdrop-blur-xl rounded-[2.25rem] border border-slate-200/70 hover:border-cyan-300 hover:shadow-[0_25px_50px_-15px_rgba(14,165,233,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50/80 border border-cyan-100 text-cyan-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-cyan-500 transition-colors">
                    REF 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Distributed Ledger Scope</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fluid Synthesis Takeaway Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-gradient-to-r from-cyan-50/70 via-sky-50/40 to-indigo-50/50 border border-cyan-200/60 rounded-[2.25rem] shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-white border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-6 h-6 text-cyan-600 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full mb-2 inline-block">
              Critical Literature Synthesis
            </span>
            <p className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold">Key Takeaway:</strong> {relatedConclusion}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}