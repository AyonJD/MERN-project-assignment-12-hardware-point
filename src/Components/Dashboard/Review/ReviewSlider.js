import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import loader from '../../../Assets/Images/smallLoader.gif'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SingleReviews from "./SingleReviews";

export default function App() {
    const [reviewes, setReviewes] = useState([]);
    const reviewesCopy = [...reviewes];
    const reversedReviewes = reviewesCopy?.reverse();
    useEffect(() => {
        fetch("https://hardware-server.up.railway.app/reviews/")
            .then(res => res.json())
            .then(res => {
                setReviewes(res);
            });
    }, [])
    // console.log(reviewes);
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="border-2 border-slate-600">
                    {
                        reversedReviewes?.map(singleReview => <SwiperSlide key={singleReview._id}>
                            <SingleReviews
                                singleReview={singleReview}
                            />

                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </>
    );
}
