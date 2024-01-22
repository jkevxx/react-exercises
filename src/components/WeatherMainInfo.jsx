import styles from './weatherMainInfo.module.css';

const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>

      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width={98}
            alt={weather?.current.condition.text}
          />
        </div>

        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}°</div>
        </div>
      </div>
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=${
          weather?.location.name
        }&key=${import.meta.env.VITE_MAPS_API}`}
      ></iframe>
    </div>
  );
};

export default WeatherMainInfo;
