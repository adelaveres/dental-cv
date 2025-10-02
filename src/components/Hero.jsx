import React from 'react'
import { motion } from 'framer-motion'



export default function Hero(){
    return (
        <section className="flex items-center min-h-screen p-6 md:p-12 bg-gradient-to-b from-white to-cyan-100">
            <div className="max-w-xl mx-auto text-center">

                <motion.img
                    src="/ImagineCV_Marin_cut.jpeg"
                    alt="Profile Photo"
                    className="object-cover w-48 h-48 mx-auto rounded-full shadow-lg md:w-64 md:h-64"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1 className="mt-6 text-2xl font-bold md:text-4xl" 
                        initial={{ y: 8, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.2, duration: 0.8 }}>
                            Mariș Marin — Tehnician Dentar
                </motion.h1>

                <motion.p className="mt-3 text-gray-600" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2, duration: 0.8 }}>
                            Specialist în protetice și restaurări dentare. Finețe la detalii și 6+ ani experiență în laborator.
                </motion.p>

                <div className="flex justify-center gap-3 mt-6">
                    <a href="/Marin_Maris_CV_2025_RO.pdf" className="px-4 py-2 font-semibold text-white transition duration-300 transform rounded-md bg-cyan-700 drop-shadow-lg hover:bg-cyan-800 hover:scale-105 hover:drop-shadow-xl"
                        style={{
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
                        }}
                    >
                        Descarcă CV
                    </a>
                    <a href="#portfolio" className="px-4 py-2 font-semibold transition duration-300 transform border border-gray-400 rounded-md text-cyan-700 drop-shadow-lg hover:bg-cyan-100 hover:text-cyan-800 hover:scale-105 hover:drop-shadow-md"
                        style={{
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
                        }}
                    >
                        Vezi lucrări
                    </a>
                    
                </div>

                <p className="mt-5 text-xs text-gray-400">Glisează în sus pentru mai multe</p>

            </div>
        </section>
)
}