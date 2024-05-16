/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  PiArrowUpRight,
  PiArrowDownThin,
  PiGithubLogoThin,
  PiLinkedinLogoLight,
} from "react-icons/pi";

import { IoIosMailUnread } from "react-icons/io";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { Tooltip } from "@nextui-org/react";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Location</p>
              <p className="text-neutral-500 text-xs ">Pune</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ scale: 3 }}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src={theme == "light" ? "/lightm.bmp" : "/map.webp"}
            alt=""
          />
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Mode</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-xs font-semibold max-sm:mt-16 sm:mt-4  ">
                Available for freelance <br /> design projects. Hit me up <br />{" "}
                for a collab 🦾
              </p>

              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60  mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
                <span>Contact me</span>
                <PiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">Surender Pratap Singh</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold   leading-5">
              Hey there! I'm Surender Pratap Singh, a web developer with three
              years of experience. Specializing in the MERN stack, I build
              robust, scalable web applications. From MongoDB to Node.js, I'm
              passionate about crafting efficient, user-friendly experiences.
              Let's create something awesome together! let's collaborate and
              bring your creative visions to life
            </p>
          </div>
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Experience & Education</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden no-scrollbar scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2  ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2023 -- Present
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  Trimir Technologies Pvt Ltd
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Fullstack Developer
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2021 -- 2023
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  Igniterpro Technologies Pvt Ltd
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Frontend Developer
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  mb-6 px-2 relative ">
              <p className="dar:text-white  text-xs w-20 shrink-0  ">
                2013 -- 2019
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  D. Y. Patil College of Engineering Akurdi Pune
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Bachelor of engineering
                </p>
              </div>
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                2010 -- 2012
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  Army Public School, Lucknow
                </h4>
                <p className="text-[11px] text-neutral-500">HSC (PCM)</p>
              </div>
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                2008 -- 2009
              </p>
              <div>
                <h4 className="text-xs font-bold">
                  Army Public School Kandrori, Punjab
                </h4>
                <p className="text-[11px] text-neutral-500">SSC</p>
              </div>
            </div>
          </div>
          <div className="px-2 my-3 ">
            <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
          </div>
          <div className="px-2 my-3 ">
            <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>
        <div className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-8 px-2">
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-14">
                <Image
                  width={200}
                  height={200}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/next-js.svg"
                  alt=""
                />

                <div>
                  <p className="text-xs">Go office</p>
                  <p className="text-xs">
                    Implemented Next.js and Redux for internationalization, RTK
                    Query for API, Redux for state, optimized performance, and
                    ensured seamless user experience.
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>

            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/next-js.svg"
                  alt=""
                />

                <div>
                  <p className="text-xs">G Lab</p>
                  <p className="text-xs">
                    Integrating Recharts in Next.js for data visualization with
                    internationalization. Developing backend APIs with Nest.js
                    and MySQL for data management.
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>

            {/* <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                  <p className="text-xs">Fusion Pro Presentation</p>
                  <p className="text-xs">
                    I've come up with something truly unique
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div> */}
          </div>
          {/* <Products /> */}
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get in touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 mb-4">
            <div className="flex justify-center gap-x-2 px-2">
              <Tooltip showArrow={true} content="X (Twitter)">
                <Link
                  href={"https://twitter.com/roshan0905"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <RiTwitterXLine className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub">
                <Link
                  href={"https://github.com/Surender0905"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="Linkedin">
                <Link
                  href={"https://www.linkedin.com/in/surender0905/"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiLinkedinLogoLight className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="E-mail">
                <Link
                  href={"https://twitter.com/roshan0905"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <IoIosMailUnread className="text-xl" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] p-2 bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
          <div className="  w-full ">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Skills</p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <div className="mt-3 px-2 h-max flex flex-col justify-between">
            <div>
              <h3 className="pb-2">Language</h3>
              <div className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/js.png"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/py.png"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/go.png"}
                  alt="icon"
                />
              </div>
            </div>
            <div>
              <h3 className="pb-3">Frontend</h3>
              <div className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/tail.png"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/react.png"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/next-js.svg"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/vue.svg"}
                  alt="icon"
                />
              </div>
            </div>
            <div>
              <h3 className="pb-3">Backend </h3>
              <div className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/node.png"}
                  alt=""
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/exp.avif"}
                  alt=""
                />

                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/nest.svg"}
                  alt=""
                />

                <Image
                  width={60}
                  height={60}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/md.svg"}
                  alt=""
                />
                <Image
                  width={60}
                  height={60}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/mysql.svg"}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3 className="pb-3">Other</h3>
              <div className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/gitv.png"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/hub.png"}
                  alt="icon"
                />
                <Image
                  width={40}
                  height={40}
                  className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
                  src={"/docker.png"}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Side Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[180px] overflow-hidden no-scrollbar scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-14 px-2  ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Since 2023
              </p>
              <div>
                <h4 className="text-xs font-bold">Ecom</h4>
                <p className="text-[11px] text-neutral-500">
                  MERN-based e-commerce platform for seamless shopping
                  experiences with MongoDB, Express.js, React.js, and Node.js.
                </p>
              </div>
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex  gap-x-3 px-2 relative ">
              <p className="text-white  text-xs w-20 shrink-0  ">Since 2023</p>
              <div>
                <h4 className="text-xs font-bold">Food</h4>
                <p className="text-[11px] text-neutral-500">
                  Scalable food app powered by MERN stack, offering seamless
                  user experiences for ordering and delivery.
                </p>
              </div>
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex  gap-x-3 px-2 relative ">
              <p className="text-white  text-xs w-20 shrink-0  ">In 2023</p>
              <div>
                <h4 className="text-xs font-bold">Chat App</h4>
                <p className="text-[11px] text-neutral-500">
                  Real-time chat application utilizing MERN stack and Socket.IO
                  for seamless communication and interactive user experiences.
                </p>
              </div>
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Since 2021
              </p>
              <div>
                <h4 className="text-xs font-bold">Portfolio</h4>
                <p className="text-[11px] text-neutral-500">
                  A sleek portfolio app crafted using Next.js, showcasing your
                  projects and skills elegantly. Built with simplicity in mind,
                  it offers easy navigation and clean design to highlight your
                  work effectively.
                </p>
              </div>
            </div>{" "}
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-44 relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Newsletter</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-24 flex flex-col items-center w-full px-2 ">
            <input
              className=" w-full rounded-full text-sm p-1 placeholder:text-neutral-700 outline-none border dark:border-neutral-600 border-neutral-400/60 pl-6 dark:bg-neutral-900"
              type="email"
              placeholder="name@email.com"
            />
            <button className="text-xs  w-full  border dark:border-neutral-600 border-neutral-400/60  mt-2 rounded-full p-1 px-2 dark:bg-neutral-700/40">
              <span>Contact me</span>
            </button>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2"
        >
          <div>
            <Image
              height={400}
              width={400}
              className="w-8 h-8 rounded-full object-cover"
              src="/go.png"
              alt=""
            />
            <p className="text-[10px]">
              Learning Go: Fast, concurrent, simple syntax. Ideal for web
              development, systems programming. Great performance, scalability.
            </p>

            <div className="flex items-center gap-x-2 mt-7">
              <div className="">
                <p className="text-xs">Surender Pratap Singh</p>
                {/* <p className="text-xs">Founder, Joscript</p> */}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 p-2 relative "
          >
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">Years of Experience</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="mt-10  w-full flex justify-center items-center">
              <h1 className="text-8xl">3+</h1>
            </div>
          </motion.div>
          <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">CV</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div className="mt-24 w-full">
              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>View</span>
                <PiArrowUpRight />
              </button>
              <a
                href="/cv.pdf"
                className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40"
              >
                <span>Download</span>
                <PiArrowDownThin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
