import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {reducer as formReducer} from 'redux-form';
import * as actions from './../actions';

const ticketsFetchingState = handleActions({
    [actions.fetchTicketsRequest]() {
        return 'requested';
    },
    [actions.fetchTicketsFailure]() {
        return 'failed';
    },
    [actions.fetchTicketsSuccess]() {
        return 'finished';
    }
}, 'none');



const tickets = handleActions({
    [actions.fetchTicketsSuccess](state, { payload }) {
        console.log(typeof payload.tickets)
        return {
            tickets: [payload.tickets],
        };
    }
}, {tickets: []})

export default combineReducers({
    ticketsFetchingState,
    tickets
})