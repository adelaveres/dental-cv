import React, { useRef, useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard';
import { motion, useInView } from 'framer-motion';
import {FaTimes} from "react-icons/fa";
import { LuMoveHorizontal } from "react-icons/lu";



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
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px"});

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
        <section ref={ref} id="portfolio" className="min-h-screen p-6 md:p-12 bg-gradient-to-b from-cyan-50 to-white">
            <div className="max-w-4xl mx-auto md:max-w-6xl">
                <motion.h2 className="mb-6 text-3xl font-bold text-center"
                    initial={{ opacity: 0}}
                    animate={ isInView? { opacity: 1}: {}}
                    transition={{ delay: 0.6, duration: 1.2}}
                    >Lucrări
                </motion.h2>
                <motion.p className="mb-2 text-sm text-center text-gray-500"
                    initial={{ opacity: 0}}
                    animate={ isInView? { opacity: 1}: {}}
                    transition={{ delay: 1, duration: 1.2}}
                >
                    Exemple de lucrări și restaurări. Glisează pe orizontală.
                </motion.p>
                
                <motion.div className="flex justify-center mt-2 mb-6 font-bold text-gray-500"
                    initial={{ opacity: 0}}
                    animate={ isInView? { opacity: 1}: {}}
                    transition={{ delay: 1, duration: 1.2}}
                >
                    <LuMoveHorizontal />
                </motion.div>

                {/* Carousel */}
                <div className="p-2 overflow-x-auto rounded-lg">
                    <div className="flex gap-4" >

                        {/* Portfolio Cards */}

                        {cards.map((card, i) => (
                            <motion.div className="flex-shrink-0 p-4 bg-white rounded-lg shadow"
                                initial={{ opacity: 0}}
                                animate={ isInView? { opacity: 1}: {}}
                                transition={{ delay: 1.2 + i/3, duration: 1.4}}
                            >
                                <PortfolioCard 
                                    key={i}
                                    imgSrc={`/galerii_foto/${card.imgSrc}`}
                                    imgTitle={card.imgTitle}
                                    imgDescription={card.imgDescription}
                                    onClick={ ()=> openModal(i) }
                                />
                            </motion.div>
                            
                        ))}

                    </div>
                </div>
            </div>

            {/* Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 z-50 flex justify-center p-4 bg-black bg-opacity-80 items-items-center">
                        <div className="relative w-full max-w-4xl p-6 rounded-lg">
                            {/* Close */}
                            <button
                                className="absolute top-0 right-0 text-gray-400 hover:text-black"
                                onClick={closeModal}
                            >
                                <FaTimes className="text-3xl" />
                            </button>

                            {/* Main Image */}
                            <div className="flex items-center justify-center max-w-4xl mb-4">
                                <img 
                                    src={activeImage} 
                                    alt={cards[activeIndex].imgTitle}
                                    className="max-h-[70vh] object-contain rounded-lg" />
                            </div>

                            {/* Thumbnails */}
                            <div className="flex justify-center gap-2 overflow-x-auto">
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