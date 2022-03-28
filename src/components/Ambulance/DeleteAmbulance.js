import React, {useState} from "react";
import "../../assets/css/Ambulance-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {DELETE_AMBULANCE, GET_SERVICE_PROVIDER} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";

function DeleteAmbulance(props) {
    const { handleSubmit } = useForm();
    const [name, setDriverName] = useState(null);
    const [driverNIC, setDriverNIC] = useState(null);
    const [number, setVehicleNumber] = useState(null);
    const [contactNumber, setContactNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [serviceProvider, setServiceProvider] = useState("");

    useMountEffect(() => {
        setDriverName(props.selectedAmbulance.name);
        setDriverNIC(props.selectedAmbulance.driverNIC);
        setVehicleNumber(props.selectedAmbulance.number);
        setContactNumber(props.selectedAmbulance.contactNumber);
        setEmail(props.selectedAmbulance.email);

        axios({
            method: 'GET',
            url: GET_SERVICE_PROVIDER +"/"+props.selectedAmbulance.serviceProviderId,
        }).then(response => {
            if(response.data){
                setServiceProvider(response.data);
            }
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        })
    })

    const deleteAmbulance = data => {
        console.log(props.selectedAmbulance.userId)
        axios({
            method: 'DELETE',
            url: DELETE_AMBULANCE+"/"+props.selectedAmbulance.userId,
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
                <b>Remove Ambulance</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(deleteAmbulance)}>
                    <div className="row form-group">
                        <label>Ambulance Service</label>
                        <input
                            id="serviceProvider"
                            className="form-control col"
                            name="serviceProvider"
                            disabled={true}
                            value={serviceProvider.serviceProviderName}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Vehicale Number</label>
                        <input
                            id="number"
                            className="form-control col"
                            name="number"
                            value={number}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="name"
                            className="form-control col"
                            name="name"
                            value={name}
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
                        <label>Email</label>
                        <input
                            id="email"
                            className="form-control col"
                            name="email"
                            value={email}
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
