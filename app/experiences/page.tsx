import Link from "next/link";
import { EXPERIENCES } from "@/lib/data/mock-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function ExperiencesPage() {
  return (
    <div className="w-full bg-surface-container-lowest min-h-screen pt-20">
      {/* Top Taxonomy Header */}
      <div className="w-full px-4 sm:px-8 lg:px-margin pt-space-md pb-space-lg hairline-b">
        <div className="flex items-center gap-2 font-meta-bracket text-meta-bracket text-secondary uppercase mb-1">
          <Link href="/" className="hover:text-primary transition-colors">
            [Riley’s]
          </Link>
          <span>/</span>
          <span>[Social Roster]</span>
          <span>/</span>
          <span>[Live Experiences]</span>
        </div>
        <h1 className="font-display-hero text-3xl sm:text-5xl text-primary tracking-tight">
          Experiences &amp; Events
        </h1>
        <p className="font-body-md text-secondary mt-1 max-w-xl">
          Curated musical rituals, sensory mixology tastings, and low-and-slow
          smokehouse Sundays on our open-air Lusaka deck.
        </p>
      </div>

      {/* Events Grid */}
      <div className="w-full px-4 sm:px-8 lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col justify-between bg-surface-container-low hairline-border overflow-hidden hover:bg-surface-container transition-all duration-300"
            >
              {/* Event Image */}
              <div className="w-full h-56 relative overflow-hidden bg-surface-container">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-meta-bracket text-[11px] bg-primary/80 text-white backdrop-blur-sm px-2 py-1">
                    {exp.tag}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-space-md flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-meta-bracket text-xs text-secondary flex items-center gap-1.5 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.dateOrSchedule}</span>
                  </span>

                  <h3 className="font-headline-sm text-xl text-primary font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <span className="font-body-sm text-primary font-medium block mb-3">
                    {exp.subtitle}
                  </span>

                  <p className="font-body-sm text-secondary leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-3 hairline-t">
                  <Link
                    href="/reservations"
                    className="w-full bg-primary text-on-primary py-3 font-action-label text-action-label uppercase tracking-widest text-center hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Reserve For This Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
