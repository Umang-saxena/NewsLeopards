import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        let {source}=this.props;//Props Can Also be Used in this way(Array Destructuring)
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"80%"}} >{source} <span class="visually-hidden">unread messages</span></span>
                    <img src={this.props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title + " ..."}</h5>
                        <p className="card-text">{this.props.description + "..."}</p>
                        <p className="card-text"><small className="text-body-secondary">{`By ${this.props.author} ${this.props.date}`}</small></p>
                        <a target=" _blank" href={this.props.newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
