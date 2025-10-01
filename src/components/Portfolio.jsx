import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTimes } from "react-icons/fa";
import PortfolioCard from './PortfolioCard';

// const categories = {
//     modelaj: [
//         "modelaj_v_cover.jpg",
//         "modelaj_virtual_cover.jpeg",
//         "modelaj1.jpeg",
//         "modelaj2.jpeg",
//         "modelaj3.jpeg",
//         "modelaj4.jpeg",
//         "modelaj5.jpeg",
//         "modelaj6.jpeg",
//     ]
// }


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
            <div className="max-w-4xl md:max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Lucrări</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">Exemple de lucrări și restaurări. Glisează sau trage pe orizontală.</p>


                <div className="overflow-hidden rounded-lg p-2">
                    <motion.div ref={carouselRef} className="flex gap-4 cursor-grab" whileTap={{ cursor: 'grabbing' }} drag="x" dragConstraints={{ right: 0, left: -width }}>

                        {/* Portfolio Cards */}
                        <PortfolioCard
                            imgSrc="modelaj_virtual_cover2.jpeg"
                            imgTitle="Modelaj Virtual"
                            imgDescription="Modele virtuale realizate cu ajutorul software-ului 3SHAPE."
                        />

                        <PortfolioCard
                            imgSrc="coroane_emax_cover_cut3.jpeg"
                            imgTitle="Coroane Presate Emax"
                            imgDescription="Folosind cuptorul IVOCLAR EP 5010 și ceramică lichidă MIYO."
                            // imgDescription="Realizate cu ajutorul cuptorului de presare IVOCLAR Programat EP 5010 și pictate cu ceramică lichidă MIYO."
                        />

                        <PortfolioCard
                            imgSrc="ceramica_strat_cover_cut.jpeg"
                            imgTitle="Ceramică Stratificată"
                            imgDescription="Realizată prin stratificarea ceramicii IVOCLAR."
                        />


                        <PortfolioCard
                            imgSrc="inlay_cover.jpg"
                            imgTitle="Inlay-uri și Onlay-uri"
                            imgDescription="Realizate din ceramică presată Emax Press Multi."
                        />

                        <PortfolioCard
                            imgSrc="lucrari_implant_cover.jpg"
                            imgTitle="Lucrări Protetice pe Implanturi"
                            imgDescription="Realizate din ceramică presată și zirconiu."
                        />

                        <PortfolioCard
                            imgSrc="modelaj_manual_cover.jpeg"
                            imgTitle="Modelaj Manual"
                            imgDescription="Realizate din ceară Bredent."
                        />

                        <PortfolioCard
                            imgSrc="waxup_cover.jpeg"
                            imgTitle="Waxup"
                            imgDescription="Realizate manual din ceară Bredent."
                        />

                        <PortfolioCard
                            imgSrc="zirconiu_cover.jpg"
                            imgTitle="Coroane și Punți Zirconiu"
                            imgDescription="Folosind Discuri de Zirconiu Multi și ceramică lichidă MIYO."
                        />

                    </motion.div>
                </div>


            </div>
        </section>
    )
}