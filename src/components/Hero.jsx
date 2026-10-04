import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, FileText, Cpu, ShieldCheck } from 'lucide-react'
import { PROJECT_ID, metricsStats, abstract } from '../data/constants'

export default function Hero() {
  const heroRef = useRef(null)

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Multilayer parallax speeds
  const yAura = useTransform(scrollYProgress, [0, 1], [0, 150])
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 80])
  const yMetrics = useTransform(scrollYProgress, [0, 1], [0, 40])
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-[95vh] text-center px-6 overflow-hidden pt-16 pb-28 soft-mesh-bg"
    >
      {/* Parallax Floating Ambient Glow */}
      <motion.div
        style={{ y: yAura }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-cyan-400/15 via-sky-300/10 to-indigo-400/10 rounded-full blur-[140px] -z-10 pointer-events-none"
      />

      {/* Project ID Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/60 text-cyan-800 text-[11px] font-bold uppercase tracking-widest mb-10 shadow-[0_4px_20px_-4px_rgba(14,165,233,0.12)]"
      >
        <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
        <span>Research Project {PROJECT_ID} · SLIIT Faculty of Computing</span>
      </motion.div>

      {/* Parallax Title */}
      <motion.div
        style={{ y: yTitle, opacity: opacityFade }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-7xl sm:text-8xl md:text-[9.5rem] font-black mb-6 tracking-tighter leading-none text-slate-900 select-none">
          <span>BS</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 drop-shadow-[0_15px_35px_rgba(14,165,233,0.2)]">
            AV
          </span>
          <span className="text-cyan-400/60 font-light">.</span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        style={{ opacity: opacityFade }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-4 mb-14"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 tracking-tight leading-snug">
          Blockchain-Based Transparent and Secure Academic Grading Using Decentralized Verification
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
          An end-to-end framework turning submitted grades into cryptographically verifiable claims without revealing sensitive student data.
        </p>
        <div className="mx-auto h-1 w-16 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-6 opacity-80" />
      </motion.div>

      {/* Parallax Metrics Cards */}
      <motion.div
        style={{ y: yMetrics }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 mb-14"
      >
        {metricsStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="p-6 bg-white/70 backdrop-blur-xl rounded-[1.75rem] border border-slate-200/60 text-left shadow-[0_10px_25px_-10px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] hover:border-cyan-300/80 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-cyan-700 transition-colors">
                  {stat.value}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-cyan-50/80 border border-cyan-100 text-cyan-600 flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-xs font-bold text-slate-800">{stat.label}</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5 leading-snug">{stat.sub}</div>
            </div>
          )
        })}
      </motion.div>

      {/* Abstract Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative bg-white/75 backdrop-blur-xl border border-slate-200/70 p-7 md:p-9 rounded-[2rem] shadow-[0_15px_35px_-12px_rgba(15,23,42,0.04)] max-w-4xl mx-auto mb-14 text-left"
      >
        <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-widest mb-3 px-3 py-1 bg-cyan-50/80 border border-cyan-100 rounded-full inline-block">
          Executive Abstract
        </span>
        <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
          {abstract}
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 sm:space-x-5 w-full sm:w-auto z-10 justify-center"
      >
        <a
          href="#infographic"
          className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 text-white rounded-2xl hover:shadow-[0_18px_35px_-10px_rgba(14,165,233,0.35)] hover:-translate-y-0.5 transition-all duration-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-sm"
        >
          <span>Explore Architecture</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#downloads"
          className="px-8 py-3.5 bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-700 rounded-2xl hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2.5"
        >
          <span>Research Documents</span>
          <FileText className="w-4 h-4 text-slate-400" />
        </a>
      </motion.div>
    </section>
  )
}