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

/* ───────── PROJECT IDENTIFIERS ───────── */
export const PROJECT_ID = 'R26-SE-011'
export const PAPER_TITLE = 'Blockchain-Based Transparent and Secure Academic Grading Using Decentralized Verification'
export const REPO = 'https://github.com/NIKKAvRULZ/R26-SE-011'
export const FORK_REPO = 'https://github.com/imeshiperera12/R26-SE-011'

/* ───────── CONFERENCE ACCEPTANCE ───────── */
export const conference = {
  name: 'ICDMIS',
  fullName: 'International Conference on Data Mining and Information Security',
  url: 'https://icdmis.ikrf.in/',
  status: 'Accepted & Peer-Reviewed',
  badge: 'Accepted at ICDMIS',
}

/* ───────── ABSTRACT, KEYWORDS, CONTRIBUTIONS ───────── */
export const abstract =
  'Academic result systems usually depend on centralized databases and manual verification, which leaves room for unauthorized changes, falsified results and slow checks by third parties[cite: 1, 10]. This research presents a four-component framework that splits the result life cycle into controlled ingestion and provenance (Component 3), academic governance with Board of Examiners (BOE) review, version tracking and finalization (Component 2), cryptographic anchoring with Merkle Trees, IPFS and smart contracts (Component 1), and independent claim verification with Zero-Knowledge Proofs (Component 4)[cite: 1, 10]. A research prototype using a Hardhat EVM, MongoDB Atlas and Pinata IPFS shows the four components working end to end, keeping integrity across the blockchain, IPFS dataset, record hashes and proof index without revealing raw grades[cite: 1, 10].'

export const keywords = [
  'Academic Result Verification',
  'Blockchain',
  'Merkle Tree',
  'SHA-256',
  'Zero-Knowledge Proof',
  'Academic Governance',
  'Data Integrity',
  'Decentralized Verification',
]

export const contributions = [
  'A full four-component result lifecycle covering ingestion, governance, proof creation and verification[cite: 1, 11].',
  'A controlled correction process that clearly separates editable results from finalized results[cite: 11].',
  'A cryptographic proof layer combining SHA-256, Merkle Trees, IPFS and blockchain anchoring[cite: 1, 11].',
  'A proof index linking candidate and module information to the matching cryptographic evidence[cite: 1, 12].',
  'A privacy-preserving verification layer using Zero-Knowledge Proofs and cross-layer validation across the blockchain anchor, IPFS data, record hashes, Merkle proofs and the proof index[cite: 1, 12].',
]

