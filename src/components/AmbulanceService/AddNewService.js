import React, {useEffect} from "react";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {REGISTER_SERVICE_PROVIDER} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import moment from "moment";

function AddNewService(props) {
    const { register, handleSubmit , errors} = useForm();

    useEffect(() => {
        $("#navBarTitle").text("New Ambulance Service");
    });

    const registerService = data => {
        const formatedData = {
            ...data,
            registeredDate: moment(new Date()).unix(),
            serviceProviderId:0,
        };
        axios({
            method: 'POST',
            url: REGISTER_SERVICE_PROVIDER,
            data: formatedData
        }).then(response => {
            props.refreshTable();
            props.onClose();
            notifyToast('successfully Registerd',"success");
        }).catch(error => {
            notifyToast('Error creating new ambulance service'+error,"error");
        })
    }

    return (
        <div className="p-5">
            <label>
                <b>Register New Ambulance Service</b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(registerService)}>
                    <div className="row form-group">
                        <label>Service Name</label>
                        <input
                            id="serviceProviderName"
                            className="form-control col"
                            name="serviceProviderName"
                            {...register("serviceProviderName",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Hospital Name</label>
                        <input
                            id="hospitalName"
                            className="form-control col"
                            name="hospitalName"
                            {...register("hospitalName",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Address</label>
                        <input
                            id="address"
                            className="form-control col"
                            name="address"
                            {...register("address",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            {...register("contactNumber",{required : true , pattern : /^[0-9]{10}$/})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Email</label>
                        <input
                            align="right"
                            id="email"
                            className="form-control col"
                            name="email"
                            {...register("email",{required : true})}
                        />
                    </div>
                    <div className="row form-group text-end mt-4">
                        <button
                            type="submit"
                            className="btn btn-save btn-lg px-5"
                            id="submitbtn"
                            name="submit"
                        >Register</button>
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

export default AddNewService;
