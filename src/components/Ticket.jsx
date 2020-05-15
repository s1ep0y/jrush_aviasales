import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

const Ticket = ({carrier, price, toPlace, fromPlace}) => (
    <div className="fly">
        <div className="fly__header">
            <h2 className="fly__price">
                {price}
            </h2>
            <img src="" className="fly__companyLogo" alt={carrier}/>
        </div>
        <div className="fly__body">
            <div className="fly__body_row">
                <div className="fly__way">
                    <ul className="fly__twoRows">
                        <li>
                            {`${toPlace.origin}-${toPlace.destination}`}
                        </li>
                        <li>
                            {toPlace.date}
                        </li>
                    </ul>
                </div>
                <div className="fly__duration">
                    {toPlace.duration}
                </div>
                <div className="fly__stops">
                    <ul className="fly__twoRows">
                        <li>
                            {toPlace.stops.length} пересадки
                        </li>
                        <li>
                            {toPlace.stops}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fly__body_row">
                <div className="fly__way">
                    <ul className="fly__twoRows">
                        <li>
                            {`${fromPlace.origin}-${fromPlace.destination}`}
                        </li>
                        <li>
                            {fromPlace.date}
                        </li>
                    </ul>
                </div>
                <div className="fly__duration">
                    {fromPlace.duration}
                </div>
                <div className="fly__stops">
                    <ul className="fly__twoRows">
                        <li>
                            {fromPlace.stops.length} пересадки
                        </li>
                        <li>
                            {fromPlace.stops}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
);

export default Ticket;
