import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';
import Fly from './Fly';
import * as actions from './../actions/index.js'


// const actionCreators = {
//   fetchTickets: actions.fetchTickets,
// }

export default class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="output">
        <Sort />
        <Fly />
      </div>
    );
  }
}
