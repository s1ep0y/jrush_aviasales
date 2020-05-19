import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes.js';

export const fetchTicketsRequest = createAction('TIKETS_FETCH_REQUEST');
export const fetchTicketsSuccess = createAction('TIKETS_FETCH_SUCCESS');
export const fetchTicketsFailure = createAction('TIKETS_FETCH_FAILURE');

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketsRequest());
  try {

    const { searchIdUrl, ticketsUrl } = routes;
    const { data: { searchId } } = await axios.get(searchIdUrl());
    console.log(searchId)

    const dataCeeper = async (stop = false, tickets = []) => {
      if (stop === true) return { stop, tickets };
      const { data } = await axios.get(ticketsUrl(searchId))
      dispatch(fetchTicketsSuccess(data));
      // dataCeeper (data.stop, [...tickets, ...data.tickets])
    }

    dataCeeper();
    
  } catch (e) {
    dispatch(fetchTicketsFailure());
    console.log(e);
    console.log('вызываем с ошибкой')
    fetchTickets()
    // throw e;
  }
};
