"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Search } from "lucide-react";
import { portfolioProjects } from "../data/data";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 4;

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
    <section id="projects" className="py-20 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* SERP Style Header / "Search" info */}
        <div className="flex items-center gap-3 text-sm text-text-secondary mb-10 pb-6 border-b border-border-subtle">
          <Search className="w-4 h-4" />
          <p>Showing results for "<span className="font-semibold text-text-primary">selected projects</span>"</p>
        </div>

        {/* Project Results List */}
        <div className="space-y-12">
          {currentProjects.map((project, index) => {
            const displayUrl = project.previewUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'project.local';

            return (
              <div key={startIndex + index} className="group">

                {/* Breadcrumb & Favicon */}
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden flex-shrink-0">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt=""
                        width={28}
                        height={28}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Globe className="w-3.5 h-3.5 text-text-secondary" />
                    )}
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <span className="truncate max-w-[200px] sm:max-w-none text-text-primary">
                      {displayUrl}
                    </span>
                    <span className="mx-1.5 text-text-tertiary">›</span>
                    <span className="text-text-tertiary">{project.techStack[0]}</span>
                  </div>
                </div>

                {/* Title Link */}
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-xl sm:text-[22px] text-accent-blue font-medium group-hover:underline mb-1 tracking-tight">
                    {project.title}
                  </h3>
                </a>

                {/* Snippet */}
                <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl mt-1">
                  <span className="text-text-tertiary">{project.year} - </span>
                  {project.description} Developed leveraging a modern stack including {project.techStack.join(", ")}.
                </p>

              </div>
            );
          })}
        </div>

        {/* Pagination (Google Style) */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

      </div>
    </section>
  );
}

export default Projects;
