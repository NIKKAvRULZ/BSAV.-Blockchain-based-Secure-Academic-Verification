import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Shield, Layers } from 'lucide-react'
import { comps, securityLayers, roleSeparation, governancePrinciple } from '../data/constants'

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('c3')
  const currentComp = comps.find((x) => x.key === activeTab)

  return (
    <section id="methodology" className="py-32 bg-white border-t border-slate-100 relative overflow-hidden soft-mesh-bg">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-4 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm"
          >
            System Architecture
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Four-Component Methodology
          </motion.h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            A result moves through four decoupled layers. Academic moderation is finalized before cryptographic commitments are minted.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Soft Rounded Component Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
          {comps.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveTab(c.key)}
              className={`px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                activeTab === c.key
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10'
                  : 'bg-white/80 text-slate-600 border-slate-200/70 hover:bg-white hover:text-cyan-700 hover:border-cyan-200'
              }`}
            >
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === c.key ? 'bg-cyan-500 text-slate-950 font-black' : 'bg-slate-100 text-slate-500'}`}>
                {c.n}
              </span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Component Body Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-slate-200/80 shadow-[0_15px_35px_-10px_rgba(15,23,42,0.03)] mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-3">
              <div>
                <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-widest block mb-1">
                  Component 0{currentComp.n}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">{currentComp.name}</h3>
              </div>
              <span className="text-xs px-3.5 py-1.5 bg-cyan-50 text-cyan-800 border border-cyan-100 rounded-full font-bold uppercase tracking-wider w-fit">
                {currentComp.role}
              </span>
            </div>

            <p className="text-base text-slate-600 font-normal mb-8 leading-relaxed">
              {currentComp.blurb}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Core Specifications &amp; Workflows</h4>
            <ul className="grid md:grid-cols-2 gap-3.5">
              {currentComp.items.map((item) => (
                <li key={item} className="flex items-start gap-3 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Governance Rail & Storage Roles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-slate-950 text-white rounded-3xl flex flex-col justify-center shadow-lg border border-slate-800">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-2">Governance Principle</span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold font-mono text-slate-200">
              {governancePrinciple.map((step, idx) => (
                <span key={step} className="flex items-center gap-1.5">
                  <span className="text-white">{step}</span>
                  {idx < governancePrinciple.length - 1 && <span className="text-cyan-400">→</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {roleSeparation.map((item) => (
              <div key={item.tech} className="p-5 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:border-cyan-300 transition-colors">
                <div className="font-black text-slate-900 text-base mb-1">{item.tech}</div>
                <div className="text-xs text-slate-500 font-medium capitalize">{item.job}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Layer Security Model Table 1 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <Shield className="w-5 h-5 text-cyan-600" />
            <h3 className="text-xl font-bold text-slate-900">Multi-Layer Security Model (Paper Table 1)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityLayers.map((s) => (
              <div key={s.layer} className="p-4 bg-slate-50/70 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-white transition-all">
                <div className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider mb-1">{s.layer}</div>
                <div className="text-sm font-medium text-slate-700">{s.purpose}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}