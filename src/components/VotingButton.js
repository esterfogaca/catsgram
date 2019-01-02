import React, { Component } from 'react';
import './VotingButton.css';

import { createStore } from 'redux';


export default class VotingButton extends Component {
    constructor(props) {
    	super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick () {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    render () {
        return (
            <React.Fragment>
                <label>{this.state.counter}</label><i className={this.props.className} onClick={this.handleClick.bind(this)} />
            </React.Fragment>
        )
    }
}