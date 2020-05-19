import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const Filter = (props) => (
  <div className="filter">
    <h2>Количество пересадок</h2>
    <form action="">
      <label htmlFor="all">
        {' '}

        <input type="checkbox" name="all" id="" />
        Все
      </label>
      <label htmlFor="noStops">
        {' '}
        <input type="checkbox" name="noStops" id="" />
        Без пересадок
      </label>
      <label htmlFor="oneStop">
        {' '}
        <input type="checkbox" name="oneStop" id="" />
        1 пересадка
      </label>
      <label htmlFor="twoStops">
        {' '}
        <input type="checkbox" name="twoStops" id="" />
        2 пересадки
      </label>
      <label htmlFor="threeStops">
        {' '}
        <input type="checkbox" name="threeStops" id="" />
        3 пересадки
      </label>
    </form>
  </div>
);

export default Filter;
