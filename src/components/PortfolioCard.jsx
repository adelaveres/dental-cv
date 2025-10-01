import { motion } from 'framer-motion'
import { FaPlus} from "react-icons/fa";


export default function PortfolioCard ({ imgSrc, imgTitle, imgDescription}){
    return (
        <motion.div className="flex-shrink-0 bg-white rounded-lg shadow p-4">
                                
            <div className="relative max-w-sm cursor-pointer overflow-hidden rounded-lg shadow-lg group"
                // onClick={onClick}
                >
                <img src={imgSrc} 
                    alt={imgTitle}
                    className="w-full h-64 object-cover rounded-md" />

                {/* Overlay + Plus */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <FaPlus className="text-white text-3xl" />
                </div>
                
            </div>

                <div className="mt-3">
                    <h3 className="font-medium">{imgTitle}</h3>
                    <p className="text-sm text-gray-500">{imgDescription}</p>
                </div>
        </motion.div>

    )
}