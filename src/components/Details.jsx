import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Details = () => {
  const { state: routeState } = useLocation();
  const restaurantData = routeState && routeState.data;

  if (!restaurantData) {
    return (
      <div className="details-container">
        <nav>
          <Link to={'/'} className="back-link">
            Back to Home Page
          </Link>
        </nav>
        <p className="no-data">No data available</p>
      </div>
    );
  }

  const { data } = routeState;
  const {
    address_line_1,
    address_line_2,
    city,
    state,
    zipcode,
  } = data.locations[0];

  return (
    <div className="details-container">
      <nav>
        <Link to={'/'} className="back-link">
          Back to Home Page
        </Link>
      </nav>
      <h2 className="restaurant-name">{`${data.name}`}</h2>
      <p className="address">
        {`${address_line_1}`} {address_line_2}
      </p>
      <p className="location">
        {`${city}`} {`${state}`}, {`${zipcode}`}
      </p>
    </div>
  );
};

export default Details;
