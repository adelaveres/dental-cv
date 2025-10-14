import React from 'react'
import { useSwipeable } from 'react-swipeable'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){

return (
    <div className="font-sans">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
)
}