import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px"});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" or "error"

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
    
        emailjs
          .sendForm(
            "service_e5steqm",
            "template_m2pua2d",
            formRef.current,
            "ldnDQ1u_Elz7PlHq0"
          )
          .then(
            (result) => {
              console.log("Email sent:", result.text);
              setStatus("success");
              formRef.current.reset(); // Clear form
              setLoading(false);
            },
            (error) => {
              console.log("Email error:", error.text);
              setStatus("error");
              setLoading(false);
            }
          );
      };

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
                    <motion.form 
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="p-6 space-y-4 bg-white shadow rounded-xl"
                        initial={{ opacity: 0 }} 
                        animate={ isInView ? { opacity: 1 } : {}} 
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Nume"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Mesaj"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:outline-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-4 py-2 font-semibold text-gray-700 transition rounded-lg shadow bg-brand hover:bg-brand-dark ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                        >
                            {loading ? "Se trimite..." : "Trimite"}
                        </button>

                        {/* Inline Notification */}
                        {status == "success" && (
                            <p className="mt-2 font-medium text-center text-cyan-400">
                                Mesajul a fost trimis cu succes!
                            </p>
                        )}
                        {status == "error" && (
                            <p className="mt-2 font-medium text-red-600">
                                A apărut o eroare. Te rog încearcă din nou.
                          </p>
                        )}
                        
                    </motion.form>
                </div>
            </div>
        </section>
    )
}