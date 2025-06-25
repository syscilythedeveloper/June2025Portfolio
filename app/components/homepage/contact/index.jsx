// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin, BiLogoMedium } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <div
      id="contact"
      className="my-12 lg:my-16 relative mt-24 text-white"
    >
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 items-center">
          {/* Laughing Couch Image */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-violet-500 to-[#14b8a6] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/laughingCouch.jpg"
                  width={280}
                  height={150}
                  alt="Relaxing and enjoying life"
                  className="rounded-lg object-cover shadow-xl transition-all duration-700 hover:scale-105 cursor-pointer border-2 border-[#1b2c68a0]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg p-3"></div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-8 lg:mt-16">
            <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent"></div>
              <blockquote className="text-gray-200 text-sm md:text-base leading-relaxed mb-4 italic">
                &ldquo;In a world of immense change, it is the learner who will
                inherit the future.&rdquo;
              </blockquote>
              <cite className="text-[#14b8a6] text-sm font-medium">
                - Satya Nadella
              </cite>
            </div>
          </div>
          <div className="mt-8 lg:mt-12 flex items-center justify-center gap-5 lg:gap-8">
            <Link
              target="_blank"
              href={personalData.github}
            >
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
            >
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link
              target="_blank"
              href={personalData.medium}
            >
              <BiLogoMedium
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
