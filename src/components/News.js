import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Welcome to News Leopards</h2>
        <div className="row">
            <div className="col-md-4">
                <Newsitems title="myTitle" description="myDesc" />
            </div>
            <div className="col-md-4">
                <Newsitems title="myTitle" description="myDesc" />
            </div>
            <div className="col-md-4">
                <Newsitems title="myTitle" description="myDesc" />
            </div>
        </div>

      </div>
    )
  }
}
