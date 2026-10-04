import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { docs } from '../data/constants'

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">RESOURCE CENTER</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Project Documents</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">
            Download research papers, proposal slides, and project documentation.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {docs.map((d) => (
            <motion.a
              key={d.name}
              href={d.path}
              download
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-[#22c55e] hover:shadow-xl transition-all duration-300 flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#22c55e] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:text-black transition-all">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-black transition-colors">{d.name}</h3>
                  <p className="text-xs text-gray-500 font-semibold mt-1">{d.detail}</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-all">
                <Download className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
