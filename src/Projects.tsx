import abcdImg from "../src/assets/abcd.jpg";
import airImg from "../src/assets/air.jpg";

export type Project = {
  title: string;
  org: string;
  year: string;
  image?: string;
  bullets: readonly string[];
  tags?: readonly string[];
  link?: string
};

export const PROJECTS: readonly Project[] = [
  {
    title: "ABCD (Dyadic Cluster Analysis for Comorbidity in Psychiatric Disorders in Children)",
    org: "Columbia University",
    year: "2024",
    image: abcdImg,
    bullets: [
      "Performed data cleaning and EDA on ABCD data (11,000+ participants, 90 diagnoses).",
      "Categorized participants with K-means and Latent Class Analysis; tested cluster differences via one-way ANOVA and related tests.",
      "Estimated diagnosis networks using the Ising model and Lasso-regularized logistic regression; applied community detection and clique percolation.",
      "Applied Linear Mixed-Effects models, Type III ANOVA, and Estimated Marginal Means on T1-weighted & DTI data.",
    ],
    tags: ["ABCD", "K-means", "LCA", "ANOVA", "Ising", "Lasso", "LME", "DTI", "R / R Shiny"],
  },
  {
    title: "Breathing Air Project",
    org: "Columbia University",
    year: "2023",
    image: airImg, 
    bullets: [
      "Managed end-to-end data workflow in R: raw data collection, cleaning, and preparation.",
      "Investigated relationships between Air Quality Index and environmentally related diseases.",
      "Applied Pearson’s Chi-squared and Welch’s two-sample t-tests to analyze environmental factors and disease prevalence.",
      "Built an interactive interface with R Shiny; visualized results on maps for communication.",
    ],
    tags: ["Air Quality", "Epi", "R", "R Shiny", "Pearson χ²", "Welch t-test", "Visualization"],
    link: "https://github.com/suningzhao26/p8105_final_BAP"
  },
] as const;