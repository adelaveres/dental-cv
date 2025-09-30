import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Mariș Marin – Tehnician dentar. Toate drepturile rezervate.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}