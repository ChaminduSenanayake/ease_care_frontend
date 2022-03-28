import React, { useState} from "react";
import "../../assets/css/AmbulanceService-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {DELETE_SERVICE_PROVIDER} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";

function DeleteService(props) {
    const { register, handleSubmit } = useForm();
    const [serviceProviderId, setServiceProviderId] = useState(null);
    const [serviceProviderName, setServiceProviderName] = useState(null);
    const [hospitalName, setHospitalName] = useState(null);
    const [address, setAddress] = useState(false);
    const [contactNumber, setContactNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [charge, setCharge] = useState(null);

    useMountEffect(() => {
        setServiceProviderId(props.selectedProvider.serviceProviderId);
        setServiceProviderName(props.selectedProvider.serviceProviderName);
        setHospitalName(props.selectedProvider.hospitalName);
        setAddress(props.selectedProvider.address);
        setContactNumber(props.selectedProvider.contactNumber);
        setEmail(props.selectedProvider.email);
        setCharge(props.selectedProvider.chargePerKm);
    })

    const deleteService = data => {
        axios({
            method: 'DELETE',
            url: DELETE_SERVICE_PROVIDER+"/"+serviceProviderId,
        }).then(response => {
            props.refreshTable();
            props.onClose();
            notifyToast('successfully Deleted',"success");
        }).catch(error => {
            notifyToast('Error deleting the ambulance service',"error");
        })
    }

    return (
        <div className="p-5">
            <label>
                <b>Delete Ambulance Service</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(deleteService)}>
                    <div className="row form-group">
                        <label>Service Name</label>
                        <input
                            id="serviceProviderName"
                            className="form-control col"
                            name="serviceProviderName"
                            value={serviceProviderName}
                            {...register("serviceProviderName")}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Hospital Name</label>
                        <input
                            id="hospitalName"
                            className="form-control col"
                            name="hospitalName"
                            value={hospitalName}
                            {...register("hospitalName")}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Address</label>
                        <input
                            id="address"
                            className="form-control col"
                            name="address"
                            value={address}
                            {...register("address")}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            value={contactNumber}
                            {...register("contactNumber")}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Email</label>
                        <input
                            align="right"
                            id="email"
                            className="form-control col"
                            name="email"
                            value={email}
                            {...register("email")}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Charge per km</label>
                        <input
                            align="right"
                            id="chargePerKm"
                            className="form-control col"
                            name="chargePerKm"
                            value={charge}
                            {...register("chargePerKm",{required : true})}
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

export default DeleteService;
