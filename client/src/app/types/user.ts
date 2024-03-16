export interface User {
    _id: string;
    posts: string[];
    email: string;
    name: string;
    lastName: string;
    hashedPassword: string;
}