import React from "react";
import { DataProject } from "../../data/data";
import { TbBrandGithub } from "react-icons/tb";

const MyProject: React.FC = () => {
    return(
        <>
            {DataProject.map((item,index) => (
                <div key={index} 
                    className="flex flex-col justify-center gap-3 p-2 mx-3 items-center bg-purple-100 border-gray-50 shadow-md rounded-md">
                        <img src={`../../../public/${item.imageProject}.jpg`} alt={item.tittleProject}
                             className="w-[250px] rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                        <h2 className="font-semibold font-monsterrat text-2xl">{item.tittleProject}</h2>
                        <div className="w-2/3 font-monsterrat">
                            <p className="text-sm text-zinc-800 font-medium">{item.description}</p>
                        </div>
                        <button className="flex justify-center hover:scale-105 transition-all duration-300 ease-in-out w-[200px] 
                            items-center gap-2 m-2 borde-none bg-[#331c60] font-monsterrat font-medium text-white px-3 py-1 rounded-lg">
                                   <TbBrandGithub/> View code
                        </button>
                </div>
            ))}

        
        </>
    )
}

export default MyProject;