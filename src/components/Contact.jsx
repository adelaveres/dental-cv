import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function Contact(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px"});

    return (
        <section ref={ref} id="contact" className="flex items-center min-h-screen px-6 py-16 bg-gradient-to-b from-white to-cyan-100">
            <div className="w-full max-w-4xl mx-auto mb-10">
                <motion.h2 className="mb-16 text-3xl font-bold text-center"
                    initial={{ opacity: 0 }} 
                    animate={ isInView ? { opacity: 1 } : {}} 
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Contact
                    </motion.h2>

                <div className="grid gap-10 md:grid-cols-2">

                    {/* Left: Contact Info */}
                    <motion.div className="space-y-6"
                        initial={{ opacity: 0 }} 
                        animate={ isInView ? { opacity: 1 } : {}} 
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <p className="text-gray-600">
                         Dacă doriți să aflați mai multe sau să colaborăm, 
                         mă puteți contacta folosind detaliile de mai jos 
                         sau formularul alăturat.
                        </p>

                        <div className="flex items-center gap-3 text-gray-800">
                            <FaEnvelope className="text-xl text-cyan-400" />
                            <span>marynmarysz@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-800">
                            <FaPhone className="text-xl text-cyan-400" />
                            <span>+40 757 387 157</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-800">
                            <FaMapMarkerAlt className="text-xl text-cyan-400" />
                            <span>Cluj-Napoca, Cluj, România</span>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.form className="p-6 space-y-4 bg-white shadow rounded-xl"
                        initial={{ opacity: 0 }} 
                        animate={ isInView ? { opacity: 1 } : {}} 
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <input
                            type="text"
                            placeholder="Nume"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:outline-none"
                        />
                        <textarea
                            placeholder="Mesaj"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold text-gray-700 transition rounded-lg shadow bg-brand hover:bg-brand-dark"
                        >
                        Trimite
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}