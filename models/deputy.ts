import {Egender} from "./genders.enum";

export interface IDeputy {
    name: string,
    age: number,
    gender: Egender,
    honesty: number,
    min_bribe?: number
}