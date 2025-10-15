import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-gray-300 bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-6xl gap-4 px-6 mx-auto text-center md:flex-row">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Mariș Marin – Tehnician dentar. Toate drepturile rezervate.
        </p>

        {/* Right: Social Links */}
        {/* <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaLinkedin />
          </a>
        </div> */}
      </div>
    </footer>
  );
}