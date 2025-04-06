import React from 'react';
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import ProjectBlock from "./ProjectBlock";
const Projects = () => {
    const mediProject = {
        title: 'Meditation project',
        image: "/assets/photos/medi.png",
        href: 'https://segaoneboy.github.io/MEDI/',
    }
    const smartTownProject = {
        title: 'Smart Town',
        image: "/assets/photos/smarttown.png",
        href: 'https://smarttown.vercel.app/',
    }
    const charynCanyonProject = {
        title: 'Charyn Canyon',
        image: "/assets/photos/charyncanyon.png",
        href: 'https://segaoneboy.github.io/charynCanyon/',
    }

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
            <div>
                <motion.h1
                    ref={ref}
                    className="text-4xl font-bold flex justify-center py-10"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    Проекты
                </motion.h1>
                <ProjectBlock image = {mediProject.image} text ={mediProject.title} href={mediProject.href} />
                <ProjectBlock image = {smartTownProject.image} text ={smartTownProject.title} href={smartTownProject.href} />
                <ProjectBlock image = {charynCanyonProject.image} text ={charynCanyonProject.title} href={charynCanyonProject.href} />
            </div>
        </>
    );
};

export default Projects;
