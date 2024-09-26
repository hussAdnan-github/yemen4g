"use client";
import logo from "../../../public/image/logo.jpeg";
import slider from "../../../public/image/slider1.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";


export default function () {
  return (
    <>
        <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper main_slider"
      >
       
          <SwiperSlide  >
          
              <Image
                className="w-full h-[452px] rounded-2xl"
                src={logo}
                width={300}
                height={100}
                alt=""
              />
        
          </SwiperSlide>
          <SwiperSlide  >
          
              <Image
                className="w-full h-[452px] rounded-2xl"
                src={slider}
                width={300}
                height={100}
                alt=""
              />
        
          </SwiperSlide>
 
      </Swiper>
    </>
  )
}
