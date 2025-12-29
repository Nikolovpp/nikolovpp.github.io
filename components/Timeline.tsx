import { TimelineItem } from "@/data/timeline";

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                    {/* Left Column: Year */}
                    <div className="w-24 sm:w-32 flex-shrink-0 text-right pt-0.5">
                        <span className="font-mono text-gray-500 text-sm">{item.year}</span>
                    </div>

                    {/* Middle Column: Vertical Line & Marker */}
                    <div className="relative flex flex-col items-center">
                        {/* Vertical Line */}
                        {index !== items.length - 1 && (
                            <div className="absolute top-4 bottom-0 w-px bg-gray-200 -z-10" />
                        )}

                        {/* Marker / Logo */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-gray-200 overflow-hidden z-10">
                            {item.logo ? (
                                <img
                                    src={item.logo}
                                    alt={`${item.institution} logo`}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="h-2 w-2 rounded-full bg-gray-300" />
                            )}
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="pb-8 pt-0.5 flex-1">
                        <div className="font-bold text-black text-lg sm:text-base">
                            {item.role}
                        </div>
                        <div className="text-gray-600 text-sm mb-2">
                            @ {item.institution}
                        </div>
                        {item.description && (
                            <div className="text-gray-700 text-[15px] leading-relaxed">
                                {item.description}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
