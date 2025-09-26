import React from 'react'
import { useSwipeable } from 'react-swipeable'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){
    // handlers scroll by viewport height (works because each section is min-h-screen)
    const handlers = useSwipeable({
        onSwipedUp: () => 
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }),
        onSwipedDown: () => 
            window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' }),
        trackTouch: true,
    })


return (
    <div {...handlers} className="font-sans">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
)
}