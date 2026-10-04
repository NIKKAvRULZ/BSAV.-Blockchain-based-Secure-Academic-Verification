import { refs } from '../data/constants'

export default function References() {
  return (
    <section id="references" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">ACADEMIC CITATIONS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">References</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm max-w-5xl mx-auto">
          <ol className="space-y-4 list-decimal list-inside text-sm text-gray-700 font-medium">
            {refs.map((r, i) => (
              <li key={i} className="pl-2 leading-relaxed border-b border-gray-50 pb-3 last:border-0">
                <span className="text-gray-900">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
