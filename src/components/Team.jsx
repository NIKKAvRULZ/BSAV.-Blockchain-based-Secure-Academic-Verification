import { motion } from 'framer-motion'
import { supervisors, team } from '../data/constants'

// Inline LinkedIn Icon to prevent lucide-react import errors
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  )
}

// Inline Crown Icon matching the badge in the screenshot
function CrownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" {...props}>
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
    </svg>
  )
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* ── SUPERVISORS SECTION ── */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-12">
            Supervisors
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-6 flex items-center justify-between gap-5 relative group"
              >
                <div className="flex items-center gap-5 min-w-0">
                  {/* Rounded Square Profile Image */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=f1f5f9&color=0f172a&size=256`
                      }}
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="text-left min-w-0">
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                      {s.name}
                    </h3>
                    <div className="text-xs font-black text-[#16a34a] uppercase tracking-wider mt-1">
                      {s.role}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Badge */}
                {s.linkedin && (
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 text-slate-300 hover:text-[#0077b5] transition-colors shrink-0 self-start"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TEAM MEMBERS SECTION ── */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-14">
            Team Members
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pt-4">
            {team.map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white rounded-[2rem] p-4 flex flex-col justify-between relative group ${
                  m.isLeader
                    ? 'border-2 border-[#22c55e] shadow-[0_10px_30px_-5px_rgba(34,197,94,0.12)]'
                    : 'border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]'
                }`}
              >
                {/* Floating Green Pill Badge on Leader Card */}
                {m.isLeader && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#16a34a] text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5 z-20">
                    <CrownIcon />
                    <span>GROUP LEADER</span>
                  </div>
                )}

                {/* Inner Rounded Portrait Image */}
                <div className="w-full h-72 rounded-[1.6rem] overflow-hidden bg-slate-100 shadow-inner mb-4">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=f8fafc&color=0f172a&size=512`
                    }}
                  />
                </div>

                {/* Member Info & LinkedIn */}
                <div className="px-2 pb-2 flex items-center justify-between text-left">
                  <div className="min-w-0 pr-2">
                    <h4 className="text-base font-extrabold text-slate-900 leading-snug truncate">
                      {m.name}
                    </h4>
                  </div>

                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-[#0077b5] transition-colors p-1 shrink-0"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}