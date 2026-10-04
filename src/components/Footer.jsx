import GithubIcon from './GithubIcon'
import { PROJECT_ID, REPO } from '../data/constants'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-12 px-6 rounded-t-[3rem] shadow-2xl relative overflow-hidden border-t border-slate-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 pb-16 border-b border-slate-800">
          {/* Contact info */}
          <div>
            <div className="text-3xl font-black mb-3 flex items-center">
              <span>BS</span>
              <span className="text-cyan-400">AV</span>
              <span className="text-cyan-600">.</span>
            </div>
            <h2 className="text-2xl font-black mb-3">Academic Research Project</h2>
            <p className="text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
              For academic inquiries regarding BSAV cryptographic specifications or research collaboration opportunities[cite: 32].
            </p>
            <div className="text-xs text-slate-300 space-y-1 font-mono">
              <p className="font-bold text-white">Sri Lanka Institute of Information Technology[cite: 32]</p>
              <p className="text-slate-400">Faculty of Computing · Department of Software Engineering[cite: 32]</p>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-medium">
                <li><a href="#home"        className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#infographic" className="hover:text-cyan-400 transition-colors">System Flow</a></li>
                <li><a href="#methodology" className="hover:text-cyan-400 transition-colors">Methodology</a></li>
                <li><a href="#merkle-zkp"  className="hover:text-cyan-400 transition-colors">Merkle &amp; ZKP</a></li>
                <li><a href="#milestones"  className="hover:text-cyan-400 transition-colors">Milestones</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4">Research Repo</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-medium">
                <li>
                  <a href={REPO} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors font-bold text-white">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>R26-SE-011 GitHub</span>
                  </a>
                </li>
                <li><a href="#branches"   className="hover:text-cyan-400 transition-colors">Git Architecture</a></li>
                <li><a href="#team"       className="hover:text-cyan-400 transition-colors">Research Team</a></li>
                <li><a href="#references" className="hover:text-cyan-400 transition-colors">References</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 {PROJECT_ID} Research Team · SLIIT Faculty of Computing</p>
          <p className="mt-2 md:mt-0 font-mono text-slate-400">BSAV Cryptographic Result Integrity Framework</p>
        </div>
      </div>
    </footer>
  )
}