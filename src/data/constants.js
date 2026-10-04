import {
  ShieldCheck,
  EyeOff,
  Layers,
  Key,
  FileSpreadsheet,
  UserCheck,
  Shield,
  AlertTriangle,
  Database,
  Clock,
} from 'lucide-react'

/* ═════════════════════════════════════════════════════════════════════
   Everything below is checked against the research paper (398_S.pdf).
   Lines marked  TODO(verify)  come from your code or schedule, not the
   paper. I could not open the GitHub repo, so please confirm them there.
   ═════════════════════════════════════════════════════════════════════ */

/* ───────── PROJECT IDENTIFIERS ───────── */
export const PROJECT_ID = 'R26-SE-011'
export const PAPER_TITLE = 'Blockchain-Based Transparent and Secure Academic Grading Using Decentralized Verification'
// Original team repo (no .git so the link opens the page). Swap for your fork if you prefer.
export const REPO = 'https://github.com/NIKKAvRULZ/R26-SE-011'
export const FORK_REPO = 'https://github.com/imeshiperera12/R26-SE-011'

/* ───────── ABSTRACT, KEYWORDS, CONTRIBUTIONS (paper §Abstract, §1) ───────── */
export const abstract =
  'Academic result systems usually depend on centralized databases and manual verification, which leaves room for unauthorized changes, falsified results and slow checks by third parties. This research presents a four-component framework that splits the result life cycle into controlled ingestion and provenance (Component 3), academic governance with Board of Examiners (BOE) review, version tracking and finalization (Component 2), cryptographic anchoring with Merkle Trees, IPFS and smart contracts (Component 1), and independent claim verification with Zero-Knowledge Proofs (Component 4). A research prototype using a Hardhat EVM, MongoDB Atlas and Pinata IPFS shows the four components working end to end, keeping integrity across the blockchain, IPFS dataset, record hashes and proof index without revealing raw grades.'

export const keywords = ['Academic Result Verification', 'Blockchain', 'Merkle Tree', 'SHA-256', 'Zero-Knowledge Proof', 'Academic Governance', 'Data Integrity', 'Decentralized Verification']

export const contributions = [
  'A full four-component result lifecycle covering ingestion, governance, proof creation and verification',
  'A controlled correction process that clearly separates editable results from finalized results',
  'A cryptographic proof layer combining SHA-256, Merkle Trees, IPFS and blockchain anchoring',
  'A proof index linking candidate and module information to the matching cryptographic evidence',
  'A privacy-preserving verification layer using Zero-Knowledge Proofs and cross-layer validation across the blockchain anchor, IPFS data, record hashes, Merkle proofs and the proof index',
]

/* ───────── HERO METRICS (only claims the paper supports) ───────── */
export const metricsStats = [
  { value: '4', label: 'Connected Components', sub: 'Ingestion, BOE, Proof, Verification', icon: Layers },
  { value: 'SHA-256', label: 'Tamper-Evident Records', sub: 'Merkle Root anchored on an EVM smart contract', icon: ShieldCheck },
  { value: 'PDPA', label: 'PII Removed at Ingestion', sub: 'Names, emails and phone numbers stripped', icon: EyeOff },
  { value: 'Groth16', label: 'Claim-Level Verification', sub: 'Zero-Knowledge Proof, raw grades not revealed', icon: Key },
]

/* ───────── LIFECYCLE ───────── */
export const lifecycle = ['Component 3', 'Component 2', 'Component 1', 'Component 4']
export const governancePrinciple = ['Review', 'Concerns', 'Finalization', 'Cryptographic Anchoring']
export const trustChain = ['Provenance', 'Governance', 'Integrity', 'Storage', 'Blockchain Anchor', 'Privacy-Preserving Verification']
export const roleSeparation = [
  { tech: 'IPFS', job: 'stores the proof dataset' },
  { tech: 'MongoDB', job: 'finds the proof' },
  { tech: 'Blockchain', job: 'anchors the proof' },
]

