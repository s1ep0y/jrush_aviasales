import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const data = {
  sortBy: 'cheap',
};

let Sort = () => (
  <div className="sort">
    <form>
      <label className="sort__button">
        <Field component="input" type="radio" name="sortBy" value="cheap" />
        {' '}
        Самый дешевый
      </label>
      <label className="sort__button">
        <Field component="input" type="radio" name="sortBy" value="faster" />
        {' '}
        Самый быстрый
      </label>
    </form>
  </div>
);

Sort = reduxForm({
  form: 'sort',
})(Sort);

Sort = connect(
  () => ({
    initialValues: data,
  }),
)(Sort);

export default Sort;
