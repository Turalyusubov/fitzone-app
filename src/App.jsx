import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home"


function App() {

  return (
    <div className="App ">
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
