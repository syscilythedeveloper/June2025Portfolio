"use client";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div
      id="projects"
      className="relative z-50 my-12 lg:my-24"
    >
      <div className="sticky top-10 z-[100]">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border border-[#1b2c68a0] rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Project Header with Terminal Dots */}
              <div
                className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] px-6 py-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#1a1443] hover:to-[#0d1224] transition-all duration-300"
                onClick={() => toggleProject(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Terminal Dots */}
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <h3 className="text-teal-400 text-lg font-semibold">
                      {project.name}
                    </h3>
                    {project.status === "In Progress" && (
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">
                        🚧 In Progress
                      </span>
                    )}
                    {project.featured === "Web Dev Challenge" && (
                      <Link
                        href="https://codetv.dev/series/web-dev-challenge/s2/e6-future-of-ai-native-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          🎥 Featured on CodeTV
                        </span>
                      </Link>
                    )}
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      expandedProject === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  expandedProject === index
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
