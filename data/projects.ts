export interface Project {
    title: string;
    description: string;
    year: string;
    tags: string[]; // e.g. "BCI", "Cardiac", "Neuroscience"
    links: { label: string; url: string }[];
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Brain-Computer Interface Research",
        description: "Investigation into signal processing techniques for non-invasive BCI applications. Focused on motor imagery classification and real-time feedback systems.",
        year: "2018-2024",
        tags: ["BCI", "Neuroscience", "Signal Processing"],
        links: [
            { label: "Paper", url: "#" },
            { label: "Code", url: "#" }
        ]
    },
    {
        title: "Cardiac Electrophysiology Modelling",
        description: "Computational modelling of cardiac arrhythmias and defibrillation strategies. developed parallel simulations for large-scale heart models.",
        year: "2014-2018",
        tags: ["Cardiac", "Modelling", "HPC"],
        links: [
            { label: "Thesis", url: "#" }
        ]
    },
    {
        title: "Computational Neuroscience Framework",
        description: "Developed a framework for simulating spiking neural networks to understand memory formation mechanisms.",
        year: "2008-2014",
        tags: ["Neuroscience", "Python", "Simulation"],
        links: [
            { label: "Project", url: "#" }
        ]
    }
];
