import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { docs } from '../data/constants'

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">RESOURCE CENTER</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Project Documents</h2>
          <p className="text-slate-600 font-medium text-base md:text-lg">
            Download research papers, proposal slides, and project documentation[cite: 1, 31].
          </p>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {docs.map((d) => (
            <motion.a
              key={d.name}
              href={d.path}
              download
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">{d.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">{d.detail}</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <Download className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}