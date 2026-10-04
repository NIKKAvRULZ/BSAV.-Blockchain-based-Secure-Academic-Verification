import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const leaves = [
  { id: 'IT22061348', gradeClean: 'A',  gradeTampered: 'A+ (Edited)' },
  { id: 'IT22044122', gradeClean: 'B+', gradeTampered: 'B+' },
  { id: 'IT22091560', gradeClean: 'A-', gradeTampered: 'A-' },
  { id: 'IT22018894', gradeClean: 'A+', gradeTampered: 'A+' },
]

export default function MerkleZkpVisualizer() {
  const [tampered, setTampered] = useState(false)

  return (
    <section id="merkle-zkp" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">CRYPTOGRAPHIC ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Merkle Tree &amp; ZK-Proof Visualizer</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            Simulate how a single grade modification corrupts the Merkle Root and triggers ZKP rejection.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl max-w-5xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-black text-gray-900">Merkle Root Integrity Simulation</h3>
              <p className="text-xs text-gray-500 font-medium">Toggle mark tampering to test cryptographic detection</p>
            </div>
            <button
              onClick={() => setTampered(!tampered)}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 ${
                tampered ? 'bg-red-600 text-white' : 'bg-black text-white hover:bg-[#22c55e] hover:text-black'
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
              className={`p-5 rounded-2xl border-2 transition-all max-w-md mx-auto shadow-md ${
                tampered ? 'bg-red-50 border-red-500 text-red-700' : 'bg-green-50 border-[#22c55e] text-green-800'
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest mb-1">
                {tampered ? '⚠️ TAMPERED MERKLE ROOT (REJECTED)' : '✅ ANCHORED MERKLE ROOT (ETHEREUM)'}
              </div>
              <div className="font-mono font-black text-sm md:text-base">
                {tampered ? '0x99999999...INVALID_ROOT' : '0x7a3f81b2...9f2c41b8'}
              </div>
            </motion.div>

            {/* Branch connectors */}
            <div className="w-full flex justify-around text-gray-300 text-xs font-mono">
              <span>│</span>
              <span>│</span>
            </div>

            {/* Parent hashes */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 font-mono text-xs">
                <div className="text-gray-400 text-[10px] font-bold">Hash H12</div>
                <div className="font-bold text-gray-800">{tampered ? 'ERR_HASH' : '0x3a4b...88c1'}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 font-mono text-xs">
                <div className="text-gray-400 text-[10px] font-bold">Hash H34</div>
                <div className="font-bold text-gray-800">0x9f1a...2c4e</div>
              </div>
            </div>

            {/* Leaf nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {leaves.map((s, idx) => {
                const isTampered = idx === 0 && tampered
                return (
                  <div
                    key={s.id}
                    className={`p-3 rounded-xl border font-mono text-[11px] text-left ${
                      isTampered ? 'bg-red-100 border-red-400 text-red-900' : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="font-bold text-gray-900">{s.id}</div>
                    <div className="text-gray-600">
                      Grade: <span className="font-bold">{tampered ? s.gradeTampered : s.gradeClean}</span>
                    </div>
                    <div className={`text-[10px] font-black mt-1 ${isTampered ? 'text-red-600' : 'text-green-600'}`}>
                      {isTampered ? '❌ HASH MISMATCH' : '✓ MATCH'}
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
