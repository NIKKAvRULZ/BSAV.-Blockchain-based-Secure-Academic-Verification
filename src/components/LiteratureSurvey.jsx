import { motion } from 'framer-motion'
import { BookOpen, Sparkles } from 'lucide-react'
import { related } from '../data/constants'

export default function LiteratureSurvey() {
  return (
    <section id="literature" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">BACKGROUND &amp; PRIOR WORK</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Literature Survey</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            What exists in academic blockchain literature, and where current systems stop.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Literature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {related.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 border border-green-100 shadow-sm text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-black transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="p-6 bg-green-50/50 border border-green-200/80 rounded-2xl flex items-start gap-4 shadow-sm">
          <Sparkles className="w-6 h-6 text-[#22c55e] shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            <strong>Key Takeaway:</strong> Prior works show that distributed technology suits educational records. However,
            none covers the full path from ingestion through BOE review, controlled correction, finalization, cryptographic
            anchoring, and privacy-preserving verification.
          </p>
        </div>
      </div>
    </section>
  )
}
