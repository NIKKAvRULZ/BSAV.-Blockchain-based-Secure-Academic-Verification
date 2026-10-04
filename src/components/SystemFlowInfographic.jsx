import { useState } from 'react'
import { motion } from 'framer-motion'

const flowSteps = [
  {
    step: '01',
    title: 'Lecturer Upload & Time-Gate',
    comp: 'Component 3: Silent Bridge',
    desc: 'Lecturer uploads Excel/CSV LMS grade sheets. System checks dynamic policy window, strips PII for PDPA compliance, rejects duplicate payload hashes, and appends record to local private ledger.',
    tag: 'Ingestion & Privacy',
    color: 'emerald',
  },
  {
    step: '02',
    title: 'Context-Aware Routing',
    comp: 'Component 3 Middleware',
    desc: 'Differentiates standard lecturer submissions from formal Grade Appeals or Re-corrections, dynamically routing requests directly to the mock server bypass channel.',
    tag: 'Workflow Branching',
    color: 'blue',
  },
  {
    step: '03',
    title: 'BOE Review & Version Audit',
    comp: 'Component 2: BOE Governance',
    desc: 'Board of Examiners reviews marks, applies moderation changes with correction reasons, tracks version history, and hashes candidate ID + module + grade into temporary internal chain.',
    tag: 'Academic Governance',
    color: 'amber',
  },
  {
    step: '04',
    title: 'Merkle & IPFS Dataset Build',
    comp: 'Component 1: Proof Layer',
    desc: 'Compiles finalized student hashes into a Binary Merkle Tree, calculates the Merkle Root, and pins the dataset JSON on IPFS via Pinata to generate a Content Identifier (CID).',
    tag: 'Decentralized Storage',
    color: 'purple',
  },
  {
    step: '05',
    title: 'Ethereum Smart Contract Anchor',
    comp: 'Component 1: Ethereum EVM',
    desc: 'Executes ProofStorage Solidity contract to immutably anchor the Merkle Root, IPFS CID, timestamp, and uploader address on the Ethereum blockchain.',
    tag: 'Blockchain Anchoring',
    color: 'indigo',
  },
  {
    step: '06',
    title: 'ZKP Corporate Verification',
    comp: 'Component 4: Verification Gateway',
    desc: 'Employers verify student claims (Candidate ID + Module + Grade). System computes Groth16 Zero-Knowledge Proof & Merkle path, confirming VALID / INVALID without exposing raw transcripts.',
    tag: 'Zero-Knowledge Proof',
    color: 'emerald',
  },
]

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
            Interactive breakdown of how academic records travel from lecturer upload to blockchain anchoring and zero-knowledge verification.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {flowSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setSelectedNode(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                selectedNode === idx
                  ? 'bg-black text-white border-black shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className={`text-xs font-black mb-1 ${selectedNode === idx ? 'text-[#22c55e]' : 'text-gray-400'}`}>
                STEP {step.step}
              </div>
              <div className="text-xs font-extrabold truncate">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Detail Card */}
        <motion.div
          key={selectedNode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 md:p-10 bg-gray-50/80 rounded-3xl border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#22c55e] text-black font-black text-xs uppercase tracking-widest rounded-full">
                {flowSteps[selectedNode].tag}
              </span>
              <span className="text-xs font-bold text-gray-500">{flowSteps[selectedNode].comp}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">{flowSteps[selectedNode].title}</h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium">{flowSteps[selectedNode].desc}</p>
          </div>

          {/* Payload Preview */}
          <div className="w-full md:w-auto shrink-0 bg-white p-6 rounded-2xl border border-gray-200 text-center font-mono text-xs shadow-sm">
            <div className="text-gray-400 text-[10px] uppercase font-bold mb-2">Contract Payload</div>
            <div className="p-3 bg-gray-900 text-green-400 rounded-xl text-left text-[11px] font-mono leading-relaxed overflow-x-auto max-w-xs">
              <code>
                {`{\n  "step": "${flowSteps[selectedNode].step}",\n  "status": "VERIFIED",\n  "provenanceHash": "91659...a4d9",\n  "merkleRoot": "0x4a7...2b1",\n  "zkpValid": true\n}`}
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
