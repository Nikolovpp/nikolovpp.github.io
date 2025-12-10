export interface Project {
    title: string;
    role: string;
    institution: string;
    year: string;
    description: string;
    points: string[];
    tags: string[];
    links: { label: string; url: string }[];
}

export const projects: Project[] = [
    {
        title: "Neural Dynamics of Speech Perception & Production",
        role: "PhD Researcher",
        institution: "Georgetown University",
        year: "2018 - 2024",
        description: "Investigation of computational models engaged during auditory and spoken word speech processing, with potential applications for neuroscience-based speech therapy.",
        points: [
            "Developed methods for EEG image acquisition and decoding of very fast (millisecond range) neural dynamics involving significant motion artifacts.",
            "Developed multivariate analysis pipelines using HPC clusters to analyze large neural image datasets (cut preprocessing time from 3 weeks to 2 days).",
            "Led interdisciplinary team investigating evidence of internal inverse and forward models in the brain.",
            "Secured independent funding (NIH T32 & TL1) and led grant proposals from concept to award."
        ],
        tags: ["Neuroscience", "EEG", "HPC", "Signal Processing"],
        links: []
    },
    {
        title: "Connectome-Based ML for TBI Recovery",
        role: "Research Fellow",
        institution: "Lawrence Livermore National Laboratory",
        year: "2019",
        description: "Built an end-to-end machine learning framework to model recovery trajectories in traumatic brain injury patients.",
        points: [
            "Built connectome-based ML framework using 2-week post-injury fMRI from the TRACK-TBI cohort.",
            "Processed functional connectivity matrices to extract graph/network features.",
            "Trained elastic net, ridge, and gradient boosting models to predict Glasgow Outcome Scale-Extended (GOSE) at 3/6/12 months."
        ],
        tags: ["Machine Learning", "fMRI", "Python", "TBI"],
        links: []
    },
    {
        title: "Cardiac 'Digital Twins' & Arrhythmia Prediction",
        role: "Research Engineer",
        institution: "Johns Hopkins University",
        year: "2014 - 2018",
        description: "Large-scale electrophysiology simulations to analyze and predict arrhythmia behavior using patient-specific models.",
        points: [
            "Built MR-derived, patient-specific cardiac models and ran large-scale EP simulations.",
            "Delivered the first clinical trial using virtual heart EP simulations to inform ventricular tachycardia ablation planning (Nature Biomedical Engineering).",
            "Led two industry-academic partnerships to productionize finite-element solvers for biologically realistic heart models."
        ],
        tags: ["Cardiac", "Modelling", "Simulation", "Clinical Trial"],
        links: [
            { label: "Nature BME Paper", url: "https://www.nature.com/articles/s41551-018-0282-2" }
        ]
    },
    {
        title: "BCI & Real-Time Bio-Signal Processing",
        role: "Research Assistant / BS Capstone",
        institution: "Virginia Commonwealth University",
        year: "2008 - 2013",
        description: "Design and implementation of non-invasive brain-computer interface technologies.",
        points: [
            "Designed visual stimulus-based BCI system integrated within a real-time EEG pipeline.",
            "Wrote assembly-level firmware for deterministic timing and achieved four-class control for on-screen navigation.",
            "Developed algorithms for motor imagery BCI, validating timing determinism and signal integrity.",
            "Conducted empirical evaluations to optimize accuracy, false-activation rate, and user training time."
        ],
        tags: ["BCI", "EEG", "Embedded Systems", "Real-time"],
        links: []
    }
];
