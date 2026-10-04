import { refs } from '../data/constants'

export default function References() {
  return (
    <section id="references" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-3">ACADEMIC CITATIONS</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">References</h2>
          <div className="mx-auto h-1 w-16 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* References List */}
        <div className="bg-slate-50/70 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm max-w-5xl mx-auto">
          <ol className="space-y-4 text-sm text-slate-700 font-medium">
            {refs.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-slate-200/80"
              >
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-100 text-cyan-700 shrink-0 mt-0.5">
                  [{i + 1}]
                </span>
                <span className="leading-relaxed text-slate-800">
                  {r}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}