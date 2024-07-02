"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import TestimonialCard from "@/components/global/cards/TestimonialCard";

const TestimonialSlide = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mt-5 md:mt-10"
      >
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="max-w-lg w-full my-4">
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlide;
