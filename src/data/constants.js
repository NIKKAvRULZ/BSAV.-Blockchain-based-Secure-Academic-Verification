import {
  ShieldCheck,
  EyeOff,
  Layers,
  Zap,
  FileSpreadsheet,
  UserCheck,
  Shield,
  Key,
  AlertTriangle,
  Database,
  Clock,
  Lock
} from 'lucide-react'

/* ───────── PROJECT IDENTIFIERS ───────── */
export const PROJECT_ID = 'R26-SE-011'
export const REPO = 'https://github.com/imeshiperera12/R26-SE-011.git'

/* ───────── HERO METRICS ───────── */
export const metricsStats = [
  { value: '100%', label: 'Tamper-Proof Integrity', sub: 'Ethereum & Merkle Root Anchored', icon: ShieldCheck },
  { value: '0', label: 'PII Data Exposure', sub: 'PDPA Compliant Candidate Hashing', icon: EyeOff },
  { value: '4', label: 'Decentralized Modules', sub: 'Ingestion, BOE, Proof, Verification', icon: Layers },
  { value: '< 1s', label: 'ZKP Claim Verification', sub: 'Groth16 Zero-Knowledge Proofs', icon: Zap },
]

/* ───────── SYSTEM COMPONENTS (Methodology) ───────── */
export const comps = [
  {
    n: 3, key: 'c3',
    name: 'Data Ingestion (Silent Bridge)',
    role: 'Provenance & Policy Gate',
    icon: FileSpreadsheet, color: 'emerald',
    blurb: 'Acts as the secure, decentralized front door. Handles lecturer uploads, schema-agnostic extraction via SheetJS, automated PII stripping, dynamic policy time-gating, and duplicate file rejection.',
    items: [
      'React/Vite portal for heterogeneous Excel and CSV upload',
      'SheetJS parser extracts candidate IDs & rubrics in any layout',
      'PII (names, emails, phones) stripped for PDPA compliance',
      'SHA-256 payload hash rejects duplicate files (Idempotency)',
      'Private append-only ledger in MongoDB Atlas (Block #0, #1 …)',
      'Context-Aware Routing for Re-corrections and Grade Appeals',
      'Time-gated policy engine: Standard Entry, BOE Lock, Appeals Window',
    ],
  },
  {
    n: 2, key: 'c2',
    name: 'BOE Review & Governance',
    role: 'Academic Moderation & Audit',
    icon: UserCheck, color: 'amber',
    blurb: 'Allows Board of Examiners (BOE) moderation and controlled result revisions. Maintains full audit version history before two-week finalization window locks records.',
    items: [
      'Authenticated module-based review & candidate search',
      'Controlled revision with automatic grade calculation',
      'Correction reasons, revision history, and version audit logs',
      'Hashes ONLY Candidate ID + Module Code + Final Grade',
      'Private offline institutional blockchain during review phase',
      '2-Week Finalization Lock preventing further mark edits',
    ],
  },
  {
    n: 1, key: 'c1',
    name: 'Blockchain Proof Layer',
    role: 'Merkle & Decentralized IPFS',
    icon: Shield, color: 'blue',
    blurb: 'Compiles finalized academic records into a Binary Merkle Tree, uploads proof datasets to IPFS via Pinata, and anchors CID + Merkle Root on Ethereum smart contracts.',
    items: [
      'Re-checks candidate | moduleCode | grade | version hashes',
      'Binary Merkle Tree and Merkle Root for full batch integrity',
      'Proof dataset uploaded to IPFS (Pinata) for unique CID',
      'ProofStorage Solidity contract stores Merkle Root, CID & timestamp',
      'Smart contract prevents duplicate Merkle Root anchoring',
      'MongoDB index maps Candidate ID + Module Code to Root + CID',
    ],
  },
  {
    n: 4, key: 'c4',
    name: 'Corporate Verification Gateway',
    role: 'Privacy-Preserving ZKP',
    icon: Key, color: 'purple',
    blurb: 'Allows third-party verifiers (employers, universities) to independently verify a single claim using Groth16 Zero-Knowledge Proofs without revealing raw transcripts.',
    items: [
      'Fetches proof context from IPFS via anchored CID',
      'Generates verification hash: hash(Student ID + Module + Grade)',
      'Verifies cryptographic Merkle membership path',
      'Groth16 Zero-Knowledge Proof bound to candidate, module & root',
      'Returns instant VALID / INVALID mathematical confirmation',
      'Certora formal verification of smart contract safety',
    ],
  },
]

