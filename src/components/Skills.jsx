import { FaCube, FaLayerGroup, FaPrint } from "react-icons/fa";
import { GiTooth, GiCrystalBars, GiMetalBar, GiCrown } from "react-icons/gi";
import { FaPen, FaPenFancy, FaPenNib } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";



const designSkills = [
  { name: "Modelaj virtual (3Shape, Exocad)", icon: <FaCube /> },
  { name: "Modelaj wax-up (digital și clasic)", icon: <FaPenNib /> },
];

const techSkills = [
    { name: "Ceramică presată E-MAX", icon: <GiTooth /> },
    { name: "Ceramică stratificată Ivoclar", icon: <GiTooth /> },
    { name: "Zirconiu", icon: <GiCrystalBars /> },
    { name: "Schelete metalice", icon: <GiMetalBar /> },
    { name: "Lucrări provizorii (PMMA)", icon: <FaLayerGroup /> },

]

const workSkills = [
    { name: "Lucrări protetice pe implanturi", icon: <GiTooth /> },
    { name: "Coroane / punți full-anatomice", icon: <GiCrown /> },
    { name: "Fațete", icon: <GiCrown /> },
    { name: "Inlay-uri și Onlay-uri", icon: <GiCrystalBars /> },
    { name: "Proteze dentare", icon: <GiTooth /> },
    { name: "Gutiere", icon: <GiTooth /> },
]

const prodSkills = [
    { name: "Frezare CNC (Imes-Icore)", icon: <GiMetalBar /> },
    { name: "Printare 3D modele", icon: <FaPrint /> },
]

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px"});
    

    return (
        <section ref={ref}
            className="flex items-center min-h-screen p-6 md:p-12 bg-gradient-to-b from-white to-cyan-50"> 
        
            <div className="w-full max-w-4xl mx-auto">
                <motion.h2 className="mb-6 text-3xl font-bold text-center"
                        initial={{ opacity: 0}}
                        animate={ isInView? { opacity: 1}: {}}
                        transition={{ delay: 0.6, duration: 1.2}}
                    >Competențe
                </motion.h2>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">

                    {/* Column 1 */}
                    <motion.div className="w-full"
                        initial={{ opacity:0 }}
                        animate={ isInView? {opacity:1} : {}}
                        transition={{delay: 1, duration: 2.2}}
                    >
                        <div className="max-w-[300px] mx-auto">
                            <h3 className="mt-8 mb-6 text-2xl font-bold">Design și Modelaj Digital</h3>
                            <div className="flex flex-col gap-6">
                                { designSkills.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="text-2xl text-brand">{s.icon}</div>
                                        <p className="text-sm">{s.name}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="mt-8 mb-6 text-2xl font-bold">Materiale și Tehnologii</h3>
                            <div className="flex flex-col gap-6">
                                { techSkills.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="text-2xl text-brand">{s.icon}</div>
                                        <p className="text-sm">{s.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div className="w-full"
                        initial={{ opacity:0 }}
                        animate={ isInView? {opacity:1} : {}}
                        transition={{ delay: 1.2, duration: 2.2}}
                    >
                        <div className="max-w-[300px] mx-auto">

                            <h3 className="mt-8 mb-6 text-2xl font-bold">Tipuri de Lucrări</h3>
                            <div className="flex flex-col gap-6">
                                { workSkills.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="text-2xl text-brand">{s.icon}</div>
                                        <p className="text-sm">{s.name}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="mt-8 mb-6 text-2xl font-bold">Tehnologii de Producție</h3>
                            <div className="flex flex-col gap-6">
                                { prodSkills.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="text-2xl text-brand">{s.icon}</div>
                                        <p className="text-sm">{s.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </motion.div>

                </div>

            
            </div>
        </section>
  );
}
