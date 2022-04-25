import React from "react";
import logo from '../../assets/images/ambulance.png';

const MyMarker = ({text, tooltip}) => {
    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };

    return (
        <div onClick={handleClick}>
            <img src={logo}/>
            <span className="circleText" title={tooltip}>{text}</span>
        </div>
    );
};

export default MyMarker;
