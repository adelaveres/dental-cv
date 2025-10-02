import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function About(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px"});
    
    return (
        <section 
            ref={ref}
            className="flex items-center min-h-screen p-6 md:p-12 bg-gradient-to-b from-cyan-100 to-white">
            
            <div className="max-w-4xl mx-auto">

                {/* <h2 className="mb-12 text-3xl font-bold text-center">Despre mine . . .</h2> */}

                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">

                    <div className="w-auto mx-auto md:w-full md:w-1/2 md:mx-0">
                        <motion.img
                            src="/Marin_calculator_cut2.jpg"
                            alt="Technical Dentist Working"
                            className="rounded-xl sm:min-h-[350px] max-h-[400px] md:max-h-[600px] object-cover shadow-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={ isInView ? { scale: 1, opacity: 1} : {} }
                            transition={{ duration: 1.2 }}
                        />
                        
                    </div>

                    <div className="flex flex-col w-full gap-4 px-2 md:w-1/2 font-dancing">
                        <motion.p className="text-gray-600" 
                                initial={{ opacity: 0 }} 
                                animate={ isInView ? { opacity: 1 } : {}} 
                                transition={{ delay: 0.8, duration: 1 }}>
                                    Pasiunea pentru detaliu și creativitate m-au însoțit încă din liceu, unde,
                                    la Liceul de Arte Vizuale „Romulus Ladea” din Cluj-Napoca, 
                                    am dezvoltat un simț estetic rafinat și o atenție deosebită pentru forme și proporții. 
                        </motion.p>

                        <motion.p className="text-gray-600" 
                                initial={{ opacity: 0 }} 
                                animate={ isInView? { opacity: 1 } : {}} 
                                transition={{ delay: 0.8, duration: 1 }}>
                                    Această bază artistică m-a condus firesc spre domeniul tehnicii dentare, 
                                    pe care l-am aprofundat în cadrul Universității de Medicină și Farmacie „Victor Babeș” din Timișoara.
                        </motion.p>

                        <motion.p className="text-gray-600" 
                                initial={{ opacity: 0 }} 
                                animate={ isInView? { opacity: 1 } : {}} 
                                transition={{ delay: 0.8, duration: 1 }}>
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