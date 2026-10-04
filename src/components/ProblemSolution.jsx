import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react'
import { mainObjective } from '../data/constants'

export default function ProblemSolution() {
  return (
    <section id="problem" className="py-32 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-4 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm"
          >
            The Core Paradigm Shift
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Problem &amp; Solution Paradigm
          </motion.h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Transitioning from vulnerable manual institutional verification to deterministic zero-knowledge claims.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Asymmetrical Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Current Centralized Dilemma */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 text-red-700 border border-red-200/60 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6">
                <AlertCircle className="w-3.5 h-3.5" />
                Current Vulnerability
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Centralized Dilemma
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal text-sm md:text-base mb-6">
                A grade is moderated, corrected, and audited across multiple committee tiers before finalization. Legacy systems only safeguard the static database, offering zero assurance over the review process itself and forcing employers to rely on slow, manual follow-ups.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-xs font-medium text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <span>✕</span> Single point of database tampering
              </div>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <span>✕</span> Manual paper/PDF phone and email verification
              </div>
            </div>
          </motion.div>

          {/* Decoupled Cryptographic Paradigm */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-gradient-to-br from-white via-cyan-50/40 to-sky-50/50 rounded-[2.5rem] border border-cyan-200/90 shadow-[0_20px_45px_-15px_rgba(14,165,233,0.12)] hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyan-100 text-cyan-800 border border-cyan-200 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Proposed Architecture
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Finalize First, Prove Second
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal text-sm md:text-base mb-6">
                Academic grades are only compiled and anchored to the blockchain once Board of Examiners governance is locked. Third-party corporate verifiers evaluate validity using Groth16 Zero-Knowledge Proofs without ever viewing raw marks.
              </p>
            </div>

            <div className="p-4 bg-white/90 rounded-2xl border border-cyan-100 text-xs font-medium text-slate-600 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" /> Tamper-evident Merkle Root on Ethereum EVM
              </div>
              <div className="flex items-center gap-2 text-cyan-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" /> PDPA-compliant Zero-Knowledge privacy boundary
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-slate-800"
        >
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-lg shadow-cyan-500/20">
            “
          </div>
          <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-slate-200">
            {mainObjective}
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}