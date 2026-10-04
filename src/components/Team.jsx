import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { supervisors, team } from '../data/constants'

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50/60 border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">THE RESEARCHERS</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Research Team</h2>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Supervisors */}
        <div className="mb-14">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 text-center">Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {supervisors.map((s) => (
              <div key={s.name} className="p-6 bg-white rounded-2xl border border-slate-200 flex items-center gap-5 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-slate-900 text-cyan-400 font-black text-2xl flex items-center justify-center shrink-0">
                  {s.name[0]}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">{s.name}</h4>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider">{s.role}</p>
                  <p className="text-xs text-slate-500 font-medium">{s.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 text-center">Team Members</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <motion.div
                key={m.name}
                whileHover={{ y: -6 }}
                className="p-6 bg-white rounded-3xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 font-black text-2xl flex items-center justify-center mb-4">
                    {m.name[0]}
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">{m.name}</h4>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-3">
                    {m.role}
                  </span>
                  <p className="text-xs text-cyan-600 font-bold mb-4">{m.comp}</p>
                </div>
                <a
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-cyan-600 transition-colors pt-3 border-t border-slate-100"
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