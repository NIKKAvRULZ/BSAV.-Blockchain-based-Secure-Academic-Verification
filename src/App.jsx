import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  FileSpreadsheet,
  Lock,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  Mail,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Layers,
  Database,
  Key,
  Award,
  ArrowRight,
  Sparkles,
  GitCommit,
  UserCheck,
  BookOpen,
  GitBranch,
  Clock,
  Code2,
  Share2,
  Terminal,
  Zap,
  Check,
  ShieldCheck,
  RefreshCw,
  EyeOff,
  Activity
} from 'lucide-react'

/* ───────── GITHUB ICON COMPONENT ───────── */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

/* ───────── SYSTEM & RESEARCH REPO DATA ───────── */
const PROJECT_ID = 'R26-SE-011'
const REPO = 'https://github.com/imeshiperera12/R26-SE-011.git'

const metricsStats = [
  { value: '100%', label: 'Tamper-Proof Integrity', sub: 'Ethereum & Merkle Root Anchored', icon: ShieldCheck },
  { value: '0', label: 'PII Data Exposure', sub: 'PDPA Compliant Candidate Hashing', icon: EyeOff },
  { value: '4', label: 'Decentralized Modules', sub: 'Ingestion, BOE, Proof, Verification', icon: Layers },
  { value: '< 1s', label: 'ZKP Claim Verification', sub: 'Groth16 Zero-Knowledge Proofs', icon: Zap },
]

const comps = [
  {
    n: 3,
    key: 'c3',
    name: 'Data Ingestion (Silent Bridge)',
    role: 'Provenance & Policy Gate',
    icon: FileSpreadsheet,
    color: 'emerald',
    blurb: 'Acts as the secure, decentralized front door. Handles lecturer uploads, schema-agnostic extraction via SheetJS, automated PII stripping, dynamic policy time-gating, and duplicate file rejection.',
    items: [
      'React/Vite portal for heterogeneous Excel and CSV upload',
      'SheetJS parser extracts candidate IDs & rubrics in any layout',
      'PII (names, emails, phones) stripped for PDPA compliance',
      'SHA-256 payload hash rejects duplicate files (Idempotency)',
      'Private append-only ledger in MongoDB Atlas (Block #0, #1 …)',
      'Context-Aware Routing for Re-corrections and Grade Appeals',
      'Time-gated policy engine: Standard Entry, BOE Lock, Appeals Window'
    ]
  },
  {
    n: 2,
    key: 'c2',
    name: 'BOE Review & Governance',
    role: 'Academic Moderation & Audit',
    icon: UserCheck,
    color: 'amber',
    blurb: 'Allows Board of Examiners (BOE) moderation and controlled result revisions. Maintains full audit version history before two-week finalization window locks records.',
    items: [
      'Authenticated module-based review & candidate search',
      'Controlled revision with automatic grade calculation',
      'Correction reasons, revision history, and version audit logs',
      'Hashes ONLY Candidate ID + Module Code + Final Grade',
      'Private offline institutional blockchain during review phase',
      '2-Week Finalization Lock preventing further mark edits'
    ]
  },
  {
    n: 1,
    key: 'c1',
    name: 'Blockchain Proof Layer',
    role: 'Merkle & Decentralized IPFS',
    icon: Shield,
    color: 'blue',
    blurb: 'Compiles finalized academic records into a Binary Merkle Tree, uploads proof datasets to IPFS via Pinata, and anchors CID + Merkle Root on Ethereum smart contracts.',
    items: [
      'Re-checks candidate | moduleCode | grade | version hashes',
      'Binary Merkle Tree and Merkle Root for full batch integrity',
      'Proof dataset uploaded to IPFS (Pinata) for unique CID',
      'ProofStorage Solidity contract stores Merkle Root, CID & timestamp',
      'Smart contract prevents duplicate Merkle Root anchoring',
      'MongoDB index maps Candidate ID + Module Code to Root + CID'
    ]
  },
  {
    n: 4,
    key: 'c4',
    name: 'Corporate Verification Gateway',
    role: 'Privacy-Preserving ZKP',
    icon: Key,
    color: 'purple',
    blurb: 'Allows third-party verifiers (employers, universities) to independently verify a single claim using Groth16 Zero-Knowledge Proofs without revealing raw transcripts.',
    items: [
      'Fetches proof context from IPFS via anchored CID',
      'Generates verification hash: hash(Student ID + Module + Grade)',
      'Verifies cryptographic Merkle membership path',
      'Groth16 Zero-Knowledge Proof bound to candidate, module & root',
      'Returns instant VALID / INVALID mathematical confirmation',
      'Certora formal verification of smart contract safety'
    ]
  }
]

