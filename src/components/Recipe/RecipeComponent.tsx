import React, { FC } from 'react';
import { IRecipe } from '../../interfaces';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";






interface IProps {
    recipe: IRecipe;
}

export const RecipeComponent: FC<IProps> = ({ recipe }) => {
    const { label, image } = recipe.recipe;


    return (
        <div>
            <Accordion style={{ width: '450px', marginBottom: '10px', marginTop: '10px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Typography style={{ textAlign: 'center', fontSize:'24px' }}>
                        {label}
                        <img src={image} alt="" style={{ borderRadius: '10px', width:'300px', height:'300px' }} />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                    <Button>
                        <FavoriteIcon/>
                    </Button>
                </AccordionDetails>
            </Accordion>




        </div>
    );
};

export default RecipeComponent;
