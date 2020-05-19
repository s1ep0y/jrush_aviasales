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

    const dataCeeper = async (stop = false) => {
      if (stop === true) return;
      try {
        const { data } = await axios.get(ticketsUrl(searchId));
        dispatch(fetchTicketsSuccess(data));
        dataCeeper (data.stop)
      } catch (e) {
        console.log('вызвали с ошибкой и погнали дальше')
        dataCeeper ()
      }
      
    };

    dataCeeper();
  } catch (e) {
    dispatch(fetchTicketsFailure());
    throw e;
  }
};
