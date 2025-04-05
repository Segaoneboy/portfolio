import React from 'react';
import { motion } from "framer-motion";
import {} from "../style.css"

const variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
    }
};

const secondary = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut", delay: 1.7 }
    }
};

const Header = () => {
    return (
        <div className='relative md:w-full md:min-h-[36rem] min-h-96 max-h-96 lg:min-h-0 lg:max-h-screen lg:h-screen'>
            <div className="min-h-96 max-h-96 md:min-h-[36rem] lg:min-h-0 lg:max-h-screen lg:h-screen   flex items-center justify-center">
                <h1 className="text-white text-9xl lg:text-12xl font-bold">S</h1>
            </div>
            <motion.p
                className="absolute text-white top-20 md:top-40 lg:top-[40%] left-20 md:left-1/3 lg:left-[40%] text-4xl rotate-24 font-comic"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                #IT
            </motion.p>

            <motion.p
                className="absolute text-white top-72 md:top-[65%] lg:top-[60%] left-60 md:left-[60%] lg:left-[55%] text-4xl rotate-24 font-comic"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                New?
            </motion.p>
            <motion.div
                className="hidden lg:block absolute top-1/2 left-1/4 text-white  rotate-24 font-comic"
                initial="hidden"
                animate="visible"
                variants={secondary}
            >
                <p className="text-white text-4xl ">#Frontend</p>
            </motion.div>
            <motion.div
                className="hidden lg:block absolute top-[40%] left-[60%] text-white  rotate-24 font-comic"
                initial="hidden"
                animate="visible"
                variants={secondary}
            >
                <p className="text-white text-4xl ">#Sycroll Arts</p>
            </motion.div>

        </div>
    );
};

export default Header;
