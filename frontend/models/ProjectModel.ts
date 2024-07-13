export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    details: {
        area: number;
        bedrooms: number;
        units: number;
        location: string;
        year: number;
    };
    features: string[];
    architect: string;
    status: 'Completed' | 'In Progress' | 'Concept';
}

export class ProjectModel {
    private static projects: Project[] = [
        {
            id: '1',
            title: 'Garden Villa',
            description: 'A modern villa seamlessly integrated with nature, offering a perfect blend of luxury and sustainability.',
            image: '/images/garden-villa.jpg',
            details: {
                area: 2800,
                bedrooms: 3,
                units: 3,
                location: 'Bali, Indonesia',
                year: 2023,
            },
            features: ['Solar Panels', 'Rainwater Harvesting', 'Green Roof', 'Smart Home System'],
            architect: 'Jane Doe',
            status: 'Completed',
        },
        {
            id: '2',
            title: 'Urban Oasis Apartments',
            description: 'A high-rise residential complex that brings nature into the heart of the city.',
            image: '/images/urban-oasis.jpg',
            details: {
                area: 15000,
                bedrooms: 2,
                units: 50,
                location: 'Singapore',
                year: 2024,
            },
            features: ['Vertical Gardens', 'Communal Rooftop Farm', 'Energy-Efficient Design', 'EV Charging Stations'],
            architect: 'John Smith',
            status: 'In Progress',
        },
        // Add more projects...
    ];

    static async getAll(): Promise<Project[]> {
        // Simulating an API call with a delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return this.projects;
    }

    static async getById(id: string): Promise<Project | null> {
        // Simulating an API call with a delay
        await new Promise(resolve => setTimeout(resolve, 300));
        return this.projects.find(project => project.id === id) || null;
    }

    static async searchProjects(query: string): Promise<Project[]> {
        // Simulating an API call with a delay
        await new Promise(resolve => setTimeout(resolve, 400));
        return this.projects.filter(project =>
            project.title.toLowerCase().includes(query.toLowerCase()) ||
            project.description.toLowerCase().includes(query.toLowerCase()) ||
            project.details.location.toLowerCase().includes(query.toLowerCase())
        );
    }
}