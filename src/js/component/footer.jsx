import React from "react";

const Footer = () => {
    const date = new Date();
    return(
        <div className="bg-dark text-light text-center my-3 pt-3">
            <p>Copyright @ Your Website {date.getFullYear()}</p>
        </div>
    );
};

export default Footer;
