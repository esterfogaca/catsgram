import React, { Component } from 'react';
import './ImageBox.css';
import VotingButton from './VotingButton';

export default class ImageBox extends Component {

    render () {
        return (
            <div class="ImageBox">
                <a href='#'>
                    <img class="ImageBox__Image" src={this.props.photoURL} alt=''/>
                </a>
                <div class="ImageBox__Buttons">
                    <VotingButton className="VotingButton VotingButton__Like"/>
                    <VotingButton className="VotingButton VotingButton__Dislike"/>
                </div>
            </div>
        )
    }
}