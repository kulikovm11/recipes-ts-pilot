import React, {FC, ReactNode} from 'react';
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




    return (
        <div>
            <Accordion className={css.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Typography style={{ textAlign: 'center', fontSize:'34px', fontFamily:'cursive' }}>
                        {label}
                        <img src={image} alt="" style={{ borderRadius: '10px', width:'300px', height:'300px' }} />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <ul className={css.Ingr}>
                            {ingredientLines.map((item, index) =><li key={index}>{item}<Divider/></li>)}
                    </ul>
                    <div className={css.Tags}>
                        {cuisineType.map((item, index)=><Chip label={item} key={index} variant="outlined" color="success" size="small"/>)}
                        {mealType.map((item, index)=><Chip label={item} key={index} variant="outlined" color="success" size="small"/>)}
                        {dishType.map((item, index)=><Chip label={item} key={index} variant="outlined" color="success" size="small"/>)}
                    </div>

                </AccordionDetails>
                <Button>
                    <FavoriteIcon/>
                </Button>
            </Accordion>


        </div>
    );
};

export default RecipeComponent;
