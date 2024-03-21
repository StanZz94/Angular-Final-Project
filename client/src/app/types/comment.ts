import { User } from "./user";

export interface Comment {
    _ownerId: User;
    myComment: string;
    _id: string;
}