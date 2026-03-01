"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, ArrowDown, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView()

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Delivered", value: 6, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "Lines of Code", value: 50, suffix: "K+" },
]

export function HeroSection() {
  const { ref, isInView } = useInView()
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) clearInterval(timer)
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="relative min-h-screen pt-24 pb-12 flex flex-col justify-center" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        {/* Status badge */}
        <div className={`flex items-center gap-2 mb-8 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>
        </div>

        {/* Main hero content */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
              <span className="text-foreground">Neha Sitole</span>
            </h1>

            <div className={`flex items-center gap-2 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-xl sm:text-2xl font-medium text-primary font-mono">
                {typedText}
                <span className="animate-pulse ml-0.5 text-primary">|</span>
              </span>
            </div>

            <p className={`max-w-2xl text-base leading-relaxed text-muted-foreground ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
              ReactJS Developer with 2+ years of experience building responsive, user-friendly 
              web applications. Skilled in creating reusable UI components, implementing state 
              management, and ensuring cross-device responsiveness. Proficient in performance 
              optimization including lazy loading, code splitting, and React memoization. Strong focus on clean UI/UX, maintainable code, and deployment-ready solutions.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-3 ${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 animate-pulse-glow"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex items-center gap-3 pt-2 ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
              <a
                href="https://github.com/Neha0021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-muted"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/neha-s-553851192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-muted"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:sitolenehasitole@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-muted"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:09171136190"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-muted"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Stats Dashboard */}
          <div className={`lg:col-span-2 ${isInView ? 'animate-slide-in-right animation-delay-300' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md ${
                    isInView ? `animate-count-up animation-delay-${(i + 4) * 100}` : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-primary/[0.02] opacity-0 transition-opacity group-hover:opacity-100" />
                  <p className="text-2xl font-bold text-foreground sm:text-3xl">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Info Card */}
            <div className="mt-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Quick Info</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Bhopal, India</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Education</span>
                  <span className="text-foreground font-medium">B.Tech (RGPV)</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="text-foreground font-medium">English, Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
