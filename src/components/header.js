import React from 'react'
import {AppBar,Container,Toolbar,Typography,Select,MenuItem,createTheme,ThemeProvider} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {useNavigate} from 'react-router-dom';
import {CryptoState} from '../cryptoContext';
const Header = () => {
    const useStyles = makeStyles(()=>({
       title:{
           flex:1,
           color:'#EB5633',
           fontFamily:'Roboto',
           fontWeight:'bold',
           cursor:'pointer'
       }
    }))
    const classes = useStyles();
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
           primary:{
             main:'#fff'
           },
          type: 'dark',
        },
      });
    const goBack = () => {
        navigate('/');
    }
    const { currency, setCurrency } = CryptoState();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar style={{ background: '#181A20' }} position="static">
                <Container>
                    <Toolbar>
                    <Typography onClick={goBack} className={classes.title} variant='h5'>Crypto Leo</Typography>
                        <Select 
                        variant="outlined" 
                        style={{width:100,height:40,marginLeft:15}}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"eur"}>Euro</MenuItem>
                    </Select>
                    </Toolbar>

                </Container>
            </AppBar>
       </ThemeProvider>

    )
}

export default Header;
