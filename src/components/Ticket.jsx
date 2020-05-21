import React from 'react';

const travelTimeMaker = (date, duration) => {
  const oldDate = new Date(date);
  const newDate = new Date(Date.parse(date) + duration * 60000);
  const oldDateOut = {
    hours: oldDate.getHours().toString().length === 1 ? `0${oldDate.getHours()}` : oldDate.getHours(),
    mins: oldDate.getMinutes().toString().length === 1 ? `0${oldDate.getMinutes()}` : oldDate.getMinutes(),
  };
  const newDateOut = {
    hours: newDate.getHours().toString().length === 1 ? `0${newDate.getHours()}` : newDate.getHours(),
    mins: newDate.getMinutes().toString().length === 1 ? `0${newDate.getMinutes()}` : newDate.getMinutes(),
  };
  return `${oldDateOut.hours}:${oldDateOut.mins} - ${newDateOut.hours}:${newDateOut.mins}`;
};

const transferMaker = (count) => {
  switch (count) {
    case 1:
      return '1 пересадка';
    case 2:
      return '2 пересадки';
    case 3:
      return '3 пересадки';
    default:
      return '0 пересадок';
  }
};

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
          <li className="ticket__col__first_line">
            {`${toPlace.origin} - ${toPlace.destination}`}
          </li>
          <li className="ticket__col__second_line">
            {travelTimeMaker(toPlace.date, toPlace.duration)}
          </li>
        </ul>

        <ul className="ticket__col">
          <li className="ticket__col__first_line">
            <span>В пути</span>
          </li>
          <li className="ticket__col__second_line">
            {`${Math.floor(toPlace.duration / 60)}ч ${toPlace.duration % 60}м`}
          </li>
        </ul>

        <ul className="ticket__col">
          <li className="ticket__col__first_line">
            {transferMaker(toPlace.stops.length)}
          </li>
          <li className="ticket__col__second_line">
            {toPlace.stops.join(' ')}
          </li>
        </ul>

      </div>
      <div className="ticket__body_row">

        <ul className="ticket__col">
          <li className="ticket__col__first_line">
            {`${fromPlace.origin} - ${fromPlace.destination}`}
          </li>
          <li className="ticket__col__second_line">
            {travelTimeMaker(fromPlace.date, fromPlace.duration)}
          </li>
        </ul>

        <ul className="ticket__col">
          <li className="ticket__col__first_line">
            <span>В пути</span>
          </li>
          <li className="ticket__col__second_line">
            {`${Math.floor(fromPlace.duration / 60)}ч ${fromPlace.duration % 60}м`}
          </li>
        </ul>

        <ul className="ticket__col">
          <li className="ticket__col__first_line">
            {transferMaker(fromPlace.stops.length)}
          </li>
          <li className="ticket__col__second_line">
            {fromPlace.stops.join(' ')}
          </li>
        </ul>

      </div>
    </div>

  </div>
);

export default Ticket;
