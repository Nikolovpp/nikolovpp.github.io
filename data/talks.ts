export interface Talk {
    title: string;
    date: string;
    event: string;
    location?: string;
    thumbnail?: string;
    videoUrl?: string; // Link to recording
    slidesUrl?: string; // Link to slides
    description?: string;
}

export const featuredTalks: Talk[] = [
    {
        title: "Neural Dynamics of Speech Processing",
        date: "2024",
        event: "Georgetown University Neuroscience Seminar",
        location: "Washington, DC",
        description: "Overview of my doctoral research on how the brain processes spoken language using rapid neural dynamics."
    },
    {
        title: "Machine Learning for TBI Recovery",
        date: "2019",
        event: "LLNL Summer Student Symposium",
        location: "Livermore, CA",
        description: "Presenting a framework for predicting recovery trajectories in TBI patients."
    }
];
