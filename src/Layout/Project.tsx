import React from "react";
import mongo from '../assets/icone/Mongo-removebg-preview.png'
import express from '../assets/icone/express-js-removebg-preview.png'
import react from '../assets/icone/file-type-reactjs.256x228.png'
import node from '../assets/icone/node-js-removebg-preview.png'
import tailwind from '../assets/icone/tailwind-css-removebg-preview.png'
import Typescript from '../assets/icone/typescript-removebg-preview.png'
import redux from '../assets/icone/redux-removebg-preview.png'
import python from '../assets/icone/python-removebg-preview.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MyProject from "../components/MyProject/MyProject";
import Contact from "../components/Contact/Contact";
import s from '../components/MyProject/Project.module.css'

const Project: React.FC = ()=>{

    AOS.init({
        easing: 'ease',
        mirror: true,
        once: true,
        delay: 120,
        duration: 800
    })
    return(
        <>
            <div className="bg-purple-200">
                <div className="flex justify-start">
                    <div className="flex flex-col justify-start w-1/2 left-5 px-20 py-5 gap-4">
                        <h1 className="font-nunito text-3xl font-semibold">Building idea into <span className="text-green-500">R</span>e<span className="text-blue-400">a</span><span className="text-green-700">l</span>ity</h1>
                        <p className="font-monsterrat text-gray-600 text-sm font-medium">
                        I am a dedicated web developer with expertise in React, Node.js, and MongoDB. Passionate about creating efficient, user-focused applications, 
                        I thrive in building innovative solutions and working on collaborative projects.
                        </p>
                        <button className="border-none bg-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out font-nunito rounded-lg w-1/2 font-medium py-1 px-2">
                            Explore my Services
                        </button>
                    </div>
                </div>

                <div className="flex justify-end ">
                    <div className="flex flex-col justify-center items-center px-10 gap-4">
                        <h1 className="font-nunito text-3xl font-semibold">My Arsenals </h1>
                        <p className="font-monsterrat text-gray-600 text-sm font-medium">My stack crew</p>
                        <div className="grid grid-cols-4 gap-4" data-aos="fade-up">
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={mongo} alt="MongoDB" className="w-[55px] h-[60px]" />
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={express} alt="Express" className="w-[57px] h-[60px]" />
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={react} alt="React" className="w-[58px] h-[54px]"/>
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={node} alt="node" className="w-[55px] h-[55px]" />
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={tailwind} alt="Tailwind" className="w-[60px] h-[45px]"/>
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={redux} alt="Redux" className="w-[50px] h-[48px]"/>
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={Typescript} alt="TypeScript" className="w-[60px] h-[45px]"/>
                            </div>
                            <div className="bg-[#291c3a] flex justify-center items-center rounded-full w-[70px] h-[70px]">
                                <img src={python} alt="python" className="w-[60px] h-[55px]"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project components  */}
                <div className={`flex justify-start my-20 px-5 py-5 ${s.projectHeight}`}>
                    <MyProject/>
                </div>

                <Contact/>
            </div>
        </>
    )
}

export default Project