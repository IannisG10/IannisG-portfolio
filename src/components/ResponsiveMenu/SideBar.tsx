import React from "react";

interface menuProps{
    openMenu: boolean
    
}

const SideBar: React.FC<menuProps> = ({openMenu})=>{
    return(
        <div className={`bg-purple-200 w-1/4 absolute top-12 right-2 ${openMenu ? "block ":"hidden "} `}>   
            <ul className="flex flex-col justify-center gap-3 items-center text-sm">
                <li className={`text-black`}>Home</li>
                <li className={`text-black`}>About</li>
                <li className={`text-black`}>Contact</li>
            </ul>
        </div>
    )
}
export default SideBar