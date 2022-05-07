import { useEffect, useState } from "react";
import axios from "axios";

export default function useLocationWeather(locationKey) {
  const url = process.env.REACT_APP_WEATHER;
  const apiKey = process.env.REACT_APP_APIKEY;
  const [weather, setWeather] = useState()
  
  const getWeather = (locationKey) => {
    axios.get(`${url}/${locationKey}?apikey=${apiKey}&metric=true`)
      .then(({data}) => {
        setWeather(data[0]);
      });
  }

  useEffect(() => {
    getWeather(locationKey)
  }, [])
    
  return weather;
  
};
