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
import shapeTwo from '../../Assets/Images/triangleAsymmetrical.svg'
import useTools from '../Hooks/useTools';
import ToolsCard from '../ToolsCard/ToolsCard';
import { useNavigate } from 'react-router-dom';
import ReviewSlider from '../Dashboard/Review/ReviewSlider';
import Accordion from './Accordion/Accordion';
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader';

const Home = () => {
    const [tools, setTools] = useTools();
    const toolsCopy = [...tools];
    const reversedTools = toolsCopy?.reverse();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/tools/${id}`)
    }
    if (!tools) {
        return <Loader></Loader>
    }
    return (
        <div className='mb-10'>
            <Slider></Slider>

            <div className='bg-gradient-to-t from-primary to-secondary mt-0 md:mt-16'>
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
            {/* Review */}
            <div className="bg-gradient-to-b from-primary to-secondary pb-10 mb-16">
                <div className="custom-shape-divider-top-1653206227">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className='container mx-auto'>
                    <h1 className='text-uppercase text-center text-white text-4xl md:text-5xl font-semibold custom-border w-fit mx-auto pb-4 mb-8 pt-8 md:pt-0 md:mb-16'>What Our Customer Says</h1>
                    <ReviewSlider ></ReviewSlider>
                </div>
            </div>

            {/* Accordion */}
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4 mb-5'>Frequently Asked Questions</h1>

            <div className='container mx-auto'>
                <Accordion title="What Kind Of Products Do You Supply?" content="We provide the best tools in Bangladesh for small business and entrepreneurs. We're community-powered software for social media marketing and analytics. Stop struggling to get better at social media and get great results now. It's easy to get started at BoldTap!Build a presence in LinkedIn Marketing. Instant growth and ROI by using the BoldTap Social Analytics Platform." />

                <Accordion
                    title="Do You Supply Products Outside Bangladesh?"
                    content="Yes. We supply outside Bangladesh for the making of quality tools, so our first product is by far and away our own product, which we pride ourselves in. And the sourcing of the factories to make these and obviously the manufacturing are in the hands of JW Boston. So that's where the quality and the high-quality of this product is, and we are very, very proud of the quality of the material we use. I think we've talked about this before but most T-shirts you can buy in the shop this year have been made in America, in a factory. A lot of them are made in China.
                    "/>

                <Accordion
                    title="Do You Supply in All Over Bangladesh?"
                    content=" <p>Yes we supply our tools all over Bangladesh and are planning on all over the world, but the real win is that we do it for less than we could.Today we sold our screws for 7E and then sold them again for $3.What a steal and we even have more.The barber pole and welder are for the boy.It's a tote where we can put everything together so he doesn't have to go digging for anything he needs.It's been a great system for keeping him busy.</p>"
                />
            </div>

            {/* Get in touch */}
            <Contact>Get In Touc</Contact>
        </div>
    );
};

export default Home;