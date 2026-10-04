import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, ShieldCheck, ShieldAlert } from 'lucide-react'

const leaves = [
  { id: 'IT22061348', gradeClean: 'A',  gradeTampered: 'A+ (Edited)' },
  { id: 'IT22044122', gradeClean: 'B+', gradeTampered: 'B+' },
  { id: 'IT22091560', gradeClean: 'A-', gradeTampered: 'A-' },
  { id: 'IT22018894', gradeClean: 'A+', gradeTampered: 'A+' },
]

export default function MerkleZkpVisualizer() {
  const [tampered, setTampered] = useState(false)

  return (
    <section id="merkle-zkp" className="py-24 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background glow in dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-3">CRYPTOGRAPHIC ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Merkle Tree &amp; ZK-Proof Visualizer</h2>
          <p className="text-slate-400 font-medium text-base md:text-lg">
            Simulate how a single grade modification corrupts the Merkle Root and triggers ZKP claim rejection.
          </p>
          <div className="mx-auto h-1 w-16 bg-cyan-400 rounded-full mt-4" />
        </div>

        <div className="bg-slate-950/80 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl max-w-5xl mx-auto backdrop-blur-xl">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <span>Merkle Root Integrity Simulation</span>
                {tampered ? (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800 flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> Integrity Compromised
                  </span>
                ) : (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Anchored &amp; Valid
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">Toggle mark tampering to test cryptographic detection</p>
            </div>
            <button
              onClick={() => setTampered(!tampered)}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 ${
                tampered ? 'bg-red-600 text-white hover:bg-red-500' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-black'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{tampered ? 'Reset Original Marks' : 'Simulate Grade Tampering'}</span>
            </button>
          </div>

          {/* Tree Diagram */}
          <div className="space-y-8 text-center">
            {/* Merkle Root */}
            <motion.div
              animate={{ scale: tampered ? [1, 1.05, 1] : 1 }}
              className={`p-5 rounded-2xl border-2 transition-all max-w-md mx-auto shadow-lg ${
                tampered ? 'bg-red-950/50 border-red-500 text-red-200' : 'bg-cyan-950/40 border-cyan-500 text-cyan-200'
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-300">
                {tampered ? '⚠️ TAMPERED MERKLE ROOT (REJECTED)' : '⛓️ ANCHORED MERKLE ROOT (ETHEREUM)'}
              </div>
              <div className="font-mono font-black text-sm md:text-base">
                {tampered ? '0x99999999...INVALID_ROOT' : '0x7a3f81b2...9f2c41b8'}
              </div>
            </motion.div>

            {/* Branch connectors */}
            <div className="w-full flex justify-around text-slate-600 text-xs font-mono">
              <span>│</span>
              <span>│</span>
            </div>

            {/* Parent hashes */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-xs">
                <div className="text-slate-400 text-[10px] font-bold">Node Hash H12</div>
                <div className="font-bold text-slate-200">{tampered ? 'ERR_HASH' : '0x3a4b...88c1'}</div>
              </div>
              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-xs">
                <div className="text-slate-400 text-[10px] font-bold">Node Hash H34</div>
                <div className="font-bold text-slate-200">0x9f1a...2c4e</div>
              </div>
            </div>

            {/* Leaf nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {leaves.map((s, idx) => {
                const isTampered = idx === 0 && tampered
                return (
                  <div
                    key={s.id}
                    className={`p-3.5 rounded-xl border font-mono text-[11px] text-left transition-all ${
                      isTampered
                        ? 'bg-red-950/60 border-red-500 text-red-200 shadow-md shadow-red-950/50'
                        : 'bg-slate-900 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="font-bold text-white">{s.id}</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      Grade: <span className="font-bold text-white">{tampered ? s.gradeTampered : s.gradeClean}</span>
                    </div>
                    <div className={`text-[10px] font-black mt-2 ${isTampered ? 'text-red-400' : 'text-cyan-400'}`}>
                      {isTampered ? '❌ HASH MISMATCH' : '✓ VALID LEAF'}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}