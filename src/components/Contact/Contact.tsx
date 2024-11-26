import React from "react";


const Contact: React.FC = ()=>{
    return(
        <div className="bg-purple-300 mx-3 pl-8 pt-4">
           <div className="flex flex-col gap-20">
                <h1 className="font-nunito text-4xl">Got ideas? <br />Let's make it real in <span className="text-purple-800 font-bold">cool</span> something</h1>
                <div>
                    <h3 className="font-monsterrat font-bold text-base">I'm interested in..</h3>
                </div>
           </div>
        </div>
    )
}

export default Contact