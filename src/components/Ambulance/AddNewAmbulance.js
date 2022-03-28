import React, {useState} from "react";
import "../../assets/css/Ambulance-Style.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import {notifyToast} from "../Common/ToastNotification";
import {REGISTER_AMBULANCE} from "../Common/Endpoints";
import SelectDropdown from "./SelectDropdown";

function AddNewAmbulance(props) {

    const {register, handleSubmit} = useForm();
    const [serviceProvider, setServiceProvider] = useState(null);

    const registerService = data => {
        if (!serviceProvider) {
            notifyToast('Please select an ambulance service', "error");
            return
        }
        let servicePro = props.serviceProviders.find(x => x.value === serviceProvider);
        if (data.password !== data.confirmPassword) {
            notifyToast('Invalid Passwords', "error");
            return;
        }
        console.log(props.serviceProviders);
        const formatedData = {
            ...data,
            serviceProviderId: serviceProvider,
            ambulanceCharge: servicePro.chargePerKm
        };
        axios({
            method: 'POST',
            url: REGISTER_AMBULANCE,
            data: formatedData
        }).then(response => {
            props.refreshTable();
            props.onClose();
            notifyToast('successfully Registerd', "success");
        }).catch(error => {
            notifyToast('Error creating new ambulance' + error, "error");
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
                            name="number"
                            {...register("number", {required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="driverName"
                            className="form-control col"
                            name="name"
                            {...register("name", {required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver NIC</label>
                        <input
                            id="driverNIC"
                            className="form-control col"
                            name="driverNIC"
                            {...register("driverNIC", {required: true, pattern: /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
                            {...register("contactNumber", {required: true, pattern: /^[0-9]{10}$/})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Email</label>
                        <input
                            id="email"
                            className="form-control col"
                            name="email"
                            {...register("email", {required: true})}
                        />
                    </div>
                    <div className="row form-group">
                        <label>Password</label>
                        <input
                            id="newPassword"
                            className="form-control col"
                            name="password"
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            })}
                            type="password"
                        />
                    </div>
                    <div className="row form-group">
                        <label>Confirm Password</label>
                        <input
                            id="confirmPassword"
                            className="form-control col"
                            name="confirmPassword"
                            {...register("confirmPassword", {
                                required: true,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            })}
                            type="password"
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
