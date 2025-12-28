import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import About from '../About/About'
import SkillsSection from '../Skills/SkillSection'
import CertificatesSection from '../Certificates/Certificates'
import ProjectsSection from '../Projects/Projrcts'
import ProjectShow from '../../Components/ProjectShow/ProjectShow'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <SkillsSection />
            <CertificatesSection />
            <ProjectShow />
            {/* <ProjectsSection /> */}
        </div>
    )
}

export default Home