/* ───────── HERO METRICS ───────── */
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
    name: 'Data Ingestion (Silent Bridge)',
    role: 'Provenance & Policy Gate',
    icon: FileSpreadsheet, color: 'emerald',
    blurb: 'The starting point for result files. Lecturer sheets are parsed, stripped of personal data, checked for duplicates, recorded in a private chained ledger, and handed to the BOE. It does not anchor anything on the blockchain[cite: 1, 15, 16].',
    items: [
      'React/Vite portal where lecturers drag and drop Excel or CSV sheets[cite: 1, 15]',
      'SheetJS parser finds the Candidate ID and assessment columns in any layout[cite: 1, 15]',
      'Columns sorted alphabetically so hashing is deterministic[cite: 15]',
      'PII (names, emails, phone numbers) stripped for PDPA compliance[cite: 1, 15]',
      'SHA-256 payload hash rejects duplicate files and prevents database bloat[cite: 1, 15]',
      'Verified data stored in a MongoDB Atlas private ledger as chained blocks (Block #0, #1 …)[cite: 1, 15]',
      'Deep-patching engine applies candidate-specific grade appeals without erasing the class record[cite: 1, 15]',
      'Time-gated policy engine enforces the Standard Window, BOE Lock and Special Concerns phases[cite: 1, 15]',
      'Background watcher and direct override API hand clean data to the Board of Examiners[cite: 15]',
    ],
  },
  {
    n: 2, key: 'c2',
    name: 'BOE Review & Governance',
    role: 'Academic Moderation & Audit',
    icon: UserCheck, color: 'amber',
    blurb: 'Authorized Board of Examiners members review results, make controlled corrections with reasons, and finalize them. Normal review is separated from the special-concern stage, so nothing is anchored while change is still expected[cite: 1, 16].',
    items: [
      'Authenticated, module-based review and candidate search[cite: 1, 16]',
      'Controlled result revision with automatic grade calculation[cite: 1, 16]',
      'Correction reasons, revision history and version tracking[cite: 1, 16]',
      'Separate special-concern period before finalization[cite: 16]',
      'Review period with expiry, shown as 7 days in the research paper[cite: 14]',
      'SHA-256 hash generated for every finalized record, then sent with the records to Component 1[cite: 17]',
    ],
  },
  {
    n: 1, key: 'c1',
    name: 'Blockchain Proof Layer',
    role: 'Merkle, IPFS & Smart Contract',
    icon: Shield, color: 'blue',
    blurb: 'Takes finalized records and their hashes from Component 2, re-validates them, builds a Merkle Tree, stores the proof dataset on IPFS, and anchors the Merkle Root and IPFS CID with the ProofStorage smart contract[cite: 1, 17, 18].',
    items: [
      'Rebuilds each record as candidate | moduleCode | marks | grade | version and re-computes its SHA-256 hash[cite: 17]',
      'A hash mismatch means the record does not match the expected representation, so it is rejected[cite: 17]',
      'Binary Merkle Tree and Merkle Root give one compact commitment for the whole batch[cite: 1, 17]',
      'Finalized proof dataset uploaded to IPFS through Pinata, identified by its CID[cite: 1, 17]',
      'ProofStorage Solidity contract records Merkle Root, IPFS CID, timestamp and uploader address[cite: 1, 18]',
      'Contract refuses to anchor a Merkle Root that is already anchored[cite: 1, 18]',
      'MongoDB proof index maps Candidate ID + Module Code to Merkle Root + IPFS CID[cite: 1, 18]',
    ],
  },
  {
    n: 4, key: 'c4',
    name: 'External Verification Gateway',
    role: 'Privacy-Preserving ZKP',
    icon: Key, color: 'purple',
    blurb: 'Lets an external verifier (employer, university) check one claim: candidate, module and claimed grade. It never creates or changes results and relies only on the evidence produced by Component 1[cite: 1, 19, 20].',
    items: [
      'Requests the candidate and module proof context from Component 1[cite: 16, 20]',
      'Checks the blockchain anchor and the IPFS dataset[cite: 16, 20]',
      'Regenerates the record hash and verifies Merkle membership[cite: 1, 16, 20]',
      'Groth16 Zero-Knowledge Proof bound to candidate, module, claimed grade and Merkle Root, so a proof cannot be reused for a different claim[cite: 1, 20]',
      'Returns VALID or INVALID confirmation[cite: 1, 20]',
      'Certora formal verification of the smart contract as an extra security check[cite: 1, 20]',
    ],
  },
]

/* Component 4 verification flow */
export const verifySteps = [
  { title: 'Claim', desc: 'Verifier submits Candidate ID, Module Code and the claimed grade[cite: 20].' },
  { title: 'Proof context', desc: 'Component 1 returns the Merkle Root and IPFS CID from the proof index[cite: 19, 20].' },
  { title: 'Blockchain anchor', desc: 'The Merkle Root and CID are checked against the ProofStorage contract[cite: 18, 20].' },
  { title: 'IPFS dataset', desc: 'The finalized proof dataset is fetched and compared with the anchor[cite: 20].' },
  { title: 'SHA-256 hash', desc: 'The record hash is regenerated from the claim[cite: 20].' },
  { title: 'Merkle membership', desc: 'The record is shown to belong to the anchored Merkle Root[cite: 20].' },
  { title: 'ZKP verification', desc: 'A Groth16 proof confirms the claim without revealing raw grades[cite: 1, 20].' },
  { title: 'Result', desc: 'VALID or INVALID mathematical confirmation[cite: 1, 20].' },
]

export const apiEndpoint = 'GET /proof/record/{candidateId}/{moduleCode}'

/* ───────── RESEARCH GAP ───────── */
export const researchQuestion =
  'How can an academic result be transformed from an initial submission into an officially finalized result and independently verified without relying solely on the issuing institution?[cite: 13]'

export const gapSummary =
  'Existing work tackles one piece at a time: storing records on a blockchain, issuing digital credentials, decentralized storage, or privacy-aware verification[cite: 13]. None of them secures the whole lifecycle from ingestion to verification[cite: 13].'

export const gaps = [
  { title: 'Pieces, Not the Whole Lifecycle', desc: 'Blockchain storage, digital credentials, decentralized storage and privacy-aware verification are each studied separately, with no end-to-end flow[cite: 13].', icon: Layers },
  { title: 'Governance Is Missing', desc: 'Related systems do not cover BOE review, controlled corrections, special concerns and finalization before a result is recorded[cite: 12, 13].', icon: Clock },
  { title: 'Storage Is Not Verification', desc: 'Decentralized storage alone gives no workflow to confirm that a specific result is genuine, and full datasets do not belong on a blockchain[cite: 11, 13].', icon: Database },
  { title: 'Dependence on the Institution', desc: 'Third parties still have to contact the issuing institution or trust its central system, which is slow and manual[cite: 11, 13].', icon: AlertTriangle },
]

