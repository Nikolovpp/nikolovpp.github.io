import { Publication } from "@/data/publications";

export default function Publications({ publications }: { publications: Publication[] }) {
    return (
        <ul className="space-y-5">
            {publications.map((pub, index) => (
                <li key={index} className="group">
                    <div className="text-[16px] leading-relaxed">
                        <a
                            href={pub.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold text-black ${pub.url ? "hover:underline hover:text-blue-700" : ""}`}
                        >
                            {pub.title}
                        </a>
                        <div className="text-gray-700 mt-1">
                            {pub.authors.map((author, i) => (
                                <span key={i} className={author.includes("Nikolov") ? "font-bold text-gray-900" : ""}>
                                    {author}{i < pub.authors.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </div>
                        <div className="text-sm text-gray-500 font-mono mt-0.5">
                            {pub.journal} • {pub.year}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
