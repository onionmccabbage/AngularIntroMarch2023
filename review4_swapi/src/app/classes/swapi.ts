import { ISwapi } from "./Iswapi"

export class Swapi implements ISwapi {
    public name:string
    constructor(name:string){
        this.name = name
    }
}