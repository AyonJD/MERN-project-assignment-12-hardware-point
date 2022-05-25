import React, { useState } from 'react';
import BusinessSummary from './BusinessSummary';
import Slider from './Slider';
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import imageOne from '../../Assets/Images/1.jpg'
import imageTwo from '../../Assets/Images/2.jpg'
import imageThree from '../../Assets/Images/3.jpg'
import shape from '../../Assets/Images/curveAsymmetrical.svg'
import useTools from '../Hooks/useTools';
import ToolsCard from '../ToolsCard/ToolsCard';
import { useNavigate } from 'react-router-dom';
import ReviewSlider from '../Dashboard/Review/ReviewSlider';

const Home = () => {
    const [tools, setTools] = useTools();
    const toolsCopy = [...tools];
    const reversedTools = toolsCopy?.reverse();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/tools/${id}`)
    }
    return (
        <div>
            <Slider></Slider>

            <div className='bg-gradient-to-t from-primary to-secondary'>
                <div className="custom-shape-divider-top-1653206227">
                    <img src={shape} alt="" />
                </div>
                <h1 className='text-uppercase text-center text-white text-4xl md:text-5xl font-semibold'>We are trusted</h1>
                <h1 className='text-uppercase text-center text-white text-2xl custom-border w-fit mx-auto mt-2 pb-4'>We understand our users expectation</h1>
                <div className="business-summery mt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                    <BusinessSummary
                        icon={<BiWorld></BiWorld>}
                        end={50}
                        title="Countries"
                        image={imageTwo}
                    />
                    <BusinessSummary
                        icon={<BsPeopleFill></BsPeopleFill>}
                        end={900}
                        title="Happy Clients"
                        image={imageOne}
                    />
                    <BusinessSummary
                        icon={<MdOutlineComputer></MdOutlineComputer>}
                        end={1200}
                        title="Successful Projects"
                        image={imageThree}
                    />
                </div>
            </div>
            {/* Tools */}
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4'>Our Letest Tools</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20'>
                {
                    reversedTools.slice(0, 6).map(tool => <ToolsCard handlePurchase={handlePurchase} tool={tool} key={tool._id}></ToolsCard>)
                }
            </div>
            <div className='container mx-auto my-100'>
                <ReviewSlider></ReviewSlider>
            </div>

        </div>
    );
};

export default Home;