import { motion } from 'framer-motion'
import { BookOpen, Sparkles } from 'lucide-react'
import { related, relatedConclusion } from '../data/constants'

export default function LiteratureSurvey() {
  return (
    <section id="literature" className="py-24 bg-slate-50/60 border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">BACKGROUND &amp; PRIOR WORK</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Literature Survey</h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">
            What exists in academic blockchain literature, and where current systems stop.
          </p>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Literature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {related.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col group shadow-sm"
            >
              <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 border border-cyan-100 shadow-sm text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Takeaway Banner */}
        <div className="p-6 bg-cyan-50/70 border border-cyan-200/80 rounded-2xl flex items-start gap-4 shadow-sm">
          <Sparkles className="w-6 h-6 text-cyan-600 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 font-medium leading-relaxed">
            <strong className="text-slate-900">Key Takeaway:</strong> {relatedConclusion}
          </p>
        </div>
      </div>
    </section>
  )
}