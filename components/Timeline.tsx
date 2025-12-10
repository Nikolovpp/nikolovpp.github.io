import { TimelineItem } from "@/data/timeline";

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:gap-6">
                    <div className="w-32 flex-shrink-0 font-mono text-gray-500 text-sm pt-1">
                        {item.year}
                    </div>
                    <div className="pb-4">
                        <div className="font-bold text-black">
                            {item.role} <span className="font-normal text-gray-600">@ {item.institution}</span>
                        </div>
                        {item.description && (
                            <div className="text-gray-700 text-[15px] leading-relaxed mt-1">
                                {item.description}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
