import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Badge} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <img src="/Logo.png" alt="Logo" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'#6C5FBC', paddingLeft:'11px'}}>
                        eatly
                    </Typography>

                    <IconButton aria-label="cart" sx={{width:'26px',height:'27px'}}>
                        <Badge badgeContent='0' color="primary" >
                            <FavoriteIcon style={{fontSize:'35px' ,color:'#6C5FBC'}}/>

                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export {Header};
