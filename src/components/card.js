import React from 'react';
import '../App.css';

const Card = ({header, content1, content2, image, linkName, link}) => {

    return(
        <div className="card">
            <img className="card-image" src={image} alt="card image" />
            <div className="card-header">{header}</div>
            <div className="card-content">{content1}</div>
            <br></br>
            <div className="card-content">{content2}</div>
            <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">{linkName}</a>
        </div>

    );
};

export default Card;