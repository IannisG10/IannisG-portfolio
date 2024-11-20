import React from "react";
import s from "./Header.module.css"
import avatar from "../../assets/Avatar/Avatar.png"
import { Download } from "lucide-react";

const Header: React.FC = () => {

    return(
        <header className={`${s.BgIMG}`}>
            <nav className="flex justify-between items-center font-monsterrat font-medium px-16 py-5">
                <h3 className="text-white text-2xl font-semibold">Iannis</h3>
                <ul className="flex justify-center items-center gap-8 cursor-pointer">
                    <li className={`${s.list} text-white`}>Home</li>
                    <li className={`${s.list} text-white`}>About</li>
                    <li className={`${s.list} text-white`}>Contact</li>
                    <li>
                        <button className={`${s.btn} flex justify-between gap-1 items-center border border-white p-2 hover:text-blue-800 bg-white tracking-wider  transition-all duration-150 ease-in-out rounded-xl`}>
                            <Download size={16}/>
                            Download my CV
                        </button>
                        
                    </li>
                </ul>
            </nav>

            <div className="flex justify-center items-center py-10">
                <div className="flex flex-col justify-start gap-7">
                    <h1 className="font-nunito text-5xl text-white w-[400px]">Welcome To My Universe</h1>
                    <p className="font-monsterrat text-zinc-300 font-medium w-[550px]">
                        I'm Iannis a passionate web developper dedicated to creating innovative and user-friendly websites.
                        With a strong background in programming

                    </p>
                    <button className="font-nunito font-semibold transition-all duration-400 ease-linear hover:scale-105 bg-yellow-400 w-1/3 p-2 rounded-xl">
                        Explore my Work
                    </button>
                </div>
                <img src={avatar} alt="avatar image" className="w-[519px]" />
            </div>
        </header>
    )
}

export default Header