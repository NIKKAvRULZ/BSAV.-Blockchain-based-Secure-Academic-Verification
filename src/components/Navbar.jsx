import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { milestones } from '../data/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-16 md:h-20'
          : 'bg-white/60 backdrop-blur-md border-b border-white/30 h-20 md:h-24'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a href="#home" className="text-3xl font-black tracking-tighter flex items-center group">
          <span className="text-black transition-colors group-hover:text-gray-800">BS</span>
          <span className="text-[#22c55e] drop-shadow-sm transition-transform group-hover:scale-105 inline-block">AV</span>
          <span className="text-gray-300 ml-0.5">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center font-bold text-sm text-gray-900">
          <a href="#home" className="hover:text-[#22c55e] transition-colors py-2">Home</a>

          {/* Domain Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#22c55e] transition-colors py-8">
              <span>Domain</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-[75px] left-0 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden py-2">
              <a href="#infographic" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">System Flow Infographic</a>
              <a href="#literature"  className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Literature Survey</a>
              <a href="#gap"         className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Research Gap</a>
              <a href="#problem"     className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Problem &amp; Solution</a>
              <a href="#objectives"  className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Research Objectives</a>
              <a href="#methodology" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Methodology</a>
              <a href="#merkle-zkp"  className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Merkle &amp; ZKP Visualizer</a>
              <a href="#technology"  className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Technology Stack</a>
            </div>
          </div>

          {/* Milestones Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#22c55e] transition-colors py-8">
              <span>Milestones</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-[75px] left-0 w-72 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden max-h-[70vh] overflow-y-auto py-2">
              {milestones.map((m) => (
                <a key={m.id} href="#milestones" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0">
                  <div className="flex justify-between items-center">
                    <span>{m.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${m.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {m.status}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a href="#branches"  className="hover:text-[#22c55e] transition-colors py-2">Git Architecture</a>
          <a href="#downloads" className="hover:text-[#22c55e] transition-colors py-2">Downloads</a>
          <a href="#team"      className="hover:text-[#22c55e] transition-colors py-2">About Us</a>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-black text-white rounded-xl hover:bg-[#22c55e] hover:text-black transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 font-bold text-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-gray-700 hover:text-[#22c55e] transition-colors bg-white/80 rounded-xl border border-gray-200 shadow-sm"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-gray-200 px-6 py-6 space-y-4 shadow-2xl"
          >
            {[
              ['#home',        'Home'],
              ['#infographic', 'System Flow Infographic'],
              ['#literature',  'Literature Survey'],
              ['#gap',         'Research Gap'],
              ['#problem',     'Problem & Solution'],
              ['#objectives',  'Objectives'],
              ['#methodology', 'Methodology'],
              ['#merkle-zkp',  'Merkle & ZKP Visualizer'],
              ['#branches',    'Git Architecture'],
              ['#milestones',  'Milestones'],
              ['#downloads',   'Downloads'],
              ['#team',        'Research Team'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-gray-900 hover:text-[#22c55e]"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 bg-black text-white font-bold rounded-xl hover:bg-[#22c55e] hover:text-black transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
