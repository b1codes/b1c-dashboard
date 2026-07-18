import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlassNavigation } from '@/components/spectacle/GlassNavigation'
import { GlassButton } from '@/components/spectacle/GlassButton'
import { ProjectPageRouter } from '@/pages/projects/ProjectPageRouter'

// Page placeholders — to be built out with real components
const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center p-24">
    <h1 className="text-6xl font-bold tracking-tighter text-brand-neutral">B1C Dashboard</h1>
    <p className="mt-4 text-xl text-muted-foreground">The High-Fidelity Portfolio Engine</p>
  </div>
)

const BlogIndex = () => (
  <div className="flex min-h-screen items-center justify-center">
    <h2 className="text-4xl">Dev Log</h2>
  </div>
)

const BlogPost = () => (
  <div className="flex min-h-screen items-center justify-center">
    <h2 className="text-4xl">Blog Post</h2>
  </div>
)

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-background text-brand-neutral">
        {/* Animated Background Mesh */}
        <div className="fixed inset-0 -z-10 bg-liquid-gradient opacity-30 blur-3xl" />

        <GlassNavigation>
          <div className="text-xl font-bold">B1C</div>
          <div className="flex gap-4">
            <GlassButton variant="ghost" size="sm">Projects</GlassButton>
            <GlassButton variant="ghost" size="sm">Dev Log</GlassButton>
            <GlassButton variant="primary" size="sm">Connect</GlassButton>
          </div>
        </GlassNavigation>

        <main className="container mx-auto px-4 pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectPageRouter />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
