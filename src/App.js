import React, { Component } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';
import HeaderBox from './components/HeaderBox';

class App extends Component {

  imageBox() {
    let imageBoxes = [];

    for(let i = 0; i < 17; i++) {
      let photoURL = `http://placekitten.com/350/350?image=${i}`;
      imageBoxes.push(<ImageBox photoURL={photoURL} key={i}/>);
    }
    return (imageBoxes);
  }
  
  render() {
    return (
      <div className="App">
        <HeaderBox/>
        {this.imageBox()}
      </div>
    );
  }
}

export default App;
