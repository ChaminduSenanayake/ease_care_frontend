import React, { useState} from "react";
import "../../assets/css/Ambulance-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {notifyToast} from "../Common/ToastNotification";
import {useMountEffect} from "@react-hookful/core";
import {EDIT_AMBULANCE, GET_AMBULANCE} from "../Common/Endpoints";

function EditAmbulance(props) {
    const { register, handleSubmit , setValue} = useForm();
    const [ambulance, setAmbulance] = useState(null);

    useMountEffect(() => {
        setValue("driverName",props.selectedAmbulance.driverName);
        setValue("driverNIC",props.selectedAmbulance.driverNIC);
        setValue("vehicleNumber",props.selectedAmbulance.vehicleNumber);
        setValue("userName",props.selectedAmbulance.userName);
        setValue("contactNumber",props.selectedAmbulance.contactNumber);

        axios({
            method: 'GET',
            url: GET_AMBULANCE +"/"+props.selectedAmbulance.ambulanceId,
        }).then(response => {
            if(response.data){
                setAmbulance(response.data);
            }
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        })
    },[])

    const editService = data => {
        if(ambulance.password===data.oldPassword){
            const formatedData = {
                ...data,
                ambulanceId:props.selectedAmbulance.ambulanceId,
                serviceProviderId:props.selectedAmbulance.serviceProviderId,
            };
            delete formatedData.oldPassword;
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
        }else{
            notifyToast('Invalid Old Password',"error");
        }

    }

    return (
        <div className="p-5">
            <label>
                <b>Register New Ambulance Service</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(editService)}>
                    <div className="row form-group">
                        <label>Vehicale Number</label>
                        <input
                            id="vehicleNumber"
                            className="form-control col"
                            name="vehicleNumber"
                            {...register("vehicleNumber",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="driverName"
                            className="form-control col"
                            name="driverName"
                            {...register("driverName",{required: true})}
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
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            {...register("contactNumber",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>User Name</label>
                        <input
                            id = "userNameEdit"
                            className="form-control col"
                            name="userName"
                            {...register("userName",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Old Password</label>
                        <input
                            id = "oldPassword"
                            className="form-control col"
                            name="oldPassword"
                            type="password"
                            {...register("oldPassword",{required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>New Password</label>
                        <input
                            id = "newPassword"
                            className="form-control col"
                            name="newPassword"
                            type="password"
                            {...register("password",{required: true})}
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
