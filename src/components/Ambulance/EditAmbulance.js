import React, { useState} from "react";
import "../../assets/css/Ambulance-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";
import {EDIT_AMBULANCE, GET_SERVICE_PROVIDER} from "../Common/Endpoints";

function EditAmbulance(props) {
    const { register, handleSubmit , setValue} = useForm();
    const [serviceProvider, setServiceProvider] = useState("");
    const [lastSignIn, setLastSignIn] = useState("");
    const [ambulanceCharge, setAmbulanceCharge] = useState("");

    useMountEffect(() => {
        setValue("driverName",props.selectedAmbulance.driverName);
        setValue("driverNIC",props.selectedAmbulance.driverNIC);
        setValue("number",props.selectedAmbulance.number);
        setValue("name",props.selectedAmbulance.name);
        setValue("contactNumber",props.selectedAmbulance.contactNumber);
        setValue("email",props.selectedAmbulance.email);
        setLastSignIn(props.selectedAmbulance.lastSignIn);
        setAmbulanceCharge(props.selectedAmbulance.ambulanceCharge)
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
    },[])

    const editAmbulance = data => {
        // if(ambulance.password===data.password){
            const formatedData = {
                ...data,
                userId:props.selectedAmbulance.userId,
                serviceProviderId:props.selectedAmbulance.serviceProviderId,
                lastSignIn,
                ambulanceCharge
            };
            console.log(formatedData)
            axios({
                method: 'PUT',
                url: EDIT_AMBULANCE,
                data: formatedData
            }).then(response => {
                props.refreshTable();
                props.onClose();
                notifyToast('successfully Updated',"success");
            }).catch(error => {
                notifyToast('Error updating the ambulance',"error");
            })
        // }else{
        //     notifyToast('Invalid Old Password',"error");
        // }

    }

    return (
        <div className="p-5">
            <label>
                <b>Update Ambulance</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(editAmbulance)}>
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
                            {...register("number",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="name"
                            className="form-control col"
                            name="name"
                            {...register("name",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver NIC</label>
                        <input
                            id="driverNIC"
                            className="form-control col"
                            name="driverNIC"
                            {...register("driverNIC",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Email</label>
                        <input
                            id="email"
                            className="form-control col"
                            name="email"
                            {...register("email",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            {...register("contactNumber",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Password</label>
                        <input
                            id="p_password"
                            className="form-control col"
                            name="password"
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            })}
                            type="password"
                        />
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

export default EditAmbulance;
