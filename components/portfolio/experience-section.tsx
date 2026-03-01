"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    type: "work" as const,
    title: "Software Developer (ReactJS)",
    company: "MoreYeahs",
    period: "Mar 2024 - Present",
    points: [
      "Developed and maintained responsive, user-friendly web applications using ReactJS, Redux, Tailwind CSS, JavaScript (ES6+), and TypeScript",
      "Built reusable UI components aligned with Figma designs to ensure consistency and cross-device responsiveness",
      "Implemented state management with Redux for predictable data flow and efficient application performance",
      "Optimized applications through lazy loading, code splitting, and React memoization",
      "Integrated RESTful APIs for dynamic data rendering and seamless user experiences",
      "Enhanced user engagement with real-time updates using Socket.IO",
      "Contributed to code reviews, debugging, and deployment, ensuring maintainable and high-quality frontend code",
    ],
  },
  {
    type: "education" as const,
    title: "Bachelor of Technology",
    company: "Rustamji Institute of Technology, BSF Academy (RGPV)",
    period: "2019 - 2023",
    points: [
      "Graduated from Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP",
      "Built a strong foundation in computer science and software engineering principles",
    ],
  },
  {
    type: "education" as const,
    title: "12th Grade",
    company: "MP Board, Bhopal",
    period: "2017",
    points: [
      "Completed higher secondary education with focus on Science stream",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className={cn("mb-12", isInView ? "animate-fade-up" : "opacity-0")}>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary font-mono">Journey</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
            A timeline of my professional journey and academic background.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.title}-${exp.period}`}
                className={cn(
                  "relative flex flex-col md:flex-row",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  isInView ? "animate-fade-up" : "opacity-0"
                )}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Content card */}
                <div className={cn(
                  "ml-12 md:ml-0 md:w-[calc(50%-2rem)]",
                  i % 2 === 0 ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                )}>
                  <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {exp.type === "work" ? (
                          <Briefcase className="h-4 w-4" />
                        ) : (
                          <GraduationCap className="h-4 w-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-foreground leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mt-0.5">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mb-4 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, pi) => (
                        <li key={pi} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
