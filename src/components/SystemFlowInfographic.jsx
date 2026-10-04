import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Terminal, ArrowRight, Cpu, Layers } from 'lucide-react'
import { verifySteps, apiEndpoint } from '../data/constants'

export default function SystemFlowInfographic() {
  const [selectedNode, setSelectedNode] = useState(0)

  return (
    <section id="infographic" className="py-32 bg-white border-t border-slate-100 relative overflow-hidden soft-mesh-bg">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-cyan-400/8 via-sky-300/6 to-indigo-400/6 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-4 py-1.5 bg-cyan-50/80 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm"
          >
            System Pipeline
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            End-to-End Verification Pipeline
          </motion.h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Eight-stage lifecycle showing how an academic claim traverses ProofStorage anchoring, IPFS dataset retrieval, and Groth16 ZKP resolution.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Soft Stepper Pill Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {verifySteps.map((step, idx) => {
            const isSelected = selectedNode === idx
            return (
              <button
                key={step.title}
                onClick={() => setSelectedNode(idx)}
                className={`p-4 rounded-[1.5rem] text-left transition-all duration-300 border relative ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.25)] scale-[1.03]'
                    : 'bg-white/80 backdrop-blur-md text-slate-600 border-slate-200/70 hover:bg-white hover:border-cyan-300 hover:shadow-sm'
                }`}
              >
                <div className={`text-[10px] font-bold mb-1.5 flex items-center justify-between ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                  <span>STEP 0{idx + 1}</span>
                  {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <div className="text-xs font-bold truncate leading-snug">{step.title}</div>
              </button>
            )
          })}
        </div>

        {/* Softened Active Stage Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 bg-white/85 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/80 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.05)] flex flex-col md:flex-row items-center justify-between gap-10 mb-8"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-cyan-50 border border-cyan-200/80 text-cyan-800 font-bold text-xs uppercase tracking-wider rounded-full shadow-sm">
                  Stage 0{selectedNode + 1} of 08
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedNode < 4 ? 'Ingestion & Anchoring Layer' : 'Verification Layer'}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {verifySteps[selectedNode].title}
              </h3>
              
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {verifySteps[selectedNode].desc}
              </p>
            </div>

            {/* Clean Terminal Box */}
            <div className="w-full md:w-auto shrink-0 bg-slate-50/80 backdrop-blur-md p-6 rounded-[2rem] border border-slate-200/80 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between gap-4 text-slate-400 text-[10px] uppercase font-bold mb-3">
                <span>Payload State</span>
                <span className="text-cyan-600 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Bound
                </span>
              </div>
              <div className="p-4 bg-slate-950 text-cyan-300 rounded-2xl text-left text-[11px] font-mono leading-relaxed overflow-x-auto max-w-xs shadow-md border border-slate-800/80">
                <code>
{`{\n  "step": "0${selectedNode + 1}_${verifySteps[selectedNode].title.toLowerCase().replace(/\\s+/g, '_')}",\n  "status": "VALID",\n  "merkleRoot": "0x7a3f...9f2c",\n  "zkpValid": true\n}`}
                </code>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Discovery API Strip */}
        <div className="p-4 bg-slate-50/80 backdrop-blur-md rounded-2xl border border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-600">
            <Terminal className="w-4 h-4 text-cyan-600" />
            <span className="text-slate-400">Verification Endpoint:</span>
            <span className="font-bold text-slate-800">{apiEndpoint}</span>
          </div>
          <span className="text-[11px] text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full font-sans font-medium">
            HTTP 200 OK · Deterministic Resolution
          </span>
        </div>
      </div>
    </section>
  )
}