import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return(
        <button type="button" className="btn btn-primary">{props.label}</button>
    );
};
Button.propTypes = {
    label: PropTypes.string
}

export default Button;