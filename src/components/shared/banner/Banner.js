"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {/* LEFT SIDE */}
        <div className="w-full md:w-2/3 h-[400px] md:h-[600px] rounded-lg shadow-lg">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><Image
            src="https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141331.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid"
            alt="Left Sidebar Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          /></SwiperSlide>
            <SwiperSlide><Image
            src="https://img.freepik.com/free-photo/white-headphone-dual-red-yellow-background_23-2147889914.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid"
            alt="Left Sidebar Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          /></SwiperSlide>
            <SwiperSlide><Image
            src="https://img.freepik.com/premium-photo/balanced-smart-phones-left-side-orange-background_187299-26473.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid"
            alt="Left Sidebar Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          /></SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden w-full md:w-1/3 h-[400px] md:h-[600px] md:flex flex-col gap-4">
          <div className="relative h-1/2 rounded-lg shadow-lg">
            <Image
              src="https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid"
              alt="Top Right Image"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="relative h-1/2 rounded-lg shadow-lg">
            <Image
              src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309631.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid"
              alt="Bottom Right Image"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
