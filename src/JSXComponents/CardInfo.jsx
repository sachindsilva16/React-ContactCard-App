import React from "react";

function CardInfo(props) {
    return (
        <div>
            <p className="contact text">{props.ph}</p>
            <p className="mail text">{props.email}</p>
        </div>
    );
}

export default CardInfo;