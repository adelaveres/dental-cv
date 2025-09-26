import { motion } from 'framer-motion'

export default function About(){
    return (
        <section className="min-h-screen flex justify-around items-center p-6 md:p-12 from-white to-yellow-200">
            <div className="p-12">

                <motion.img
                    src="/dental_tech_working.webp"
                    alt="Technical Dentist Working"
                    className="max-w-md rounded-2xl object-cover shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                
            </div>

            <div className="p-12 max-w-xl">
                <motion.p className="mt-3 text-gray-600" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2, duration: 0.8 }}>
                            Pasiunea pentru detaliu și creativitate m-au însoțit încă din liceu, unde,
                             la Liceul de Arte Vizuale „Romulus Ladea” din Cluj-Napoca, 
                             am dezvoltat un simț estetic rafinat și o atenție deosebită pentru forme și proporții. 
                </motion.p>

                <motion.p className="mt-3 text-gray-600" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2, duration: 0.8 }}>
                             Această bază artistică m-a condus firesc spre domeniul tehnicii dentare, 
                             pe care l-am aprofundat în cadrul Universității de Medicină și Farmacie „Victor Babeș” din Timișoara.
                </motion.p>

                <motion.p className="mt-3 text-gray-600" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2, duration: 0.8 }}>
                            De peste 6 ani îmbin cunoștințele teoretice cu experiența practică în laborator, 
                            lucrând cu dedicare și pasiune la realizarea lucrărilor protetice. 
                            În tot acest timp, am urmărit permanent să mă perfecționez și să transform fiecare proiect 
                            într-o expresie a profesionalismului și a artei tehnicii dentare.
                </motion.p>
                
            </div>
            
        </section>
    )
}