import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import { refs } from '../data/constants'

export default function References() {
  return (
    <section id="references" className="py-32 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-4 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm"
          >
            Academic Citations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            References &amp; Prior Literature
          </motion.h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Peer-reviewed papers, cryptographic standards, and institutional frameworks referenced in this work.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Reference Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {refs.map((r, i) => {
            // Split out author prefix and publication title if formatted with year
            const parts = r.split(/\((\d{4})\)/)
            const author = parts[0]?.trim()
            const year = parts[1]
            const details = parts[2]?.trim()

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="p-7 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/70 hover:border-cyan-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-100 text-cyan-700">
                      [{i + 1}]
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 transition-colors" />
                  </div>

                  <p className="text-sm font-medium text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors">
                    {details ? details.replace(/^\./, '').trim() : r}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="truncate">{author} {year ? `(${year})` : ''}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}