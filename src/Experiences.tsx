export const EXPERIENCES = [
  {
    role: "Senior Research Assistant",
    company: "Weill Cornell Medicine",
    location: "New York, NY",
    start: "05.2025",
    end: "Present",
  },
  {
    role: "Research Assistant",
    company: "Weill Cornell Medicine",
    location: "New York, NY",
    start: "09.2024",
    end: "05.2025",
    points: [
      "Employed NLP techniques to analyze variant re-classifications such as breast cancer variants BRCA",
      "Implemented TensorFlow, PyTorch, and spaCy for text pre-processing and machine learning model development",
      "Processed and analyzed large-scale datasets on sources such as ClinVar and PubMed",
      "Built a clinical web interface using HTML, JavaScript, and CSS to provide user-friendly healthcare tools",
      "Collaborated with lab members on drafting papers targeting leading conferences such as ACL and MedInfo"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "NLTK", "spaCy", "HTML", "CSS", "JavaScript"],
  },
  {
    role: "Project Manager",
    company: "Columbia University",
    location: "New York, NY",
    start: "09.2023",
    end: "04.2024",
  },
  {
    role: "Research Assistant",
    company: "University of Washington",
    location: "Seattle, WA",
    start: "06.2021",
    end: "03.2022",
    points: [
      "Collected data from weekly monitored python learning advancements of 90+ student subjects",
      "Organized and cleaned 3200+ raw data using Python",
      "Conducted a series of statistical modelings including residual analysis, A/B Testing, and regression analysis",
      "Collaborated with other teams on moderating the experimental design of the study"
    ],
    skills: ["Python", "A/B Testing", "Regression Analysis", "Data Cleaning"],
  },
] as const;