const gaps = [
  { title: 'Centralized Vulnerabilities', desc: 'Traditional university grading records reside in closed databases vulnerable to unauthorized internal alterations or single points of failure.', icon: AlertTriangle },
  { title: 'Lack of Cryptographic Proof', desc: 'Verifying paper transcripts or digital PDFs relies entirely on manual phone calls or institutional email follow-ups.', icon: Database },
  { title: 'Unregulated Review Windows', desc: 'Traditional systems lack automated, time-locked institutional boundaries to safely govern standard grading uploads versus formal grade appeals.', icon: Clock },
  { title: 'Transcript Fraud & Forgeries', desc: 'The widespread availability of PDF editing tools enables fraudulent grade inflations that bypass legacy verification workflows.', icon: Lock }
]

const objectives = [
  'Control how results are ingested with dynamic time-gate policy enforcement',
  'Allow BOE moderation and controlled revisions with version tracking',
  'Maintain full audit history and correction reasons for compliance',
  'Handle special concerns and grade appeals via context-aware routing',
  'Generate cryptographic hashes stripped of PII for PDPA compliance',
  'Build Binary Merkle Trees representing finalized batch records',
  'Store finalized dataset JSON on IPFS via Pinata for decentralized access',
  'Anchor CID and Merkle Root on Ethereum ProofStorage smart contract',
  'Provide corporate verification gateway for independent third-party lookup',
  'Verify claims using Groth16 Zero-Knowledge Proofs without exposing raw grades'
]

const related = [
  { title: 'Blockchain in Education', desc: 'Grech & Camilleri examined how blockchain can support education records and credential management.' },
  { title: 'Blockcerts Standard', desc: 'An open standard for issuing machine-verifiable credentials on a blockchain.' },
  { title: 'Trustless Education Systems', desc: 'Rooksby & Dimitrov studied university grading on a blockchain and its fit with institutional practice.' },
  { title: 'EduCTX Credit Framework', desc: 'A blockchain framework for managing and porting higher-education credits across institutions.' },
  { title: 'IPFS & Zero-Knowledge Proofs', desc: 'Content-addressed storage for off-chain datasets, and Groth16 ZKPs for proving claims without revealing data.' }
]

const stack = [
  { name: 'React + Vite', category: 'Lecturer & Verifier Portals' },
  { name: 'SheetJS (xlsx)', category: 'Schema-Agnostic Parser' },
  { name: 'Node.js Express', category: 'Middleware & Policy Engine' },
  { name: 'MongoDB Atlas', category: 'Audit Ledger & Index' },
  { name: 'Solidity', category: 'ProofStorage Contract' },
  { name: 'Hardhat EVM', category: 'Blockchain Testbed' },
  { name: 'IPFS (Pinata)', category: 'Decentralized Storage' },
  { name: 'SHA-256 Hashing', category: 'Cryptographic Provenance' },
  { name: 'Merkle Trees', category: 'Hierarchical Batch Root' },
  { name: 'Groth16 ZKP', category: 'Zero-Knowledge Circuits' },
  { name: 'Certora', category: 'Smart Contract Formal Verification' }
]

const gitBranches = [
  { branch: 'feature/component-01-hashing', module: 'Component 1', desc: 'Core SHA-256 data hashing & payload verification' },
  { branch: 'feature/component-01-merkle-tree', module: 'Component 1', desc: 'Binary Merkle Tree construction & Root calculation' },
  { branch: 'feature/component-01-ipfs', module: 'Component 1', desc: 'Pinata IPFS dataset pinning & CID management' },
  { branch: 'feature/component-02-audit-version', module: 'Component 2', desc: 'BOE moderation history, versioning & audit logs' },
  { branch: 'feature/component-02-deadline-hash', module: 'Component 2', desc: 'Two-week finalization window & temporary block lock' },
  { branch: 'feature/component-03-extraction-engine', module: 'Component 3', desc: 'SheetJS LMS rubric parser & PII stripper' },
  { branch: 'component-03-silent-bridge', module: 'Component 3', desc: 'Dynamic policy engine, time-gates & mock backend' },
  { branch: 'component4-zkp-formal-verification', module: 'Component 4', desc: 'Groth16 Zero-Knowledge Proof verifier & Certora rules' },
]

