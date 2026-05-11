import { experienceData } from "../data/data";

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm tracking-widest text-text-tertiary uppercase mb-4">
          Career
        </p>
        <div className="w-12 h-px bg-border-strong mb-6" />
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-16">
          Experience
        </h2>

        {/* Experience Items */}
        <div className="space-y-0">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group border-t py-5 md:py-7 last:border-b border-border"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left: Meta */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-text-tertiary tracking-wide mb-1">
                    {exp.period}
                  </p>
                  <p className="text-sm text-text-tertiary">
                    {exp.location}
                  </p>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-base text-text-secondary mb-6">
                    {exp.company}
                    {"type" in exp && exp.type && (
                      <span className="text-text-tertiary"> · {exp.type}</span>
                    )}
                  </p>

                  {/* Project */}
                  <div className="mb-6">
                    <p className="text-xs tracking-widest text-text-tertiary uppercase mb-2">
                      Project
                    </p>
                    <p className="text-sm text-text-secondary">{exp.project}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-bg-secondary text-text-tertiary text-xs font-medium tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {/* <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="shrink-0 w-1 h-1 rounded-full bg-text-tertiary mt-2.5" />
                        <span className="text-sm text-text-secondary leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
