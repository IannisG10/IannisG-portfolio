import React from "react";
import s from "./Header.module.css"

const Header: React.FC = () => {

    return(
        <header className={`${s.BgIMG}`}>
            <nav className="flex justify-between items-center font-sans px-16 py-2">
                <h3 className="text-white text-2xl font-semibold">Iannis</h3>
                <ul className="flex justify-center items-center gap-8 cursor-pointer">
                    <li className={`${s.list} text-white`}>Home</li>
                    <li className={`${s.list} text-white`}>About</li>
                    <li className={`${s.list} text-white`}>Contact</li>
                    <li>
                        <button className={`${s.btn} border border-white p-2 hover:text-blue-800 bg-white tracking-wider  transition-all duration-150 ease-in-out rounded-xl`}>Download my CV</button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header