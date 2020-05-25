import React from 'react';
import { addMinutes, format } from 'date-fns';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const travelTimeMaker = (date, duration) => {
  const dateToWork = new Date(date);
  const oldDate = format(dateToWork, "hh':'mm");
  const newDate = format(addMinutes(dateToWork, duration), "hh':'mm");
  return `${oldDate} - ${newDate}`;
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

const TicketWrapper = styled.div`
position: relative;
display: flex;
flex-wrap: nowrap;
flex-direction: column;
width: 500px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
border-radius: 5px;
padding: 20px;
margin-bottom: 20px;
text-align: left;
`;

const TicketHeader = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
`;

const TicketPrice = styled.h2`
margin-top: 6px;
margin-bottom: 26px;
font-weight: 600;
color: #2196F3;
`;

const TicketCompanyLogo = styled.img`
position: absolute;
top: 20px;
right: 15%;
height: 36px;
width: 110px;
`;

const TicketBody = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
`;

const TicketRow = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

const TicketCol = styled.ul`
margin: 0;
list-style-type: none;
padding-left: 0;
width: 33.333%;
`;

const TicketFirstLine = styled.li`
letter-spacing: .5px;
text-transform: uppercase;
font-size: 12px;
color: #A0B0B9;
`;

const TicketSecondLine = styled.li`
font-weight: 600;
font-size: 14px;
color: #4A4A4A;
`;

const Ticket = ({
  carrier, price, toPlace, fromPlace,
}) => (
  <TicketWrapper>
    <TicketHeader>
      <TicketPrice>
        {price}
        {' '}
        P
      </TicketPrice>
      <TicketCompanyLogo src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
    </TicketHeader>
    <TicketBody>
      <TicketRow>
        <TicketCol>
          <TicketFirstLine>
            {`${toPlace.origin} - ${toPlace.destination}`}
          </TicketFirstLine>
          <TicketSecondLine>
            {travelTimeMaker(toPlace.date, toPlace.duration)}
          </TicketSecondLine>
        </TicketCol>
        <TicketCol>
          <TicketFirstLine>
            В пути
          </TicketFirstLine>
          <TicketSecondLine>
            {`${Math.floor(toPlace.duration / 60)}ч ${toPlace.duration % 60}м`}
          </TicketSecondLine>
        </TicketCol>
        <TicketCol>
          <TicketFirstLine>
            {transferMaker(toPlace.stops.length)}
          </TicketFirstLine>
          <TicketSecondLine>
            {toPlace.stops.join(' ')}
          </TicketSecondLine>
        </TicketCol>

      </TicketRow>
      <TicketRow>
        <TicketCol>
          <TicketFirstLine>
            {`${fromPlace.origin} - ${fromPlace.destination}`}
          </TicketFirstLine>
          <TicketSecondLine>
            {travelTimeMaker(fromPlace.date, fromPlace.duration)}
          </TicketSecondLine>
        </TicketCol>
        <TicketCol>
          <TicketFirstLine>
            B пути
          </TicketFirstLine>
          <TicketSecondLine>
            {`${Math.floor(fromPlace.duration / 60)}ч ${fromPlace.duration % 60}м`}
          </TicketSecondLine>
        </TicketCol>
        <TicketCol>
          <TicketFirstLine>
            {transferMaker(fromPlace.stops.length)}
          </TicketFirstLine>
          <TicketSecondLine>
            {fromPlace.stops.join(' ')}
          </TicketSecondLine>
        </TicketCol>

      </TicketRow>
    </TicketBody>
  </TicketWrapper>
);


Ticket.defaultProps = {
  toPlace: {},
  fromPlace: {},
  price: '',
  carrier: '',
};

Ticket.propTypes = {
  price: PropTypes.string,
  toPlace: PropTypes.objectOf(PropTypes.any),
  fromPlace: PropTypes.objectOf(PropTypes.any),
  carrier: PropTypes.string,
};

export default Ticket;
