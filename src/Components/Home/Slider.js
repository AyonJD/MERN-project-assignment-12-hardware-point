import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slideOne from '../../Assets/Images/slide1.jpg';
import slideTwo from '../../Assets/Images/slide2.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="image-slide-bgTwo flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center mb-8">TOOL-CITY</h1>
                        <h1 className="text-6xl font-bold text-white text-center">Basic to Advanced tool</h1>
                        <h1 className="text-6xl font-bold text-white text-center mt-5">for your home prepare</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slide-bgOne flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center mb-8">TOOL-CITY</h1>
                        <h1 className="text-6xl font-bold text-white text-center">We believe in quality-</h1>
                        <h1 className="text-6xl font-bold text-white text-center mt-5">And our customer satisfaction</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slide-bgThree flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center mb-8">TOOL-CITY</h1>
                        <h1 className="text-6xl font-bold text-white text-center">We believe in quality-</h1>
                        <h1 className="text-6xl font-bold text-white text-center mt-5">And our customer satisfaction</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
