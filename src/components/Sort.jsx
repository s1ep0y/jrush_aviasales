import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const data = {
  sortBy: 'cheap',
};

let Sort = () => (
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

Sort = connect(
  () => ({
    initialValues: data,
  }),
)(Sort);

export default reduxForm({
  form: 'sort',
})(Sort);
