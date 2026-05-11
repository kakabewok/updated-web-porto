"use client";

import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioProjects } from "../data/data";
import Image from "next/image";

const ITEMS_PER_PAGE = 6;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(portfolioProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = portfolioProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-white relative overflow-hidden border-t-8 border-black"
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-black max-w-2xl mx-auto text-base md:text-lg font-bold">
            A collection of web applications and systems I&apos;ve built using
            modern technologies
          </p>
        </div>

        {/* Portfolio Grid - Standardized for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[-2px] md:hover:translate-y-[-2px] transition-all duration-200 flex flex-col"
            >
              {/* Image Container - Reduced Height */}
              <div className="relative h-44 md:h-48 w-full overflow-hidden bg-gray-200 border-b-4 border-black font-bold uppercase">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Optimized Padding */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-black text-black mb-2 uppercase line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-black mb-4 leading-relaxed text-xs md:text-sm line-clamp-2 min-h-10 font-bold">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-yellow-300 border-2 border-black text-black text-[10px] md:text-xs font-black flex items-center gap-1 uppercase">
                        <Image
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                            .toLowerCase()
                            .replace(".", "")
                            .replace(" ", "")}/${tech
                            .toLowerCase()
                            .replace(".", "")
                            .replace(" ", "")}-original.svg`}
                          alt={tech}
                          width={14}
                          height={14}
                          className="w-3 h-3 object-cover"
                          onError={(e) => {
                            const fallbackUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                              .toLowerCase()
                              .replace(".js", "js")
                              .replace(" ", "")}/${tech
                              .toLowerCase()
                              .replace(".js", "js")
                              .replace(" ", "")}-plain.svg`;
                            if (e.currentTarget.src !== fallbackUrl) {
                              e.currentTarget.src = fallbackUrl;
                            }
                          }}
                        />
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 bg-black text-white text-[10px] md:text-xs font-black uppercase">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Preview Button */}
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 w-full py-2.5 bg-lime-400 border-4 border-black font-black text-xs md:text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all mt-auto"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Logic */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2.5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                currentPage === 1
                  ? "bg-gray-200 cursor-not-allowed opacity-50 shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white hover:bg-pink-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 border-4 border-black font-black text-base transition-all ${
                    currentPage === page
                      ? "bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]"
                      : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2.5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 cursor-not-allowed opacity-50 shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white hover:bg-pink-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
