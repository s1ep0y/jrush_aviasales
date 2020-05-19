import React from 'react';

const Ticket = ({
  carrier, price, toPlace, fromPlace,
}) => (
  <div className="ticket">
    <div className="ticket__header">
      <h2 className="ticket__price">
        {price}
        {' '}
        P
      </h2>
      <img src={`//pics.avs.io/99/36/${carrier}.png`} className="ticket__companyLogo" alt={carrier} />
    </div>
    <div className="ticket__body">
      <div className="ticket__body_row">

        <ul className="ticket__col">
          <li>
            {`${toPlace.origin}-${toPlace.destination}`}
          </li>
          <li>
            {toPlace.date}
          </li>
        </ul>

        <ul className="ticket__col">
          <li>
            <span>В пути</span>
          </li>
          <li>
            {toPlace.duration}
          </li>
        </ul>

        <ul className="ticket__col">
          <li>
            {toPlace.stops.length}
            {' '}
            пересадки
          </li>
          <li>
            {toPlace.stops.join(' ')}
          </li>
        </ul>

      </div>
      <div className="ticket__body_row">

        <ul className="ticket__col">
          <li>
            {`${fromPlace.origin}-${fromPlace.destination}`}
          </li>
          <li>
            {fromPlace.date}
          </li>
        </ul>

        <ul className="ticket__col">
          <li>
            <span>В пути</span>
          </li>
          <li>
            {fromPlace.duration}
          </li>
        </ul>

        <ul className="ticket__col">
          <li>
            {fromPlace.stops.length}
            {' '}
            пересадки
          </li>
          <li>
            {fromPlace.stops.join(' ')}
          </li>
        </ul>

      </div>
    </div>

  </div>
);

export default Ticket;
