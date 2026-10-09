import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles, Navigation, Flag } from 'lucide-react'
import { milestones } from '../data/constants'

export default function Milestones() {
  const containerRef = useRef(null)

  // Track scroll position through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth spring for the track fill (GSAP scrub feel)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  })

  const pathHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%'])
  const completedCount = milestones.filter((m) => m.status === 'Completed').length
  const progressPercent = Math.round((completedCount / milestones.length) * 100)

  return (
    <section
      id="milestones"
      ref={containerRef}
      className="py-32 bg-slate-50/60 border-t border-slate-200/60 relative overflow-hidden"
    >
      {/* Background Soft Parallax Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-b from-cyan-400/10 via-indigo-400/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest px-3.5 py-1.5 bg-cyan-50 rounded-full border border-cyan-100 inline-block mb-3.5 shadow-sm">
            Research Expedition
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Academic Milestones Journey
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg">
            Follow the chronological roadmap from problem formulation and charter approval to final viva defense.
          </p>
          <div className="mx-auto h-1 w-12 bg-cyan-500/80 rounded-full mt-4" />
        </div>

        {/* Journey Progress Indicator Card */}
        <div className="max-w-2xl mx-auto mb-20 p-5 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/70 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center font-bold">
              <Navigation className="w-5 h-5 text-cyan-600 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Expedition Progress</div>
              <div className="text-[11px] text-slate-400 font-medium">
                {completedCount} of {milestones.length} Key Checkpoints Cleared
              </div>
            </div>
          </div>
          <span className="font-mono text-sm font-bold text-cyan-700 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-100">
            {progressPercent}% Complete
          </span>
        </div>

        {/* ── THE JOURNEY TIMELINE TRACK ── */}
        <div className="relative">
          {/* Base Inactive Trail Line (Center on md+, Left on mobile) */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-slate-200/80 rounded-full" />

          {/* Active Glowing Scroll-Linked Trail Line */}
          <motion.div
            style={{ height: pathHeight }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-1 bg-gradient-to-b from-cyan-500 via-sky-500 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)] origin-top z-0"
          />

          {/* Milestone Waypoints */}
          <div className="space-y-16 relative z-10">
            {milestones.map((m, idx) => {
              const isCompleted = m.status === 'Completed'
              const isEven = idx % 2 === 0

              return (
                <div
                  key={m.id}
                  className={`relative flex items-center ${
                    // Alternating layout on desktop; single-column aligned right of track on mobile
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Waypoint Marker Pin (Center on desktop, left on mobile) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: '-80px' }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 ${
                        isCompleted
                          ? 'bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white shadow-cyan-500/20'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      {idx === milestones.length - 1 ? (
                        <Flag className="w-4 h-4 text-white" />
                      ) : isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-400" />
                      )}
                    </motion.div>
                  </div>

                  {/* Waypoint Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] ${
                      isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                    } w-full`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="p-7 bg-white/85 backdrop-blur-xl rounded-[2rem] border border-slate-200/70 hover:border-cyan-300 hover:shadow-[0_20px_45px_-15px_rgba(14,165,233,0.12)] hover:-translate-y-1 transition-all duration-300 group shadow-sm"
                    >
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Checkpoint 0{idx + 1}
                        </span>
                        <span
                          className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            isCompleted
                              ? 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-1.5">
                        {m.name}
                      </h3>

                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {m.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}