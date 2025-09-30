import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from "react-icons/fa";

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


                <div className="overflow-hidden rounded-lg p-2">
                    <motion.div ref={carouselRef} className="flex gap-4 cursor-grab" whileTap={{ cursor: 'grabbing' }} drag="x" dragConstraints={{ right: 0, left: -width }}>
                       
                        {/* {images.map((src,i)=> (
                            <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4" key={i}>
                                <img src={src} alt={`Portfolio ${i+1}`} className="w-full h-56 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Restoration {i+1}</h3>
                                    <p className="text-sm text-gray-500">Short note about the case, materials used and outcome.</p>
                                </div>
                            </motion.div>
                        ))} */}

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                
                            <div
                                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
                                // onClick={onClick}
                                >
                                <img src="modelaj_virtual_cover2.jpeg" 
                                    alt="Modelaj Virtual" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md transition duration-300 hover:grayscale" />

                                {/* Overlay + Plus */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                                    <FaPlus className="text-white text-3xl" />
                                </div>
                                
                            </div>

                                <div className="mt-3">
                                    <h3 className="font-medium">Modelaj Virtual</h3>
                                    <p className="text-sm text-gray-500">Modele virtuale realizate cu ajutorul software-ului 3SHAPE.</p>
                                </div>
                        </motion.div>

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="coroane_emax_cover_cut3.jpeg" 
                                    alt="Coroane Presate Emax" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Coroane Presate Emax</h3>
                                    <p className="text-sm text-gray-500">Realizate cu ajutorul cuptorului de presare IVOCLAR </p>
                                    <p className="text-sm text-gray-500">Programat EP 5010 și pictate cu ceramică lichidă MIYO.</p>
                                </div>
                        </motion.div>

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="ceramica_strat_cover_cut.jpeg" 
                                    alt="Ceramică Stratificată" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Ceramică Stratificată</h3>
                                    <p className="text-sm text-gray-500">Realizată prin stratificarea ceramicii IVOCLAR.</p>
                                </div>
                        </motion.div>

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="inlay_cover.jpg" 
                                    alt="Inlay-uri și Onlay-uri" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Inlay-uri și Onlay-uri</h3>
                                    <p className="text-sm text-gray-500">Realizate din ceramică presată Emax Press Multi.</p>
                                    
                                </div>
                        </motion.div>

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="lucrari_implant_cover.jpg" 
                                    alt="Lucrări Protetice pe Implanturi" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Lucrări Protetice pe Implanturi</h3>
                                    <p className="text-sm text-gray-500">Realizate din ceramică presată și zirconiu.</p>
                                    
                                </div>
                        </motion.div>


                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="modelaj_manual_cover.jpeg" 
                                    alt="Modelaj Manual" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Modelaj Manual</h3>
                                    <p className="text-sm text-gray-500">Realizate din ceară Bredent.</p>
                                    
                                </div>
                        </motion.div>

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="waxup_cover.jpeg" 
                                    alt="Waxup" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Waxup</h3>
                                    <p className="text-sm text-gray-500">Realizate manual din ceară Bredent.</p>
                                    
                                </div>
                        </motion.div>

                        <motion.div className="min-w-[80%] md:min-w-[45%] flex-shrink-0 bg-white rounded-lg shadow p-4">
                                <img src="zirconiu_cover.jpg" 
                                    alt="Zirconiu" 
                                    className="w-full max-w-sm h-64 object-cover rounded-md" />
                                <div className="mt-3">
                                    <h3 className="font-medium">Coroane și Punți Zirconiu</h3>
                                    <p className="text-sm text-gray-500">Realizate din Discuri de Zirconiu Multi, </p>
                                    <p className="text-sm text-gray-500">pictate cu ceramică lichidă MIYO.</p>
                                </div>
                        </motion.div>

                    </motion.div>
                </div>


            </div>
        </section>
    )
}