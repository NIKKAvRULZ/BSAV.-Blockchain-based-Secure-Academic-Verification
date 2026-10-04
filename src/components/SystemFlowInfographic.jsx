import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Terminal } from 'lucide-react'
import { verifySteps, apiEndpoint } from '../data/constants'

export default function SystemFlowInfographic() {
  const [selectedNode, setSelectedNode] = useState(0)

  return (
    <section id="infographic" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">SYSTEM ARCHITECTURE INFOGRAPHIC</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">End-to-End System Workflow</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            Eight-stage verification lifecycle showing how an academic claim traverses ProofStorage anchoring, IPFS dataset retrieval, and Groth16 ZKP resolution.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {verifySteps.map((step, idx) => (
            <button
              key={step.title}
              onClick={() => setSelectedNode(idx)}
              className={`p-3.5 rounded-2xl text-left border transition-all duration-300 ${
                selectedNode === idx
                  ? 'bg-black text-white border-black shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className={`text-[10px] font-black mb-1 ${selectedNode === idx ? 'text-[#22c55e]' : 'text-gray-400'}`}>
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
          className="p-8 md:p-10 bg-gray-50/80 rounded-3xl border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#22c55e] text-black font-black text-xs uppercase tracking-widest rounded-full">
                Phase 0{selectedNode + 1} of 08
              </span>
              <span className="text-xs font-mono font-bold text-gray-500">
                {selectedNode < 4 ? 'Anchor & Ingestion Boundary' : 'Verification & Proof Boundary'}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">
              {verifySteps[selectedNode].title}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              {verifySteps[selectedNode].desc}
            </p>
          </div>

          {/* Live Mock Verification Payload */}
          <div className="w-full md:w-auto shrink-0 bg-white p-6 rounded-2xl border border-gray-200 text-center font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between gap-4 text-gray-400 text-[10px] uppercase font-bold mb-2">
              <span>Cryptographic State</span>
              <span className="text-[#22c55e] flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Bound</span>
            </div>
            <div className="p-3.5 bg-gray-900 text-green-400 rounded-xl text-left text-[11px] font-mono leading-relaxed overflow-x-auto max-w-xs">
              <code>
{`{\n  "step": "0${selectedNode + 1}_${verifySteps[selectedNode].title.toLowerCase().replace(/\\s+/g, '_')}",\n  "status": "VALID",\n  "merkleRoot": "0x7a3f...9f2c",\n  "ipfsCID": "QmXoypizjW3WknFi...",\n  "zkpClaimValid": true\n}`}
              </code>
            </div>
          </div>
        </motion.div>

        {/* Discovery API Reference Strip */}
        <div className="p-4 bg-gray-900 text-gray-200 rounded-2xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#22c55e]" />
            <span className="text-gray-400">Proof Context Lookup Endpoint:</span>
            <span className="text-white font-bold">{apiEndpoint}</span>
          </div>
          <span className="text-[11px] text-[#22c55e] font-semibold bg-green-950/60 px-2.5 py-1 rounded-lg border border-green-800/40">
            HTTP 200 OK · Deterministic Resolution
          </span>
        </div>
      </div>
    </section>
  )
}