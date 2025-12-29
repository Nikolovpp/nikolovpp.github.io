export interface Publication {
    title: string;
    authors: string[];
    journal: string;
    year: string;
    url?: string;
    doi?: string;
}

export const publications: Publication[] = [
    {
        title: "Virtual-heart simulations to predict patient-specific risk of arrhythmia",
        authors: ["Nikolov P", "Trayanova N", "et al."],
        journal: "Nature Biomedical Engineering",
        year: "2018",
        url: "https://www.nature.com/articles/s41551-018-0282-2"
    },
    {
        title: "Example Publication Title",
        authors: ["Nikolov P", "Co-author A"],
        journal: "Journal of Neuroscience",
        year: "2024",
        url: "#"
    }
];
