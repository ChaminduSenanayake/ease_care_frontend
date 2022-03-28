import "../../assets/css/AmbulanceService-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {EDIT_SERVICE_PROVIDER} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";
import moment from "moment";
import React from "react";

function EditService(props) {
    const { register, handleSubmit , setValue} = useForm();

    useMountEffect(() => {
        // setStatus(props.selectedProvider.status);
        // setStatus(props.selectedProvider.registeredDate);
        setValue("serviceProviderName",props.selectedProvider.serviceProviderName);
        setValue("hospitalName",props.selectedProvider.hospitalName);
        setValue("address",props.selectedProvider.address);
        setValue("contactNumber",props.selectedProvider.contactNumber);
        setValue("email",props.selectedProvider.email);
        setValue("chargePerKm",props.selectedProvider.chargePerKm);
    })

    const editService = data => {
        const formatedData = {
            ...data,
            registeredDate: props.selectedProvider.registeredDate,
            paymentStatus:props.selectedProvider.paymentStatus,
            serviceProviderId:props.selectedProvider.serviceProviderId,
        };
        axios({
            method: 'PUT',
            url: EDIT_SERVICE_PROVIDER,
            data: formatedData
        }).then(response => {
            props.refreshTable();
            props.onClose();
            notifyToast('successfully Updated',"success");
        }).catch(error => {
            notifyToast('Error updating the ambulance service',"error");
        })
    }

    return (
        <div className="p-5">
            <label>
                <b>Update Ambulance Service</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(editService)}>
                    <div className="row form-group">
                        <label>Service Name</label>
                        <input
                            id="serviceProviderName"
                            className="form-control col"
                            name="serviceProviderName"
                            {...register("serviceProviderName",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Hospital Name</label>
                        <input
                            id="hospitalName"
                            className="form-control col"
                            name="hospitalName"
                            {...register("hospitalName",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Address</label>
                        <input
                            id="address"
                            className="form-control col"
                            name="address"
                            {...register("address",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            {...register("contactNumber",{ pattern : /^[0-9]{10}$/})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Email</label>
                        <input
                            align="right"
                            id="email"
                            className="form-control col"
                            name="email"
                            {...register("email",)}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Charge per km</label>
                        <input
                            align="right"
                            id="chargePerKm"
                            className="form-control col"
                            name="chargePerKm"
                            {...register("chargePerKm",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Registered Date : {moment.unix(props.selectedProvider.registeredDate).format("MM-DD-YYYY")}</label>
                    </div>
                    <div className="row form-group">
                        <label>Status : {props.selectedProvider.paymentStatus}</label>
                    </div>
                    <div className="row form-group text-end mt-4">
                        <button
                            type="submit"
                            className="btn btn-save btn-lg px-5"
                            id="submitBtn"
                            name="submit"
                        >Update</button>
                        <button
                            type="button"
                            className="btn btn-danger btn-lg px-5"
                            id="clearBtn"
                            onClick={props.onClose}
                        >Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditService;