/* ───────── SYSTEM COMPONENTS (Methodology) ───────── */
export const comps = [
  {
    n: 3, key: 'c3',
    name: 'Data Ingestion (Silent Bridge)', // TODO(verify): "Silent Bridge" comes from your repo branch name
    role: 'Provenance & Policy Gate',
    icon: FileSpreadsheet, color: 'emerald',
    blurb: 'The starting point for result files. Lecturer sheets are parsed, stripped of personal data, checked for duplicates, recorded in a private chained ledger, and handed to the BOE. It does not anchor anything on the blockchain.',
    items: [
      'React/Vite portal where lecturers drag and drop Excel or CSV sheets',
      'SheetJS parser finds the Candidate ID and assessment columns in any layout',
      'Columns sorted alphabetically so hashing is deterministic',
      'PII (names, emails, phone numbers) stripped for PDPA compliance',
      'SHA-256 payload hash rejects duplicate files and prevents database bloat',
      'Verified data stored in a MongoDB Atlas private ledger as chained blocks (Block #0, #1 …)',
      'Deep-patching engine applies candidate-specific grade appeals without erasing the class record',
      'Time-gated policy engine enforces the Standard Window, BOE Lock and Special Concerns phases',
      'Background watcher and direct override API hand clean data to the Board of Examiners',
    ],
  },
  {
    n: 2, key: 'c2',
    name: 'BOE Review & Governance',
    role: 'Academic Moderation & Audit',
    icon: UserCheck, color: 'amber',
    blurb: 'Authorized Board of Examiners members review results, make controlled corrections with reasons, and finalize them. Normal review is separated from the special-concern stage, so nothing is anchored while change is still expected.',
    items: [
      'Authenticated, module-based review and candidate search',
      'Controlled result revision with automatic grade calculation',
      'Correction reasons, revision history and version tracking',
      'Separate special-concern period before finalization',
      'Review period with expiry, shown as 7 days in Fig. 1', // TODO(verify): your earlier text said "2-Week"; make paper, figure and site agree
      'SHA-256 hash generated for every finalized record, then sent with the records to Component 1',
    ],
  },
  {
    n: 1, key: 'c1',
    name: 'Blockchain Proof Layer',
    role: 'Merkle, IPFS & Smart Contract',
    icon: Shield, color: 'blue',
    blurb: 'Takes finalized records and their hashes from Component 2, re-validates them, builds a Merkle Tree, stores the proof dataset on IPFS, and anchors the Merkle Root and IPFS CID with the ProofStorage smart contract.',
    items: [
      'Rebuilds each record as candidate | moduleCode | marks | grade | version and re-computes its SHA-256 hash',
      'A hash mismatch means the record does not match the expected representation, so it is rejected',
      'Binary Merkle Tree and Merkle Root give one compact commitment for the whole batch',
      'Finalized proof dataset uploaded to IPFS through Pinata, identified by its CID',
      'ProofStorage Solidity contract records Merkle Root, IPFS CID, timestamp and uploader address',
      'Contract refuses to anchor a Merkle Root that is already anchored',
      'MongoDB proof index maps Candidate ID + Module Code to Merkle Root + IPFS CID',
    ],
  },
  {
    n: 4, key: 'c4',
    name: 'External Verification Gateway',
    role: 'Privacy-Preserving ZKP',
    icon: Key, color: 'purple',
    blurb: 'Lets an external verifier (employer, university) check one claim: candidate, module and claimed grade. It never creates or changes results and relies only on the evidence produced by Component 1.',
    items: [
      'Requests the candidate and module proof context from Component 1',
      'Checks the blockchain anchor and the IPFS dataset',
      'Regenerates the record hash and verifies Merkle membership',
      'Groth16 Zero-Knowledge Proof bound to candidate, module, claimed grade and Merkle Root, so a proof cannot be reused for a different claim',
      'Returns VALID or INVALID',
      'Certora formal verification of the smart contract as an extra security check',
    ],
  },
]

