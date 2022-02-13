import React, {useState} from "react";
import "../../assets/css/Ambulance-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {DELETE_AMBULANCE} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";

function DeleteAmbulance(props) {
    const { register, handleSubmit } = useForm();
    const [driverName, setDriverName] = useState(null);
    const [driverNIC, setDriverNIC] = useState(null);
    const [vehicleNumber, setVehicleNumber] = useState(null);
    const [contactNumber, setContactNumber] = useState(null);
    const [userName, setUserName] = useState(null);

    useMountEffect(() => {
        setDriverName(props.selectedAmbulance.driverName);
        setDriverNIC(props.selectedAmbulance.driverNIC);
        setVehicleNumber(props.selectedAmbulance.vehicleNumber);
        setUserName(props.selectedAmbulance.userName);
        setContactNumber(props.selectedAmbulance.contactNumber);
    })

    const deleteAmbulance = data => {
        axios({
            method: 'DELETE',
            url: DELETE_AMBULANCE+"/"+props.selectedAmbulance.ambulanceId,
        }).then(response => {
            props.refreshTable();
            props.onClose();
            notifyToast('successfully Deleted',"success");
        }).catch(error => {
            notifyToast('Error deleting the ambulance',"error");
        })
    }

    return (
        <div className="p-5">
            <label>
                <b>Register New Ambulance Service</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(deleteAmbulance)}>
                    <div className="row form-group">
                        <label>Vehicale Number</label>
                        <input
                            id="vehicaleNumber"
                            className="form-control col"
                            name="vehicaleNumber"
                            value={vehicleNumber}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="driverName"
                            className="form-control col"
                            name="driverName"
                            value={driverName}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver NIC</label>
                        <input
                            id="driverNIC"
                            className="form-control col"
                            name="driverNIC"
                            value={driverNIC}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            value={contactNumber}
                        />
                    </div>
                    <div className="row form-group">
                        <label>User Name</label>
                        <input
                            className="form-control col"
                            name="userName"
                            value={userName}
                        />
                    </div>
                    <div className="row form-group text-end mt-4">
                        <button
                            type="submit"
                            className="btn btn-save btn-lg px-5"
                            id="submitbtn"
                            name="submit"
                        >Delete</button>
                        <button
                            type="button"
                            className="btn btn-danger btn-lg px-5"
                            id="clearbtn"
                            onClick={props.onClose}
                        >Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteAmbulance;
