import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const Filter = (props) => (
    <div className="filter">
        <h2>Количество пересадок</h2>
        <form action="">
            <label htmlFor="all"> Все
                <input type="checkbox" name="all" id=""/>
            </label>
            <label htmlFor="noStops"> Без пересадок
                <input type="checkbox" name="noStops" id=""/>
            </label>
            <label htmlFor="oneStop"> 1 пересадка
                <input type="checkbox" name="oneStop" id=""/>
            </label>
            <label htmlFor="twoStops"> 2 пересадки
                <input type="checkbox" name="twoStops" id=""/>
            </label>
            <label htmlFor="threeStops"> 3 пересадки
                <input type="checkbox" name="threeStops" id=""/>
            </label>
        </form>
    </div>
)

export default Filter;