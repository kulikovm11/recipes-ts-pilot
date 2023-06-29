import {FC} from "react";
import {IRecipe} from "../../interfaces";

interface IProps{
    recipe:IRecipe,
}
const RecipeComponent:FC<IProps> = ({recipe}) => {

    const {label,yield:yieldValue,image} = recipe.recipe

    return (
        <div style={{border:'1px solid black'}}>
            <p>{label}</p>
            <p>{yieldValue}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export {RecipeComponent};
