import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useProjectStore } from '@/utils/state/useProjectStore';
import { Project } from '@/models/ProjectModel';


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <Link href={`/projects/${project.id}`} className="block">
        <motion.div
            layoutId={`project-${project.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
        >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.details.location}</p>
                <p className="text-sm text-gray-500">{project.status}</p>
            </div>
        </motion.div>
    </Link>
);

const ProjectDetail: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
<motion.div
    layoutId={`project-${project.id}`}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
>
    <motion.div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
    <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
            <h4 className="font-semibold">Details</h4>
            <p>Area: {project.details.area} sqft</p>
            <p>Bedrooms: {project.details.bedrooms}</p>
            <p>Units: {project.details.units}</p>
            <p>Location: {project.details.location}</p>
            <p>Year: {project.details.year}</p>
        </div>
        <div>
            <h4 className="font-semibold">Features</h4>
            <ul className="list-disc list-inside">
            {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
            </ul>
        </div>
        </div>
        <p className="text-gray-600">Architect: {project.architect}</p>
        <p className="text-gray-600">Status: {project.status}</p>
        <button
        onClick={onClose}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
        Close
        </button>
    </div>
    </motion.div>
</motion.div>
);

export const ProjectExplorer: React.FC = () => {
    const { projects, searchProjects } = useProjectStore();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        searchProjects(query);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};