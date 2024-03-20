export interface User {
    _id: string;
    posts: string[];
    email: string;
    name: string;
    lastName: string;
    hashedPassword: string;
}

export interface UserAuth {
    name: string;
    lastName: string;
    email: string;
    password: string;
}