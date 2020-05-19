import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const data = {
  sortBy: 'cheap',
};

let Sort = () => (
  <div className="Sort">
    <form>
      <label>
        <Field component="input" type="radio" name="sortBy" value="cheap" />
        {' '}
        Самый дешевый
      </label>
      <label>
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
  (state) => ({
    initialValues: data,
  }),
)(Sort);

export default Sort;
