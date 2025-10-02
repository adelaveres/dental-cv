import { motion } from 'framer-motion'
import { FaPlus} from "react-icons/fa";


export default function PortfolioCard ({ imgSrc, imgTitle, imgDescription, onClick}){
    return (
        <div >

            {/* Photo + Overlay group */}
            <div className="relative max-w-sm overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={onClick}
                >
                <img src={imgSrc} 
                    alt={imgTitle}
                    className="object-cover w-full h-64 rounded-md" />

                {/* Overlay + Plus */}
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                    <FaPlus className="text-3xl text-white" />
                </div>
                
            </div>

            <div className="mt-3">
                <h3 className="font-medium">{imgTitle}</h3>
                <p className="text-sm text-gray-500">{imgDescription}</p>
            </div>
        </div>

    )
}