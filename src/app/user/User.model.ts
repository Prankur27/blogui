import { Post } from "./Post.model";
import { Address } from "./Address.mode";

export class User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company :{
        name: string;
        catchPhrase: string;
        bs: string;
    };
    post: Post[];
    address: Address;


}