/* ───────── RESEARCH GAPS ───────── */
export const gaps = [
  { title: 'Centralized Vulnerabilities', desc: 'Traditional university grading records reside in closed databases vulnerable to unauthorized internal alterations or single points of failure.', icon: AlertTriangle },
  { title: 'Lack of Cryptographic Proof', desc: 'Verifying paper transcripts or digital PDFs relies entirely on manual phone calls or institutional email follow-ups.', icon: Database },
  { title: 'Unregulated Review Windows', desc: 'Traditional systems lack automated, time-locked institutional boundaries to safely govern standard grading uploads versus formal grade appeals.', icon: Clock },
  { title: 'Transcript Fraud & Forgeries', desc: 'The widespread availability of PDF editing tools enables fraudulent grade inflations that bypass legacy verification workflows.', icon: Lock },
]

/* ───────── RESEARCH OBJECTIVES ───────── */
export const objectives = [
  'Control how results are ingested with dynamic time-gate policy enforcement',
  'Allow BOE moderation and controlled revisions with version tracking',
  'Maintain full audit history and correction reasons for compliance',
  'Handle special concerns and grade appeals via context-aware routing',
  'Generate cryptographic hashes stripped of PII for PDPA compliance',
  'Build Binary Merkle Trees representing finalized batch records',
  'Store finalized dataset JSON on IPFS via Pinata for decentralized access',
  'Anchor CID and Merkle Root on Ethereum ProofStorage smart contract',
  'Provide corporate verification gateway for independent third-party lookup',
  'Verify claims using Groth16 Zero-Knowledge Proofs without exposing raw grades',
]

/* ───────── RELATED LITERATURE ───────── */
export const related = [
  { title: 'Blockchain in Education', desc: 'Grech & Camilleri examined how blockchain can support education records and credential management.' },
  { title: 'Blockcerts Standard', desc: 'An open standard for issuing machine-verifiable credentials on a blockchain.' },
  { title: 'Trustless Education Systems', desc: 'Rooksby & Dimitrov studied university grading on a blockchain and its fit with institutional practice.' },
  { title: 'EduCTX Credit Framework', desc: 'A blockchain framework for managing and porting higher-education credits across institutions.' },
  { title: 'IPFS & Zero-Knowledge Proofs', desc: 'Content-addressed storage for off-chain datasets, and Groth16 ZKPs for proving claims without revealing data.' },
]

/* ───────── TECHNOLOGY STACK ───────── */
export const stack = [
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
  { name: 'Certora', category: 'Smart Contract Formal Verification' },
]

/* ───────── GIT BRANCHES ───────── */
export const gitBranches = [
  { branch: 'feature/component-01-hashing', module: 'Component 1', desc: 'Core SHA-256 data hashing & payload verification' },
  { branch: 'feature/component-01-merkle-tree', module: 'Component 1', desc: 'Binary Merkle Tree construction & Root calculation' },
  { branch: 'feature/component-01-ipfs', module: 'Component 1', desc: 'Pinata IPFS dataset pinning & CID management' },
  { branch: 'feature/component-02-audit-version', module: 'Component 2', desc: 'BOE moderation history, versioning & audit logs' },
  { branch: 'feature/component-02-deadline-hash', module: 'Component 2', desc: 'Two-week finalization window & temporary block lock' },
  { branch: 'feature/component-03-extraction-engine', module: 'Component 3', desc: 'SheetJS LMS rubric parser & PII stripper' },
  { branch: 'component-03-silent-bridge', module: 'Component 3', desc: 'Dynamic policy engine, time-gates & mock backend' },
  { branch: 'component4-zkp-formal-verification', module: 'Component 4', desc: 'Groth16 Zero-Knowledge Proof verifier & Certora rules' },
]

