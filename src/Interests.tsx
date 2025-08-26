// src/data/interests.tsx
import type { LucideIcon } from "lucide-react";
import { MessageSquareText, Brain, Microscope } from "lucide-react";

export type Interest = {
    Icon: LucideIcon; 
    title: string;
    desc: string;  
};

export const INTERESTS: readonly Interest[] = [
    {
        Icon: MessageSquareText,
        title: "Natural Language Processing",
        desc: `
        I'm drawn to NLP because I see it as a powerful translator. There's a vast and ever-growing
        library of medical knowledge that is largely inaccessible to busy clinicians at the point of care.
        My interest lies in building tools that can read, understand, and distill this information,
        effectively translating a sea of data into a single, clear recommendation. It's about ensuring
        that the latest breakthroughs don't just stay in journals, but actively improve patient care.
        `.trim(),
    },
    {
        Icon: Brain,
        title: "Computational Psychiatry",
        desc: `
        My interest in Computational Psychiatry stems from a desire to bring objectivity and foresight to 
        mental healthcare. I believe that what's hidden within complex behavioral and clinical data are subtle patterns
        that can signal a future crisis. I am driven by the challenge of uncovering these signals to create tools 
        that are capable of identifiying at-risk individuals sooner with greater accuracy. For me, this isn't just about 
        data; it's about providing a crucial window for intervention and ultimately, saving lives.
        `.trim(),
    },
    {
        Icon: Microscope,
        title: "Computer Vision for Cell Segmentation",
        desc: `
        I'm fascinated by Computer Vision because of its potential to automate and scale scientific discovery.
        Accurate cell segmentation is a fundamental bottleneck in biological research; it's the first step in truning an image 
        into data. My motivation is to solve this core challenge by creating a more robust and precise
        "digital eye" for scientists. By imporving this foundational tool, we can accelerate the pace of discovery 
        from disease research to drug development.
        `.trim(),
    },
] as const;

