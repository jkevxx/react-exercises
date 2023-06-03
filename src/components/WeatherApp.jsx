import React, { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';

import styles from './weatherApp.module.css';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();

    // return () => {
    //   second
    // }
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`;
  }, [weather]);

  const loadInfo = async (city = 'london') => {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${
          import.meta.env.VITE_REACT_APP_KEY
        }&q=${city}`
      );
      const response = await request.json();
      setWeather(response);
    } catch (error) {
      console.log('bad request' + error);
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);

    loadInfo(city);
  };
  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />

      {/* <p>{weather?.current.temp_c}</p> */}
      <WeatherMainInfo weather={weather} />
    </div>
  );
};

export default WeatherApp;
