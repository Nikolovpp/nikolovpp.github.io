export interface TimelineItem {
    year: string;
    role: string;
    institution: string;
    description?: string;
    url?: string;
}

export const timelineData: TimelineItem[] = [
    {
        year: "2024 - Present",
        role: "Post-Doctoral Research Affiliate",
        institution: "Georgetown University Medical Center",
        description: "Investigating neural dynamics of auditory and spoken word speech processing using computational models.",
    },
    {
        year: "2018 - 2024",
        role: "PhD in Neuroscience",
        institution: "Georgetown University",
        description: "Doctoral Thesis: Neural dynamics underlying speech perception and production. NIH T32 & TL1 Fellow.",
    },
    {
        year: "2019",
        role: "Research Fellow",
        institution: "Lawrence Livermore National Laboratory",
        description: "Built connectome-based ML framework using post-injury fMRI to model recovery trajectories.",
    },
    {
        year: "2014 - 2018",
        role: "Research Engineer",
        institution: "Johns Hopkins University",
        description: "Built patient-specific cardiac 'digital twins' and ran large-scale EP simulations for arrhythmia prediction. Delivered first clinical trial using virtual heart tech.",
    },
    {
        year: "2011 - 2013",
        role: "MS in Biomedical Engineering",
        institution: "Virginia Commonwealth University",
        description: "Thesis on cognitive-visuomotor multitasking and dynamic functional connectivity.",
    },
    {
        year: "2008 - 2011",
        role: "BS in Biomedical Engineering",
        institution: "Virginia Commonwealth University",
        description: "Senior Capstone: Designed visual stimulus-based BCI system with real-time EEG processing.",
    }
];
