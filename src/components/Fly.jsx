import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const Fly = (props) => (
  <div className="fly">
    <div className="fly__header">
      <h2 className="fly__price">
        13 440₽
      </h2>
      <img src="" className="fly__companyLogo" alt="comapny_logo" />
    </div>
    <div className="fly__body">
      <div className="fly__body_row">
        <div className="fly__way">
          <ul className="fly__twoRows">
            <li>
              mow-hkt
            </li>
            <li>
              10:14 - 09:00
            </li>
          </ul>
        </div>
        <div className="fly__duration">
          21ч 15м
        </div>
        <div className="fly__stops">
          <ul className="fly__twoRows">
            <li>
              2 пересадки
            </li>
            <li>
              HKG, JNB
            </li>
          </ul>
        </div>
      </div>
      <div className="fly__body_row">
        <div className="fly__way">
          <ul className="fly__twoRows">
            <li>
              mow-hkt
            </li>
            <li>
              10:14 - 09:00
            </li>
          </ul>
        </div>
        <div className="fly__duration">
          21ч 15м
        </div>
        <div className="fly__stops">
          <ul className="fly__twoRows">
            <li>
              2 пересадки
            </li>
            <li>
              HKG, JNB
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
);

export default Fly;
