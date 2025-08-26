import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download, Github, Linkedin, FileText, ArrowRight, GraduationCap, FlaskConical, BookText, Briefcase, MapPin, Calendar, Link2 } from "lucide-react";

import headshot from "./assets/headshot.jpg";
import { EXPERIENCES } from "./Experiences";
import { INTERESTS } from "./Interests";

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
            <a href="#research" className="hover:text-zinc-900">Research Interests</a>
            <a href="#publications" className="hover:text-zinc-900">Publications</a>
            <a href="#profession" className="hover:text-zinc-900">Professional Experience</a>
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
              My superpower is turning "it's not working" into "it's not working yet". Also, I can make coffee disappear.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-xl ${ACCENT.bg} px-5 py-2.5 text-sm font-semibold text-white shadow-sm ${ACCENT.hover} focus:outline-none focus:ring-4 ${ACCENT.ring}`}
              >
                Contact Me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#publications"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-4 ring-zinc-300/60"
              >
                See Selected Work
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-zinc-500">
              <a href="https://github.com/matthewma2022" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-800"><Github className="h-4 w-4" /> GitHub</a>
              <a href="https://www.linkedin.com/in/haotian-matthew-ma/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-800"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href="#cv" className="flex items-center gap-2 hover:text-zinc-800"><Download className="h-4 w-4" /> Download CV</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative max-w-[380px] sm:max-w-[450px] w-full ml-auto">
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
          <Card className="p-6 sm:col-span-2 sm:min-h-[360px]">
            <h3 className="text-lg font-semibold text-zinc-900">Short Bio</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              I'm a researcher by day and... well, mostly a researcher by night, too. My work involves exploring NLP, Computational Psychiatry, and Computer Vision fields where I've become an expert in asking questions that data insn't always ready to answer. {' '}
              I thrive on the challenge of turning a "this can't be right" into a "eureka!" moment, even if it takes a few (hundred) tries.
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              This journey has taught me that the most important tool in any lab isn't a microscope or a supercomputer, but stubborn optimism. It's what keeps me going after the tenth failed experiment or when a bug in my code seems to have developed a personality.
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              I'm eager to bring my passion for tackling complex problems and my well-practiced perserverrance to a PhD program where I can continue to contribute to the ever-expanding boundaries of computer science.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-1">
              <li className="flex items-start gap-3"><GraduationCap className={`${ACCENT.text} mt-1 h-5 w-5`} /><span><strong>Education:</strong> M.S. in Columbia University, 2024; B.S. and B.A. in University of Washington, 2022</span></li>
              <li className="flex items-start gap-3"><Briefcase className={`${ACCENT.text} mt-1 h-5 w-5`} /><span><strong>Experience:</strong> Research Assistant @ Weill Cornell Medicine; Teaching Assistant</span></li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Core Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "NLP", "Computer Vision", "Machine Learning", "SQL", "SAS", "Rstudio", "Linux"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* RESEARCH INTERESTS */}
      <Section id="research" title="Research Interests">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {INTERESTS.map((item, i) => (
            <Card className="p-6" key={i}>
              <div className="flex items-start gap-3">
                <item.Icon
                  size={24}                              
                  className={`${ACCENT.text} shrink-0`}                          
                />
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
      <Section id="publications" title="Publications">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card key="1" className="p-6">
            <p className="text-xs uppercase tracking-wide text-zinc-500">{2025}</p>
            <h4 className="mt-1 text-lg font-semibold text-zinc-900">A Pilot Meta-research on Evolving Evidence Behind Genetic Variant (Re)Classification</h4>
            <p className="mt-1 text-sm text-zinc-600"><strong>Haotian Ma</strong>, Zihan Xu, Wendy Chung, Chunhua Weng, Yifan Peng</p>
            <p className="mt-2 text-sm text-zinc-600">Reclassification of BRCA1/2 VUS often relies on incomplete, outdated, or insufficient evidence, highlighting the need for stronger data and more diverse population studies to improve clinical decision-making.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className={`inline-flex items-center gap-2 rounded-lg ${ACCENT.bgSoft} px-3 py-1.5 text-xs font-semibold text-orange-800 ring-1 ring-orange-600/10`} href="https://pubmed.ncbi.nlm.nih.gov/40775829/" target="_blank" rel="noreferrer">PubMed</a>
            </div>
          </Card>
          <Card key="2" className="p-6">
            <p className="text-xs uppercase tracking-wide text-zinc-500">{2025}</p>
            <h4 className="mt-1 text-lg font-semibold text-zinc-900">Natural Language Processing in Support of Evidence-based Medicine: A Scoping Review</h4>
            <p className="mt-1 text-sm text-zinc-600">Zihan Xu, <strong>Haotian Ma</strong>, Gongbo Zhang, Yihao Ding, Chunhua Weng, Yifan Peng</p>
            <p className="mt-2 text-sm text-zinc-600">This survey reviews 129 studies on using NLP to support all five steps of evidence-based medicine, highlighting its potential to transform clinical decision-making through improved evidence extraction, synthesis, and appraisal.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className={`inline-flex items-center gap-2 rounded-lg ${ACCENT.bgSoft} px-3 py-1.5 text-xs font-semibold text-orange-800 ring-1 ring-orange-600/10`} href="https://arxiv.org/abs/2505.22280" target="_blank" rel="noreferrer">arXiv</a>
            </div>
          </Card>
          <Card key="3" className="p-6">
            <p className="text-xs uppercase tracking-wide text-zinc-500">{2025}</p>
            <h4 className="mt-1 text-lg font-semibold text-zinc-900">A Multi-Stage Large Language Model Framework for Extracting Suicide-Related Social Determinants of Health</h4>
            <p className="mt-1 text-sm text-zinc-600">Song Wang, Yishu Wei, <strong>Haotian Ma</strong>, Max Lovitt, Kelly Deng, Yuan Meng, Zihan Xu, Jingze Zhang, Yunyu Xiao, Ying Ding, Xuhai Xu, Joydeep Ghosh, Yifan Peng</p>
            <p className="mt-2 text-sm text-zinc-600">This study presents a multi-stage LLM framework that improves accuracy, efficiency, and explainability in extracting suicide-related social determinants of health from unstructured text, supporting earlier risk identification and prevention.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className={`inline-flex items-center gap-2 rounded-lg ${ACCENT.bgSoft} px-3 py-1.5 text-xs font-semibold text-orange-800 ring-1 ring-orange-600/10`} href="https://www.arxiv.org/abs/2508.05003" target="_blank" rel="noreferrer">arXiv</a>
            </div>
          </Card>
          <Card key="4" className="p-6">
            <p className="text-xs uppercase tracking-wide text-zinc-500">{2024}</p>
            <h4 className="mt-1 text-lg font-semibold text-zinc-900">Suicide Risk Assessment on Social Media with Semi-Supervised Learning</h4>
            <p className="mt-1 text-sm text-zinc-600">Max Lovitt, <strong>Haotian Ma</strong>, Song Wang, Yifan Peng</p>
            <p className="mt-2 text-sm text-zinc-600">This study introduces a semi-supervised, RoBERTa-based framework with novel pseudo-labeling to address data scarcity and imbalance, significantly enhancing suicide risk assessment from social media posts.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className={`inline-flex items-center gap-2 rounded-lg ${ACCENT.bgSoft} px-3 py-1.5 text-xs font-semibold text-orange-800 ring-1 ring-orange-600/10`} href="https://pubmed.ncbi.nlm.nih.gov/39896202/" target="_blank" rel="noreferrer">PubMed</a>
            </div>
          </Card>
        </div>
      </Section>

      {/* PROFESSIONAL EXPERIENCE */}
      <Section id="profession" title="Professional Experience">
        <Card className="p-6">
          <ol className="relative border-l border-zinc-200">
            {EXPERIENCES.map((job, idx) => (
              <li key={idx} className="relative ml-8 py-4">
                {/* timeline dot */}
                <span className={`absolute -left-4 top-5 h-3 w-3 rounded-full ${ACCENT?.bg ?? "bg-orange-500"} ring-4 ring-white`} />

                {/* header line */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {job.role} <span className="text-zinc-400">-</span>{" "}
                    {job.company}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {job.start} — {job.end}
                    </span>
                  </div>
                </div>

                {/* location */}
                <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>

                {/* bullets */}
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                {/* tags */}
                {job.skills?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </Card>
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
                <a target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"><Phone className={`${ACCENT.text} h-4 w-4`} /> (206) 696-6842</a>
                <a href="https://github.com/matthewma2022" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"><Github className={`${ACCENT.text} h-4 w-4`} /> github.com/matthewma2022</a>
                <a href="https://www.linkedin.com/in/haotian-matthew-ma/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"><Linkedin className={`${ACCENT.text} h-4 w-4`} /> linkedin.com/in/haotian-matthew-ma</a>
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