/* Component 1 processing flow (paper §4) */
export const componentOneStages = [
  'Receive finalized records',
  'Validate hashes',
  'Create the Merkle Root',
  'Store the dataset on IPFS',
  'Anchor the proof on the blockchain',
  'Build the proof lookup index',
]

/* Component 4 verification flow (paper §8). Good fit for an interactive stepper. */
export const verifySteps = [
  { title: 'Claim', desc: 'Verifier submits Candidate ID, Module Code and the claimed grade.' },
  { title: 'Proof context', desc: 'Component 1 returns the Merkle Root and IPFS CID from the proof index.' },
  { title: 'Blockchain anchor', desc: 'The Merkle Root and CID are checked against the ProofStorage contract.' },
  { title: 'IPFS dataset', desc: 'The finalized proof dataset is fetched and compared with the anchor.' },
  { title: 'SHA-256 hash', desc: 'The record hash is regenerated from the claim.' },
  { title: 'Merkle membership', desc: 'The record is shown to belong to the anchored Merkle Root.' },
  { title: 'ZKP verification', desc: 'A Groth16 proof confirms the claim without revealing raw grades.' },
  { title: 'Result', desc: 'VALID or INVALID.' },
]

export const apiEndpoint = 'GET /proof/record/{candidateId}/{moduleCode}'

/* ───────── RESEARCH GAP (paper §3.1) ───────── */
export const researchQuestion =
  'How can an academic result be transformed from an initial submission into an officially finalized result and independently verified without relying solely on the issuing institution?'

export const gapSummary =
  'Existing work tackles one piece at a time: storing records on a blockchain, issuing digital credentials, decentralized storage, or privacy-aware verification. None of them secures the whole lifecycle from ingestion to verification.'

export const gaps = [
  { title: 'Pieces, Not the Whole Lifecycle', desc: 'Blockchain storage, digital credentials, decentralized storage and privacy-aware verification are each studied separately, with no end-to-end flow.', icon: Layers },
  { title: 'Governance Is Missing', desc: 'Related systems do not cover BOE review, controlled corrections, special concerns and finalization before a result is recorded.', icon: Clock },
  { title: 'Storage Is Not Verification', desc: 'Decentralized storage alone gives no workflow to confirm that a specific result is genuine, and full datasets do not belong on a blockchain.', icon: Database },
  { title: 'Dependence on the Institution', desc: 'Third parties still have to contact the issuing institution or trust its central system, which is slow and manual.', icon: AlertTriangle },
]

/* ───────── RESEARCH OBJECTIVES (paper §3.2) ───────── */
export const mainObjective =
  'To develop an integrated academic result lifecycle that turns initial result submissions into finalized results that can be cryptographically verified, with controlled academic corrections and privacy-preserving third-party verification.'

export const objectives = [
  'Implement controlled ingestion of results',
  'Allow BOE review and correction',
  'Maintain revision and audit information',
  'Process special concerns before finalization, then generate cryptographic proofs',
  'Store finalized proof data on IPFS',
  'Anchor cryptographic proof information on the blockchain',
  'Provide efficient proof lookup using candidate and module information',
  'Allow independent verification of academic claims',
  'Minimize data disclosure during verification',
]

/* ───────── RELATED LITERATURE (paper §2) ───────── */
export const related = [
  { title: 'Blockchain in Education', desc: 'Grech & Camilleri discussed blockchain for education records and credential management.' },
  { title: 'Blockcerts', desc: 'Showed how digital credentials can be issued on a blockchain as machine-verifiable certificates.' },
  { title: 'Trustless Education', desc: 'Rooksby & Dimitrov explored blockchain-based university grading and its link to institutional practice.' },
  { title: 'EduCTX', desc: 'A blockchain framework to manage and port higher-education credits.' },
  { title: 'Degree Attestation Registries', desc: 'Zhao et al. studied higher-education registries using blockchain and smart contracts.' },
  { title: 'IPFS & Zero-Knowledge Proofs', desc: 'IPFS offers content-addressed off-chain storage for larger datasets, and ZKPs prove statements without disclosing the underlying data.' },
]
export const relatedConclusion =
  'These approaches show promise, but none forms a complete process from ingestion through BOE review, controlled correction, finalization, cryptographic anchoring and privacy-preserving verification.'

