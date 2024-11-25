import React from "react";
import s from './Certifications.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import tata from '../../assets/image/Capture concept.jpg'
import taskly from '../../assets/image/Capture.jpg'
import universitech from '../../assets/image/universitech.jpeg'
import { TbBrandGithub } from "react-icons/tb";
import { LuArrowRight } from "react-icons/lu";

const Certifications: React.FC = () => {
    
    AOS.init({
        easing: 'ease-in-out',
        duration: 800,
        once: false,
        mirror: false
    })
    return(
       <div>
            <div className="flex justify-end">
                <div data-aos="fade-up" 
                    className={` ${s.bgImage1} flex flex-col justify-center items-center w-1/2 p-5 gap-5`}>
                        <img src={taskly} alt="Taskly" className="w-[500px] rounded-lg" />
                    <h1 className="font-nunito text-3xl font-bold">Taskly</h1>
                    <p className="font-monsterrat text-sm text-gray-800 font-medium ">
                    Taskly is a sleek and intuitive task management app designed to boost your productivity. 
                    Easily organize your to-dos, track completed tasks, and manage priorities with a user-friendly interface. Enjoy seamless navigation between features like TaskCheck for completed tasks and TaskDelete for a handy trash bin. Customize your experience with light and dark themes, and stay on top of your goals effortlessly. 
                    Taskly simplifies planning, helping you focus on what matters most, anytime, anywhere.
                    </p>
                    <button className="flex justify-center items-center gap-2 font-monsterrat font-medium border border-black w-1/3 px-2 py-1 
                    rounded-lg hover:bg-yellow-400 hover:border-yellow-400
                     hover:text-gray-50 transition-all duration-150 ease-in-out ">
                        View live <LuArrowRight/>
                    </button>
                </div>
            </div>

            <div className="flex justify-start">
                <div className={`flex flex-col justify-center items-center p-5 gap-5  w-1/2 ${s.bgImage2}`} data-aos="fade-up">
                    <img src={universitech} alt="Universitech" className="w-[500px] rounded-lg" />
                    <h1 className="font-monsterrat text-3xl font-bold">UniversiTech</h1>
                    <p className="font-monsterrat text-sm text-gray-800 font-medium ">
                    Universitech is a cutting-edge web application showcased at Orange’s LiveCoding event, 
                    revolutionizing university management. It simplifies scheduling, academic tracking, and student record handling,
                    offering a seamless experience for students, faculty, and administrators. With its intuitive design and robust features, Universitech enhances communication, streamlines workflows, and provides real-time updates. Tailored for modern campuses, it empowers educational institutions to optimize their operations and foster a connected learning environment. 
                    Universitech makes managing universities smarter, faster, and more efficient in the digital era.
                    </p>
                    <button className="font-monsterrat flex justify-center items-center gap-2 font-medium border border-black w-1/3 
                        px-2 py-1 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 
                        hover:text-gray-50 transition-all duration-150 ease-in-out ">
                            View code <TbBrandGithub/>
                    </button>
                </div>
            </div>
            <div className="flex justify-end">
                <div className={`flex flex-col justify-center items-center p-5 gap-5 w-1/2 ${s.bgImage3}`} data-aos="fade-up">
                    <img src={tata} alt="Concept Junior" className="w-[500px] rounded-lg" />
                    <h1 className="font-monsterrat text-3xl font-bold">Concept Junior</h1>
                    <p className="font-monsterrat text-sm text-gray-800 font-medium">
                    Concept Junior’s website is a sleek showcase of its high-tech products, located in Mahamasina. 
                    Specializing in smartphones and accessories, the site highlights a curated selection of the 
                    latest tech innovations. Designed as a virtual storefront, it offers visitors a glimpse of Concept Junior’s offerings, with detailed product descriptions and easy navigation. Perfect for staying informed about the newest gadgets, the site reflects the store’s commitment to quality and modernity, 
                    inviting tech enthusiasts to explore and visit in person.
                    </p>
                    <button className="flex justify-center items-center  gap-2 font-monsterrat font-medium border border-black w-1/3 px-2 
                    py-1 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 
                    hover:text-gray-50 transition-all duration-150 ease-in-out ">
                        View live <LuArrowRight/>
                    </button>
                </div>
            </div>
       </div>
       
    )
}

export default Certifications