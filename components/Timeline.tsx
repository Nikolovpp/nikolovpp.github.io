import { TimelineItem } from "@/data/timeline";

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                    {/* Date/Timeline Column */}
                    <div className="relative flex flex-col items-center w-24 sm:w-32 flex-shrink-0 pt-0.5">
                        {/* Vertical Line */}
                        {index !== items.length - 1 && (
                            <div className="absolute top-0 bottom-0 w-px bg-gray-200 -z-10" />
                        )}

                        {/* Year on the line */}
                        <span className="font-mono text-gray-500 text-sm bg-[#fafafa] px-2 z-10">
                            {item.year}
                        </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="pb-8 pt-0.5 flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="font-bold text-black text-lg sm:text-base">
                                    {item.role}
                                </div>
                                <div className="text-gray-600 text-sm mb-2">
                                    @ {item.institution}
                                </div>
                            </div>

                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={`${item.institution} logo`}
                                    className="h-12 w-12 object-contain ml-4 rounded-md border border-gray-100 p-0.5 bg-white shrink-0"
                                />
                            )}
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
