import React from "react";
import { House,SearchSlash,Receipt,ContactRound } from "lucide-react";
import s from './NavBar.module.css'

const NavBar: React.FC = ()=> {
    return(
        <>
            <div className="flex flex-row  m-3">
                <ul className="flex items-center gap-5 list-none p-0 m-0 font-bold text-base">
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <House strokeWidth={3} size={22} color="black"/>
                        <span>Home</span>
                    </li>
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <SearchSlash strokeWidth={3} size={22} color="black"/>
                        <span>About</span>
                    </li>
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <Receipt strokeWidth={3} size={22} color="black"/>
                        <span>Services</span>
                    </li>
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <ContactRound strokeWidth={3} size={22} color="black"/>
                        <span>Contact Me</span>
                    </li>
                    <li>
                        <button className="border-2 border-black py-1 px-2 text-white bg-zinc-800">Get a consultation</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar