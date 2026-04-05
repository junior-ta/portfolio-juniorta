// ============================================================
// APP.JSX — Root with routing (paging)
// ============================================================
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import LifeDiary from './pages/LifeDiary'
import Publications from './pages/Publications'

export default function App() {
  return (
    <BrowserRouter>
      {/* This is the top Navigation bar*/}
      <Navbar />

      {/* Page content — swap out pages here */}
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/life-diary" element={<LifeDiary />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>

      {/* Footer is shared across all pages too */}
      <Footer />
    </BrowserRouter>
  )
}
