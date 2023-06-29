import {IRecipe} from "./recipe.interface";

export interface IRecipeResp {
    q: string
    from: number
    to: number
    more: boolean
    count: number
    hits:IRecipe[]
}
