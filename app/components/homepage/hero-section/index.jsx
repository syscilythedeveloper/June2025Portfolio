// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-tight text-white md:font-extrabold lg:text-[2.8rem] lg:leading-[3.2rem] xl:text-[3.2rem] xl:leading-[3.8rem]">
            <span className="block mb-2 text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
              Hi There! 👋🏾
            </span>
            <span className="block mb-3">
              I&apos;m {""}
              <span className="text-pink-500 font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-200 mb-2">
              From classroom to code —
            </span>
            <span className="block">
              I&apos;m a{" "}
              <span className="text-teal-500 font-extrabold relative">
                {personalData.designation}
              </span>
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-300 mt-3">
              who loves making the complex{" "}
              <em className="text-teal-500 not-italic font-semibold">simple</em>
              .
            </span>
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>

            <Link
              href={personalData.medium}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaMedium size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative group">
            {/* Animated gradient glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>

            {/* Main image container */}
            <div className="relative">
              <Image
                src={personalData.profile}
                width={500}
                height={1200}
                alt={personalData.name}
                className="rounded-2xl object-cover shadow-2xl transition-all duration-700 hover:scale-[1.02] cursor-pointer border-4 border-[#1b2c68a0] bg-gradient-to-b from-[#0d1224] to-[#0a0d37]"
                priority
                style={{
                  maxWidth: "500px",
                  maxHeight: "1200px",
                  objectFit: "cover",
                }}
              />

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-teal-500 opacity-70"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-pink-500 opacity-70"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-violet-500 opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-500 opacity-70"></div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-teal-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
