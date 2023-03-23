import { Swapi } from "./swapi"

export class People extends Swapi {
    public height:string
    public eyeColor:string
    constructor(name:string, height:string, eyeColor:string){
        super(name)
        this.height = height
        this.eyeColor = eyeColor
    }
}