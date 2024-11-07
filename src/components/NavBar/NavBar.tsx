import React from "react";
import s from './NavBar.module.css'
import Github from '../../assets/icone/github.240x256.png'
import Instagram from '../../assets/icone/instagram.256x256.png'
import Home from '../../assets/icone/home.256x235.png'
import About from '../../assets/icone/about.256x256.png'
import Services from '../../assets/icone/design-services.256x256.png'
import Contact from '../../assets/icone/contacts-line.256x245.png'
import Avatar from '../../assets/Avatar/Avatar_backGround.jpeg'

const NavBar: React.FC = ()=> {
    return(
        <>
            <div className="flex justify-between items-center flex-row m-2">
                
                <div className="flex flex-row justify-center items-center gap-2">
                    <div className="bg-zinc-700 p-0.5 rounded-full w-20 h-22 hover:bg-gray-400 transition duration-200 ease-in-out">
                        <img src={Avatar} alt="Moi" className="w-20 h-20 rounded-full mr-3" />
                    </div>
                    <div className={`${s.liNav} flex flex-row justify-center items-center gap-1 relative overflow-hidden px-2 py-1 font-bold text-base cursor-pointer`}>
                        <img src={Github} alt="icone Github" className="w-5 h-5" />
                        <span>Github</span>
                    </div>
                    <div className={`${s.liNav} flex flex-row justify-center items-center gap-1 relative overflow-hidden px-2 py-1 font-bold text-base cursor-pointer`}>
                        <img src={Instagram} alt="icone Instagram" className="w-5 h-5" />
                        <span>Instagram</span>
                    </div>
                </div>

                <ul className="flex items-center gap-4 list-none p-0 mr-4 font-bold text-base">
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <img src={Home} alt="icone Home" className="w-5 h-5" />
                        <span>Home</span>
                    </li>
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <img src={About} alt="icone About" className="w-5 h-5" />
                        <span>About</span>
                    </li>
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <img src={Services} alt="icone services" className="w-5 h-5" />
                        <span>Services</span>
                    </li>
                    <li className={`${s.liNav} px-2 py-1 flex flex-row gap-1 cursor-pointer relative overflow-hidden`}>
                        <img src={Contact} alt="icone Contact" className="w-5 h-5" />
                        <span>Contact Me</span>
                    </li>
                    <li>
                        <button className="border-2 border-zinc-800 py-1 px-2 text-white bg-neutral-800 hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">Get a consultation</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar