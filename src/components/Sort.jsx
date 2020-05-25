import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const Sort = () => (
  <div className="sort">
    <form>
      <label className="sort__button" htmlFor="cheap">
        <Field component="input" type="radio" id="cheap" name="sortBy" value="cheap" />
        {' '}
        Самый дешевый
      </label>
      <label className="sort__button" htmlFor="faster">
        <Field component="input" type="radio" name="sortBy" id="faster" value="faster" />
        {' '}
        Самый быстрый
      </label>
    </form>
  </div>
);

export default connect(
  () => ({
    initialValues: {
      sortBy: 'cheap',
    },
  }),
)(reduxForm({
  form: 'sort',
})(Sort));
