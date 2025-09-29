import { FaCube, FaLayerGroup, FaPrint } from "react-icons/fa";
import { GiTooth, GiCrystalBars, GiMetalBar, GiCrown } from "react-icons/gi";
import { FaPen, FaPenFancy, FaPenNib } from "react-icons/fa";


const designSkills = [
  { name: "Modelaj virtual (3Shape, Exocad)", icon: <FaCube /> },
  { name: "Modelaj wax-up (digital și clasic)", icon: <FaPenNib /> },
];

const techSkills = [
    { name: "Ceramică presată E-MAX", icon: <GiTooth /> },
    { name: "Ceramică stratificată Ivoclar", icon: <GiTooth /> },
    { name: "Zirconiu", icon: <GiCrystalBars /> },
    { name: "Schelete metalice", icon: <GiMetalBar /> },
    { name: "Lucrări provizorii (PMMA)", icon: <FaLayerGroup /> },

]

const workSkills = [
    { name: "Lucrări protetice pe implanturi", icon: <GiTooth /> },
    { name: "Coroane / punți full-anatomice", icon: <GiCrown /> },
    { name: "Fațete", icon: <GiCrown /> },
    { name: "Inlay-uri și Onlay-uri", icon: <GiCrystalBars /> },
    { name: "Proteze dentare", icon: <GiTooth /> },
    { name: "Gutiere", icon: <GiTooth /> },
]

const prodSkills = [
    { name: "Frezare CNC (Imes-Icore)", icon: <GiMetalBar /> },
    { name: "Printare 3D modele", icon: <FaPrint /> },
]

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center p-6 md:p-12 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Competențe</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            <div className="w-full"> {/* Column 1 */}
                <div className="max-w-[300px] mx-auto">
                    <h3 className="text-2xl font-bold mt-8 mb-6">Design și Modelaj Digital</h3>
                    <div className="flex flex-col gap-6">
                        { designSkills.map((s, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="text-brand text-2xl">{s.icon}</div>
                                <p className="text-sm">{s.name}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-6">Materiale și Tehnologii</h3>
                    <div className="flex flex-col gap-6">
                        { techSkills.map((s, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="text-brand text-2xl">{s.icon}</div>
                                <p className="text-sm">{s.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full"> {/* Column 2 */}
                <div className="max-w-[300px] mx-auto">

                    <h3 className="text-2xl font-bold mt-8 mb-6">Tipuri de Lucrări</h3>
                    <div className="flex flex-col gap-6">
                        { workSkills.map((s, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="text-brand text-2xl">{s.icon}</div>
                                <p className="text-sm">{s.name}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-6">Tehnologii de Producție</h3>
                    <div className="flex flex-col gap-6">
                        { prodSkills.map((s, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="text-brand text-2xl">{s.icon}</div>
                                <p className="text-sm">{s.name}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </div>

       
      </div>
    </section>
  );
}
