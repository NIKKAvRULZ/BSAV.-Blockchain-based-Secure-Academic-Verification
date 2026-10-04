import { motion } from 'framer-motion'
import { stack } from '../data/constants'

export default function TechStack() {
  return (
    <section id="technology" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">TOOLS &amp; FRAMEWORKS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Technology Stack</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Stack Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {stack.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#22c55e] hover:shadow-md transition-all text-center group shadow-sm"
            >
              <div className="text-xs font-black uppercase text-[#22c55e] tracking-wider mb-1">{t.category}</div>
              <div className="font-extrabold text-gray-900 text-base group-hover:text-black">{t.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Prototype note */}
        <div className="p-4 bg-gray-100/70 border border-gray-200 rounded-xl text-center text-xs font-medium text-gray-600">
          <strong>Prototype Status:</strong> Deployed on a local Hardhat EVM node with public IPFS integration via Pinata.
        </div>
      </div>
    </section>
  )
}
