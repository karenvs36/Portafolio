"use client";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip/index";
import WorkSliderBtns from "./WorkSliderBtns";

const slides = [
  {
    num: "01",
    title: "Landing Page",
    href: "",
    description: "asfkldasf;jsdf;sf",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/images/eco.png",
    live: "https://eco-karens-projects-a4fdf71e.vercel.app/",
    github: "https://github.com/karenvs36/Eco",
  },
  {
    num: "02",
    title: "Weather App",
    href: "",
    description: "asfkldasf;jsdf;sf",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Tailwind CS" },
    ],
    image: "/images/weather.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    title: "idk",
    href: "",
    description: "asfkldasf;jsdf;sf",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/images/weather.png",
    live: "",
    github: "",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(slides[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update slides state base on a current slide index
    setSlide(slides[currentIndex]);
  };

  return (
    <section id="proyectos">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row  xl:gap-[30px] ">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none text-white">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {slide.num}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                  {slide.title}
                </h2>
                {/* description */}
                <p>{slide.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {slide.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== slide.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/*  buttons */}
                <div className="flex items-center gap-4">
                  {/* live  button */}
                  <Link href={slide.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent className="absolute transform -translate-x-1/2  left-1/2 bottom-[-140px]" >
                          <p>Proyecto en vivo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github  button */}
                  <Link href={slide.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent className="absolute transform -translate-x-1/2  left-1/2 bottom-[-140px]">
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%] text-white">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center ng-transparent">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-purple z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={slide.image}
                            layout="fill"
                            objectFit="contain"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-[#2c66c3] hover:bg-[#2c66c3]-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center transition-all items-center"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Slider;
