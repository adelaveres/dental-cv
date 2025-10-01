import React, { useRef, useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion'
import {FaTimes} from "react-icons/fa";


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

// Define portfolio cards data
const cards = [
    {
      imgSrc: "modelaj_virtual_cover2.jpeg",
      imgTitle: "Modelaj Virtual",
      imgDescription: "Modele virtuale realizate cu ajutorul software-ului 3SHAPE."
    },
    {
      imgSrc: "coroane_emax_cover_cut3.jpeg",
      imgTitle: "Coroane Presate Emax",
      imgDescription: "Folosind cuptorul IVOCLAR EP 5010 și ceramică lichidă MIYO."
    },
    {
      imgSrc: "ceramica_strat_cover_cut.jpeg",
      imgTitle: "Ceramică Stratificată",
      imgDescription: "Realizată prin stratificarea ceramicii IVOCLAR."
    },
    {
      imgSrc: "inlay_cover.jpg",
      imgTitle: "Inlay-uri și Onlay-uri",
      imgDescription: "Realizate din ceramică presată Emax Press Multi."
    },
    {
      imgSrc: "lucrari_implant_cover.jpg",
      imgTitle: "Lucrări Protetice pe Implanturi",
      imgDescription: "Realizate din ceramică presată și zirconiu."
    },
    {
      imgSrc: "modelaj_manual_cover.jpeg",
      imgTitle: "Modelaj Manual",
      imgDescription: "Realizate din ceară Bredent."
    },
    {
      imgSrc: "waxup_cover.jpeg",
      imgTitle: "Waxup",
      imgDescription: "Realizate manual din ceară Bredent."
    },
    {
      imgSrc: "zirconiu_cover.jpg",
      imgTitle: "Coroane și Punți Zirconiu",
      imgDescription: "Folosind Discuri de Zirconiu Multi și ceramică lichidă MIYO."
    }
  ];


export default function Portfolio(){
    const carouselRef = useRef(null)
    const [width, setWidth] = useState(0)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    // Carousel width setup
    useEffect(()=>{
        const el = carouselRef.current
        if(!el) return
        setWidth(el.scrollWidth - el.offsetWidth)
        const onResize = ()=> setWidth(el.scrollWidth - el.offsetWidth)
        window.addEventListener('resize', onResize)
        return ()=> window.removeEventListener('resize', onResize)
    },[])

    const openModal = (index) => {
        setActiveIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };



    return (
        <section id="portfolio" className="min-h-screen p-6 md:p-12">
            <div className="max-w-4xl md:max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Lucrări</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Exemple de lucrări și restaurări. Glisează sau trage pe orizontală.
                </p>

                {/* Carousel */}
                <div className="overflow-hidden rounded-lg p-2">
                    <motion.div 
                        ref={carouselRef} 
                        className="flex gap-4 cursor-grab" 
                        whileTap={{ cursor: 'grabbing' }} 
                        drag="x" 
                        dragConstraints={{ right: 0, left: -width }}>

                        {/* Portfolio Cards */}

                        {cards.map((card, i) => (
                            <PortfolioCard 
                                key={i}
                                imgSrc={card.imgSrc}
                                imgTitle={card.imgTitle}
                                imgDescription={card.imgDescription}
                                onClick={ ()=>openModal(i) }
                            />
                        ))}

                    </motion.div>
                </div>
            </div>

            {/* Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-items-center justify-center z-50 p-4">
                        <div className="relative max-w-4xl w-full rounded-lg p-6">
                            {/* Close */}
                            <button
                                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                                onClick={closeModal}
                            >
                                <FaTimes className="text-2xl" />
                            </button>

                            {/* Main Image */}
                            <div className="flex justify-center items-center max-w-4xl mb-4">
                                <img 
                                    src={cards[activeIndex].imgSrc} 
                                    alt={cards[activeIndex].imgTitle}
                                    className="max-h-[70vh] object-contain rounded-lg" />
                            </div>

                            {/* Thumbnails */}
                            {/* <div className="flex gap-2 justify-center overflow-x-auto">
                                {
                                    cards.map((card, i)=>(
                                        <img
                                            key={} 
                                            src="" alt="" />
                                    ))
                                }
                            </div> */}

                        </div>
                    </div>
                )
            }

        </section>
    )
}