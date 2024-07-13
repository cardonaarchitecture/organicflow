import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useProjectStore } from '@/utils/state/useProjectStore';

export const Navigation: React.FC = () => {
    const router = useRouter();
    const { projects, setCurrentProject } = useProjectStore();

    const handleProjectClick = (projectId: string) => {
        setCurrentProject(projectId);
        router.push(`/projects/${projectId}`);
    };

    return (
        <nav className="p-4 flex justify-between items-center text-white">
            <Link href="/" className="text-2xl font-bold">
                W.A — ARCHITECT
            </Link>
            <ul className="flex space-x-4">
                <li>
                    <div className="relative group">
                        <button className="focus:outline-none">Projects</button>
                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => handleProjectClick(project.id)}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {project.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/studio" className="hover:underline">The Studio</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
        </nav>
    );
};