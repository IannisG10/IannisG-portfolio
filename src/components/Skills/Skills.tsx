import React from "react";
import { skillItem } from "../../data/data";
import s from "./Skills.module.css"


const Skills: React.FC = () => {
    return(
        <div className="flex justify-center items-center gap-8 my-16">
            {
                skillItem.map((item,index) =>(
                    <div key={index} 
                        className={`${s.container} flex flex-col justify-center h-[350px] ${item.bgColor} font-monsterrat gap-4 font-medium items-center shadow-lg p-5 rounded-md border border-gray-100`}>
                            <img src={`../../../public/${item.imgUrl}.png`}
                                 className="w-20"
                                 alt={item.description} />
                            <h1 className={`font-bold text-2xl ${item.textColor}`}>{item.tittle}</h1>
                            <div className="w-[300px]">
                                <p className="text-gray-100 text-sm font-normal">{item.description}</p>
                            </div>
                            <button className={`${s.buttoncard} font-nunito z-10 bg-white p-2 rounded-full m-2`}>
                                {item.actionButton}
                            </button>
                    </div>
                ))
            }

        
        </div>
    )
}

export default Skills