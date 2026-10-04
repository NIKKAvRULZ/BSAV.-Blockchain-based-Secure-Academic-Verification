import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react'
import { gaps, researchQuestion, gapSummary, evaluationTests, limitations, evaluationNote } from '../data/constants'

export default function ResearchGap() {
  return (
    <section id="gap" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">CURRENT SYSTEM VULNERABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Research Gap</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            {gapSummary}
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Central Research Question Card */}
        <div className="bg-green-50/60 border border-green-200 p-8 rounded-3xl mb-12 text-center max-w-4xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#22c55e] mb-2 block">
            Core Research Question
          </span>
          <p className="text-lg md:text-xl font-bold text-gray-900 italic">
            "{researchQuestion}"
          </p>
        </div>

        {/* Four Identified Research Gaps */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {gaps.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col group border-l-8 border-l-amber-500"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Evaluation Coverage & Prototype Limitations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Functional Evaluation Tests */}
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-black text-gray-900 mb-2">Integration & Functional Tests</h3>
            <p className="text-xs text-gray-500 font-medium mb-6">{evaluationNote}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {evaluationTests.map((test) => (
                <div key={test} className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-200 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span className="truncate">{test}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Limitations */}
          <div className="p-8 bg-red-50/40 rounded-3xl border border-red-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Prototype Scope Limitations</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Current Implementation Boundaries</h3>
              <div className="space-y-4">
                {limitations.map((lim) => (
                  <div key={lim.title} className="p-4 bg-white rounded-2xl border border-red-100">
                    <h4 className="font-black text-gray-900 text-sm mb-1">{lim.title}</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">{lim.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-gray-500 font-medium mt-4">
              Detailed in Paper Section 10.3 to guide production consortium migration and on-chain persistence[cite: 23].
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}