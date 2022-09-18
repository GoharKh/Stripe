import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </ErrorBoundary>
  )
}

export default App