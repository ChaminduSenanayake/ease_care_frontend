import "../../assets/css/Location-styles.css";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_AMBULANCES} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";

function AmbulanceLocations() {
    const [geoPoints, setGeoPoints] = useState(null);
    const [ambulances, setAmbulances] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: GET_AMBULANCES,
        }).then(response => {
                console.log(response.data);
                setAmbulances(response.data);
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        },ambulances);
    },[geoPoints]);
    // const getPoints = () => {
    //     let points = [];
    //     for (let i = 0; i < ambulances?.length; i++) {
    //         points.push({
    //             id: ambulances[i].number,
    //             title: ambulances[i].number,
    //             lat: ambulances[i].latitude,
    //             lng: ambulances[i].longitude,
    //             isFree: ambulances[i].isFree,
    //         })
    //     }
    //     setGeoPoints(points);
    // }
    // setTimeout(() => {
    //     getPoints();
    // }, 6000);

    const distanceToMouse = (pt, mp) => {
        if (pt && mp) {
            return Math.sqrt(
                (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
            );
        }
    };
    return (
        <div className="App">
            <button>Refresh</button>
            <GoogleMapReact
                bootstrapURLKeys={{
                    language: "en",
                    region: "Sri Lanka"
                }}
                defaultCenter={{lat: 7.3135556, lng: 80.6456831}}
                defaultZoom={15}
                distanceToMouse={distanceToMouse}
            >
                {geoPoints?.map(({lat, lng, id, title, isFree}) => {
                    console.log(geoPoints)
                    return (
                        <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} isFree={isFree}/>
                    );
                })}
            </GoogleMapReact>
        </div>
    );
}

export default AmbulanceLocations;
