"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Mail, Phone, Github, Linkedin, MapPin, Send, Heart, ArrowUp } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sitolenehasitole@gmail.com",
    href: "mailto:sitolenehasitole@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09171136190",
    href: "tel:09171136190",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Neha0021",
    href: "https://github.com/Neha0021",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/neha-s-553851192",
    href: "https://linkedin.com/in/neha-s-553851192",
  },
]

const interests = ["Coding", "Development", "Teaching", "Photography"]

export function ContactSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className={cn("mb-12", isInView ? "animate-fade-up" : "opacity-0")}>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary font-mono">Connect</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Let's Work Together"}
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Contact cards */}
          <div className="lg:col-span-3 grid gap-3 sm:grid-cols-2">
            {contactLinks.map((contact, i) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md",
                  isInView ? "animate-fade-up" : "opacity-0"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <contact.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{contact.label}</p>
                  <p className="mt-1 text-sm font-medium text-foreground truncate">{contact.value}</p>
                </div>
                <Send className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/0 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 space-y-3">
            {/* Location card */}
            <div
              className={cn(
                "rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30",
                isInView ? "animate-fade-up animation-delay-400" : "opacity-0"
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</span>
              </div>
              <p className="text-base font-semibold text-foreground">Bhopal, Madhya Pradesh</p>
              <p className="text-sm text-muted-foreground mt-1">India</p>
            </div>

            {/* Interests card */}
            <div
              className={cn(
                "rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30",
                isInView ? "animate-fade-up animation-delay-500" : "opacity-0"
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className={cn(
                "rounded-xl border border-primary/20 bg-primary/5 p-5",
                isInView ? "animate-fade-up animation-delay-600" : "opacity-0"
              )}
            >
              <p className="text-sm text-foreground font-medium mb-3">Ready to start a project?</p>
              <a
                href="mailto:sitolenehasitole@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"Designed & built by Neha Sitole"}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Neha0021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/neha-s-553851192"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:sitolenehasitole@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:text-foreground hover:border-primary/50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  )
}
