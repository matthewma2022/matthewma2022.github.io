export const EXPERIENCES = [
  {
    role: "Research Assistant",
    company: "Weill Cornell Medical Center",
    location: "New York, NY",
    start: "2024",
    end: "Present",
    points: [
      "Built NLP pipelines for biomedical text (entity extraction, classification, retrieval).",
      "Developed LLM-assisted annotation / weak supervision workflows for faster dataset curation.",
      "Collaborated with clinicians; maintained reproducible experiments with clear reports and tests.",
    ],
    skills: ["Python", "PyTorch", "Hugging Face", "NLP", "LLMs"],
  },
  {
    role: "Teaching Assistant",
    company: "Columbia University",
    location: "New York, NY",
    start: "2023",
    end: "2024",
    points: [
      "Led weekly recitations and office hours; created concise review materials.",
      "Designed and graded programming assignments with detailed, actionable feedback.",
    ],
    skills: ["Teaching", "Python", "Machine Learning"],
  },
  // Add more roles here…
] as const;