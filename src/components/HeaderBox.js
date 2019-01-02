import React, { Component } from 'react';
import logo from '../logo.svg';
import './HeaderBox.css';

export default class HeaderBox extends Component {
    render () {
        return (
            <div class="HeaderBox">
                <img class='HeaderBox__Logo' src={ logo } alt='logo'/>
            </div>    
        )
    }
}