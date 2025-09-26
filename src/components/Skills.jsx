import { FaCube, FaLayerGroup, FaPrint } from "react-icons/fa";
import { GiTooth, GiCrystalBars, GiMetalBar, GiCrown } from "react-icons/gi";
import { FaPen, FaPenFancy, FaPenNib } from "react-icons/fa";


const skills = [
  { name: "Modelaj virtual (3Shape, Exocad)", icon: <FaCube /> },
  { name: "Ceramică presată E-MAX", icon: <GiTooth /> },
  { name: "Lucrări protetice pe implanturi", icon: <GiTooth /> },
  { name: "Zirconiu", icon: <GiCrystalBars /> },
  { name: "Lucrări provizorii (PMMA)", icon: <FaLayerGroup /> },
  { name: "Ceramică stratificată Ivoclar", icon: <GiTooth /> },
  { name: "Schelete metalice", icon: <GiMetalBar /> },
  { name: "Modelaj wax-up (digital și clasic)", icon: <FaPenNib /> },
  { name: "Proteze dentare", icon: <GiTooth /> },
  { name: "Gutiere", icon: <GiTooth /> },
  { name: "Fațete", icon: <GiCrown /> },
  { name: "Inlay-uri și Onlay-uri", icon: <GiCrystalBars /> },
  { name: "Frezare CNC (Imes-Icore)", icon: <GiMetalBar /> },
  { name: "Printare 3D modele", icon: <FaPrint /> },
  { name: "Coroane / punți full-anatomice", icon: <GiCrown /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen p-6 md:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Competențe</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              <div className="text-brand text-4xl mb-3">{s.icon}</div>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
