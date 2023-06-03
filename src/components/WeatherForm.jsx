import { useState } from 'react';

import styles from './weatherForm.module.css';

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value !== '') {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        onChange={handleChange}
        value={city}
        className={styles.input}
        placeholder="Write a City"
      />
    </form>
  );
};

export default WeatherForm;
