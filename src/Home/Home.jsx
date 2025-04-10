import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import ProjectCard from '../Components/ProjectCard'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <ProjectCard />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
