import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2,
            },
        },
    };

    return (
        <>
            <div >
                <motion.h1
                    ref={ref}
                    className="text-4xl font-bold flex justify-center py-10"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    Обо мне
                </motion.h1>
                <motion.div ref={ref}
                            className="flex justify-center flex-col md:flex-row sm:mx-24 my-4"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={variants}
                >
                    {/*<div className=" md:mx-20 w-64 m-auto md:w-1/2">*/}
                    {/*    <motion.img*/}
                    {/*        src={photo}*/}
                    {/*        alt='Sega'*/}
                    {/*        className="md:w-64 rounded-xl"*/}
                    {/*        initial="hidden"*/}
                    {/*        animate={inView ? "visible" : "hidden"}*/}
                    {/*        variants={variants}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="lg:w-1/2  px-12 md:px-4 lg:px-12  lg:text-4xl text-2xl mb-4 md:mb-0 content-center ">
                        <h1 className='font-bold'>Сергей Пересыпкин<br/> Frontend-разработчик, который превращает идеи в
                            сайты.</h1>

                    </div>
                    <div className="lg:w-1/2  px-12 md:text-xl md:px-4 lg:px-12 lg:text-2xl text-2xl  content-center ">

                        <p className="font-bold ">
                            • 3+ года во Frontend.<br/>
                            • Разработчик web-приложений.<br/>
                            • Основные технологии: React & TailwindCSS
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default AboutMe;
