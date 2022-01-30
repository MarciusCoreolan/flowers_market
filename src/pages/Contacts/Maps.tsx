import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./contacts.module.scss";

function Maps() {
  const mapData = {
    center: [43.315495118641635, 45.692207221232316],
    zoom: 15,
  };

  const coordinates = [[43.315495118641635, 45.692207221232316]];

  return (
    <div className={styles.maps}>
      <p>Мы на карте</p>
      <YMaps>
        <Map width="1110px" height="425px" defaultState={mapData}>
          {coordinates.map((coordinate) => (
            <Placemark geometry={coordinate} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default Maps;
