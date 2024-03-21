import { Post } from "./post";
import { User } from "./user";

export interface Comment {
    _ownerId: User;
    _postId: Post
    myComment: string;
    _id: string;
}