import axios from 'axios'
import { createAction } from 'redux-actions';
import routes from './../routes.js';

export const fetchTicketsRequest = createAction('TIKETS_FETCH_REQUEST');
export const fetchTicketsSuccess = createAction('TIKETS_FETCH_SUCCESS');
export const fetchTicketsFailure = createAction('TIKETS_FETCH_FAILURE');

export const fetchTickets = () => async (dispatch) => {
    dispatch(fetchTicketsRequest());
    try {
        const { searchIdUrl, ticketsUrl } = routes;
        const { data: { searchId }} = await axios.get(searchIdUrl());
        const { data } = await axios.get(ticketsUrl(searchId))
        dispatch(fetchTicketsSuccess(data))
    } catch (e) {
        dispatch(fetchTicketsFailure());
        console.log(e);
        throw e;
    }
}