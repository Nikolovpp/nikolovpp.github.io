import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="space-y-12 text-[#333]">
      {/* Header / Bio Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-black tracking-tight">User Name</h1>
        <div className="prose prose-neutral max-w-none text-[17px] leading-relaxed">
          <p>
            I am a researcher/engineer with a background in <b>Brain-Computer Interfaces (BCI)</b>,
            <b>Cardiac Electrophysiology</b>, and <b>Computational Neuroscience</b>.
          </p>
          <p>
            Currently, I am working on [Current Role/Goal]. This website hosts my <Link href="/cv" className="text-blue-700 hover:underline">CV</Link>,
            descriptions of my <Link href="#projects" className="text-blue-700 hover:underline">projects</Link>,
            and a <Link href="/blog" className="text-blue-700 hover:underline">technical blog</Link>.
          </p>
          <p className="space-x-4 pt-2">
            <a href="mailto:your.email@example.com" className="text-blue-700 hover:underline">Email</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">GitHub</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Twitter</a>
            <a href="#" className="text-blue-700 hover:underline">Google Scholar</a>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Research & Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-black">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 font-mono">{project.year}</span>
              </div>
              <p className="text-gray-700 mb-2 max-w-2xl text-[16px] leading-[1.6]">
                {project.description}
              </p>
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

      {/* Blog Section (Placeholder) */}
      <section id="blog" className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2">Recent Posts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
          <li>
            <Link href="/blog" className="text-blue-700 hover:underline">
              View all posts
            </Link>
          </li>
          {/* Example post format */}
          {/* <li><Link href="/blog/post-1" className="text-blue-700 hover:underline">My First Blog Post</Link> <span className="text-gray-400 text-sm ml-2">Dec 2025</span></li> */}
        </ul>
      </section>

      <footer className="pt-12 pb-8 text-sm text-gray-400 border-t border-gray-100 mt-12">
        <p>© {new Date().getFullYear()} User Name. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
