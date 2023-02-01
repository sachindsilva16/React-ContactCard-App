import React from "react";
import Avatar from "./Avatar";
import CardInfo from "./CardInfo";

function Card(props) {
    return (
        <div>
            <div className="cardbox">
                <div className="card">
                    <p>{props.id}</p>
                    <section className="top">
                        <h1>{props.name}</h1>
                        <Avatar src={props.imgURL} alt="avatar-image" />
                    </section>
                    <section className="bottom">
                        <CardInfo ph={props.phone} email={props.email}/>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Card;
