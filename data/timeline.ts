export interface TimelineItem {
    year: string;
    role: string;
    institution: string;
    description?: string;
    logo?: string;
    // points key removed as we moved details to projects
}

export const timelineData: TimelineItem[] = [
    {
        year: "2024 - Present",
        role: "Post-Doctoral Research Affiliate",
        institution: "Georgetown University Medical Center",
        description: "Computational models of speech processing."
    },
    {
        year: "2018 - 2024",
        role: "PhD in Neuroscience",
        institution: "Georgetown University",
        description: "Thesis on Neural Dynamics of Speech. NIH T32 & TL1 Fellow."
    },
    {
        year: "2019",
        role: "Research Fellow",
        institution: "Lawrence Livermore National Laboratory",
        description: "ML framework for TBI recovery trajectories."
    },
    {
        year: "2014 - 2018",
        role: "Research Engineer",
        institution: "Johns Hopkins University",
        description: "Cardiac 'Digital Twins' and clinical trials for arrhythmia."
    },
    {
        year: "2011 - 2013",
        role: "MS in Biomedical Engineering",
        institution: "Virginia Commonwealth University",
        description: "Thesis on cognitive-visuomotor multitasking."
    },
    {
        year: "2008 - 2011",
        role: "BS in Biomedical Engineering",
        institution: "Virginia Commonwealth University",
        description: "Senior Capstone: Real-time BCI system."
    }
];
