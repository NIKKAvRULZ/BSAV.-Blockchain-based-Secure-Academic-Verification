import Navbar                  from './components/Navbar'
import Hero                    from './components/Hero'
import SystemFlowInfographic   from './components/SystemFlowInfographic'
import LiteratureSurvey        from './components/LiteratureSurvey'
import ResearchGap             from './components/ResearchGap'
import ProblemSolution         from './components/ProblemSolution'
import Objectives              from './components/Objectives'
import Methodology             from './components/Methodology'
import MerkleZkpVisualizer     from './components/MerkleZkpVisualizer'
import TechStack               from './components/TechStack'
import GitBranchesInfographic  from './components/GitBranchesInfographic'
import Milestones              from './components/Milestones'
import Downloads               from './components/Downloads'
import Team                    from './components/Team'
import References              from './components/References'
import Footer                  from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-white">
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