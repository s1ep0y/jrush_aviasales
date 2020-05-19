import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getTime, getUnixTime } from 'date-fns';
import Sort from './Sort';
import Ticket from './Ticket';
import * as actions from '../actions/index.js';


// const actionCreators = {
//   fetchTickets: actions.fetchTickets,
// }

const mapStateToProps = (state) => ({
  sortBy: state.form.sort ? state.form.sort.values.sortBy : 'cheap',
  tickets: state.tickets.tickets,
});

class Output extends React.Component {
  ticketsRender = () => {
    const { tickets, sortBy } = this.props;

    if (!tickets) return null;
    
    const ticketsArrSorted = tickets
      .sort((a, b) => (sortBy === 'cheap'
        ? a.price > b.price ?
          1 : -1
        : a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ?
          1 : -1))
      .splice(0, 5)
    
      console.log(ticketsArrSorted.length)

    
    const ticketsRendered = ticketsArrSorted.map(({ carrier, price, segments }) => (
      <Ticket
        key={_.uniqueId()}
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
        {this.ticketsRender()}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Output);
