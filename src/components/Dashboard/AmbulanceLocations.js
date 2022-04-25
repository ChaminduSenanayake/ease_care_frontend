import "../../assets/css/Location-styles.css";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_AMBULANCES} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";

function AmbulanceLocations() {
    const [geoPoints, setGeoPoints] = useState([]);
    const [ambulances, setAmbulances] = useState([]);

    useMountEffect(() => {
        axios({
            method: 'GET',
            url: GET_AMBULANCES,
        }).then(response => {
                setAmbulances(response.data);
                getPoints(response.data);
                console.log(ambulances);
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        },ambulances);
    });
    const getPoints = (values) => {
        let points = [];
        for (let i = 0; i < values.length; i++) {
            points.push({
                id: "",
                title: values[i].number+"\n"+values[i].contactNumber+"\n"+values[i].name,
                lat: values[i].latitude,
                lng: values[i].longitude,
            })
        }
        setGeoPoints(points);
    }
    const distanceToMouse = (pt, mp) => {
        if (pt && mp) {
            return Math.sqrt(
                (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
            );
        }
    };
    return (
        <div className="App">
            <GoogleMapReact
                bootstrapURLKeys={{
                    language: "en",
                    region: "Sri Lanka"
                }}
                defaultCenter={{lat: 7.3135556, lng: 80.6456831}}
                defaultZoom={15}
                distanceToMouse={distanceToMouse}
            >
                {geoPoints.map(({lat, lng, id, title}) => {
                    return (
                        <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title}/>
                    );
                })}
            </GoogleMapReact>
        </div>
    );
}

export default AmbulanceLocations;
