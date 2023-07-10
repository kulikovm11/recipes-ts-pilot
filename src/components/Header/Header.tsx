import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <img src="/Logo.png" alt="Logo" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'#6C5FBC', paddingLeft:'11px'}}>
                        eatly
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export {Header};