/* ───────── RESEARCH OBJECTIVES ───────── */
export const mainObjective =
  'To develop an integrated academic result lifecycle that turns initial result submissions into finalized results that can be cryptographically verified, with controlled academic corrections and privacy-preserving third-party verification[cite: 13].'

export const objectives = [
  'Implement controlled ingestion of results[cite: 13]',
  'Allow BOE review and correction[cite: 13]',
  'Maintain revision and audit information[cite: 13]',
  'Process special concerns before finalization, then generate cryptographic proofs[cite: 13]',
  'Store finalized proof data on IPFS[cite: 13]',
  'Anchor cryptographic proof information on the blockchain[cite: 13]',
  'Provide efficient proof lookup using candidate and module information[cite: 13]',
  'Allow independent verification of academic claims[cite: 13]',
  'Minimize data disclosure during verification[cite: 13]',
]

/* ───────── RELATED LITERATURE ───────── */
export const related = [
  { title: 'Blockchain in Education', desc: 'Grech & Camilleri discussed blockchain for education records and credential management[cite: 1, 12].' },
  { title: 'Blockcerts', desc: 'Showed how digital credentials can be issued on a blockchain as machine-verifiable certificates[cite: 1, 12].' },
  { title: 'Trustless Education', desc: 'Rooksby & Dimitrov explored blockchain-based university grading and its link to institutional practice[cite: 1, 12].' },
  { title: 'EduCTX', desc: 'A blockchain framework to manage and port higher-education credits[cite: 1, 12].' },
  { title: 'Degree Attestation Registries', desc: 'Zhao et al. studied higher-education registries using blockchain and smart contracts[cite: 1, 12].' },
  { title: 'IPFS & Zero-Knowledge Proofs', desc: 'IPFS offers content-addressed off-chain storage for larger datasets, and ZKPs prove statements without disclosing the underlying data[cite: 1, 12].' },
]
export const relatedConclusion =
  'These approaches show promise, but none forms a complete process from ingestion through BOE review, controlled correction, finalization, cryptographic anchoring and privacy-preserving verification[cite: 1, 12].'

/* ───────── TECHNOLOGY STACK ───────── */
export const stack = [
  { name: 'React + Vite', category: 'Lecturer & Verifier Portals' },
  { name: 'SheetJS (xlsx)', category: 'Schema-Agnostic Parser' },
  { name: 'Node.js Express', category: 'Middleware & Policy Engine' },
  { name: 'MongoDB Atlas', category: 'Private Ledger & Proof Index' },
  { name: 'Solidity', category: 'ProofStorage Contract' },
  { name: 'Hardhat EVM', category: 'Local Prototype Blockchain' },
  { name: 'IPFS (Pinata)', category: 'Proof Dataset Storage' },
  { name: 'SHA-256', category: 'Record Integrity' },
  { name: 'Merkle Trees', category: 'Batch Integrity & Membership' },
  { name: 'Groth16 ZKP', category: 'Privacy-Preserving Verification' },
  { name: 'Certora', category: 'Smart Contract Formal Verification' },
  { name: 'Railway / Render', category: 'Cloud Deployment' },
  { name: 'JWT + SSO/RBAC', category: 'Security Layer' },
]

/* ───────── SECURITY MODEL ───────── */
export const securityLayers = [
  { layer: 'SHA-256', purpose: 'Record integrity[cite: 20]' },
  { layer: 'Merkle Tree', purpose: 'Batch integrity and membership[cite: 20]' },
  { layer: 'IPFS', purpose: 'Finalized proof dataset storage[cite: 20]' },
  { layer: 'Blockchain', purpose: 'Trusted cryptographic anchor[cite: 20]' },
  { layer: 'ZKP', purpose: 'Privacy-preserving verification[cite: 20]' },
  { layer: 'BOE workflow', purpose: 'Academic governance[cite: 20]' },
  { layer: 'Audit / versioning', purpose: 'Traceability[cite: 20]' },
]

/* ───────── EVALUATION ───────── */
export const evaluationNote =
  'The prototype was evaluated with component-level and integration testing to check that the complete verification process works[cite: 21].'
