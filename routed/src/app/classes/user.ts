import { IUser } from "../types/Iuser";

export class User implements IUser {
    id       : number;
    name     : string;
    username : string;
    email    : string;
    constructor (user:IUser) {
        this.id       = user.id
        this.name     = user.name
        this.username = user.name
        this.email    = user.email
    }
}