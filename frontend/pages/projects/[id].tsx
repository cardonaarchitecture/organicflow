import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useProjectStore } from '@/utils/state/useProjectStore'
import { ProjectModel, Project } from '@/models/ProjectModel'
import { WavyBackground } from '@/components/WavyBackground'
import { Navigation } from '@/components/Navigation'


interface ProjectPageProps {
  project: Project
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const router = useRouter()
  const setCurrentProject = useProjectStore(state => state.setCurrentProject)

  useEffect(() => {
    if (project) {
      setCurrentProject(project.id)
    }
  }, [project, setCurrentProject])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{project.title} | W.A — ARCHITECT</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <WavyBackground
          colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
          blur={10}
          speed="fast"
          waveOpacity={0.5}
          className="fixed inset-0 z-0"
        />
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                  <ul className="space-y-2">
                    <li><strong>Area:</strong> {project.details.area} sqft</li>
                    <li><strong>Bedrooms:</strong> {project.details.bedrooms}</li>
                    <li><strong>Units:</strong> {project.details.units}</li>
                    <li><strong>Location:</strong> {project.details.location}</li>
                    <li><strong>Year:</strong> {project.details.year}</li>
                    <li><strong>Architect:</strong> {project.architect}</li>
                    <li><strong>Status:</strong> {project.status}</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Features</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
        <footer className="bg-gray-800 text-white py-4 px-8 relative z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div>&copy; 2023 W.A — ARCHITECT</div>
            <div>
              <a href="#" className="mx-2">Privacy Policy</a>
              <a href="#" className="mx-2">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await ProjectModel.getAll()
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const project = await ProjectModel.getById(id)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: { project },
    revalidate: 60, // Revalidate every 60 seconds
  }
}

export default ProjectPage