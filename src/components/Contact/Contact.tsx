import React from "react";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "../ui/select";
import { Send } from "lucide-react";
  

const Contact: React.FC = ()=>{
    return(
        <div className="bg-purple-300 mx-3 mb-5 pl-8 py-4 flex justify-between items-center">
           <div className="flex flex-col gap-20">
                <h1 className="font-nunito text-4xl">Got ideas? <br />Let's make it real in <span className="text-purple-800 font-bold">cool</span> something</h1>
                <div className="flex flex-col gap-5">
                    <h3 className="font-monsterrat font-bold text-base">I'm interested in..</h3>
                    <Select>
                        <SelectTrigger className="w-[230px] border font-semibold border-purple-400 font-monsterrat rounded-sm h-[30px]">
                            <SelectValue placeholder="Select service"/>
                        </SelectTrigger>
                        <SelectContent className="font-monsterrat">
                            <SelectItem value="website">
                                Website Creation
                            </SelectItem>
                            <SelectItem value="e-commerce">
                                E-commerce Website
                            </SelectItem>
                            <SelectItem value="mobile">
                                Mobile Application
                            </SelectItem>
                            <SelectItem value="landing page">
                                Landing page
                            </SelectItem>
                            <SelectItem value="blog">
                                Blog
                            </SelectItem>
                            <SelectItem value="Maintenance">
                                Maintenace or ReFont
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
           </div>

           <div className="flex flex-col gap-8 mx-16 font-monsterrat text-sm w-[350px] mt-7 font-semibold">
                <input type="text" placeholder="Your name" className="px-4 py-1 focus:outline-purple-800 rounded-sm" />
                <input type="text" placeholder="Your email" className="px-4 py-1 focus:outline-purple-800 rounded-sm" />
                <textarea name="" id="" placeholder="Your message..." className="px-4 py-1 rounded-sm focus:outline-purple-800"></textarea>
                <button className="bg-[#331c60] flex justify-center items-center gap-1 text-white 
                rounded-sm h-8 transition-all duration-200 hover:scale-95"><Send size={18}/>Submit</button>
           </div>
        </div>
    )
}

export default Contact 