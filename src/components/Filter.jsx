import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


const Filter = (props) => (
  <div className="filter">
    <h2>Количество пересадок</h2>
    <form action="">
      <label htmlFor="all">
        <Field component="input" type="checkbox" name="all" value="all" id="" />
        {' '}
        Все
      </label>
      <label htmlFor="noStops">
        {' '}
        <Field component="input" type="checkbox" value="noStops" name="noStops" id="" />
        Без пересадок
      </label>
      <label htmlFor="oneStop">
        {' '}
        <Field component="input" type="checkbox" value="oneStop" name="oneStop" id="" />
        1 пересадка
      </label>
      <label htmlFor="twoStops">
        {' '}
        <Field component="input" type="checkbox" value="twoStops" name="twoStops" id="" />
        2 пересадки
      </label>
      <label htmlFor="threeStops">
        {' '}
        <Field component="input" type="checkbox" value="threeStops" name="threeStops" id="" />
        3 пересадки
      </label>
    </form>
  </div>
);

export default reduxForm({
  form: 'transfersFilter'
})(Filter);
