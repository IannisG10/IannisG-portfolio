import React from "react";
import { Download } from "lucide-react";
import s from '../Header/Header.module.css'

interface menuProps{
    openMenu: boolean
    
}

const SideBar: React.FC<menuProps> = ({openMenu})=>{
    return(
        <div className={`flex justify-stretch flex-col items-center rounded-sm bg-purple-200 w-1/2 h-1/3 absolute top-12 right-2 ${openMenu ? "block ":"hidden "} `}>   
            <ul className="flex flex-col justify-center gap-5 items-center text-sm cursor-pointer py-5">
                <li className={`text-black`}>Home</li>
                <li className={`text-black`}>About</li>
                <li className={`text-black`}>Contact</li>
                <li>
                    <button className={`${s.btn} flex justify-between md:gap-1 md:text-base text-xs items-center border border-white p-2 hover:text-blue-800 bg-white tracking-wider md:block md:w-1/2 transition-all duration-150 ease-in-out rounded-xl`}>
                        <Download size={16}/>
                            Download my CV
                    </button>
                </li>
            </ul>
        </div>
    )
}
export default SideBar