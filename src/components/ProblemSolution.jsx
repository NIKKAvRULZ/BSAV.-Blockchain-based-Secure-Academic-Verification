import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">THE CORE PARADIGM SHIFT</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Problem &amp; Solution</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Problem / Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-red-50/30 rounded-3xl border border-red-100 hover:border-red-200 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">The Problem</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
              A grade is reviewed, moderated, corrected and approved before it is final. Systems that only protect the stored
              record say nothing about whether that process was controlled, and verifying a single grade usually means asking
              the university.
            </p>
          </div>

          <div className="p-8 bg-green-50/40 rounded-3xl border border-green-200 hover:border-green-300 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e] text-black flex items-center justify-center font-bold shadow-md">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">The Solution</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
              Finalize first, prove second. Results are only hashed, anchored and made verifiable after governance is complete,
              and a verifier can confirm one claim with a zero-knowledge proof instead of revealing the full academic record.
            </p>
          </div>
        </div>

        {/* Mission Quote */}
        <div className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#22c55e] text-black flex items-center justify-center font-black text-2xl shadow-lg">
            "
          </div>
          <blockquote className="text-lg md:text-2xl font-bold leading-relaxed text-gray-100">
            To develop an integrated academic result lifecycle that turns initial submissions into finalized results that can be
            cryptographically verified, with controlled corrections and privacy-preserving third-party verification.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
