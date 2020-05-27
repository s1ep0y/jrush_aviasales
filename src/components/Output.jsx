import React from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import Sort from './Sort';
import Ticket from './Ticket';

const mapStateToProps = (state) => ({
  transfersFilter: state.form.transfersFilter,
  sortBy: state.form.sort ? state.form.sort.values.sortBy : 'cheap',
  tickets: state.tickets,
});

class Output extends React.Component {
  ticketsRender = () => {
    const { tickets: { tickets }, sortBy, transfersFilter = [] } = this.props;

    if (!tickets) return null;

    const stopsFilterArr = () => {
      if (!transfersFilter.values) return ['all'];
      const arr = Object.keys(transfersFilter.values)
        .reduce((acc, current) => (transfersFilter.values[current]
          ? [current, ...acc] : [...acc]), []);
      return arr.length !== 0 ? arr : ['all'];
    };

    const ticketsFiltered = (arr, params) => {
      if (params.includes('all')) return arr;
      return arr.filter((item) => {
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

    const ticketsArrPrepared = (arr) => {
      const params = stopsFilterArr();
      const sorted = arr.sort((alfa, beta) => {
        if (sortBy === 'cheap') {
          return alfa.price > beta.price ? 1 : -1;
        }
        const dur1 = alfa.segments[0].duration + alfa.segments[1].duration;
        const dur2 = beta.segments[0].duration + beta.segments[1].duration;
        return dur1 > dur2
          ? 1 : -1;
      });
      if (params.includes('all')) return sorted;
      return ticketsFiltered(sorted, params);
    };


    const ticketsRendered = ticketsArrPrepared(tickets).map(({ carrier, price, segments }) => (
      <Ticket
        key={uniqueId()}
        carrier={carrier}
        price={new Intl.NumberFormat('ru-RU').format(price)}
        toPlace={segments[0]}
        fromPlace={segments[1]}
      />
    ));
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

Output.defaultProps = {
  tickets: {},
  sortBy: '',
  transfersFilter: {},
};

Output.propTypes = {
  tickets: PropTypes.objectOf(PropTypes.array),
  sortBy: PropTypes.string,
  transfersFilter: PropTypes.objectOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(Output);
