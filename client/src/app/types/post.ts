import { User } from "./user";

export interface Post {
    _ownerId: User;
    title: string;
    imageUrl: string;
    myPost: string;
    name: string;
    lastName: string;
    comments: Comment[];
    _createdOn: number;
    _id: string;
}