const milestones = [
  { id: 'taf-submission', name: 'TAF Submission', desc: 'Topic Assessment Form submitted for approval of the research topic.', status: 'Completed' },
  { id: 'project-charter', name: 'Project Charter', desc: 'Scope, objectives and team roles defined.', status: 'Completed' },
  { id: 'proposal-document', name: 'Proposal Document', desc: 'Project proposal submitted to the supervisor.', status: 'Completed' },
  { id: 'proposal-presentation', name: 'Proposal Presentation', desc: 'Proposal presented for academic approval.', status: 'Completed' },
  { id: 'progress-presentation-i', name: 'Progress Presentation I', desc: 'Review at 50% completion.', status: 'Pending' },
  { id: 'progress-presentation-ii', name: 'Progress Presentation II', desc: 'Demonstration at 90% completion.', status: 'Pending' },
  { id: 'final-report', name: 'Final Report & Group Report', desc: 'Individual, group and final reports.', status: 'Pending' },
  { id: 'final-presentation', name: 'Final Presentation & Viva', desc: 'Individual viva on each member’s contribution.', status: 'Pending' },
  { id: 'research-paper', name: 'Research Paper', desc: 'Contribution to existing knowledge and literature.', status: 'Pending' }
]

const docs = [
  { name: 'Research Paper', detail: 'IEEE Format · PDF', path: 'documents/Research Paper.pdf' },
  { name: 'TAF (Topic Assessment)', detail: 'Official Form · PDF', path: 'documents/TAF.pdf' },
  { name: 'Project Proposal', detail: 'Detailed Proposal · PDF', path: 'documents/Proposal.pdf' },
  { name: 'Proposal Presentation', detail: 'Slide Deck · PPTX', path: 'documents/Proposal Presentation.pptx' }
]

const supervisors = [
  { name: 'Supervisor Name', role: 'Primary Supervisor', dept: 'SLIIT Faculty of Computing' },
  { name: 'Co-Supervisor Name', role: 'Co-Supervisor', dept: 'SLIIT Faculty of Computing' }
]

const team = [
  { name: 'M.A.I.D. Perera', role: 'Group Leader', comp: 'Component 1 · Blockchain Proof Layer', email: 'imeshiperera18@gmail.com' },
  { name: 'H.P.C.D.P. Patabandige', role: 'Member', comp: 'Component 2 · BOE Governance', email: 'chamodidilki44@gmail.com' },
  { name: 'W.A.N.I. Perera', role: 'Member', comp: 'Component 3 · Data Ingestion', email: 'nithika151@gmail.com' },
  { name: 'N.S.G. Perera', role: 'Member', comp: 'Component 4 · Verification', email: 'susaraperera33@gmail.com' }
]

const refs = [
  'Grech & Camilleri (2017). Blockchain in Education. Publications Office of the EU.',
  'MIT Media Lab & Learning Machine. Blockcerts: The Open Standard for Blockchain Credentials.',
  'Rooksby & Dimitrov (2019). Trustless education? A blockchain system for university grades. Ubiquity, 6(1).',
  'Benet (2014). IPFS: Content Addressed, Versioned, P2P File System. arXiv:1407.3561.',
  'Merkle (1988). A Digital Signature Based on a Conventional Encryption Function. CRYPTO ’87.',
  'Goldwasser, Micali & Rackoff (1989). The Knowledge Complexity of Interactive Proof Systems. SIAM J. Computing.',
  'NIST (2015). FIPS PUB 180-4: Secure Hash Standard.',
  'Wood (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger.',
  'Turkanović et al. (2018). EduCTX. IEEE Access, 6.',
  'Groth (2016). On the Size of Pairing-based Non-interactive Arguments. EUROCRYPT 2016.',
  'Zhao et al. (2024). A blockchain-based academic degree attestation system. IJPEDS, 39(5).'
]

const hashes = ['9f2c…a41b', 'c7d0…83e2', '5be1…f09a', 'a377…2d6c']

