import {FC, useEffect, useState} from "react";
import {searchRecipeService} from "../../services";
import {IRecipe} from "../../interfaces";
import {RecipeComponent} from "../Recipe/RecipeComponent";


const RecipesComponent:FC = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])



    useEffect(() => {
        searchRecipeService.searchRecipe('banana',0,2).then(({data}) => setRecipes(data.hits))
    },[setRecipes])


    console.log(recipes)
    return (
        <div>
            {recipes.map((r,index)=><RecipeComponent recipe={r} key={index}/>)}
        </div>
    );
};

export {RecipesComponent};
