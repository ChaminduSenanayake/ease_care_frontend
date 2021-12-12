import React from "react";
function TopCard(props){
    return(
        <div className="col-xl-3 col-sm-6 mb-4">
            <div className="card text-white o-hidden h-100" id={props.id}>
                <div className="card-body">
                    <div className="card-body-icon">
                    </div>
                    <div className="mr-5">{props.name}</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/#">
                    <span className="float-left">{props.value}</span>
                    <span className="float-right"></span>
                </a>
            </div>
        </div>
    )
}
export default TopCard;