import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from 'react';

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home"


function App() {
  return (
    <div className="App bg-yellow-50 text-stone-800 scroll-smooth">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
