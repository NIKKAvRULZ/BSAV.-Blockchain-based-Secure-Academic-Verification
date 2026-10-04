import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, FileText } from 'lucide-react'
import { PROJECT_ID, metricsStats } from '../data/constants'

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[95vh] text-center px-6 overflow-hidden pt-12 pb-20">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#22c55e]/15 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Project ID Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200/80 text-[#22c55e] text-xs font-black uppercase tracking-widest mb-8 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Research Project {PROJECT_ID} · SLIIT Faculty of Computing</span>
      </motion.div>

      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-7xl sm:text-8xl md:text-[10.5rem] font-black mb-6 tracking-tighter leading-none text-gray-900">
          <span>BS</span>
          <span className="text-[#22c55e] drop-shadow-[0_10px_25px_rgba(34,197,94,0.22)]">AV</span>
          <span className="text-gray-300">.</span>
        </h1>
      </motion.div>

      {/* Tagline Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-4 mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-medium text-gray-700 tracking-tight leading-snug">
          Blockchain-Based Transparent and Secure Academic Grading Using Decentralized Verification
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 max-w-3xl mx-auto leading-relaxed">
          Academic grades that anyone can verify and no one can quietly change.
        </h3>
        <div className="mx-auto h-1.5 w-24 bg-[#22c55e] rounded-full mt-6" />
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
      >
        {metricsStats.map((stat) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#22c55e]/50 transition-all text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</span>
                <div className="w-9 h-9 rounded-xl bg-green-50 text-[#22c55e] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-xs font-extrabold text-gray-900">{stat.label}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">{stat.sub}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Abstract Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative bg-white/70 backdrop-blur-md border border-gray-200/80 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto mb-14 text-left"
      >
        <h3 className="text-xs font-black text-[#22c55e] uppercase tracking-widest mb-3 border-b border-green-200/50 pb-2 inline-block">
          Project Abstract
        </h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
          BSAV is a four-component framework that takes a result from lecturer upload, through Board of Examiners review,
          to a blockchain-anchored proof that employers and universities can check without seeing the grade. Academic result
          systems usually depend on centralized databases and manual verification, leaving room for unauthorized changes and
          slow checks. BSAV splits the result lifecycle into controlled ingestion, academic governance with versioning,
          cryptographic anchoring with Merkle Trees &amp; IPFS, and independent zero-knowledge proof claim verification.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto z-10 justify-center"
      >
        <a
          href="#infographic"
          className="px-10 py-4 bg-[#22c55e] text-black rounded-2xl hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest text-xs shadow-[0_20px_40px_rgba(34,197,94,0.25)] flex items-center justify-center gap-2"
        >
          <span>Explore System Flow</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#downloads"
          className="px-10 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-black rounded-2xl hover:border-black hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest text-xs shadow-sm flex items-center justify-center gap-2"
        >
          <span>Project Documents</span>
          <FileText className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  )
}
