import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { comps } from '../data/constants'

const storageItems = [
  { label: 'IPFS (Pinata)',      role: 'Stores finalized proof dataset off-chain' },
  { label: 'MongoDB Atlas',      role: 'Index maps candidate ID to Merkle CID' },
  { label: 'Ethereum Blockchain',role: 'Anchors ProofStorage Merkle root' },
]

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('c3')
  const currentComp = comps.find((x) => x.key === activeTab)

  return (
    <section id="methodology" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">SYSTEM ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Methodology</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            A result moves through the four components in order. Each has one designated job.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Component Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-0 justify-center">
          {comps.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveTab(c.key)}
              className={`px-6 py-4 rounded-t-2xl font-bold text-sm transition-all duration-300 border-t-2 border-x-2 border-b-0 flex flex-col items-start ${
                activeTab === c.key
                  ? 'bg-black text-white border-black shadow-lg translate-y-0.5'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <span className={`text-[10px] font-black uppercase tracking-wider ${activeTab === c.key ? 'text-[#22c55e]' : 'text-gray-400'}`}>
                Component {c.n}
              </span>
              <span className="text-base font-extrabold">{c.name}</span>
            </button>
          ))}
        </div>

        {/* Component Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl mb-12 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 inline-flex items-center gap-3">
                <span>{currentComp.name}</span>
                <span className="text-xs px-3 py-1 bg-green-50 text-[#22c55e] border border-green-200 rounded-full uppercase tracking-wider font-extrabold">
                  {currentComp.role}
                </span>
              </h3>
            </div>

            <p className="text-base md:text-lg text-gray-700 font-medium mb-6 leading-relaxed">{currentComp.blurb}</p>

            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Core Specifications &amp; Key Steps:</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {currentComp.items.map((item) => (
                <li key={item} className="flex items-start gap-3 p-3 bg-gray-50/80 rounded-xl border border-gray-100 text-sm text-gray-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Infrastructure Summary */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-black text-white rounded-2xl flex flex-col justify-center shadow-lg">
            <span className="text-[#22c55e] font-black text-xs uppercase tracking-widest mb-1">Trust Chain Sequence</span>
            <p className="text-sm font-bold leading-relaxed text-gray-200">
              Provenance → Governance → Integrity → Storage → Blockchain anchor → Privacy-preserving verification
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {storageItems.map((item) => (
              <div key={item.label} className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="font-black text-gray-900 text-base mb-1">{item.label}</div>
                <div className="text-xs text-gray-600 font-medium">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
