import React from "react";
import { DataProject } from "../../data/data";
import { TbBrandGithub } from "react-icons/tb";

const MyProject: React.FC = () => {
    return(
        <>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-5">
                {DataProject.map((item,index) => (
                    <div key={index} 
                        className="flex flex-col justify-center items-center ">
                            <img src={`/${item.imageProject}.jpg`} alt={item.tittleProject}
                                className="md:w-[320px] w-[210px] h-[90px] md:h-[150px] rounded-t-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                            />
                            <div className="flex flex-col gap-3 p-2 justify-center items-center md:w-[320px] w-[210px] h-[120px] md:h-[300px] bg-purple-100 border-gray-50 shadow-md rounded-b-md">
                                <h2 className="font-semibold font-monsterrat md:text-2xl text-base">{item.tittleProject}</h2>
                                <div className="md:w-2/3 md:block hidden w-3/4 font-monsterrat">
                                    <p className="text-sm text-zinc-800 font-medium">{item.description}</p>
                                </div>
                                <button className="flex justify-center hover:scale-105 transition-all duration-300 ease-in-out w-3/4 
                                    items-center gap-2 m-2 borde-none bg-[#331c60] font-monsterrat font-medium text-white px-3 py-1 rounded-lg">
                                        <TbBrandGithub/> View code
                                </button>
                            </div>
                    </div>
                ))}
            </div>

        
        </>
    )
}

export default MyProject;
