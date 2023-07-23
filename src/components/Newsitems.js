import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center">{this.props.title}</h5>
                            <p className="card-text">{this.props.description + "..."}</p>
                            <a  target=" _blank" href= { this.props.newsUrl } className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
