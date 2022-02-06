import React, { useState, useEffect } from 'react';
import "../../assets/css/AmbulanceService-Style.css";
import moment from "moment";

export const ExpandedRow =(data) =>{
    return (
        <div className="ExpandedRow">
            {data && <div className="card-body recent-notification pb-0 pt-1">
                <div className="row py-2">
                    <div className="col">
                        <span><strong>Address : </strong> {data.data.address}</span>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col">
                        <span><strong>Hospital Name : </strong> {data.data.hospitalName}</span>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col">
                        <span><strong>Registered Date : </strong> {moment.unix(data.data.registeredDate).format("MM-DD-YYYY")}</span>
                    </div>
                </div>
            </div>
            }
        </div>

    );
}
