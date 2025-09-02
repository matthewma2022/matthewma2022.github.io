import abcdImg from "../src/assets/abcd-2.jpg";
import airImg from "../src/assets/air.jpg";

export type Project = {
  title: string;
  org: string;
  year: string;
  image?: string;
  bullets: readonly string[];
//   tags?: readonly string[];
  link?: string
};

export const PROJECTS: readonly Project[] = [
  {
    title: "ABCD (Dyadic Cluster Analysis for Comorbidity in Psychiatric Disorders in Children)",
    org: "Columbia University",
    year: "2024",
    image: abcdImg,
    bullets: [
      "Performed data-cleaning and exploratory data analysis on ABCD data, encompassing 11,000+ participants and 90 diagnoses in order to investigate comorbidity in psychiatric disorders in children",
      "Categorized participants using cluster analysis techniques, including K-means and Latent Class Analysis then investigated cluster differences using One-Way ANOVA and other statistical tests",
      "Implemented the Ising model and Lasso-regularized logistic regression to estimate a network of diagnoses, while also performing community detection algorithms and clique percolation methods for graph structure learning",
      "Applied Linear Mixed-Effect models, Type III ANOVA, and Estimated Marginal Means to scrutinize T1-weighted and DTI data",
    ],
    // tags: ["ABCD", "K-means", "LCA", "ANOVA", "Ising", "Lasso", "LME", "DTI", "R / R Shiny"],
  },
  {
    title: "Breathing Air Project (BAP)",
    org: "Columbia University",
    year: "2023",
    image: airImg, 
    bullets: [
      "Executed thorough data management, encompassing raw data collection, cleaning, and preparation for end-to-end processes in R, aiming to investigate the relationship between Air Quality Index and environmentally related diseases",
      "Employed Pearson’s CHI-Squared Test and Welch Two Sample T-test to analyze the interplay between different environmental factors and their impact on air quality and disease prevalence",
      "Leveraged R Shiny to develop an interactive website interface, and R for data visualization to effectively display results on maps",
    ],
    // tags: ["Air Quality", "Epi", "R", "R Shiny", "Pearson χ²", "Welch t-test", "Visualization"],
    link: "https://github.com/suningzhao26/p8105_final_BAP"
  },
] as const;