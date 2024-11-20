import React from "react";
import webIlustration from "../../assets/image/Illustration web.png";
import s from "./Explore.module.css"

const Explore: React.FC = () => {
    return(
        <div className="flex justify-start items-center bg-gray-100">
            <img src={webIlustration} alt="illustration" className={`${s.exploreContainer} w-[400px]`} />
            <div className="flex flex-col justify-start gap-7">
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
        </div>
    )
}

export default Explore