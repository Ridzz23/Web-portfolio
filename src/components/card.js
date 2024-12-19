import React from 'react';
import '../App.css';

const Card = ({header, content, image, linkName, link}) => {

    return(
        <div className="card">
            <div className="card-header">{header}</div>
            <img className="card-image" src={image} alt="card image" />
            <div className="card-content">{content}</div>
            <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">{linkName}</a>
        </div>

    );
};

export default Card;