/* ───────── PROJECT MILESTONES ───────── */
export const milestones = [
  { id: 'taf-submission', name: 'TAF Submission', desc: 'Topic Assessment Form submitted for approval of the research topic.', status: 'Completed' },
  { id: 'project-charter', name: 'Project Charter', desc: 'Scope, objectives and team roles defined.', status: 'Completed' },
  { id: 'proposal-document', name: 'Proposal Document', desc: 'Project proposal submitted to the supervisor.', status: 'Completed' },
  { id: 'proposal-presentation', name: 'Proposal Presentation', desc: 'Proposal presented for academic approval.', status: 'Completed' },
  { id: 'progress-presentation-i', name: 'Progress Presentation I', desc: 'Review at 50% completion.', status: 'Pending' },
  { id: 'progress-presentation-ii', name: 'Progress Presentation II', desc: 'Demonstration at 90% completion.', status: 'Pending' },
  { id: 'final-report', name: 'Final Report & Group Report', desc: 'Individual, group and final reports.', status: 'Pending' },
  { id: 'final-presentation', name: 'Final Presentation & Viva', desc: 'Individual viva on each member\u2019s contribution.', status: 'Pending' },
  { id: 'research-paper', name: 'Research Paper', desc: 'Contribution to existing knowledge and literature.', status: 'Pending' },
]

/* ───────── PROJECT DOCUMENTS ───────── */
export const docs = [
  { name: 'Research Paper', detail: 'IEEE Format · PDF', path: 'documents/Research Paper.pdf' },
  { name: 'TAF (Topic Assessment)', detail: 'Official Form · PDF', path: 'documents/TAF.pdf' },
  { name: 'Project Proposal', detail: 'Detailed Proposal · PDF', path: 'documents/Proposal.pdf' },
  { name: 'Proposal Presentation', detail: 'Slide Deck · PPTX', path: 'documents/Proposal Presentation.pptx' },
]

/* ───────── TEAM ───────── */
export const supervisors = [
  { name: 'Dr. Junius Anjana Vidanaralage', role: 'Primary Supervisor', dept: 'SLIIT Faculty of Computing' },
  { name: 'Ms. Thisara Shyamalee', role: 'Co-Supervisor', dept: 'SLIIT Faculty of Computing' },
]

export const team = [
  { name: 'M.A.I.D. Perera', role: 'Group Leader', comp: 'Component 1 · Blockchain Proof Layer', email: 'imeshiperera18@gmail.com' },
  { name: 'H.P.C.D.P. Patabandige', role: 'Member', comp: 'Component 2 · BOE Governance', email: 'chamodidilki44@gmail.com' },
  { name: 'W.A.N.I. Perera', role: 'Member', comp: 'Component 3 · Data Ingestion', email: 'nithika151@gmail.com' },
  { name: 'N.S.G. Perera', role: 'Member', comp: 'Component 4 · Verification', email: 'susaraperera33@gmail.com' },
]

/* ───────── REFERENCES ───────── */
export const refs = [
  'Grech & Camilleri (2017). Blockchain in Education. Publications Office of the EU.',
  'MIT Media Lab & Learning Machine. Blockcerts: The Open Standard for Blockchain Credentials.',
  'Rooksby & Dimitrov (2019). Trustless education? A blockchain system for university grades. Ubiquity, 6(1).',
  'Benet (2014). IPFS: Content Addressed, Versioned, P2P File System. arXiv:1407.3561.',
  'Merkle (1988). A Digital Signature Based on a Conventional Encryption Function. CRYPTO \u201987.',
  'Goldwasser, Micali & Rackoff (1989). The Knowledge Complexity of Interactive Proof Systems. SIAM J. Computing.',
  'NIST (2015). FIPS PUB 180-4: Secure Hash Standard.',
  'Wood (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger.',
  'Turkanović et al. (2018). EduCTX. IEEE Access, 6.',
  'Groth (2016). On the Size of Pairing-based Non-interactive Arguments. EUROCRYPT 2016.',
  'Zhao et al. (2024). A blockchain-based academic degree attestation system. IJPEDS, 39(5).',
]

/* ───────── MISC ───────── */
export const hashes = ['9f2c…a41b', 'c7d0…83e2', '5be1…f09a', 'a377…2d6c']
