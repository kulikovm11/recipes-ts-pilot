import React, {FC, useEffect, useState} from "react";

import {searchRecipeService} from "../../services";
import {IRecipe} from "../../interfaces";
import {RecipeComponent} from "../Recipe/RecipeComponent";
import css from './styles.module.css'




const RecipesComponent:FC = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)




    // useEffect(() => {
    //     searchRecipeService.searchRecipe(`banana`,0,16).then(({data}) => setRecipes(data.hits))
    // },[setRecipes])





   async function search(event:React.KeyboardEvent<HTMLInputElement>) {
        try {
            setIsLoading(true)
            if (event.key === 'Enter'){
              const {data} = await searchRecipeService.searchRecipe(`${query}`,0,16)
                setQuery('')
                setRecipes(data.hits)
            }
        }catch (err) {
            console.error(err)
        }finally {
            setIsLoading(false)
        }

    }

    return (
        <div >
            <div className={css.Search_wrap}>
                <h2>Enjoy Foods All Over The <span>World</span></h2>
                <p>Find some recipes by inputting only one word</p>
                <input type="text"
                       className={css.search_panel}
                       name='query'
                       value={query}
                       onChange={event => setQuery(event.target.value)}
                       onKeyPress={search}
                       placeholder='Search...'
                />
            </div>
            <div className={css.Main_Wrap}>

                {isLoading?<h2>Loading...</h2>:recipes.map((r,index)=><RecipeComponent recipe={r} key={index}/>)}
            </div>
        </div>
    );
};

export {RecipesComponent};
