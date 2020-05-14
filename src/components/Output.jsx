import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import Sort from './Sort'
import Fly from './Fly'

export default class Output extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="output">
            <Sort />
            <Fly />
        </div>
        )
    }
}