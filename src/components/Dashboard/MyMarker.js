import React, {useState} from "react";

const MyMarker = ({text, tooltip, isFree}) => {
    console.log(isFree);
    const [name, setClassName] = useState("circle");
    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };
    setClassName(isFree ? "circle-free" : "circle");

    return (
        <div className={name} onClick={handleClick}>
            <span className="circleText" title={tooltip}>{text}</span>
        </div>
    );
};

export default MyMarker;
