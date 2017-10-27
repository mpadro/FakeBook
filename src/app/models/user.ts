import { Post } from './post';
export interface User {
    id: number,
    user: string,
    password: string,
    name: string,
    birthdate: Date,
    marital_status: string,
    hobbie: string,
    friends: number[],
    posts: Post[],
}