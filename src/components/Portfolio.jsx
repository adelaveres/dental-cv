import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const images = ['/portfolio1.jpeg', '/portfolio2.jpeg', '/portfolio3.jpeg']


export default function Portfolio(){
    const carouselRef = useRef(null)
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        const el = carouselRef.current
        if(!el) return
            setWidth(el.scrollWidth - el.offsetWidth)
        const onResize = ()=> setWidth(el.scrollWidth - el.offsetWidth)
        window.addEventListener('resize', onResize)
        return ()=> window.removeEventListener('resize', onResize)
    },[])


    return (
        <section id="portfolio" className="min-h-screen p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Lucrări</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">Exemple de lucrări și restaurări. Glisează sau trage pe orizontală.</p>


                <div className="overflow-hidden rounded-lg">
                    <motion.div ref={carouselRef} className="flex gap-4 cursor-grab" whileTap={{ cursor: 'grabbing' }} drag="x" dragConstraints={{ right: 0, left: -width }}>
                        {images.map((src,i)=> (
                            <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4" key={i}>
                                <img src={src} alt={`Portfolio ${i+1}`} className="w-full h-56 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Restoration {i+1}</h3>
                                    <p className="text-sm text-gray-500">Short note about the case, materials used and outcome.</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>


            </div>
        </section>
    )
}