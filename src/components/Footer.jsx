import { motion } from 'framer-motion'
import { PROJECT_ID, REPO, supervisors } from '../data/constants'
import GithubIcon from './GithubIcon'
import { ExternalLink, Building2, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#020617] text-white pt-32 pb-16 px-6 overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        {/* Project ID Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-slate-400 uppercase mb-4"
        >
          PROJECT ID: {PROJECT_ID}
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6"
        >
          Get In <span className="text-cyan-400">Touch.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed mb-16"
        >
          For academic inquiries regarding the BSAV framework, decentralized grading architecture, or research collaboration.
        </motion.p>

        {/* Centered Floating Institution Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 md:p-12 bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-slate-800 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)] max-w-3xl mx-auto mb-20 text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" /> Academic Affiliation
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Sri Lanka Institute of Information Technology
              </h3>
              <p className="text-sm text-slate-400">
                Faculty of Computing · Department of Software Engineering
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Malabe, Sri Lanka
            </div>
          </div>

          <div className="pt-8 grid sm:grid-cols-2 gap-6">
            {supervisors.map((s) => (
              <div key={s.name} className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/70">
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold mb-1">
                  {s.role}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">{s.name}</div>
                <div className="text-xs text-slate-400">{s.dept}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Quick Links & Social Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#infographic" className="hover:text-cyan-400 transition-colors">System Pipeline</a>
            <a href="#gap" className="hover:text-cyan-400 transition-colors">Problem Domain</a>
            <a href="#methodology" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#merkle-zkp" className="hover:text-cyan-400 transition-colors">Cryptographic Visualizer</a>
            <a href="#references" className="hover:text-cyan-400 transition-colors">Citations</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-white font-bold transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-[11px] font-mono text-slate-600">
          © 2026 {PROJECT_ID} Research Group · SLIIT Faculty of Computing · All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}