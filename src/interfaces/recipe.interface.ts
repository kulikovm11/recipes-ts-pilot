export interface IRecipe {
    recipe:{
        uri: string
        label:string
        image:string
        source:string
        url:string
        shareAs:string
        yield:number
        ingredientLines:[]
        cuisineType:[]
        mealType:[]
        dishType:[]
    }

}