/* ───────── NAVBAR COMPONENT ───────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
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
        <a href="#home" className="text-3xl font-black tracking-tighter flex items-center group">
          <span className="text-black transition-colors group-hover:text-gray-800">BS</span>
          <span className="text-[#22c55e] drop-shadow-sm transition-transform group-hover:scale-105 inline-block">AV</span>
          <span className="text-gray-300 ml-0.5">.</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center font-bold text-sm text-gray-900">
          <a href="#home" className="hover:text-[#22c55e] transition-colors py-2">Home</a>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#22c55e] transition-colors py-8">
              <span>Domain</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-[75px] left-0 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden py-2">
              <a href="#infographic" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">System Flow Infographic</a>
              <a href="#literature" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Literature Survey</a>
              <a href="#gap" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Research Gap</a>
              <a href="#problem" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Problem & Solution</a>
              <a href="#objectives" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Research Objectives</a>
              <a href="#methodology" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Methodology</a>
              <a href="#merkle-zkp" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Merkle & ZKP Visualizer</a>
              <a href="#technology" className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Technology Stack</a>
            </div>
          </div>

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

          <a href="#branches" className="hover:text-[#22c55e] transition-colors py-2">Git Architecture</a>
          <a href="#downloads" className="hover:text-[#22c55e] transition-colors py-2">Downloads</a>
          <a href="#team" className="hover:text-[#22c55e] transition-colors py-2">About Us</a>

          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-black text-white rounded-xl hover:bg-[#22c55e] hover:text-black transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 font-bold text-sm"
          >
            Contact Us
          </a>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-gray-700 hover:text-[#22c55e] transition-colors bg-white/80 rounded-xl border border-gray-200 shadow-sm"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-gray-200 px-6 py-6 space-y-4 shadow-2xl"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Home</a>
            <a href="#infographic" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">System Flow Infographic</a>
            <a href="#literature" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Literature Survey</a>
            <a href="#gap" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Research Gap</a>
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Problem & Solution</a>
            <a href="#objectives" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Objectives</a>
            <a href="#methodology" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Methodology</a>
            <a href="#merkle-zkp" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Merkle & ZKP Visualizer</a>
            <a href="#branches" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Git Architecture</a>
            <a href="#milestones" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Milestones</a>
            <a href="#downloads" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Downloads</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-[#22c55e]">Research Team</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center py-3 bg-black text-white font-bold rounded-xl hover:bg-[#22c55e] hover:text-black transition-all">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* ───────── HERO SECTION ───────── */
function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[95vh] text-center px-6 overflow-hidden pt-12 pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#22c55e]/15 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Project ID Tag */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200/80 text-[#22c55e] text-xs font-black uppercase tracking-widest mb-8 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Research Project {PROJECT_ID} · SLIIT Faculty of Computing</span>
      </motion.div>

      {/* Hero Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-7xl sm:text-8xl md:text-[10.5rem] font-black mb-6 tracking-tighter leading-none text-gray-900">
          <span>BS</span>
          <span className="text-[#22c55e] drop-shadow-[0_10px_25px_rgba(34,197,94,0.22)]">AV</span>
          <span className="text-gray-300">.</span>
        </h1>
      </motion.div>

      {/* Tagline Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-4 mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-medium text-gray-700 tracking-tight leading-snug">
          Blockchain-Based Transparent and Secure Academic Grading Using Decentralized Verification
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 max-w-3xl mx-auto leading-relaxed">
          Academic grades that anyone can verify and no one can quietly change.
        </h3>
        <div className="mx-auto h-1.5 w-24 bg-[#22c55e] rounded-full mt-6" />
      </motion.div>

      {/* Infographic Key Metrics Counter Row */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
      >
        {metricsStats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div 
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#22c55e]/50 transition-all text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</span>
                <div className="w-9 h-9 rounded-xl bg-green-50 text-[#22c55e] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-xs font-extrabold text-gray-900">{stat.label}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">{stat.sub}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Abstract Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative bg-white/70 backdrop-blur-md border border-gray-200/80 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto mb-14 text-left"
      >
        <h3 className="text-xs font-black text-[#22c55e] uppercase tracking-widest mb-3 border-b border-green-200/50 pb-2 inline-block">
          Project Abstract
        </h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
          BSAV is a four-component framework that takes a result from lecturer upload, through Board of Examiners review, to a blockchain-anchored proof that employers and universities can check without seeing the grade. Academic result systems usually depend on centralized databases and manual verification, leaving room for unauthorized changes and slow checks. BSAV splits the result lifecycle into controlled ingestion, academic governance with versioning, cryptographic anchoring with Merkle Trees & IPFS, and independent zero-knowledge proof claim verification.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto z-10 justify-center"
      >
        <a 
          href="#infographic" 
          className="px-10 py-4 bg-[#22c55e] text-black rounded-2xl hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest text-xs shadow-[0_20px_40px_rgba(34,197,94,0.25)] flex items-center justify-center gap-2"
        >
          <span>Explore System Flow</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a 
          href="#downloads" 
          className="px-10 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-black rounded-2xl hover:border-black hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest text-xs shadow-sm flex items-center justify-center gap-2"
        >
          <span>Project Documents</span>
          <FileText className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  )
}

