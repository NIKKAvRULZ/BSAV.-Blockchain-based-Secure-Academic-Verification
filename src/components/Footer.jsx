import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECT_ID, REPO, supervisors } from '../data/constants'
import GithubIcon from './GithubIcon'
import { ExternalLink, Building2, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' }) // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Dispatching message...' })

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'

    try {
      const payload = {
        access_key: accessKey,
        from_name: 'BSAV Portal Notification',
        subject: `[${PROJECT_ID} Inquiry] ${formData.subject || 'Academic Verification Query'}`,
        
        // Custom styled email metadata
        'Research Project': 'R26-SE-011 (BSAV)',
        'Inquirer Name': formData.name,
        'Inquirer Email': formData.email,
        'Subject / Topic': formData.subject || 'General Academic Inquiry',
        'Message Content': formData.message,

        // Direct reply mapping: hitting 'Reply' in Gmail/Outlook answers the visitor
        replyto: formData.email,
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been routed to our research team.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({
          state: 'error',
          message: data.message || 'Submission failed. Please try again.',
        })
      }
    } catch (err) {
      console.error('Web3Forms Error:', err)
      setStatus({
        state: 'error',
        message: 'Network error. Please check your connection or contact via direct email.',
      })
    }
  }

  return (
    <footer id="contact" className="relative bg-[#020617] text-white pt-32 pb-16 px-6 overflow-hidden">
      {/* Ambient background radial glow */}
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

        {/* ── INTERACTIVE WEB3FORMS CONTACT CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="p-8 md:p-12 bg-slate-900/70 backdrop-blur-2xl rounded-[2.5rem] border border-slate-800 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)] max-w-3xl mx-auto mb-16 text-left"
        >
          <div className="mb-8">
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              Direct Transmission
            </span>
            <h3 className="text-2xl font-bold text-white">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-400 mt-1">
              Inquiries are automatically forwarded to our project leads and supervising faculty.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Alex Mercer"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  Your Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@institution.org"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration / Verification Query"
                className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please outline your institution, project scope, or query..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            {/* Status Notifications */}
            <AnimatePresence>
              {status.state === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-medium flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{status.message}</span>
                </motion.div>
              )}

              {status.state === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3.5 rounded-2xl bg-red-950/60 border border-red-800 text-red-300 text-xs font-medium flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
            >
              {status.state === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Transmit Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* ── CENTERING FLOATING INSTITUTION GLASS CARD ── */}
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
                <div className="text-xs text-slate-400">{s.dept || 'Faculty of Computing'}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links & GitHub Button Strip */}
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