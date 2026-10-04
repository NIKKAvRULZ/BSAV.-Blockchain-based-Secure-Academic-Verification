import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Terminal } from 'lucide-react'
import { verifySteps, apiEndpoint } from '../data/constants'

export default function SystemFlowInfographic() {
  const [selectedNode, setSelectedNode] = useState(0)

  return (
    <section id="infographic" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">SYSTEM ARCHITECTURE INFOGRAPHIC</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">End-to-End System Workflow</h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">
            Eight-stage verification lifecycle showing how an academic claim traverses ProofStorage anchoring, IPFS dataset retrieval, and Groth16 ZKP resolution[cite: 14, 20].
          </p>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {verifySteps.map((step, idx) => (
            <button
              key={step.title}
              onClick={() => setSelectedNode(idx)}
              className={`p-3.5 rounded-2xl text-left border transition-all duration-300 ${
                selectedNode === idx
                  ? 'bg-slate-950 text-white border-slate-950 shadow-lg scale-105'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-cyan-300'
              }`}
            >
              <div className={`text-[10px] font-black mb-1 ${selectedNode === idx ? 'text-cyan-400' : 'text-slate-400'}`}>
                STEP 0{idx + 1}
              </div>
              <div className="text-xs font-extrabold truncate">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Card */}
        <motion.div
          key={selectedNode}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-8 md:p-10 bg-slate-50/80 rounded-3xl border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-full">
                Phase 0{selectedNode + 1} of 08
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                {selectedNode < 4 ? 'Anchor & Ingestion Boundary' : 'Verification & Proof Boundary'}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              {verifySteps[selectedNode].title}
            </h3>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {verifySteps[selectedNode].desc}
            </p>
          </div>

          {/* Cryptographic Mock Verification Payload */}
          <div className="w-full md:w-auto shrink-0 bg-white p-6 rounded-2xl border border-slate-200 text-center font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between gap-4 text-slate-400 text-[10px] uppercase font-bold mb-2">
              <span>Cryptographic State</span>
              <span className="text-cyan-600 flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Bound
              </span>
            </div>
            <div className="p-3.5 bg-slate-950 text-cyan-400 rounded-xl text-left text-[11px] font-mono leading-relaxed overflow-x-auto max-w-xs border border-slate-800">
              <code>
{`{\n  "step": "0${selectedNode + 1}_${verifySteps[selectedNode].title.toLowerCase().replace(/\\s+/g, '_')}",\n  "status": "VALID",\n  "merkleRoot": "0x7a3f...9f2c",\n  "ipfsCID": "QmXoypizjW3WknFi...",\n  "zkpClaimValid": true\n}`}
              </code>
            </div>
          </div>
        </motion.div>

        {/* Discovery API Reference Strip */}
        <div className="p-4 bg-slate-950 text-slate-200 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-400">Proof Context Lookup Endpoint:</span>
            <span className="text-white font-bold">{apiEndpoint}</span>
          </div>
          <span className="text-[11px] text-cyan-300 font-semibold bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/60">
            HTTP 200 OK · Deterministic Resolution
          </span>
        </div>
      </div>
    </section>
  )
}