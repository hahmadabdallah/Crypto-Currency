import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container ,Typography} from '@material-ui/core';
import Slider from './slider';
const useStyles = makeStyles((theme)=>({
    board:{
    backgroundColor:"#0B0E11",
   },
   boardContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  title: {
    display: "flex",
    height: "30%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
 }))

const Board = () => {
    const classes = useStyles();
    return (
        <div className={classes.board}>
            <Container className={classes.boardContent}>
            <div className={classes.title}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Roboto",
              color:'#EB5633',

            }}
          >
            Crypto Leo
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Roboto",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Slider></Slider>
            </Container>
            
        </div>
    )
}

export default Board
