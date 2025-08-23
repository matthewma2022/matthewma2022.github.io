import React from "react";
import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, FileText, ArrowRight, GraduationCap, FlaskConical, BookText, Briefcase } from "lucide-react";

import headshot from "./assets/headshot.png";

// This file is ready to drop into a React + TypeScript app as src/App.tsx
// It uses TailwindCSS utility classes, framer-motion, and lucide-react icons.
// Replace placeholders (Your Name, links, etc.) before deploying.

// Accent palette (orange)
const ACCENT = {
  bg: "bg-orange-500",
  bgSoft: "bg-orange-100",
  text: "text-orange-500",
  ring: "ring-orange-500/30",
  hover: "hover:bg-orange-600",
  gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
} as const;

type ChildrenProps = { children: React.ReactNode };

const Badge: React.FC<ChildrenProps> = ({ children }) => (
  <span className={`inline-flex items-center rounded-full ${ACCENT.bgSoft} px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10`}>{children}</span>
);

const Card: React.FC<ChildrenProps & { className?: string }> = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-shadow hover:shadow-md ${className}`}>{children}</div>
);

const Section: React.FC<{ id: string; title: string } & ChildrenProps> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-14 sm:py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center gap-3">
        <div className={`h-8 w-1 rounded-full ${ACCENT.bg}`}></div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100 text-zinc-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/icon.svg`} 
              alt="Haotian Ma logo"
              className="h-8 w-8"
            />
            <span className="text-sm font-semibold tracking-wide text-zinc-900">Haotian Ma</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-zinc-700 sm:flex">
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#research" className="hover:text-zinc-900">Research</a>
            <a href="#publications" className="hover:text-zinc-900">Publications</a>
            <a href="#projects" className="hover:text-zinc-900">Projects</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#cv"
              className={`hidden sm:inline-flex items-center gap-2 rounded-xl ${ACCENT.bg} px-4 py-2 text-sm font-semibold text-white shadow-sm ${ACCENT.hover} focus:outline-none focus:ring-4 ${ACCENT.ring}`}
            >
              <FileText className="h-4 w-4" /> CV
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                "matthewma2022@gmail.com"
              )}&su=${encodeURIComponent("PhD Inquiry from [Your Name]")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${ACCENT.gradient}`}></div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:grid-cols-2 sm:py-24">
          <div>
            {/* <Badge>PhD Application Portfolio</Badge> */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">Haotian(Matthew) Ma</h1>
            <p className="mt-4 max-w-prose text-zinc-600">
              I’m an aspiring researcher focused on <span className={ACCENT.text}>[Your Field]</span>. My interests include
              <strong> Topic A</strong>, <strong> Topic B</strong>, and <strong> Method C</strong>. I’m applying for Fall 2026 PhD programs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-xl ${ACCENT.bg} px-5 py-2.5 text-sm font-semibold text-white shadow-sm ${ACCENT.hover} focus:outline-none focus:ring-4 ${ACCENT.ring}`}
              >
                Contact Me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#selected"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 ring-zinc-300/60"
              >
                See Selected Work
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-zinc-500">
              <a href="https://github.com/matthewma2022" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-800"><Github className="h-4 w-4" /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-800"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href="#cv" className="flex items-center gap-2 hover:text-zinc-800"><Download className="h-4 w-4" /> Download CV</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative max-w-[260px] sm:max-w-[320px] w-full ml-auto">
              <div className={`absolute -inset-4 -z-10 rounded-3xl blur-2xl ${ACCENT.bgSoft}`}></div>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-md">
                <img
                  src={headshot}
                  alt="Haotian Ma headshot"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card className="p-6 sm:col-span-2">
            <h3 className="text-lg font-semibold text-zinc-900">Short Bio</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              I’m currently a Research Assistant at Weill Cornell Medical Center. I build models and systems for <em>your research area</em> and have
              published/participated in projects spanning [X, Y, Z]. I enjoy working at the intersection of theory and real-world applications.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3"><GraduationCap className={`${ACCENT.text} mt-1 h-5 w-5`} /><span><strong>Education:</strong> B.S./M.S. in Columbia University, 2024</span></li>
              <li className="flex items-start gap-3"><Briefcase className={`${ACCENT.text} mt-1 h-5 w-5`} /><span><strong>Experience:</strong> Research Assistant @ Weill Cornell Meidcal Center; Teaching Assistant</span></li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Core Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "QuantLib", "NLP", "Computer Vision", "SQL"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* RESEARCH INTERESTS */}
      <Section id="research" title="Research Interests">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { icon: <FlaskConical className={`${ACCENT.text} h-5 w-5`} />, title: "Area 1", desc: "A concise line describing your interest and why it matters." },
            { icon: <BookText className={`${ACCENT.text} h-5 w-5`} />, title: "Area 2", desc: "Another line about problems you want to solve." },
            { icon: <FlaskConical className={`${ACCENT.text} h-5 w-5`} />, title: "Area 3", desc: "A brief, compelling impact statement." },
          ].map((item, i) => (
            <Card className="p-6" key={i}>
              <div className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">{item.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PUBLICATIONS / SELECTED WORK */}
      <Section id="publications" title="Selected Publications / Preprints">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="p-6">
              <p className="text-xs uppercase tracking-wide text-zinc-500">{`20${20 + i}`}</p>
              <h4 className="mt-1 text-lg font-semibold text-zinc-900">Paper Title Goes Here</h4>
              <p className="mt-1 text-sm text-zinc-600">Author A, <strong>Your Name</strong>, Author C</p>
              <p className="mt-2 text-sm text-zinc-600">One-liner summary of the contribution or result. Add a link to arXiv or DOI below.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a className={`inline-flex items-center gap-2 rounded-lg ${ACCENT.bgSoft} px-3 py-1.5 text-xs font-semibold text-orange-800 ring-1 ring-orange-600/10`} href="#" target="_blank" rel="noreferrer">arXiv</a>
                <a className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50" href="#" target="_blank" rel="noreferrer">PDF</a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-36 w-full bg-gradient-to-br from-zinc-200 via-zinc-100 to-white"></div>
              <div className="p-6">
                <h4 className="text-base font-semibold text-zinc-900">Project {i}</h4>
                <p className="mt-1 text-sm text-zinc-600">Brief description of what you built and the impact or result.</p>
                <div className="mt-3 flex gap-3">
                  <a className={`rounded-lg ${ACCENT.bg} px-3 py-1.5 text-xs font-semibold text-white ${ACCENT.hover}`}>Demo</a>
                  <a className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50">Code</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in touch">
        <Card className="p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">Let’s talk</h3>
              <p className="mt-2 text-sm text-zinc-600">I’m excited to discuss research directions and potential advising fit. Email is best for a quick response.</p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    "matthewma2022@gmail.com"
                  )}&su=${encodeURIComponent("PhD Inquiry from [Your Name]")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <Mail className={`${ACCENT.text} h-4 w-4`} />
                  matthewma2022@gmail.com
                </a>
                <a href="https://github.com/matthewma2022" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"><Github className={`${ACCENT.text} h-4 w-4`} /> github.com/matthewma2022</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"><Linkedin className={`${ACCENT.text} h-4 w-4`} /> linkedin.com/in/yourhandle</a>
              </div>
            </div>
            <form className="grid grid-cols-1 gap-4">
              <input placeholder="Name" className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 ring-zinc-300/60" />
              <input placeholder="Email" className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 ring-zinc-300/60" />
              <textarea placeholder="Message" rows={4} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 ring-zinc-300/60"></textarea>
              <button type="button" className={`inline-flex items-center justify-center gap-2 rounded-xl ${ACCENT.bg} px-5 py-2.5 text-sm font-semibold text-white shadow-sm ${ACCENT.hover} focus:outline-none focus:ring-4 ${ACCENT.ring}`}>
                Send Message
              </button>
            </form>
          </div>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">© {new Date().getFullYear()} Haotian Ma. All rights reserved.</div>
      </footer>
    </div>
  );
}
