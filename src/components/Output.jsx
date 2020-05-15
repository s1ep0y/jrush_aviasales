import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';
import Ticket from './Ticket';
import * as actions from './../actions/index.js'
import _ from 'lodash';


// const actionCreators = {
//   fetchTickets: actions.fetchTickets,
// }

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  }
}

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  ticketsRender = () => {
    const { tickets: {tickets} } = this.props;
    if (!tickets[0]) return null;
    const ticketsRendered = tickets[0].map(({ carrier, price, segments })=>(
      <Ticket
        key={_.uniqueId()}
        carrier={carrier}
        price={price}
        toPlace={segments[0]}
        fromPlace={segments[1]}
      />
    ))
    console.log(tickets[0])
    console.log(ticketsRendered.length)
    // const renderedTickets = tickets.map(()=> console.log('someghint'))

    return (
      <div>
      {ticketsRendered}
      </div>
    )
  }

  // {/* { tickets.map(({ carrier, price, segments })=>(
  //         <Ticket 
  //           carrier={carrier}
  //           price={price}
  //           toPlace={segments[0]}
  //           fromPlace={segments[1]}
  //         />
  //       ))} */}
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
