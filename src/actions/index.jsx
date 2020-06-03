import axios from 'axios';
import { createAction } from 'redux-actions';

export const ticketsFilterChange = createAction('FILTER_CHANGE');

export const fetchTicketsRequest = createAction('TIKETS_FETCH_REQUEST');
export const fetchTicketsSuccess = createAction('TIKETS_FETCH_SUCCESS');
export const fetchTicketsFailure = createAction('TIKETS_FETCH_FAILURE');

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketsRequest());
  try {
    const { data: { searchId } } = await axios.get('https://front-test.beta.aviasales.ru/search');

    const dataCeeper = async (stop = false) => {
      if (stop === true) return;
      try {
        const { data } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        dispatch(fetchTicketsSuccess(data));
        dataCeeper(data.stop);
      } catch (err) {
        console.log(err);
        dataCeeper();
      }
    };

    dataCeeper();
  } catch (err) {
    dispatch(fetchTicketsFailure());
    throw err;
  }
};
