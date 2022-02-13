import React, {useEffect, useState} from "react";
import "../../assets/css/Ambulance-Style.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import {notifyToast} from "../Common/ToastNotification";
import {REGISTER_AMBULANCE} from "../Common/Endpoints";
import $ from "jquery";
import SelectDropdown from "./SelectDropdown";

function AddNewAmbulance(props) {

    const { register, handleSubmit, setValue, getValues} = useForm();
    const [serviceProvider, setServiceProvider] = useState(null);

    const setUserName = (value) => {
        setValue("userName" , value);
    }
    const setPassword = (value) => {
        setValue("password" , value);
    }


    const registerService = data => {
        if (!serviceProvider){
            notifyToast('Please select an ambulance service',"error");
            return
        }
        console.log(serviceProvider)
        const formatedData = {
            ...data,
            serviceProviderId : serviceProvider
        };
        axios({
            method: 'POST',
            url: REGISTER_AMBULANCE,
            data: formatedData
        }).then(response => {
            props.refreshTable();
            props.setServiceProviderId(serviceProvider);
            props.onClose();
            notifyToast('successfully Registerd',"success");
        }).catch(error => {
            notifyToast('Error creating new ambulance'+error,"error");
        })
    }
    return (
        <div className="p-5">
            <label>
                <b>Register New Ambulance </b>
            </label>
            <hr/>
            <div>
                <form onSubmit={handleSubmit(registerService)}>
                    <div className="row form-group">
                        <label>Select Service Provider</label>
                        <SelectDropdown
                            id="serviceProviderId"
                            name="serviceProviderId"
                            options={props.serviceProviders}
                            onChange={d => setServiceProvider(d.value)}
                            className="selectDropdown"
                        />
                    </div>
                    <div className="row form-group">
                        <label>Vehicale Number</label>
                        <input
                            id="vehicaleNumber"
                            className="form-control col"
                            name="vehicaleNumber"
                            onKeyUp={e =>setUserName(e.target.value)}
                            {...register("vehicleNumber",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="driverName"
                            className="form-control col"
                            name="driverName"
                            {...register("driverName",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver NIC</label>
                        <input
                            id="driverNIC"
                            className="form-control col"
                            name="driverNIC"
                            {...register("driverNIC",{required : true,pattern : /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            onKeyUp={e =>setPassword(e.target.value)}
                            {...register("contactNumber",{required : true, pattern : /^[0-9]{10}$/})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>User Name</label>
                        <input
                            id="userName"
                            className="form-control col"
                            name="userName"
                            {...register("userName",{required : true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Password</label>
                        <input
                            id="password"
                            className="form-control col"
                            name="password"
                            type="password"
                            {...register("password",{required : true})}
                        />
                    </div>

                    <div className="row form-group text-end mt-5">
                        <button
                            type="submit"
                            className="btn btn-save btn-lg px-5"
                            id="submitbtn"
                            name="submit"
                        >
                            Register
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-lg px-5"
                            id="clearbtn"
                            onClick={props.onClose}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewAmbulance;
