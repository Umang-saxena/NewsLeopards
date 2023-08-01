import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'




export default class App extends Component {
  pageSize=6;
  apiKey=process.env.REACT_APP_NEWS_API;
  state= {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
     
  render() {
    return (
      <div >
      <BrowserRouter>                                                                 
        <Navbar/>
        <LoadingBar
        color='black'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
          <Routes> {/*  We have given key just because at time of routes we have to give key for page reload */}
            <Route exact  path="/" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="general" key= "general" />} />
            <Route exact  path="/business" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="business" key= "business " />} />
            <Route exact  path="/entertainment" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="entertainment" key= "entertainment " />} />
            <Route exact  path="/health" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="health" key= "health " />} />
            <Route exact  path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="science" key= "science" />} />
            <Route exact  path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="sports" key= "sports" />} />
            <Route exact  path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" apiKey={ this.apiKey} category="technology" key= "technology " />} />

            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

