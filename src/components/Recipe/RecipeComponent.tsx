import React, {FC, ReactNode, useState} from 'react';

import { IRecipe } from '../../interfaces';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Chip, Divider} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import css from './recipe-style.module.css'






interface IProps {
    recipe: IRecipe;
    children?:ReactNode
}

export const RecipeComponent: FC<IProps> = ({ recipe }) => {
    const { label, image,ingredientLines,cuisineType,mealType,dishType } = recipe.recipe;

    const [like,setLike] = useState(true)

    const handleLike = ():void =>{
        setLike(prevState => !prevState)
    }


    return (
        <div>
            <Accordion className={css.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={like?{ display: 'flex', flexDirection: 'column'}:{ display: 'flex', flexDirection: 'column', border:'2px dashed #5C4EAE', borderRadius:'5px'}}
                >
                    <Typography style={{ textAlign: 'center', fontSize: '34px', fontFamily: 'cursive' }}>
                        {label}
                        {image && <img src={image} alt="" style={{ borderRadius: '10px', width: '300px', height: '300px' }} />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {ingredientLines && (
                        <ul className={css.Ingr}>
                            {ingredientLines.map((item, index) => (
                                <li key={index}>{item}<Divider /></li>
                            ))}
                        </ul>
                    )}
                    <div className={css.Tags}>
                        {cuisineType && cuisineType.map((item, index) => (
                            <Chip label={item} key={index} variant="outlined" color="success" size="small" />
                        ))}
                        {mealType && mealType.map((item, index) => (
                            <Chip label={item} key={index} variant="outlined" color="success" size="small" />
                        ))}
                        {dishType && dishType.map((item, index) => (
                            <Chip label={item} key={index} variant="outlined" color="success" size="small" />
                        ))}
                    </div>
                </AccordionDetails>
                <Button onClick={handleLike}>
                    <FavoriteIcon />
                </Button>
            </Accordion>
        </div>
    );
};

export default RecipeComponent;
