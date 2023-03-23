import { Swapi } from "./swapi"

export class Planets extends Swapi {
    rotationPeriod:number
    population:number
    constructor(name:string, rotationPeriod:number, population:number){
        super(name)
        this.rotationPeriod = rotationPeriod
        this.population = population
    }
}
