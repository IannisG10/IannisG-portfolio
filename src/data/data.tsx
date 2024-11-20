interface DataType{
    imgUrl: string;
    description: string;
    tittle: string;
    actionButton: string;
    bgColor: string;
    textColor: string;
}

export const skillItem: DataType[] = [
    {
        imgUrl:"MERN",
        tittle: "MERN Stack",
        actionButton: "Explore my Code",
        bgColor: "bg-zinc-950",
        textColor: "text-white",
        description:"Proficient in building full-stack web applications with MongoDB, Express.js, React, and Node.js. I focus on crafting efficient APIs, scalable backends, and responsive, dynamic frontends."
    },
    {
        imgUrl: "Python",
        tittle: "Python 3",
        actionButton: "See Python script",
        bgColor: "bg-amber-500",
        textColor: "text-black",
        description: "Efficient, Versatile, Scalable Experienced in writing clean and modular Python code for automation, data analysis, and exploring the fundamentals of machine learning and AI development."
    },
    {
        imgUrl: "Figma",
        tittle: "Figma",
        actionButton: "Let's Collaborate",
        bgColor: "bg-blue-600",
        textColor: "text-black",
        description: "Skilled in designing intuitive user interfaces and prototypes using Figma, ensuring a seamless user experience with a strong focus on functionality and aesthetics."
    }
] 