/* ───────── SYSTEM FLOW INFOGRAPHIC SECTION ───────── */
function SystemFlowInfographic() {
  const [selectedNode, setSelectedNode] = useState(0)

  const flowSteps = [
    {
      step: '01',
      title: 'Lecturer Upload & Time-Gate',
      comp: 'Component 3: Silent Bridge',
      desc: 'Lecturer uploads Excel/CSV LMS grade sheets. System checks dynamic policy window, strips PII for PDPA compliance, rejects duplicate payload hashes, and appends record to local private ledger.',
      tag: 'Ingestion & Privacy',
      color: 'emerald'
    },
    {
      step: '02',
      title: 'Context-Aware Routing',
      comp: 'Component 3 Middleware',
      desc: 'Differentiates standard lecturer submissions from formal Grade Appeals or Re-corrections, dynamically routing requests directly to the mock server bypass channel.',
      tag: 'Workflow Branching',
      color: 'blue'
    },
    {
      step: '03',
      title: 'BOE Review & Version Audit',
      comp: 'Component 2: BOE Governance',
      desc: 'Board of Examiners reviews marks, applies moderation changes with correction reasons, tracks version history, and hashes candidate ID + module + grade into temporary internal chain.',
      tag: 'Academic Governance',
      color: 'amber'
    },
    {
      step: '04',
      title: 'Merkle & IPFS Dataset Build',
      comp: 'Component 1: Proof Layer',
      desc: 'Compiles finalized student hashes into a Binary Merkle Tree, calculates the Merkle Root, and pins the dataset JSON on IPFS via Pinata to generate a Content Identifier (CID).',
      tag: 'Decentralized Storage',
      color: 'purple'
    },
    {
      step: '05',
      title: 'Ethereum Smart Contract Anchor',
      comp: 'Component 1: Ethereum EVM',
      desc: 'Executes ProofStorage Solidity contract to immutably anchor the Merkle Root, IPFS CID, timestamp, and uploader address on the Ethereum blockchain.',
      tag: 'Blockchain Anchoring',
      color: 'indigo'
    },
    {
      step: '06',
      title: 'ZKP Corporate Verification',
      comp: 'Component 4: Verification Gateway',
      desc: 'Employers verify student claims (Candidate ID + Module + Grade). System computes Groth16 Zero-Knowledge Proof & Merkle path, confirming VALID / INVALID without exposing raw transcripts.',
      tag: 'Zero-Knowledge Proof',
      color: 'emerald'
    }
  ]

  return (
    <section id="infographic" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">SYSTEM ARCHITECTURE INFOGRAPHIC</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">End-to-End System Workflow</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">Interactive breakdown of how academic records travel from lecturer upload to blockchain anchoring and zero-knowledge verification.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Infographic Steps Stepper Header */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {flowSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setSelectedNode(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                selectedNode === idx 
                  ? 'bg-black text-white border-black shadow-lg scale-105' 
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className={`text-xs font-black mb-1 ${selectedNode === idx ? 'text-[#22c55e]' : 'text-gray-400'}`}>
                STEP {step.step}
              </div>
              <div className="text-xs font-extrabold truncate">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Step Infographic Card */}
        <motion.div 
          key={selectedNode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 md:p-10 bg-gray-50/80 rounded-3xl border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#22c55e] text-black font-black text-xs uppercase tracking-widest rounded-full">
                {flowSteps[selectedNode].tag}
              </span>
              <span className="text-xs font-bold text-gray-500">{flowSteps[selectedNode].comp}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">
              {flowSteps[selectedNode].title}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              {flowSteps[selectedNode].desc}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 bg-white p-6 rounded-2xl border border-gray-200 text-center font-mono text-xs shadow-sm">
            <div className="text-gray-400 text-[10px] uppercase font-bold mb-2">Payload Contract Payload</div>
            <div className="p-3 bg-gray-900 text-green-400 rounded-xl text-left text-[11px] font-mono leading-relaxed overflow-x-auto max-w-xs">
              <code>
                {`{\n  "step": "${flowSteps[selectedNode].step}",\n  "status": "VERIFIED",\n  "provenanceHash": "91659...a4d9",\n  "merkleRoot": "0x4a7...2b1",\n  "zkpValid": true\n}`}
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ───────── MERKLE TREE & ZKP VISUALIZER INFOGRAPHIC ───────── */
function MerkleZkpVisualizer() {
  const [tampered, setTampered] = useState(false)

  return (
    <section id="merkle-zkp" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">CRYPTOGRAPHIC ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Merkle Tree & ZK-Proof Visualizer</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">Simulate how a single grade modification corrupts the Merkle Root and triggers ZKP rejection.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Interactive Visualizer Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-black text-gray-900">Merkle Root Integrity Simulation</h3>
              <p className="text-xs text-gray-500 font-medium">Toggle mark tampering to test cryptographic detection</p>
            </div>
            <button
              onClick={() => setTampered(!tampered)}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 ${
                tampered ? 'bg-red-600 text-white' : 'bg-black text-white hover:bg-[#22c55e] hover:text-black'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{tampered ? 'Reset Original Marks' : 'Simulate Grade Tampering'}</span>
            </button>
          </div>

          {/* Merkle Tree Diagram */}
          <div className="space-y-8 text-center">
            {/* Merkle Root Node */}
            <motion.div 
              animate={{ scale: tampered ? [1, 1.05, 1] : 1 }}
              className={`p-5 rounded-2xl border-2 transition-all max-w-md mx-auto shadow-md ${
                tampered 
                  ? 'bg-red-50 border-red-500 text-red-700' 
                  : 'bg-green-50 border-[#22c55e] text-green-800'
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest mb-1">
                {tampered ? '⚠️ TAMPERED MERKLE ROOT (REJECTED)' : '✅ ANCHORED MERKLE ROOT (ETHEREUM)'}
              </div>
              <div className="font-mono font-black text-sm md:text-base">
                {tampered ? '0x99999999...INVALID_ROOT' : '0x7a3f81b2...9f2c41b8'}
              </div>
            </motion.div>

            {/* Tree Branch Lines */}
            <div className="w-full flex justify-around text-gray-300 text-xs font-mono">
              <span>│</span>
              <span>│</span>
            </div>

            {/* Parent Hashes Row */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 font-mono text-xs">
                <div className="text-gray-400 text-[10px] font-bold">Hash H12</div>
                <div className="font-bold text-gray-800">{tampered ? 'ERR_HASH' : '0x3a4b...88c1'}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 font-mono text-xs">
                <div className="text-gray-400 text-[10px] font-bold">Hash H34</div>
                <div className="font-bold text-gray-800">0x9f1a...2c4e</div>
              </div>
            </div>

            {/* Student Leaves Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'IT22061348', grade: tampered ? 'A+ (Edited)' : 'A', status: tampered ? 'TAMPERED' : 'VALID' },
                { id: 'IT22044122', grade: 'B+', status: 'VALID' },
                { id: 'IT22091560', grade: 'A-', status: 'VALID' },
                { id: 'IT22018894', grade: 'A+', status: 'VALID' }
              ].map((s, idx) => (
                <div 
                  key={s.id}
                  className={`p-3 rounded-xl border font-mono text-[11px] text-left ${
                    idx === 0 && tampered ? 'bg-red-100 border-red-400 text-red-900' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="font-bold text-gray-900">{s.id}</div>
                  <div className="text-gray-600">Grade: <span className="font-bold">{s.grade}</span></div>
                  <div className={`text-[10px] font-black mt-1 ${idx === 0 && tampered ? 'text-red-600' : 'text-green-600'}`}>
                    {idx === 0 && tampered ? '❌ HASH MISMATCH' : '✓ MATCH'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── GIT BRANCH ARCHITECTURE INFOGRAPHIC ───────── */
function GitBranchesInfographic() {
  return (
    <section id="branches" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">IMPLEMENTATION HISTORY</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Git Repository Branch Architecture</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">Modular feature development tracked across research Git branches for component isolation.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        {/* Branch Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gitBranches.map((b) => (
            <motion.div 
              key={b.branch}
              whileHover={{ y: -4 }}
              className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-[#22c55e] hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#22c55e] bg-green-50 px-2.5 py-1 rounded-lg">
                  {b.module}
                </span>
                <GitBranch className="w-4 h-4 text-gray-400 group-hover:text-[#22c55e] transition-colors" />
              </div>
              <div className="font-mono font-bold text-xs text-gray-900 mb-2 truncate">
                {b.branch}
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── LITERATURE SURVEY ───────── */
function LiteratureSurvey() {
  return (
    <section id="literature" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">BACKGROUND & PRIOR WORK</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Literature Survey</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">What exists in academic blockchain literature, and where current systems stop.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {related.map((item) => (
            <motion.div 
              key={item.title}
              whileHover={{ y: -6 }}
              className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 border border-green-100 shadow-sm text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-black transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-green-50/50 border border-green-200/80 rounded-2xl flex items-start gap-4 shadow-sm">
          <Sparkles className="w-6 h-6 text-[#22c55e] shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            <strong>Key Takeaway:</strong> Prior works show that distributed technology suits educational records. However, none covers the full path from ingestion through BOE review, controlled correction, finalization, cryptographic anchoring, and privacy-preserving verification.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ───────── RESEARCH GAP ───────── */
function ResearchGap() {
  return (
    <section id="gap" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">CURRENT SYSTEM VULNERABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Research Gap</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">How can a result go from first submission to officially finalized and independently verified without relying only on the issuing institution?</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {gaps.map((item) => {
            const Icon = item.icon
            return (
              <motion.div 
                key={item.title}
                whileHover={{ y: -6 }}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col group border-l-8 border-l-amber-500"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────── PROBLEM & SOLUTION ───────── */
function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">THE CORE PARADIGM SHIFT</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Problem & Solution</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-red-50/30 rounded-3xl border border-red-100 hover:border-red-200 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">The Problem</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
              A grade is reviewed, moderated, corrected and approved before it is final. Systems that only protect the stored record say nothing about whether that process was controlled, and verifying a single grade usually means asking the university.
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
              Finalize first, prove second. Results are only hashed, anchored and made verifiable after governance is complete, and a verifier can confirm one claim with a zero-knowledge proof instead of revealing the full academic record.
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#22c55e] text-black flex items-center justify-center font-black text-2xl shadow-lg">
            ”
          </div>
          <blockquote className="text-lg md:text-2xl font-bold leading-relaxed text-gray-100">
            To develop an integrated academic result lifecycle that turns initial submissions into finalized results that can be cryptographically verified, with controlled corrections and privacy-preserving third-party verification.
          </blockquote>
        </div>
      </div>
    </section>
  )
}

/* ───────── OBJECTIVES ───────── */
function Objectives() {
  return (
    <section id="objectives" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">PROJECT DELIVERABLES</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Research Objectives</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {objectives.map((obj, idx) => (
            <motion.div 
              key={obj}
              whileHover={{ scale: 1.01 }}
              className="p-5 bg-white rounded-2xl border border-gray-200 flex items-center gap-4 hover:border-green-300 hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-black text-[#22c55e] flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                {idx + 1}
              </div>
              <span className="text-sm md:text-base font-bold text-gray-800">{obj}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── METHODOLOGY ───────── */
function Methodology() {
  const [activeTab, setActiveTab] = useState('c3')
  const currentComp = comps.find((x) => x.key === activeTab)

  return (
    <section id="methodology" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">SYSTEM ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Methodology</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">A result moves through the four components in order. Each has one designated job.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="flex flex-wrap gap-2 mb-0 justify-center">
          {comps.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveTab(c.key)}
              className={`px-6 py-4 rounded-t-2xl font-bold text-sm transition-all duration-300 border-t-2 border-x-2 border-b-0 flex flex-col items-start ${
                activeTab === c.key
                  ? 'bg-black text-white border-black shadow-lg translate-y-0.5'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <span className={`text-[10px] font-black uppercase tracking-wider ${activeTab === c.key ? 'text-[#22c55e]' : 'text-gray-400'}`}>
                Component {c.n}
              </span>
              <span className="text-base font-extrabold">{c.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl mb-12 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 inline-flex items-center gap-3">
                <span>{currentComp.name}</span>
                <span className="text-xs px-3 py-1 bg-green-50 text-[#22c55e] border border-green-200 rounded-full uppercase tracking-wider font-extrabold">
                  {currentComp.role}
                </span>
              </h3>
            </div>

            <p className="text-base md:text-lg text-gray-700 font-medium mb-6 leading-relaxed">
              {currentComp.blurb}
            </p>

            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Core Specifications & Key Steps:</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {currentComp.items.map((item) => (
                <li key={item} className="flex items-start gap-3 p-3 bg-gray-50/80 rounded-xl border border-gray-100 text-sm text-gray-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-black text-white rounded-2xl flex flex-col justify-center shadow-lg">
            <span className="text-[#22c55e] font-black text-xs uppercase tracking-widest mb-1">Trust Chain Sequence</span>
            <p className="text-sm font-bold leading-relaxed text-gray-200">
              Provenance → Governance → Integrity → Storage → Blockchain anchor → Privacy-preserving verification
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'IPFS (Pinata)', role: 'Stores finalized proof dataset off-chain' },
              { label: 'MongoDB Atlas', role: 'Index maps candidate ID to Merkle CID' },
              { label: 'Ethereum Blockchain', role: 'Anchors ProofStorage Merkle root' }
            ].map((item) => (
              <div key={item.label} className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="font-black text-gray-900 text-base mb-1">{item.label}</div>
                <div className="text-xs text-gray-600 font-medium">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── TECH STACK ───────── */
function TechStack() {
  return (
    <section id="technology" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">TOOLS & FRAMEWORKS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Technology Stack</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {stack.map((t) => (
            <motion.div 
              key={t.name}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#22c55e] hover:shadow-md transition-all text-center group shadow-sm"
            >
              <div className="text-xs font-black uppercase text-[#22c55e] tracking-wider mb-1">{t.category}</div>
              <div className="font-extrabold text-gray-900 text-base group-hover:text-black">{t.name}</div>
            </motion.div>
          ))}
        </div>
        <div className="p-4 bg-gray-100/70 border border-gray-200 rounded-xl text-center text-xs font-medium text-gray-600">
          <strong>Prototype Status:</strong> Deployed on a local Hardhat EVM node with public IPFS integration via Pinata.
        </div>
      </div>
    </section>
  )
}

/* ───────── MILESTONES ───────── */
function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">TIMELINE & ASSESSMENTS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Project Milestones</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">Academic research roadmap and project deliverables.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-8 space-y-8 py-4">
          {milestones.map((m, idx) => (
            <motion.div 
              key={m.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative pl-8 md:pl-10 group"
            >
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                m.status === 'Completed' ? 'bg-[#22c55e] text-black' : 'bg-gray-300 text-gray-600'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1 block">Phase 0{idx + 1}</span>
                  <h3 className="text-xl font-black text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">{m.desc}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shrink-0 ${
                  m.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {m.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── DOWNLOADS / DOCUMENTS ───────── */
function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">RESOURCE CENTER</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Project Documents</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg">Download research papers, proposal slides, and project documentation.</p>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {docs.map((d) => (
            <motion.a
              key={d.name}
              href={d.path}
              download
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-[#22c55e] hover:shadow-xl transition-all duration-300 flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#22c55e] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:text-black transition-all">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-black transition-colors">{d.name}</h3>
                  <p className="text-xs text-gray-500 font-semibold mt-1">{d.detail}</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-all">
                <Download className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── TEAM SECTION ───────── */
function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-3">THE RESEARCHERS</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Research Team</h2>
          <div className="mx-auto h-1 w-16 bg-[#22c55e] rounded-full mt-4" />
        </div>

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

/* ───────── REFERENCES ───────── */
function References() {
  return (
    <section id="references" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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

/* ───────── FOOTER ───────── */
function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-12 px-6 rounded-t-[3rem] shadow-2xl relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 pb-16 border-b border-gray-800">
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

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-black text-[#22c55e] uppercase tracking-widest mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">
                <li><a href="#home" className="hover:text-[#22c55e] transition-colors">Home</a></li>
                <li><a href="#infographic" className="hover:text-[#22c55e] transition-colors">System Flow</a></li>
                <li><a href="#methodology" className="hover:text-[#22c55e] transition-colors">Methodology</a></li>
                <li><a href="#merkle-zkp" className="hover:text-[#22c55e] transition-colors">Merkle & ZKP</a></li>
                <li><a href="#milestones" className="hover:text-[#22c55e] transition-colors">Milestones</a></li>
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
                <li><a href="#branches" className="hover:text-[#22c55e] transition-colors">Git Architecture</a></li>
                <li><a href="#team" className="hover:text-[#22c55e] transition-colors">Research Team</a></li>
                <li><a href="#references" className="hover:text-[#22c55e] transition-colors">References</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 {PROJECT_ID} Research Team · SLIIT Faculty of Computing</p>
          <p className="mt-2 md:mt-0 font-medium text-gray-400">BSAV Academic Result Integrity Framework</p>
        </div>
      </div>
    </footer>
  )
}

/* ───────── MAIN APP ───────── */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 text-gray-900 font-sans antialiased selection:bg-[#22c55e] selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SystemFlowInfographic />
        <LiteratureSurvey />
        <ResearchGap />
        <ProblemSolution />
        <Objectives />
        <Methodology />
        <MerkleZkpVisualizer />
        <TechStack />
        <GitBranchesInfographic />
        <Milestones />
        <Downloads />
        <Team />
        <References />
      </main>
      <Footer />
    </div>
  )
}
