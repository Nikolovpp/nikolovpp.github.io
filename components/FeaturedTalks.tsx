import { Talk } from "@/data/talks";

export default function FeaturedTalks({ talks }: { talks: Talk[] }) {
    return (
        <div className="space-y-8">
            {talks.map((talk, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div className="w-24 sm:w-32 flex-shrink-0 pt-0.5">
                        <span className="font-mono text-gray-500 text-sm">{talk.date}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-black leading-tight mb-1">
                            {talk.title}
                        </h3>
                        <div className="text-sm text-gray-600 mb-2 font-medium">
                            {talk.event} {talk.location && `• ${talk.location}`}
                        </div>
                        {talk.description && (
                            <p className="text-gray-700 text-[15px] leading-relaxed mb-2">
                                {talk.description}
                            </p>
                        )}
                        <div className="flex gap-3 text-sm">
                            {talk.videoUrl && (
                                <a href={talk.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    [Video]
                                </a>
                            )}
                            {talk.slidesUrl && (
                                <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    [Slides]
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
