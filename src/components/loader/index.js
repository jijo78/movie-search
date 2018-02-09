import React from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="loader">
    <p className="loader__text">Searching for your flight...</p>
    <div className="loader__container"></div>
  </div>
);

export default Loader;