import { Post } from "./post";

export interface User {
    _id: string;
    comment: Comment[];
    posts: Post[];
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