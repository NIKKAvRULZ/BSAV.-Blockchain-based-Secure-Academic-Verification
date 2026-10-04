import { motion } from 'framer-motion'
import { Mail, GraduationCap } from 'lucide-react'
import { supervisors, team } from '../data/constants'

export default function Team() {
  return (
    <section id="team" className="py-28 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5">
            The Researchers
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Research Team &amp; Faculty</h2>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Supervisors Section */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">Faculty Supervision</h3>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {supervisors.map((s) => (
              <div
                key={s.name}
                className="p-6 bg-white/80 backdrop-blur-md rounded-[2rem] border border-slate-200/70 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300"
              >
                <div className="w-13 h-13 rounded-2xl bg-slate-900 text-cyan-400 font-black text-xl flex items-center justify-center shrink-0 shadow-sm">
                  {s.name[0]}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{s.name}</h4>
                  <p className="text-xs font-bold text-cyan-700 uppercase tracking-wider">{s.role}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{s.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Team Members Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">Student Researchers</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <motion.div
                key={m.name}
                whileHover={{ y: -4 }}
                className="p-6 bg-white/80 backdrop-blur-md rounded-[2rem] border border-slate-200/70 hover:border-cyan-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-700 font-black text-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {m.name[0]}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">
                    {m.name}
                  </h4>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-3">
                    {m.role}
                  </span>
                  <p className="text-xs text-cyan-700 font-bold mb-4">{m.comp}</p>
                </div>
                <a
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-cyan-700 transition-colors pt-3 border-t border-slate-100"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{m.email}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}