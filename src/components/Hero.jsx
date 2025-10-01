import React from 'react'
import { motion } from 'framer-motion'



export default function Hero(){
    return (
        <section className="min-h-screen flex items-center p-6 md:p-12 bg-gradient-to-b from-white to-cyan-100">
            <div className="max-w-xl mx-auto text-center">

                <motion.img
                    src="/ImagineCV_Marin_cut.jpeg"
                    alt="Profile Photo"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1 className="mt-6 text-2xl md:text-4xl font-bold" 
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

                <div className="mt-6 flex justify-center gap-3">
                    <a href="/Marin_Maris_CV_2025_RO.pdf" className="px-4 py-2 rounded-md border border-gray-400">Descarcă CV</a>
                    <a href="#portfolio" className="px-4 py-2 rounded-md bg-brand text-white drop-shadow-lg">Vezi lucrări</a>
                </div>

                <p className="mt-5 text-xs text-gray-400">Glisează în sus pentru mai multe</p>

            </div>
        </section>
)
}