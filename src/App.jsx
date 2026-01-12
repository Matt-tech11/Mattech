import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CaseStudies from './pages/CaseStudies'
import RequestProject from './pages/RequestProject'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/casestudies" element={<CaseStudies/>} />
        <Route path="/requestproject" element={<RequestProject/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
