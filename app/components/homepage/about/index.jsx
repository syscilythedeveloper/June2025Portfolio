// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div
      id="about"
      className="my-12 lg:my-16 relative"
    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-1 text-2xl rounded-md ">
          About Me
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
          Syscily The Developer
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 mx-auto mt-2 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="text-gray-200 text-sm lg:text-lg space-y-4">
            <p>
              My name is Syscily Brown and I&apos;m a lifelong learner who
              taught myself to code. I build AI-powered applications using React
              and TypeScript and love creating solutions that truly serve their
              audience.
            </p>
            <p>
              What makes me different? Before becoming a software engineer, I
              was an elementary school teacher and Mathematics Program Manager.
              My superpower is making complex topics easy to understand.
            </p>
            <p>
              I bring that same approach to{" "}
              <a
                href="https://medium.com/@culturecoded.dev"
                className="underline font-semibold text-blue-300 hover:text-purple-300"
              >
                Culture Coded Dev
              </a>
              , a blog series where I break down data structures and algorithms
              using culturally grounded metaphors and real-world examples. I
              learn best when concepts connect to things I already know and care
              about — whether it’s a Beyoncé concert or the TikTok algorithm —
              and I use that lens to help others grasp technical topics in a way
              that actually sticks.
            </p>
            <p>
              Recently, I was featured on Season 2 Episode 6 of{" "}
              <a
                href="https://www.youtube.com/watch?v=I4SBLMGzDss&t=748"
                className="underline font-semibold text-blue-300 hover:text-purple-300"
              >
                The Web Dev Challenge
              </a>
              , where I built <strong>Skincare.ai</strong> — an AI-powered
              skincare consultation app — in just 4 hours on camera.
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group w-fit">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3] via-violet-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <Image
                src="/png/STEM.png"
                width={320}
                height={240}
                alt="Syscily teaching STEM"
                className="relative rounded-lg object-cover shadow-2xl transition-all duration-1000 hover:scale-105 cursor-pointer border-2 border-[#1b2c68a0]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg p-3">
                <p className="text-white text-sm font-medium">May 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
