"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ExternalLink, Layers, Filter } from "lucide-react"

const allTags = ["All", "ReactJS", "Redux", "Tailwind CSS", "Socket.IO", "TypeScript", "REST APIs", "NestJS"]

const projects = [
  {
    title: "Krackitt",
    description:
      "Education platform with mock tests, study material, and e-book modules. Built scalable components for student dashboards, exam analytics, and performance tracking with real-time data visualization.",
    tags: ["ReactJS", "Redux", "REST APIs", "TypeScript"],
    highlights: [
      "Scalable component architecture for education modules",
      "Real-time analytics with performance tracking graphs",
      "State management using Redux Toolkit/Context API",
    ],
    color: "from-chart-1/10 to-chart-1/5",
    link: "https://krackitt.com/",
  },
  {
    title: "AllayPay",
    description:
      "Payment gateway agent portal enabling merchant onboarding, application tracking, and commission dashboards. Features role-based access control and real-time transaction data display.",
    tags: ["ReactJS", "Redux", "REST APIs", "NestJS", "TypeScript"],
    highlights: [
      "Merchant registration and application tracking",
      "Role-based access control for agent workflows",
      "Commission dashboards with secure API integration",
    ],
    color: "from-chart-2/10 to-chart-2/5",
    link: "https://allaypay.com/",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with secure messaging, optimized performance, and responsive cross-platform design built with modern web technologies.",
    tags: ["ReactJS", "Tailwind CSS", "Redux", "Socket.IO"],
    highlights: [
      "Real-time messaging with Socket.IO",
      "Responsive cross-platform design",
      "Secure and optimized chat performance",
    ],
    color: "from-chart-3/10 to-chart-3/5",
  },
  {
    title: "Socials (by Quikit)",
    description:
      "Social media content scheduling and management platform. Developed interactive, responsive interfaces for planning and publishing across social channels.",
    tags: ["ReactJS", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Interactive content scheduling interface",
      "Social media channel management",
      "High performance user engagement features",
    ],
    color: "from-chart-4/10 to-chart-4/5",
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView()
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className={cn("mb-8", isInView ? "animate-fade-up" : "opacity-0")}>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary font-mono">Portfolio</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
            A selection of projects that showcase my skills in building real-world applications.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          className={cn(
            "mb-10 flex flex-wrap items-center gap-2",
            isInView ? "animate-fade-up animation-delay-200" : "opacity-0"
          )}
        >
          <Filter className="h-4 w-4 text-muted-foreground mr-1" />
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                activeFilter === tag
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className={cn(
                "group relative overflow-hidden rounded-lg border border-border/50 bg-gradient-to-br from-card to-card/50 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:from-card hover:to-primary/5",
                isInView ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              {/* Gradient top bar */}
              <div className={cn("h-0.5 w-full bg-gradient-to-r", project.color)} />

              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/15 shrink-0 mt-0.5">
                      <Layers className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground truncate">{project.title}</h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-all opacity-0 group-hover:opacity-100 hover:text-primary hover:bg-primary/10 shrink-0"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-3">
                  {project.highlights.slice(0, 2).map((h, hi) => (
                    <li key={hi} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                      <span className="mt-1 h-0.5 w-0.5 shrink-0 rounded-full bg-primary" />
                      <span className="line-clamp-1">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
            <Layers className="h-10 w-10 text-muted-foreground/40 mb-3" />
            <p className="text-sm text-muted-foreground">No projects match this filter.</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-3 text-xs font-medium text-primary hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
