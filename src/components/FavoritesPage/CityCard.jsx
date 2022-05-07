import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import useLocationWeather from '../../hooks/useLocationWeather';

export default function CityCard(props) {
  const [weather, setWeather] = useState()
  const data = useLocationWeather(props.location.locKey);

  const handleRemoveCard = (e) => {
    props.removeCard(props.location.locKey)
  }

  useEffect(() => {
    setWeather(data)
    data ? props.isError(false) : props.isError(true);
  }, [data])

  return (
    <Box sx={{ minWidth: 275 }} className="CityCard" >
      <Card elevation={1}>
        <CardContent>
          <div className="remove-btn" onClick={(e) => handleRemoveCard(e)} >
            <CloseRoundedIcon />
          </div>
          <header>
            <h3 className="city-name">{props.location.locName}</h3>
            <div className="weather-logo">
              {weather && <img src={`https://www.accuweather.com/images/weathericons/${weather.WeatherIcon}.svg`} alt="" />}
            </div>
          </header>
          <div className="temperature">
            <span className="max">{weather && weather.Temperature.Metric.Value}˚</span>
          </div>
        </CardContent>
        <CardActions disableSpacing={true}>
          <Link to={`/home/?locKey=${props.location.locKey}&locName=${props.location.locName}`}>
            <Button variant="contained">SHOW MORE</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
