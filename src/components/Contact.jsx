import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(){
    return (
        <section id="contact" className="min-h-screen flex items-center bg-gradient-to-b from-white to-cyan-100 px-6 py-16">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Left: Contact Info */}
                    <div className="space-y-6">
                        <p className="text-gray-600">
                         Dacă doriți să aflați mai multe sau să colaborăm, 
                         mă puteți contacta folosind detaliile de mai jos 
                         sau formularul alăturat.
                        </p>

                        <div className="flex items-center gap-3 text-gray-800">
                            <FaEnvelope className="text-cyan-400 text-xl" />
                            <span>marynmarysz@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-800">
                            <FaPhone className="text-cyan-400 text-xl" />
                            <span>+40 757 387 157</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-800">
                            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                            <span>Cluj-Napoca, Cluj, România</span>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form className="bg-white p-6 rounded-xl shadow space-y-4">
                        <input
                            type="text"
                            placeholder="Nume"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
                        />
                        <textarea
                            placeholder="Mesaj"
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-brand text-gray-700 font-semibold py-2 px-4 rounded-lg shadow hover:bg-brand-dark transition"
                        >
                        Trimite
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}