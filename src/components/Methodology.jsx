import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Shield, Layers } from 'lucide-react'
import { comps, securityLayers, roleSeparation, governancePrinciple } from '../data/constants'

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('c3')
  const currentComp = comps.find((x) => x.key === activeTab)

  return (
    <section id="methodology" className="py-24 bg-slate-50/60 border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">SYSTEM ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Methodology</h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">
            A result moves through the four components in order. Academic decisions are finalized before cryptographic anchoring[cite: 11, 16, 17].
          </p>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Component Tabs */}
        <div className="flex flex-wrap gap-2 mb-0 justify-center">
          {comps.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveTab(c.key)}
              className={`px-6 py-4 rounded-t-2xl font-bold text-sm transition-all duration-300 border-t-2 border-x-2 border-b-0 flex flex-col items-start ${
                activeTab === c.key
                  ? 'bg-slate-950 text-white border-slate-950 shadow-lg translate-y-0.5'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100/80 hover:text-cyan-600'
              }`}
            >
              <span className={`text-[10px] font-black uppercase tracking-wider ${activeTab === c.key ? 'text-cyan-400' : 'text-slate-400'}`}>
                Component {c.n}
              </span>
              <span className="text-base font-extrabold">{c.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl mb-12 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 inline-flex items-center gap-3">
                <span>{currentComp.name}</span>
                <span className="text-xs px-3 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full uppercase tracking-wider font-extrabold">
                  {currentComp.role}
                </span>
              </h3>
            </div>

            <p className="text-base md:text-lg text-slate-700 font-medium mb-6 leading-relaxed">
              {currentComp.blurb}
            </p>

            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Core Specifications &amp; Key Steps:</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {currentComp.items.map((item) => (
                <li key={item} className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Sequence & Storage Separation Strip */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-slate-950 text-white rounded-2xl flex flex-col justify-center shadow-lg border border-slate-800">
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
              <div key={item.tech} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-cyan-300 transition-colors">
                <div className="font-black text-slate-900 text-base mb-1">{item.tech}</div>
                <div className="text-xs text-slate-600 font-medium capitalize">{item.job}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Paper Table 1: Multi-Layer Security Model */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-cyan-600" />
            <h3 className="text-xl font-black text-slate-900">Multi-Layer Security Model (Paper Table 1)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityLayers.map((s) => (
              <div key={s.layer} className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/20 transition-all">
                <div className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider mb-1">{s.layer}</div>
                <div className="text-sm font-bold text-slate-800">{s.purpose}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}