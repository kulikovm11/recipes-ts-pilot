import React, {FC, useRef, useState} from "react";

import {searchRecipeService} from "../../services";
import {IRecipe} from "../../interfaces";
import {RecipeComponent} from "../Recipe/RecipeComponent";
import css from './styles.module.css'
import {Chip, Button, CircularProgress} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';








const RecipesComponent:FC = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isNoResults, setIsNoResults] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);



    async function search() {
        try {
            setIsLoading(true);
            const { data } = await searchRecipeService.searchRecipe(`${query}`, 0, 16);
            setQuery('');

            if (data.hits.length === 0) {
                setIsNoResults(true);
                setRecipes([]);
            } else {
                setIsNoResults(false);
                setRecipes(data.hits);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    function handleChipClick(chipValue: string) {
        setQuery(chipValue);
        // if (inputRef.current) {
        //     inputRef.current.focus();
        // }

    }



    const ex = [
        'onion',
        'egg',
        'tomato',
        'banana',
        'chicken'
    ]

    return (
        <div >
            <div className={css.Search_wrap}>
                <h2>Enjoy Foods All Over The <span>World</span></h2>
                    <p>Find some recipes by inputting only one word</p>
                <div className={css.Input}>
                    <form onSubmit={event => {
                        event.preventDefault();
                        search();
                    }}>
                        <input
                            type="text"
                            className={css.search_panel}
                            name='query'
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                            placeholder='Search...'
                            ref={inputRef}
                            style={{ outline: 'none' }}

                        />
                        <Button type="submit" onClick={search}>
                            <SearchOutlinedIcon/>
                        </Button>
                    </form>
                </div>



            </div>
            <div className={css.Labels}>
                <span className={css.examples} >Examples: </span>
                {ex.map((i,index) => (
                     <Chip label={i} variant="outlined" color="primary" key={index} style={{fontFamily:'cursive'}} onClick={()=> handleChipClick(i)} />

                ))}
            </div>



            <div className={css.Main_Wrap}>

                {isLoading ? (
                    <div className={css.Loader}>
                        <CircularProgress color="secondary" />
                    </div>
                ) : isNoResults ? (
                    <div className={css.noResults}>nothing found :( try the correct word please</div>
                ) : (
                    recipes && recipes.map((r, index) => <RecipeComponent recipe={r} key={index} />)
                )}

            </div>
        </div>
    );
};

export {RecipesComponent};
