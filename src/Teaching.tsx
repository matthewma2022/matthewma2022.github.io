import cornell from "../src/assets/cornell.png";
import weill from "../src/assets/weill.png";
import washington from "../src/assets/washington.png"

export type TeachingItem = {
  school: string;
  role: string;
  course: string;
  term: string;
  logo?: string;
};

export const TEACHING: readonly TeachingItem[] = [
  {
    school: "Cornell University",
    role: "Teaching Assistant",
    course: "Clinical Natural Language Processing and Large-Language Models",
    term: "Spring 2025",
    logo: cornell,
  },
  {
    school: "Weill Cornell Medicine",
    role: "Teaching Assistant",
    course: "Natural Language Processing &Health Informatics",
    term: "Spring 2025",
    logo: weill,
  },
  {
    school: "Weill Cornell Medicine",
    role: "Teaching Assistant",
    course: "Introduction to GPT & LLMs in Clinical & Translation Research",
    term: "Spring 2025",
    logo: weill,
  },
  {
    school: "University of Washington",
    role: "Teaching Assistant",
    course: "Developmental Psychology",
    term: "Spring 2022",
    logo: washington,
  },
] as const;

