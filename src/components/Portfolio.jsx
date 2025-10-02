import React, { useRef, useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion'
import {FaTimes} from "react-icons/fa";


const categories = {
    modelaj_virtual: [
        "modelaj_virtual_cover2.jpeg",
        "modelaj_v_cover.jpg",
        "modelaj_virtual_cover.jpeg",
        "modelaj1.jpeg",
        "modelaj2.jpeg",
        "modelaj3.jpeg",
        "modelaj4.jpeg",
        "modelaj5.jpeg",
        "modelaj6.jpeg",
    ],
    emax: [
        "coroane_emax_cover_cut3.jpeg",
        "Emax1.jpg",
        "Emax2.jpg",
        "Emax3.jpg",
        "Emax4.jpg",
        "Emax5.jpeg",
    ],
    ceramica_stratificata: [ "ceramica_strat_cover_cut.jpeg","ceramica1.jpg", "ceramica2.jpeg"],
    inlay_onlay: [ "inlay_cover.jpg","inlay_onlay1.jpg", "inlay_onlay3.jpg", "inlay_onlay2.jpg"],
    implanturi: [ "lucrari_implant_cover.jpg","implanturi1.jpg", "lucrari_implanturi.jpeg", "implanturi2.jpg"],
    modelaj_manual: [ "modelaj_manual_cover.jpeg","manual1.jpeg", "manual2.jpg"],
    waxup: [ "waxup_cover.jpeg","waxup1.jpeg", "waxup2.jpg", "waxup3.jpg", "waxup4.jpg", "waxup5.jpg"],
    zirconiu: [ "zirconiu_cover.jpg","zirconiu1.jpg" ]
}

// Define portfolio cards data
const cards = [
    {
      imgSrc: "modelaj_virtual_cover2.jpeg",
      imgTitle: "Modelaj Virtual",
      imgDescription: "Modele virtuale realizate cu ajutorul software-ului 3SHAPE.",
      category: "modelaj_virtual"
    },
    {
      imgSrc: "coroane_emax_cover_cut3.jpeg",
      imgTitle: "Coroane Presate Emax",
      imgDescription: "Folosind cuptorul IVOCLAR EP 5010 și ceramică lichidă MIYO.",
      category: "emax"
    },
    {
      imgSrc: "ceramica_strat_cover_cut.jpeg",
      imgTitle: "Ceramică Stratificată",
      imgDescription: "Realizată prin stratificarea ceramicii IVOCLAR.",
      category: "ceramica_stratificata"
    },
    {
      imgSrc: "inlay_cover.jpg",
      imgTitle: "Inlay-uri și Onlay-uri",
      imgDescription: "Realizate din ceramică presată Emax Press Multi.",
      category: "inlay_onlay"
    },
    {
      imgSrc: "lucrari_implant_cover.jpg",
      imgTitle: "Lucrări Protetice pe Implanturi",
      imgDescription: "Realizate din ceramică presată și zirconiu.",
      category:  "implanturi"
    },
    {
      imgSrc: "modelaj_manual_cover.jpeg",
      imgTitle: "Modelaj Manual",
      imgDescription: "Realizate din ceară Bredent.",
      category: "modelaj_manual"
    },
    {
      imgSrc: "waxup_cover.jpeg",
      imgTitle: "Waxup",
      imgDescription: "Realizate manual din ceară Bredent.",
      category: "waxup"
    },
    {
      imgSrc: "zirconiu_cover.jpg",
      imgTitle: "Coroane și Punți Zirconiu",
      imgDescription: "Folosind Discuri de Zirconiu Multi și ceramică lichidă MIYO.",
      category: "zirconiu"

    }
  ];


export default function Portfolio(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("");
    const [activeImage, setActiveImage] = useState("");

    const openModal = (index) => {
        const selectedCategory = cards[index].category;
        const selectedImage = `/galerii_foto/${cards[index].imgSrc}`;
        
        setActiveIndex(index);
        setActiveImage(selectedImage);
        setActiveCategory(selectedCategory);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const prevImage = () => {
    //     setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    // };

    // const nextImage = () => {
    //     setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    // };


    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen || !activeCategory) return;
        
            const thumbs = categories[activeCategory];
            if (!thumbs) return;
      
            // Build full paths for comparison
            const thumbPaths = thumbs.map((t) => `/galerii_foto/${activeCategory}/${t}`);
            const currentIndex = thumbPaths.indexOf(activeImage);
            if (currentIndex === -1) return;
      
            if (e.key === "ArrowRight") {
                const nextIndex = (currentIndex + 1) % thumbPaths.length;
                setActiveImage(thumbPaths[nextIndex]);
              } else if (e.key === "ArrowLeft") {
                const prevIndex = (currentIndex - 1 + thumbPaths.length) % thumbPaths.length;
                setActiveImage(thumbPaths[prevIndex]);
              }
            };
        
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }, [isModalOpen, activeCategory, activeImage]);


    return (
        <section id="portfolio" className="min-h-screen p-6 md:p-12 bg-gradient-to-b from-cyan-50 to-white">
            <div className="max-w-4xl md:max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Lucrări</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Exemple de lucrări și restaurări. Glisează pe orizontală.
                </p>

                {/* Carousel */}
                <div className="overflow-x-auto rounded-lg p-2">
                    <div className="flex gap-4" >

                        {/* Portfolio Cards */}

                        {cards.map((card, i) => (
                            <PortfolioCard 
                                key={i}
                                imgSrc={`/galerii_foto/${card.imgSrc}`}
                                imgTitle={card.imgTitle}
                                imgDescription={card.imgDescription}
                                onClick={ ()=> openModal(i) }
                            />
                            
                        ))}

                    </div>
                </div>
            </div>

            {/* Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-items-center justify-center z-50 p-4">
                        <div className="relative max-w-4xl w-full rounded-lg p-6">
                            {/* Close */}
                            <button
                                className="absolute top-0 right-0 text-gray-400 hover:text-black"
                                onClick={closeModal}
                            >
                                <FaTimes className="text-3xl" />
                            </button>

                            {/* Main Image */}
                            <div className="flex justify-center items-center max-w-4xl mb-4">
                                <img 
                                    src={activeImage} 
                                    alt={cards[activeIndex].imgTitle}
                                    className="max-h-[70vh] object-contain rounded-lg" />
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-2 justify-center overflow-x-auto">
                                {
                                    categories[activeCategory].map((thumb, i)=>(
                                        <img
                                            key={i} 
                                            src={`/galerii_foto/${activeCategory}/${thumb}`}
                                            alt={`Exemplu${i} de ${activeCategory} `} 
                                            onClick={() => {setActiveImage(`/galerii_foto/${activeCategory}/${thumb}`)}}
                                            className={`w-24 h-16 object-cover rounded-md cursor-pointer transition 
                                                    ${activeImage === `/galerii_foto/${activeCategory}/${thumb}` ?
                                                     "ring-4 ring-yellow-400" : "opacity-70 hover:opacity-100"}`}
                                            />

                                    ))
                                }
                            </div>

                        </div>
                    </div>
                )
            }

        </section>
    )
}