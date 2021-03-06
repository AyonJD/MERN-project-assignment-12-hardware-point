import React from 'react';
import myImage from '../../Assets/Images/Ayon2.jpg'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import SkillsData from './SkillsData';
import projectOne from '../../Assets/Images/projectOne.png'
import projectTwo from '../../Assets/Images/projectTwo.png'
import projectThree from '../../Assets/Images/projectThree.png'

const Portfolio = () => {
    return (
        <>
            <div className='md:flex justify-between container mx-auto px-4 md:px-0 md:my-14'>
                <div className="auto-type flex-1">
                    <span>I'm </span>
                    <AutoTyping
                        active // <boolean>
                        textRef="Ayon Jodder." // <string>
                        writeSpeed={150} // <number>
                        deleteSpeed={150} // <number>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                    />
                    <BlinkCursor
                        active // <boolean>
                        blinkSpeed={500} // <number>
                    />
                    <p className='text-gray-500 mt-5'>
                        I am a MERN stack web developer from Khulna, Bangladesh. I work as a freelance web developer for clients across the globe with great product delivery. I also worked with Edumonk Foundation and Inception Wave Pvt. Ltd as a Software Developer intern and am looking for opportunities to further develop my skills.
                    </p>
                    <p className='text-gray-500 my-3'>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.</p>

                    <p className='text-gray-500'>
                        I can vouch for the fact that I am a fast learner with a penchant to both learn and unlearn; That is learning the latest relevant technologies and skills. I also bring with me some fresh ideas and I am confident you will find many of them to be quite useful and innovative.
                    </p>

                </div>
                <div className="image flex-1 md:ml-5 mt-10 md:mt-0">
                    <img className='md:w-1/2 md:ml-auto' src={myImage} alt="" />
                </div>
            </div>
            {/* Skills */}

            <div className="container mx-auto md:flex my-28 px-10 md:px-0">
                <div className="custom-width">
                    <SkillsData></SkillsData>
                </div>
                <div>
                    <h1 className='text-center md:mb-10 md:my-0 my-10 text-uppercase pb-5 text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto'>Sample MERN projects</h1>
                    <div className="grid grid-cols-3">
                        <div className="mx-3">
                            <a href="https://flavoro-4fd30.web.app/">
                                <img className='w-full ml-auto object-fill' src={projectOne} alt="" />
                            </a>
                        </div>
                        <div className="mx-3">
                            <a href="https://ivent-3c76f.web.app/">
                                <img className=' w-full ml-auto object-fill' src={projectThree} alt="" />
                            </a>
                        </div>
                        <div className="mx-3">
                            <a href="https://github.com/AyonJD/practice-01-bootstrap">
                                <img className=' w-full ml-auto object-fill' src={projectTwo} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Portfolio;