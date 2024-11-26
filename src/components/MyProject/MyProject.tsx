import React from "react";
import { DataProject } from "../../data/data";
import { TbBrandGithub } from "react-icons/tb";

const MyProject: React.FC = () => {
    return(
        <>
            {DataProject.map((item,index) => (
                <div key={index} 
                    className="flex flex-col justify-center gap-3 p-2 mx-3 items-center bg-blue-200 shadow-sm rounded-md">
                        <img src={`../../../public/${item.imageProject}.jpg`} alt={item.tittleProject}
                             className="w-[250px] rounded-md"
                        />
                        <h2 className="font-semibold font-monsterrat">{item.tittleProject}</h2>
                        <div className="w-2/3 font-monsterrat">
                            <p className="text-sm text-zinc-800">{item.description}</p>
                        </div>
                        <button className=" flex justify-center w-[200px] items-center gap-2 borde-none bg-[#331c60] font-monsterrat font-medium text-white 
                                px-3 py-1 rounded-lg">
                                   <TbBrandGithub/> View code
                        </button>
                </div>
            ))}

        
        </>
    )
}

export default MyProject;