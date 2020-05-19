import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Sort from './Sort';
import Ticket from './Ticket';
import { getTime, getUnixTime } from 'date-fns'
import * as actions from '../actions/index.js';


// const actionCreators = {
//   fetchTickets: actions.fetchTickets,
// }

const mapStateToProps = (state) => {
  return {
  sortBy: state.form.sort !== undefined ? state.form.sort.values.sortBy : 'cheap',
  tickets: state.tickets,
}};

class Output extends React.Component {

  ticketsRender = () => {
    const { tickets, sortBy } = this.props;
    console.log(sortBy === 'cheap')
    let ticketsArr = tickets.tickets.sort((a, b)=> sortBy === 'cheap'
      ? a.price > b.price ? 1 : -1
      : a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1)
    if (!ticketsArr) return null;

    

    const ticketsRendered = ticketsArr.map(({ carrier, price, segments }) => {
      return (
      <Ticket
        key={_.uniqueId()}
        carrier={carrier}
        price={new Intl.NumberFormat('ru-RU').format(price)}
        toPlace={segments[0]}
        fromPlace={segments[1]}
      />
    )});

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
