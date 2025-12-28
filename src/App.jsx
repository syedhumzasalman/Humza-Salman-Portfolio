import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import About from './Pages/About/About'
import SkillsSection from './Pages/Skills/SkillSection.jsx'
import CertificatesSection from './Pages/Certificates/Certificates.jsx'
import ProjectsSection from './Pages/Projects/Projrcts.jsx'
import ContactSection from './Pages/Contact/Contact.jsx'



function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<SkillsSection />} />
        <Route path='/certificate' element={<CertificatesSection />} />
        <Route path='/project' element={<ProjectsSection />} />
        <Route path='/contact' element={<ContactSection />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
