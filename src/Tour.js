import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTours }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    return <article className="single-tour">
        <div className="tour-card">
            <img src={image} alt={name} />
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>{isReadMore ? info : `${info.substring(0, 200)}...`}
                {isReadMore ? <button onClick={() => setIsReadMore(!isReadMore)}>Read Less</button> : <button onClick={() => setIsReadMore(!isReadMore)}>Read More</button>}
                {/* {isReadMore || <button onClick={() => setIsReadMore(!isReadMore)}>Read More</button>}
                {!isReadMore || <button onClick={() => setIsReadMore(!isReadMore)}>Read Less</button>} */}
            </p>
            <button className="delete-btn" onClick={() => { removeTours(id) }}>Not Interested</button>
        </div>
    </article>
}

export default Tour;