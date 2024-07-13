declare global {
    interface Project {
        id: string;
        name: string;
        description: string;
    }

    interface User {
        id: string;
        username: string;
        email: string;
    }
}

export { };