"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "../data/data";
import Image from "next/image";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(portfolioProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = portfolioProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm tracking-widest text-text-tertiary uppercase mb-4">
          Selected Work
        </p>
        <div className="w-12 h-px bg-border-strong mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-4 md:mb-0">
            Projects
          </h2>
          <p className="text-text-secondary text-sm max-w-md">
            A collection of web applications and systems built with modern
            technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentProjects.map((project, index) => (
            <article
              key={startIndex + index}
              className="group bg-bg-card border border-border hover:border-border-strong transition-colors flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-2/2 overflow-hidden bg-bg-secondary">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-text-primary tracking-tight mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-bg-secondary text-text-tertiary text-[10px] font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:text-accent transition-colors group/link"
                >
                  <span>View</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default Projects;
