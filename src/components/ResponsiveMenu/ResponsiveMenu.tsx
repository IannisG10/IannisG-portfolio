import React from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

interface menuProps{
    openMenu: boolean
    handleOpenMenu: () => void
}

const ResponsiveMenu: React.FC<menuProps> = ({openMenu,handleOpenMenu})=>{
    return(
        <>
            <div className="block cursor-pointer md:hidden border border-purple-100 bg-purple-200 right-5 fixed rounded-md p-1"
                 onClick={()=>{handleOpenMenu()}}
            >
                {openMenu ? <X size={22}/> : <Menu size={22}/>}
            </div>
            
        </>
    )
}

export default ResponsiveMenu