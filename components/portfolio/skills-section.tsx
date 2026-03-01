"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Socket.IO", level: 75 },
      { name: "Git/GitHub", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "Axios", level: 85 },
      { name: "Redux Toolkit", level: 82 },
      { name: "Context API", level: 80 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Responsive Design", level: 92 },
      { name: "Performance Optimization", level: 85 },
      { name: "Code Splitting", level: 80 },
      { name: "Lazy Loading", level: 82 },
      { name: "React Memoization", level: 80 },
      { name: "UI/UX Implementation", level: 85 },
    ],
  },
]

function SkillBar({ name, level, delay, isInView }: { name: string; level: number; delay: number; isInView: boolean }) {
  return (
    <div
      className={cn(
        "space-y-2 transition-all duration-500",
        isInView ? "animate-fade-up" : "opacity-0"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : "0%",
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className={cn("mb-12", isInView ? "animate-fade-up" : "opacity-0")}>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary font-mono">Tech Stack</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
            Proficient in modern frontend technologies with a focus on building performant, accessible applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={cn(
                "rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md",
                isInView ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${catIdx * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 150 + skillIdx * 80}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
