// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({
        cars: {
          redCar: false,
          blueCar: false,
          yellowCar: false,
        },
      });

  const [signal, setSignal] = useState({color: 'yellow'})    

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  const context = {cars, moveCar, signal, changeSignal };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
