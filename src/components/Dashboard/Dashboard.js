import "../../assets/css/Dashboard-Style.css";
import AmbulanceLocations from "./AmbulanceLocations";
import TopCard from "./TopCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_AMBULANCES, GET_SERVICE_PROVIDERS} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";

function Dashboard() {
    const [ambulances, setAmbulances] = useState([]);
    const [serviceProviders, setServiceProviders] = useState([]);
    useMountEffect(() => {
        axios({
            method: 'GET',
            url: GET_AMBULANCES,
        }).then(response => {
            setAmbulances(response.data);
            console.log("---")
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        },[ambulances]);

        axios({
            method: 'GET',
            url: GET_SERVICE_PROVIDERS,
        }).then(response => {
            setServiceProviders(response.data);
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        },[serviceProviders]);
    });

    return (
        <div>
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">My Dashboard</li>
                </ol>
                <div className="row">
                    <TopCard name="Total Ambulance Services" value={serviceProviders.length} id="top-card-1"/>
                    <TopCard name="Total Ambulances" value={ambulances.length} id="top-card-2"/>
                    <TopCard name="Total General Users" value={10} id="top-card-3"/>
                    <TopCard name="Available Ambulances" value={"#"} id="top-card-4"/>
                </div>
            </div>
            <AmbulanceLocations/>
        </div>
    );
}

export default Dashboard;
