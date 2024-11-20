import React from "react";
import webIlustration from "../../assets/Avatar/Avatar Explore.png"
import s from "./Explore.module.css"

const Explore: React.FC = () => {
    return(
        <div className={`${s.exploreBackGround} relative flex justify-evenly items-center p-10 bg-gray-100`}>
            <div className="flex flex-col justify-start gap-7 absolute z-10 left-28">
                <h1 className="font-nunito font-semibold text-5xl w-[550px]">Discover my Services and my Expertise</h1>
                <p className="font-monsterrat text-zinc-300 w-[650px]">
                        As a developper,I offer tailored solutions to bring your ideas to life.
                        From modern web and mobile applications to intuitive user experiences,I focus on delivering high-quality,
                        scalable,and efficient products that meet your uniques needs.
                </p>
                <button className="font-nunito font-semibold transition-all duration-400 ease-linear hover:scale-105 bg-yellow-400 w-1/3 p-2 rounded-xl">
                        Explore my Services
                </button>
            </div>
            <img src={webIlustration} alt="illustration" className={`w-[482px] absolute right-0`} />
        </div>
    )
}

export default Explore