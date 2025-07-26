import { Button } from './components/ui/button'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md border border-black/20 shadow-lg rounded-full">
        <div className="px-6 sm:px-8 relative">
          <div className="flex justify-between items-center h-14">
            {/* Left side - Features */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-black hover:text-gray-600 transition-colors font-medium">
                Features
              </a>
              <a href="#pricing" className="text-black hover:text-gray-600 transition-colors font-medium">
                Pricing
              </a>
            </div>

            {/* Center - Logo */}
            <div className="flex items-center">
              <Button variant="ghost" className="flex items-center space-x-2 text-black hover:bg-gray-100 font-semibold text-lg">
                <Github className="h-6 w-6" />
                <span>Issue Organizer</span>
              </Button>
            </div>

            {/* Right side - Dashboard & Get Started */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-black hover:bg-gray-100 font-medium">
                Dashboard
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 font-medium px-6">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-black/20 rounded-2xl shadow-lg">
              <div className="px-4 py-3 space-y-2">
                <a href="#features" className="block px-3 py-2 text-black hover:bg-gray-100 font-medium rounded-lg">
                  Features
                </a>
                <a href="#pricing" className="block px-3 py-2 text-black hover:bg-gray-100 font-medium rounded-lg">
                  Pricing
                </a>
                <a href="#dashboard" className="block px-3 py-2 text-black hover:bg-gray-100 font-medium rounded-lg">
                  Dashboard
                </a>
                <div className="px-3 py-2">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-medium rounded-lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="m-10 pt-16" style={{ height: 'calc(100dvh - 80px)' }}>
        <div className="h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Organize Your
              <br />
              <span className="block">GitHub Issues</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A minimalist tool to help you manage, prioritize, and track your GitHub issues with a clean, flat design interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg">
                Start Organizing
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                View Demo
              </Button>
            </div>

            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black">GitHub Integration</h3>
                <p className="text-gray-600">
                  Seamlessly connect with your GitHub repositories and sync all your issues in real-time.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <div className="w-6 h-6 bg-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-black">Flat Design</h3>
                <p className="text-gray-600">
                  Clean, minimalist interface with flat design principles for distraction-free productivity.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-black">Smart Organization</h3>
                <p className="text-gray-600">
                  Automatically categorize and prioritize your issues with intelligent sorting algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App