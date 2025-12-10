import Link from "next/link";
import { projects } from "@/data/projects";
import { timelineData } from "@/data/timeline";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="space-y-16 text-[#333]">
      {/* Bio Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-black tracking-tight">Plamen Nikolov, PhD</h1>
        <div className="prose prose-neutral max-w-none text-[17px] leading-relaxed">
          <p>
            I am a <b>Post-Doctoral Research Affiliate</b> at Georgetown University Medical Center, specializing in
            <b> Computational Neuroscience</b>, <b>Signal Processing</b>, and <b>Machine Learning</b>.
            My work spans BCI systems, cardiac digital twins, and neural dynamics of speech.
          </p>
          <p className="space-x-4 pt-2">
            <a href="mailto:Nikolov.phd@gmail.com" className="text-blue-700 hover:underline">Email</a>
            <a href="https://github.com/Nikolovpp" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">GitHub</a>
            {/* Add other links if available */}
          </p>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section id="bio" className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Bio / Timeline</h2>
        <Timeline items={timelineData} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Research & Projects</h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-bold text-black">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 font-mono">{project.year}</span>
              </div>
              <div className="mb-3 text-sm text-gray-600 font-medium">
                {project.role} @ {project.institution}
              </div>

              <div className="text-gray-800 mb-3 text-[16px] leading-relaxed">
                {project.description}
              </div>

              {/* Detailed Points */}
              <ul className="list-disc list-outside ml-4 mb-4 space-y-1 text-gray-700 text-[15px] leading-relaxed">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="space-x-3 text-sm">
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} className="text-blue-700 hover:underline">
                    {link.label}
                  </a>
                ))}
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-gray-400 text-xs uppercase tracking-wider">[{tag}]</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Recent Posts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
          <li>
            <Link href="/blog" className="text-blue-700 hover:underline">
              View all posts
            </Link>
          </li>
        </ul>
      </section>

      <footer className="pt-12 pb-8 text-sm text-gray-400 border-t border-gray-100 mt-12">
        <p>© {new Date().getFullYear()} Plamen Nikolov. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
