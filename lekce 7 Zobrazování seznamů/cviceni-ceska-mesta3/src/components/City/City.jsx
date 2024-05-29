import React from 'react';
import './style.css';

const City = ({ name, population, area, district, photo }) => (
  <div className="city">
    <img src={photo} alt={name}></img>
    <h2>{name}</h2>
    <p>Okres: {district}</p>
    <p>Population: {population}</p>
    <p>Area: {area} sq.km</p>
  </div>
);

export default City;