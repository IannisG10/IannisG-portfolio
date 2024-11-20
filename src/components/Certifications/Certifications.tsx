import React from "react";
import ISPM from "../../../public/logo_ispm-removebg-preview.png"


const Certifications: React.FC = () => {
    return(
       <div>
            <div className="flex justify-end">
                <div className="flex flex-col justify-center items-center bg-slate-500 w-1/2 p-5">
                    <h1 className="font-nunito text-3xl font-bold">ISPM</h1>
                    <p className="font-monsterrat text-sm text-zinc-300 ">
                        I’m in my third year of a Bachelor's in Software Engineering and AI at ISPM. 
                        I’ve built a strong foundation in software development, AI, and programming through hands-on projects, including web and mobile apps. My studies have also enhanced my skills in teamwork, agile methods, 
                        and problem-solving, preparing me for a career in software engineering and AI
                    </p>
                </div>
            </div>

            <div className="flex justify-start">
                <div className="flex justify-center items-center bg-slate-500 w-1/2">
                    <h1 className="font-monsterrat">Open Class Room</h1>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex justify-center items-center bg-slate-500 w-1/2">
                    <h1 className="font-monsterrat">Open Class Room</h1>
                </div>
            </div>
       </div>
       
    )
}

export default Certifications