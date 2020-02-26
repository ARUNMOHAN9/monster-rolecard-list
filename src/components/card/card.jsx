import React from 'react';

import cardStyle from './card.module.css';

const Card = ({ name, email, id }) => {
    return (
        <div className={cardStyle.card}>
            <div className={cardStyle.image}>
                <img src={"https://robohash.org/"+id+"?set=set1"} alt="" />
            </div>
            <div className={cardStyle.details}>
                <div className={cardStyle.name}>{name}</div>
                <div className={cardStyle.emailId}>{email}</div>
            </div>
        </div>
    );
}


export default Card;