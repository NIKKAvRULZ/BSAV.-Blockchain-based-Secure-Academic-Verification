import { motion } from 'framer-motion'
import { FileText, Presentation, Download, ExternalLink, Award, HardDrive } from 'lucide-react'
import { docs, presentations, conference } from '../data/constants'

export default function Downloads() {
  return (
    <section id="downloads" className="py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5">
            Resource Center
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Documentation &amp; Presentations
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Access our accepted paper, proposals, reports, and milestone presentation slide decks securely via Google Drive.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Featured Conference Acceptance Announcement Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-5xl mx-auto p-6 md:p-8 rounded-[2rem] bg-gradient-to-r from-emerald-50/70 via-cyan-50/40 to-sky-50/60 border border-emerald-200/70 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5 text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {conference.status}
                </span>
                <span className="text-xs font-bold text-slate-400">Peer-Reviewed Publication</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Official Acceptance at {conference.name} ({conference.fullName})
              </h3>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Our research paper has been formally accepted for presentation and publication.
              </p>
            </div>
          </div>

          <a
            href={conference.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl bg-slate-900 text-white hover:bg-emerald-600 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Visit {conference.name}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── SECTION 1: RESEARCH DOCUMENTS ── */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-slate-800">
            <FileText className="w-5 h-5 text-cyan-600" />
            <h3 className="text-xl font-bold">Research Papers &amp; Reports</h3>
            <span className="text-xs text-slate-400 font-medium ml-auto flex items-center gap-1">
              <HardDrive className="w-3.5 h-3.5 text-cyan-600" /> Cloud Hosted
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {docs.map((d) => (
              <motion.a
                key={d.name}
                href={d.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-6 bg-slate-50/70 rounded-[2rem] border border-slate-200/70 hover:bg-white hover:border-cyan-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] transition-all duration-300 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4 min-w-0 pr-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-cyan-50 group-hover:text-cyan-700 transition-all duration-300 shadow-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors truncate">
                      {d.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium truncate mt-0.5">{d.detail}</p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 shadow-sm shrink-0">
                  <Download className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: PRESENTATIONS & SLIDE DECKS ── */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6 text-slate-800">
            <Presentation className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl font-bold">Presentations &amp; Slide Decks</h3>
            <span className="text-xs text-slate-400 font-medium ml-auto flex items-center gap-1">
              <HardDrive className="w-3.5 h-3.5 text-indigo-600" /> Cloud Hosted
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {presentations.map((p) => (
              <motion.a
                key={p.name}
                href={p.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-6 bg-slate-50/70 rounded-[2rem] border border-slate-200/70 hover:bg-white hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.12)] transition-all duration-300 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4 min-w-0 pr-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-all duration-300 shadow-sm">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors truncate">
                      {p.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium truncate mt-0.5">{p.detail}</p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 shadow-sm shrink-0">
                  <Download className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}