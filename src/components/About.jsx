import { motion } from 'framer-motion'

export default function About(){
    return (
        <section className="min-h-screen p-6 md:p-12 flex items-center bg-gradient-to-b from-white to-yellow-20">
            
            <div className="max-w-4xl mx-auto">

                <h2 className="text-3xl font-bold mb-12 text-center">Despre mine . . .</h2>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">

                    <div className="w-full md:w-1/2">
                        <motion.img
                            src="/dental_tech_working.webp"
                            alt="Technical Dentist Working"
                            className="w-[90%] mx-auto rounded-2xl min-h-[350px] object-cover shadow-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                        
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <motion.p className="text-gray-600" 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.2, duration: 0.8 }}>
                                    Pasiunea pentru detaliu și creativitate m-au însoțit încă din liceu, unde,
                                    la Liceul de Arte Vizuale „Romulus Ladea” din Cluj-Napoca, 
                                    am dezvoltat un simț estetic rafinat și o atenție deosebită pentru forme și proporții. 
                        </motion.p>

                        <motion.p className="text-gray-600" 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.2, duration: 0.8 }}>
                                    Această bază artistică m-a condus firesc spre domeniul tehnicii dentare, 
                                    pe care l-am aprofundat în cadrul Universității de Medicină și Farmacie „Victor Babeș” din Timișoara.
                        </motion.p>

                        <motion.p className="text-gray-600" 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.2, duration: 0.8 }}>
                                    De peste 6 ani îmbin cunoștințele teoretice cu experiența practică în laborator, 
                                    lucrând cu dedicare și pasiune la realizarea lucrărilor protetice. 
                                    În tot acest timp, am urmărit permanent să mă perfecționez și să transform fiecare proiect 
                                    într-o expresie a profesionalismului și a artei tehnicii dentare.
                        </motion.p>
                        
                    </div>
                
                </div>
                
                
            </div>
            
        </section>
    )
}