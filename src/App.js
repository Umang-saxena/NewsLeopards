import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar title={"My Title"} description={"My Desc"} imageUrl={"https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"} />
        <News/>
      </div>
    )
  }
}

