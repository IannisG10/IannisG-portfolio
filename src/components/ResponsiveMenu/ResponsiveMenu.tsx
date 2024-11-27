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
            <div className="block cursor-pointer md:hidden bg-purple-200 rounded-md p-1"
                 onClick={()=>{handleOpenMenu()}}
            >
                {openMenu ? <X size={22}/> : <Menu size={22}/>}
            </div>
            
        </>
    )
}

export default ResponsiveMenu