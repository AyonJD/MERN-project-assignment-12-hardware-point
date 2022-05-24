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
        <>
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
                    <img src={slideOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideTwo} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
