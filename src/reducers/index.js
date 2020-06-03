import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const ticketsFetchingState = handleActions({
  [actions.fetchTicketsRequest]() {
    return 'requested';
  },
  [actions.fetchTicketsFailure]() {
    return 'failed';
  },
  [actions.fetchTicketsSuccess]() {
    return 'finished';
  },
}, 'none');


const tickets = handleActions({
  [actions.fetchTicketsSuccess](state, { payload }) {
    return [...state, ...payload.tickets];
  },
}, []);

const ticketsFilter = handleActions({
  [actions.ticketsFilterChange](state, { payload }) {
    const newVal = !state[payload];

    if (payload === 'all' && state.all === false) {
      return {
        all: true,
        noStops: true,
        oneStop: true,
        twoStops: true,
        threeStops: true,
      };
    }

    if (state[payload] === true && state.all === true) {
      return {
        ...state,
        all: false,
        [payload]: newVal,

      };
    }

    if (state[payload] === false && state.all === false && Object.values(state)
      .filter((val) => val).length === 3) {
      return {
        all: true,
        noStops: true,
        oneStop: true,
        twoStops: true,
        threeStops: true,
      };
    }

    return { ...state, [payload]: newVal };
  },
},
{
  all: false,
  noStops: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
});

export default combineReducers({
  ticketsFilter,
  ticketsFetchingState,
  tickets,
  form: formReducer,
});