/* ───────── TECHNOLOGY STACK ───────── */
export const stack = [
  { name: 'React + Vite', category: 'Lecturer & Verifier Portals' },
  { name: 'SheetJS (xlsx)', category: 'Schema-Agnostic Parser' },
  { name: 'Node.js Express', category: 'Middleware & Policy Engine' }, // TODO(verify): not mentioned in the paper
  { name: 'MongoDB Atlas', category: 'Private Ledger & Proof Index' },
  { name: 'Solidity', category: 'ProofStorage Contract' },
  { name: 'Hardhat EVM', category: 'Local Prototype Blockchain' },
  { name: 'IPFS (Pinata)', category: 'Proof Dataset Storage' },
  { name: 'SHA-256', category: 'Record Integrity' },
  { name: 'Merkle Trees', category: 'Batch Integrity & Membership' },
  { name: 'Groth16 ZKP', category: 'Privacy-Preserving Verification' },
  { name: 'Certora', category: 'Smart Contract Formal Verification' },
  { name: 'Railway / Render', category: 'Cloud Deployment (Fig. 1)' },
  { name: 'JWT + SSO/RBAC', category: 'Security Layer (Fig. 1)' },
]

/* ───────── SECURITY MODEL (paper Table 1) ───────── */
export const securityLayers = [
  { layer: 'SHA-256', purpose: 'Record integrity' },
  { layer: 'Merkle Tree', purpose: 'Batch integrity and membership' },
  { layer: 'IPFS', purpose: 'Finalized proof dataset storage' },
  { layer: 'Blockchain', purpose: 'Trusted cryptographic anchor' },
  { layer: 'ZKP', purpose: 'Privacy-preserving verification' },
  { layer: 'BOE workflow', purpose: 'Academic governance' },
  { layer: 'Audit / versioning', purpose: 'Traceability' },
]

/* ───────── EVALUATION (paper §10) ───────── */
export const evaluationNote =
  'The prototype was evaluated with component-level and integration testing to check that the complete verification process works. No performance or timing results are reported yet.'
export const evaluationTests = [
  'Finalized result transfer from Component 2',
  'SHA-256 hash validation',
  'Merkle Root generation',
  'IPFS upload and retrieval',
  'Blockchain proof anchoring',
  'Prevention of duplicate anchors',
  'Proof index creation',
  'Latest proof retrieval',
  'Historical proof retrieval',
  'Data integrity verification',
  'Component 4 proof lookup',
]
export const integrityChecks = ['Blockchain proof', 'IPFS dataset', 'SHA-256 hashes', 'Merkle Root', 'MongoDB proof index']
export const integrityNote =
  'For a valid finalized dataset every check passes. If a stored record changes, its SHA-256 hash changes, the Merkle Root changes, and the system detects it.'

/* ───────── NOVELTY, LIMITATIONS, FUTURE WORK (paper §12, §10.3, §13) ───────── */
export const novelties = [
  'Controlled academic result review',
  'Version-based corrections and special-case handling',
  'SHA-256 hash validation',
  'Merkle-based batch verification',
  'IPFS for proof storage',
  'Blockchain anchoring of the Merkle Root and IPFS CID',
  'Proof-based result verification',
  'Privacy-preserving verification',
]
export const noveltyStatement =
  'Results are reviewed and finalized before any proof is created, so the system joins academic management, data integrity and secure verification in one process rather than only recording grades on a blockchain.'

export const limitations = [
  { title: 'Local blockchain', desc: 'The prototype runs on a local Hardhat EVM, so on-chain data is not permanent. Restarting the network can reset its state.' },
  { title: 'Public IPFS', desc: 'Proof data is stored on public IPFS. Real academic data needs encryption or private storage first.' },
]
export const futureWork = [
  'Move from local Hardhat to a permanent blockchain network',
  'Improve privacy for academic data storage',
  'Test with larger and more varied datasets',
  'Expand formal verification of the smart contract',
  'Improve secure and efficient IPFS proof retrieval',
  'Test with anonymized university data',
  'Improve verification of historical proofs from different finalized batches',
  'Add stronger access control, key management, monitoring and governance',
]

