import PropTypes from "prop-types";
import React from "react";
import Button from "./button.jsx"

const Card = (props) => {
    return(
        <div className="card mb-3 " style={{width: "18rem"}}>
            <img src={props.imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{props.text}</p>
                <Button label="Find Out More!" />
            </div>
        </div>
    );
};

Card.propTypes = {
    text: PropTypes.string,
    imgURL: PropTypes.string
};

export default Card;