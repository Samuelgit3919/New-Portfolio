import React from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    // <Header />
    // <Hero />

  )
}

export default App