/* ───────── GIT BRANCHES ───────── */
// TODO(verify): confirm each branch name and description against the repo
export const gitBranches = [
  { branch: 'feature/component-01-hashing', module: 'Component 1', desc: 'Core SHA-256 data hashing & payload verification' },
  { branch: 'feature/component-01-merkle-tree', module: 'Component 1', desc: 'Binary Merkle Tree construction & Root calculation' },
  { branch: 'feature/component-01-ipfs', module: 'Component 1', desc: 'Pinata IPFS dataset pinning & CID management' },
  { branch: 'feature/component-02-audit-version', module: 'Component 2', desc: 'BOE moderation history, versioning & audit logs' },
  { branch: 'feature/component-02-deadline-hash', module: 'Component 2', desc: 'Finalization window & hash generation on expiry' },
  { branch: 'feature/component-03-extraction-engine', module: 'Component 3', desc: 'SheetJS LMS rubric parser & PII stripper' },
  { branch: 'component-03-silent-bridge', module: 'Component 3', desc: 'Dynamic policy engine, time-gates & mock backend' },
  { branch: 'component4-zkp-formal-verification', module: 'Component 4', desc: 'Groth16 Zero-Knowledge Proof verifier & Certora rules' },
]

/* ───────── PROJECT MILESTONES ───────── */
// TODO(verify): placeholders. Replace with your real schedule, dates, marks and status.
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
// TODO(verify): add the real files under public/documents/
export const docs = [
  { name: 'Research Paper', detail: 'IEEE Format · PDF', path: 'documents/Research Paper.pdf' },
  { name: 'TAF (Topic Assessment)', detail: 'Official Form · PDF', path: 'documents/TAF.pdf' },
  { name: 'Project Proposal', detail: 'Detailed Proposal · PDF', path: 'documents/Proposal.pdf' },
  { name: 'Proposal Presentation', detail: 'Slide Deck · PPTX', path: 'documents/Proposal Presentation.pptx' },
]

/* ───────── TEAM ───────── */
// TODO(verify): supervisor names and which member owns which component
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

/* ───────── REFERENCES (match the paper's numbering) ───────── */
export const refs = [
  'Grech & Camilleri (2017). Blockchain in Education. Publications Office of the EU.',
  'MIT Media Lab & Learning Machine. Blockcerts: The Open Standard for Blockchain Credentials.',
  'Rooksby & Dimitrov (2019). Trustless education? A blockchain system for university grades. Ubiquity, 6(1), 83\u201388.',
  'Benet (2014). IPFS: Content Addressed, Versioned, P2P File System. arXiv:1407.3561.',
  'Merkle (1988). A Digital Signature Based on a Conventional Encryption Function. CRYPTO \u201987, LNCS 293, 369\u2013378.',
  'Goldwasser, Micali & Rackoff (1989). The Knowledge Complexity of Interactive Proof Systems. SIAM J. Computing, 18(1), 186\u2013208.',
  'NIST (2015). FIPS PUB 180-4: Secure Hash Standard (SHS).',
  'Wood (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Yellow Paper, 151, 1\u201332.',
  'Turkanovi\u0107 et al. (2018). EduCTX: A Blockchain-Based Higher Education Credit Platform. IEEE Access, 6, 5112\u20135127.',
  'Groth (2016). On the Size of Pairing-based Non-interactive Arguments. EUROCRYPT 2016, LNCS 9666, 305\u2013326.',
  'Zhao et al. (2024). A blockchain-based academic degree attestation system. IJPEDS, 39(5), 557\u2013571.',
]

/* ───────── MISC ───────── */
export const hashes = ['9f2c…a41b', 'c7d0…83e2', '5be1…f09a', 'a377…2d6c']