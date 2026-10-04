import GithubIcon from './GithubIcon'
import { PROJECT_ID, REPO } from '../data/constants'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-12 px-6 rounded-t-[3rem] shadow-2xl relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-12 pb-16 border-b border-gray-800">
          {/* Contact info */}
          <div>
            <h2 className="text-4xl font-black mb-4">Get in touch</h2>
            <p className="text-gray-400 text-base max-w-md mb-6 leading-relaxed">
              For academic inquiries regarding BSAV or research collaboration opportunities.
            </p>
            <div className="text-sm text-gray-300 space-y-1">
              <p className="font-bold text-white">Sri Lanka Institute of Information Technology</p>
              <p>Faculty of Computing · Department of Software Engineering</p>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-black text-[#22c55e] uppercase tracking-widest mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">
                <li><a href="#home"        className="hover:text-[#22c55e] transition-colors">Home</a></li>
                <li><a href="#infographic" className="hover:text-[#22c55e] transition-colors">System Flow</a></li>
                <li><a href="#methodology" className="hover:text-[#22c55e] transition-colors">Methodology</a></li>
                <li><a href="#merkle-zkp"  className="hover:text-[#22c55e] transition-colors">Merkle &amp; ZKP</a></li>
                <li><a href="#milestones"  className="hover:text-[#22c55e] transition-colors">Milestones</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-black text-[#22c55e] uppercase tracking-widest mb-4">Research Repo</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">
                <li>
                  <a href={REPO} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#22c55e] transition-colors font-bold text-white">
                    <GithubIcon className="w-4 h-4" />
                    <span>R26-SE-011 GitHub</span>
                  </a>
                </li>
                <li><a href="#branches"   className="hover:text-[#22c55e] transition-colors">Git Architecture</a></li>
                <li><a href="#team"       className="hover:text-[#22c55e] transition-colors">Research Team</a></li>
                <li><a href="#references" className="hover:text-[#22c55e] transition-colors">References</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 {PROJECT_ID} Research Team · SLIIT Faculty of Computing</p>
          <p className="mt-2 md:mt-0 font-medium text-gray-400">BSAV Academic Result Integrity Framework</p>
        </div>
      </div>
    </footer>
  )
}
