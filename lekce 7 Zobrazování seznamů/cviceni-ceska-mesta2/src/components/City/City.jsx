import React from 'react';
import './style.css';

const City = ({ name, population, area }) => (
  <div className="city">
    <h2>{name}</h2>
    <p>Population: {population}</p>
    <p>Area: {area} sq.km</p>
  </div>
);

export default City;