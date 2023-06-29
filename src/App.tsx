import {useEffect, useState} from "react";
import {searchRecipeService} from "./services/searchRecipeService";


const App = () => {


   const [recipes, setRecipes] = useState([])


    useEffect(() => {
        searchRecipeService.searchRecipe('chicken',0,2).then(({data}) => setRecipes(data.hits))
    },[setRecipes])


    console.log(recipes)

    return (
        <div>
            App
        </div>
    );
};

export {App};