export const evaluationTests = [
  'Finalized result transfer from Component 2[cite: 21]',
  'SHA-256 hash validation[cite: 21]',
  'Merkle Root generation[cite: 21]',
  'IPFS upload and retrieval[cite: 21]',
  'Blockchain proof anchoring[cite: 21]',
  'Prevention of duplicate anchors[cite: 21]',
  'Proof index creation[cite: 21]',
  'Latest proof retrieval[cite: 21]',
  'Historical proof retrieval[cite: 21]',
  'Data integrity verification[cite: 21]',
  'Component 4 proof lookup[cite: 21]',
]

export const limitations = [
  { title: 'Local blockchain', desc: 'The prototype runs on a local Hardhat EVM, so on-chain data is not permanent[cite: 18, 22]. Restarting the network can reset its state[cite: 22].' },
  { title: 'Public IPFS', desc: 'Proof data is stored on public IPFS[cite: 18, 22]. Real academic data needs encryption or private storage first[cite: 18, 22].' },
]

/* ───────── REPO BRANCHES ───────── */
export const gitBranches = [
  {
    branch: 'feature/component-01-blockchain-anchoring',
    module: 'Component 1',
    desc: 'ProofStorage Solidity contract deployment & Merkle Root blockchain anchoring[cite: 54]',
  },
  {
    branch: 'feature/component-01-ipfs',
    module: 'Component 1',
    desc: 'Pinata IPFS dataset pinning & Content Identifier (CID) management[cite: 54]',
  },
  {
    branch: 'feature/component-01-index-storage',
    module: 'Component 1',
    desc: 'MongoDB proof index mapping Candidate ID and Module Code to CID and Root[cite: 54]',
  },
  {
    branch: 'feature/component-02-special-concern',
    module: 'Component 2',
    desc: 'Separate review window for handling special concern cases prior to finalization[cite: 54]',
  },
  {
    branch: 'feature/component-02-integration',
    module: 'Component 2',
    desc: 'Integration pipeline transferring moderated records and hashes to Component 1[cite: 54]',
  },
  {
    branch: 'feature/component-02-authentication',
    module: 'Component 2',
    desc: 'Role-based access control and authenticated moderation portal for BOE examiners[cite: 54]',
  },
  {
    branch: 'component-03-silent-bridge',
    module: 'Component 3',
    desc: 'Core dynamic policy engine, LMS extraction, and PII stripping pipeline[cite: 54]',
  },
  {
    branch: 'component-03-silent-bridge-V2',
    module: 'Component 3',
    desc: 'Enhanced Silent Bridge engine with context-aware routing for grade appeals[cite: 54]',
  },
  {
    branch: 'component4-zkp-formal-verification',
    module: 'Component 4',
    desc: 'Groth16 Zero-Knowledge Proof verifier circuits & Certora formal contract verification[cite: 54]',
  },
  {
    branch: 'Comp-3-2-1-Merge-V2',
    module: 'Integration',
    desc: 'Pipeline synchronization combining Ingestion, BOE Governance, and Proof anchoring[cite: 54]',
  },
  {
    branch: 'Comp3-Comp2-merge',
    module: 'Integration',
    desc: 'Handshake between Silent Bridge private ledger and BOE review windows[cite: 54]',
  },
  {
    branch: 'comp-3-2-1-merge',
    module: 'Integration',
    desc: 'Preliminary multi-component merge tracking end-to-end data flow[cite: 54]',
  },
]

/* ───────── PROJECT MILESTONES (Updated with Conference Acceptance) ───────── */
export const milestones = [
  { id: 'taf-submission', name: 'TAF Submission', desc: 'Topic Assessment Form submitted for approval of the research topic[cite: 1, 49].', status: 'Completed' },
  { id: 'project-charter', name: 'Project Charter', desc: 'Scope, objectives and team roles defined[cite: 1, 49].', status: 'Completed' },
  { id: 'proposal-document', name: 'Proposal Document', desc: 'Project proposal submitted to the supervisor[cite: 1, 49].', status: 'Completed' },
  { id: 'proposal-presentation', name: 'Proposal Presentation', desc: 'Proposal presented for academic approval[cite: 1, 49].', status: 'Completed' },
  { id: 'research-paper', name: 'Research Paper Acceptance (ICDMIS)', desc: 'Peer-reviewed research paper officially accepted at ICDMIS.', status: 'Completed' },
  { id: 'progress-presentation-i', name: 'Progress Presentation I', desc: 'Review at 50% completion[cite: 1, 49].', status: 'Completed' },
  { id: 'progress-presentation-ii', name: 'Progress Presentation II', desc: 'Demonstration at 90% completion[cite: 1, 49].', status: 'Pending' },
  { id: 'final-report', name: 'Final Report & Group Report', desc: 'Individual, group and final reports[cite: 1, 49].', status: 'Pending' },
  { id: 'final-presentation', name: 'Final Presentation & Viva', desc: 'Individual viva on each member’s contribution[cite: 1, 49].', status: 'Pending' },
]

