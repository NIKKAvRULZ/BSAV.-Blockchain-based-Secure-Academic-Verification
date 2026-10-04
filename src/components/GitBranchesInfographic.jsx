import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitBranch, GitCommit, GitPullRequest, Terminal, ExternalLink } from 'lucide-react'
import { gitBranches, REPO } from '../data/constants'

export default function GitBranchesInfographic() {
  const [activeModule, setActiveModule] = useState('All')
  const modules = ['All', 'Component 1', 'Component 2', 'Component 3', 'Component 4', 'Integration']

  const filteredBranches = activeModule === 'All' 
    ? gitBranches 
    : gitBranches.filter(b => b.module === activeModule)

  return (
    <section id="branches" className="py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5">
            Version Control &amp; Codebase
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Git Branch Architecture
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Isolated feature development branches representing decoupled modules across the research lifecycle[cite: 1, 33].
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Soft Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {modules.map((mod) => (
            <button
              key={mod}
              onClick={() => setActiveModule(mod)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeModule === mod
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                  : 'bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-white hover:text-cyan-700 hover:border-cyan-200'
              }`}
            >
              {mod}
            </button>
          ))}
        </div>

        {/* Visual Git Tree Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12">
          <AnimatePresence mode="popLayout">
            {filteredBranches.map((b) => (
              <motion.div
                key={b.branch}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="p-6 bg-slate-50/70 rounded-[2rem] border border-slate-200/70 hover:bg-white hover:border-cyan-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Visual Branch Node */}
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 text-cyan-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:scale-110 transition-all duration-300">
                  <GitBranch className="w-5 h-5" />
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-cyan-800 bg-cyan-100/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {b.module}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <GitCommit className="w-3 h-3" /> HEAD
                    </span>
                  </div>

                  <div className="font-mono text-xs font-bold text-slate-800 truncate mb-1 group-hover:text-cyan-700 transition-colors">
                    {b.branch}
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Repository Action Strip */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-[2rem] max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full Source Code &amp; Issue Tracking</div>
              <div className="text-xs text-slate-400">Available on GitHub with complete commit history[cite: 1, 49].</div>
            </div>
          </div>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-white text-slate-900 font-bold text-xs rounded-xl hover:bg-cyan-400 hover:text-slate-950 transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Explore Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}