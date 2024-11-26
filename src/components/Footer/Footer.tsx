import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";

const Footer: React.FC = ()=>{
    return(
        <div className="bg-[rgb(33,26,68)] flex flex-col gap-3 justify-center items-center p-3">
            <h1 className="text-2xl font-nunito text-white font-semibold">Iannis</h1>
            <p className="font-monsterrat text-sm text-white">Designed and built by <span className="text-purple-500">Iannis</span></p>
            <p className="font-monsterrat text-sm text-white">&copy; 2024 <span className="text-purple-500 font-semibold">Iannis.</span> All rights reserved.</p>
            <div className="flex justify-center items-center text-white text-2xl gap-2">
                <RiInstagramFill className="cursor-pointer"/>
                <RiLinkedinBoxFill className="cursor-pointer"/>
                <RiGithubFill className="cursor-pointer"/>
            </div>
        </div>
    )
}

export default Footer