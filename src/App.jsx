import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

export default App