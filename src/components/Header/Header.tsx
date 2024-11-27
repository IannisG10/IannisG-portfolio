import React, {useState} from "react";
import s from "./Header.module.css"
import avatar from "../../assets/Avatar/Avatar.png"
import { Download } from "lucide-react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IconContext } from "react-icons";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import SideBar from "../ResponsiveMenu/SideBar";

const Header: React.FC = () => {

    const [openMenu,setOpenMenu] = useState<boolean>(false)

    const handleOpenMenu = ()=>{
        setOpenMenu(!openMenu)
    }

    return(
        <header className={`${s.BgIMG} relative`}>
            <nav className="flex justify-between items-center font-monsterrat p-2 font-medium px-2 md:px-16  md:py-5">
                <h3 className="text-white text-2xl font-semibold">Iannis</h3>
                <ResponsiveMenu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                <SideBar openMenu={openMenu}/>
                <ul className="md:flex hidden  justify-center items-center gap-3 text-sm md:gap-8 md:text-base cursor-pointer">
                    <li className={`${s.list} text-white`}>Home</li>
                    <li className={`${s.list} text-white`}>About</li>
                    <li className={`${s.list} text-white`}>Contact</li>
                    <li>
                        <button className={`${s.btn} flex justify-between md:gap-1 md:text-base text-xs items-center border border-white p-2 hover:text-blue-800 bg-white tracking-wider md:block md:w-1/2 transition-all duration-150 ease-in-out rounded-xl`}>
                            <Download size={16}/>
                            Download my CV
                        </button>
                        
                    </li>
                </ul>
            </nav>

            <div className="flex md:flex-row flex-col justify-center items-center py-10">
                <div className="flex flex-col md:justify-start justify-center items-center gap-4">
                    <h1 className="font-nunito text-5xl text-white md:w-[400px] w-[300px]">Welcome To My Universe</h1>
                    <p className="font-monsterrat text-zinc-300 font-medium md:w-[550px] w-[320px]">
                        I'm Iannis a passionate web developper dedicated to creating innovative and user-friendly websites.
                        With a strong background in programming

                    </p>
                    <button className="font-nunito font-semibold transition-all duration-400 ease-linear hover:scale-105 bg-yellow-400 md:w-1/3 w-1/2 p-2 rounded-xl">
                        Explore my Work
                    </button>
                    <div className="text-gray-200 flex items-center gap-2">
                        <IconContext.Provider value={{className:"text-xl"}}>
                            <TbBrandGithubFilled className="cursor-pointer hover:text-gray-400"/>
                            <BsLinkedin className="cursor-pointer hover:text-gray-400"/>
                            <RiInstagramLine className="cursor-pointer hover:text-gray-400"/>
                            <MdOutlineWhatsapp className="cursor-pointer hover:text-gray-400"/>
                        </IconContext.Provider>
                    </div>
                </div>
                <img src={avatar} alt="avatar image" className="md:w-[519px] w-[319px] md:mt-0 mt-10" />
            </div>
        </header>
    )
}

export default Header