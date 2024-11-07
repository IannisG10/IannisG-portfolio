import React from "react";
import s from "./Header.module.css"
import Avatar from '../../assets/Avatar/Avatar.png'
import { motion } from "framer-motion";

const MotionFade: React.FC = ()=>{
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };
    return (
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 1,
              },
            },
          }}
        >
          <motion.h1
            className="text-center font-display text-4xl tracking-[-0.1em] text-white drop-shadow-sm md:text-lg md:leading-[5rem] absolute top-36 left-24"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Fade Up
          </motion.h1>
        </motion.div>
      );
}

const Header: React.FC = () => {
    return(
        <header className={s.headers}>
            <div className="absolute top-20 left-20  m-3">
                <p className={`${s.typeText} overflow-hidden border-r-2 border-orange-600`}>I'm</p>
            </div>
            <div className="absolute top-28 left-20 m-2 font-extrabold text-4xl">
                <h1 className={`${s.animeName} border-r-8 border-black overflow-hidden`}>GUERRA</h1>
            </div>
            <img src={Avatar} alt="me" className="absolute top-10 left-1/2"/>
            <MotionFade/>
        </header>
    )
}

export default Header