/* ───────── PROJECT DOCUMENTS ───────── */
export const docs = [
  { 
    name: 'Research Paper', 
    detail: 'ICDMIS Accepted · IEEE Format · PDF', 
    path: '/documents/Research Paper.pdf',
    filename: 'Research Paper.pdf'
  },
  { 
    name: 'TAF (Topic Assessment)', 
    detail: 'Official Form · PDF', 
    path: '/documents/TAF.pdf',
    filename: 'TAF.pdf'
  },
  { 
    name: 'Project Proposal', 
    detail: 'Detailed Proposal · PDF', 
    path: '/documents/Proposal.pdf',
    filename: 'Proposal.pdf'
  },
  { 
    name: 'Proposal Presentation', 
    detail: 'Slide Deck · PPTX', 
    path: '/documents/Proposal Presentation.pptx',
    filename: 'Proposal Presentation.pptx'
  },
]


/* ───────── SUPERVISORS ───────── */
export const supervisors = [
  {
    name: 'Dr. Junius Anjana Vidanaralage',
    role: 'SUPERVISOR',
    image: '/team/supervisor1.jpg',
    linkedin: 'https://www.linkedin.com/in/vidanaralage/',
  },
  {
    name: 'Ms. Thisara Shyamalee',
    role: 'CO-SUPERVISOR',
    image: '/team/supervisor2.jpg',
    linkedin: 'https://www.linkedin.com/in/thisara-shyamalee-8b5877193/',
  },
]

/* ───────── TEAM MEMBERS ───────── */
export const team = [
  {
    name: 'M.A.I.D. Perera',
    isLeader: true,
    image: '/team/member1.jpg',
    linkedin: 'https://linkedin.com',
    email: 'imeshiperera18@gmail.com',
  },
  {
    name: 'H.P.C.D.P. Patabandige',
    isLeader: false,
    image: '/team/member2.png',
    linkedin: 'https://linkedin.com',
    email: 'chamodidilki44@gmail.com',
  },
  {
    name: 'W.A.N.I. Perera',
    isLeader: false,
    image: '/team/member3.png',
    linkedin: 'https://www.linkedin.com/in/nithika-perera-519197254',
    email: 'nithika151@gmail.com',
  },
  {
    name: 'N.S.G. Perera',
    isLeader: false,
    image: '/team/member4.png',
    linkedin: 'https://linkedin.com',
    email: 'susaraperera33@gmail.com',
  },
]

/* ───────── REFERENCES ───────── */
export const refs = [
  'Grech & Camilleri (2017). Blockchain in Education. Publications Office of the EU[cite: 1, 24].',
  'MIT Media Lab & Learning Machine. Blockcerts: The Open Standard for Blockchain Credentials[cite: 1, 24].',
  'Rooksby & Dimitrov (2019). Trustless education? A blockchain system for university grades. Ubiquity, 6(1), 83–88[cite: 1, 24].',
  'Benet (2014). IPFS: Content Addressed, Versioned, P2P File System. arXiv:1407.3561[cite: 1, 24].',
  'Merkle (1988). A Digital Signature Based on a Conventional Encryption Function. CRYPTO ’87, LNCS 293, 369–378[cite: 1, 24].',
  'Goldwasser, Micali & Rackoff (1989). The Knowledge Complexity of Interactive Proof Systems. SIAM J. Computing, 18(1), 186–208[cite: 1, 24].',
  'NIST (2015). FIPS PUB 180-4: Secure Hash Standard (SHS)[cite: 1, 24].',
  'Wood (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Yellow Paper, 151, 1–32[cite: 1, 24].',
  'Turkanović et al. (2018). EduCTX: A Blockchain-Based Higher Education Credit Platform. IEEE Access, 6, 5112–5127[cite: 1, 24].',
  'Groth (2016). On the Size of Pairing-based Non-interactive Arguments. EUROCRYPT 2016, LNCS 9666, 305–326[cite: 1, 24].',
  'Zhao et al. (2024). A blockchain-based academic degree attestation system. IJPEDS, 39(5), 557–571[cite: 1, 24].',
]