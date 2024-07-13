import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjectStore } from '@/utils/state/useProjectStore'


export const ProjectSlider: React.FC = () => {
  const { projects, currentProject, setCurrentProject } = useProjectStore()

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {projects.map((project) => (
          project.id === currentProject?.id && (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p>{project.description}</p>
                <div className="mt-4">
                  <p>Area: {project.details.area} sq ft</p>
                  <p>Bedrooms: {project.details.bedrooms}</p>
                  <p>Units: {project.details.units}</p>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setCurrentProject(project.id)}
            className={`w-3 h-3 rounded-full ${
              currentProject?.id === project.id ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}