import { create } from 'zustand';
import { Project, ProjectModel } from '@/models/ProjectModel';

interface ProjectState {
  projects: Project[];
  currentProject: Project | null;
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  setCurrentProject: (id: string) => Promise<void>;
  searchProjects: (query: string) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  currentProject: null,
  loading: false,
  error: null,
  fetchProjects: async () => {
    set({ loading: true });
    try {
      const projects = await ProjectModel.getAll();
      set({ projects, loading: false, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch projects', loading: false });
    }
  },
  setCurrentProject: async (id: string) => {
    set({ loading: true });
    try {
      const project = await ProjectModel.getById(id);
      set({ currentProject: project, loading: false, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch project', loading: false });
    }
  },
  searchProjects: async (query: string) => {
    set({ loading: true });
    try {
      const allProjects = await ProjectModel.getAll();
      const filteredProjects = allProjects.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.details.location.toLowerCase().includes(query.toLowerCase())
      );
      set({ projects: filteredProjects, loading: false, error: null });
    } catch (error) {
      set({ error: 'Failed to search projects', loading: false });
    }
  },
}));