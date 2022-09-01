import React, { Component } from 'react';
// import HS from "./HS-News.png" 

class Newsitem extends Component {
    render() {
        let {title, description, image, url}=this.props;
        return (
            <div className="container my-3">
                <div className="card" style={{"width": "18rem"}}>
                <img src={image?image:"./HS-News.png" } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
            </div>
        );
    }
}

export default Newsitem;
