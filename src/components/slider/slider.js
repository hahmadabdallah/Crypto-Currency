import React, { useEffect, useState }  from 'react'
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { CryptoState } from "../../cryptoContext";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../coinsTable";
const Slider = () => {
    const useStyles = makeStyles((theme) => ({
        slider: {
          height: "30%",
          display: "flex",
          alignItems: "center",
        },
        sliderItem: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          textTransform: "uppercase",
          color: "white",
        },
      }));
      
      const classes = useStyles();

    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    const getTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
      };

    useEffect(() => {
        getTrendingCoins();
      
    }, [currency]);
    const items = trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;
    
        return (
          <Link className={classes.sliderItem} to={`/coins/${coin.id}`}>
            <img
              src={coin?.image}
              alt={coin.name}
              height="60"
              style={{ marginBottom: 10 }}
            />
            <span>
              {coin?.symbol}
              &nbsp;
              <span
                style={{
                  color: profit > 0 ? "rgb(14, 203, 129)" : "rgb(246, 70, 93)",
                  fontWeight: 500,
                }}
              >
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </span>
            <span style={{ fontSize: 22, fontWeight: 500 }}>
              {symbol} 
              {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
          </Link>
        );
      });


   

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };

    return (
      
        <div className={classes.slider}>
            <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1900}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
            />
        </div>
    )
}

export default Slider
