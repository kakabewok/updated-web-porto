import { ArrowUpRight } from "lucide-react";
import { certificatesData } from "../data/data";
import Image from "next/image";

function Certificates() {
  const currentCerts = certificatesData.slice(0, 3);

  return (
    <section id="certificates" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm tracking-widest text-text-tertiary uppercase mb-4">
          Credentials
        </p>
        <div className="w-12 h-px bg-border-strong mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-4 md:mb-0">
            Certificates
          </h2>
          <p className="text-text-secondary text-sm max-w-md">
            Professional certifications and completed courses.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentCerts.map((cert) => (
            <article
              key={cert.id}
              className="group bg-bg-card border border-border hover:border-border-strong transition-colors flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                <Image
                  src={cert.image_path}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-text-primary tracking-tight mb-1.5 line-clamp-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm text-text-secondary mb-1">
                  {cert.issuing_organization}
                </p>

                {/* Link */}
                <a
                  href={cert.preview_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-accent transition-colors group/link"
                >
                  <span>View Credential</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 flex flex-col items-center">
          <p className="text-sm text-text-secondary mb-3">
            +50 more certifications available on LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/noprizal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-accent transition-colors group/link"
          >
            <span>View All</span>
            <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
