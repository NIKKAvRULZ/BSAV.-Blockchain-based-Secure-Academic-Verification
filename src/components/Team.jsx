import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { supervisors, team } from '../data/constants'

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">THE RESEARCHERS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Research Team</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Supervisors */}
        <div className="mb-14">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 text-center">Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {supervisors.map((s) => (
              <div key={s.name} className="p-6 bg-white rounded-2xl border border-gray-200 flex items-center gap-5 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-black text-[#22c55e] font-black text-2xl flex items-center justify-center shrink-0">
                  {s.name[0]}
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900">{s.name}</h4>
                  <p className="text-xs font-bold text-[#22c55e] uppercase tracking-wider">{s.role}</p>
                  <p className="text-xs text-gray-500 font-medium">{s.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 text-center">Team Members</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <motion.div
                key={m.name}
                whileHover={{ y: -6 }}
                className="p-6 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 text-[#22c55e] font-black text-2xl flex items-center justify-center mb-4">
                    {m.name[0]}
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-1">{m.name}</h4>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 mb-3">
                    {m.role}
                  </span>
                  <p className="text-xs text-[#22c55e] font-bold mb-4">{m.comp}</p>
                </div>
                <a
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-black transition-colors pt-3 border-t border-gray-100"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
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
