import React from 'react'

const Newsitems=(props)=>{
        let {title,description,author,date,imageUrl,newsUrl,source}=props;//Props Can Also be Used in this way(Array Destructuring)
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="container position-absolute d-flex justify-content-end top-0 end-0">

                    <span className="badge rounded-pill bg-danger" style={{left:"80%"}} >{source} <span className="visually-hidden">unread messages</span></span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title + " ..."}</h5>
                        <p className="card-text">{description + "..."}</p>
                        <p className="card-text"><small className="text-body-secondary">{`By ${author} ${date}`}</small></p>
                        <a target=" _blank" href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
 export default Newsitems;
