import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


const Filter = (props) => (
  <div className="filter">
    <h2>Количество пересадок</h2>
    <form action="">

      <Field component="input" type="checkbox" id="all" name="all" />
      <label htmlFor="all">Все</label>

      <Field component="input" type="checkbox" name="noStops" id="noStops" />
      <label htmlFor="noStops">Без пересадок</label>

      <Field component="input" id="oneStop" type="checkbox" name="oneStop" id="oneStop" />
      <label htmlFor="oneStop">1 пересадка</label>

      <Field component="input" type="checkbox" name="twoStops" id="twoStops" />
      <label htmlFor="twoStops">2 пересадки</label>

      <Field component="input" type="checkbox" name="threeStops" id="threeStops" />
      <label htmlFor="threeStops">3 пересадки</label>

    </form>
  </div>
);

export default reduxForm({
  form: 'transfersFilter',
})(Filter);
