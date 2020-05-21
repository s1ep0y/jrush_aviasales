import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getTime, getUnixTime } from 'date-fns';
import Sort from './Sort';
import Ticket from './Ticket';

const mapStateToProps = (state) => ({
  transfersFilter: state.form.transfersFilter,
  sortBy: state.form.sort ? state.form.sort.values.sortBy : 'cheap',
  tickets: state.tickets.tickets,
});

class Output extends React.Component {
  ticketsRender = () => {
    const { tickets, sortBy, transfersFilter = [] } = this.props;

    if (!tickets) return null;

    const stopsFilterArr = () => {
      if (!transfersFilter.hasOwnProperty('values')) return ['all'];
      const arr = Object.keys(transfersFilter.values).reduce((acc, current) => (transfersFilter.values[current] ? [current, ...acc] : [...acc]), []);
      return arr.length !== 0 ? arr : ['all'];
    };

    const ticketsArrPrepared = (arr) => {
      const params = stopsFilterArr();
      const sorted = arr.sort((a, b) => (sortBy === 'cheap'
        ? a.price > b.price
          ? 1 : -1
        : a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration
          ? 1 : -1));
      if (params.includes('all')) return sorted;
      console.log(params);
      return sorted.filter((item) => {
        const count = item.segments[0].stops.length;
        switch (count) {
          case 0:
            return params.includes('noStops');
          case 1:
            return params.includes('oneStop');
          case 2:
            return params.includes('twoStops');
          case 3:
            return params.includes('threeStops');
          default:
            return false;
        }
      });
    };


    const ticketsRendered = ticketsArrPrepared(tickets).map(({ carrier, price, segments }) => (
      <Ticket
        key={_.uniqueId()}
        carrier={carrier}
        price={new Intl.NumberFormat('ru-RU').format(price)}
        toPlace={segments[0]}
        fromPlace={segments[1]}
      />
    ));
      //
    return ticketsRendered;
  }

  render() {
    return (
      <div className="output">
        <Sort />
        {this.ticketsRender().splice(0, 5)}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Output);
