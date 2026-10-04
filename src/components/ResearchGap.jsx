import { motion } from 'framer-motion'
import { gaps } from '../data/constants'

export default function ResearchGap() {
  return (
    <section id="gap" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">CURRENT SYSTEM VULNERABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Research Gap</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            How can a result go from first submission to officially finalized and independently verified without relying only on the issuing institution?
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Gap Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {gaps.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col group border-l-8 border-l-amber-500"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
