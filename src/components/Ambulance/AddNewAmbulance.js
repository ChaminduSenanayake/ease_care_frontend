import React, {useEffect} from "react";
import $ from "jquery";
import "../../assets/css/Ambulance-Style.css";
import SelectDropdown from "./SelectDropdown";

function AddNewAmbulance(props) {
    useEffect(() => {
        $("#navBarTitle").text("New Ambulance ");
    });

    return (
        <div className="p-5">
            <label>
                <b>Register New Ambulance </b>
            </label>
            <hr/>
            <div>
                <form method="post" action="">
                    <div className="row form-group">
                        <label>Service Name</label>
                        <div className="col">
                            <SelectDropdown
                                id="serviceName"
                                name="serviceName"
                                options={[]}
                            />
                        </div>
                    </div>

                    <div className="row form-group">
                        <label>Vehicale Number</label>
                        <input
                            id="vehicaleNumber"
                            className="form-control col"
                            name="vehicaleNumber"
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver Name</label>
                        <input
                            id="driverName"
                            className="form-control col"
                            name="driverName"
                        />
                    </div>
                    <div className="row form-group">
                        <label>Driver NIC</label>
                        <input
                            id="driverNIC"
                            className="form-control col"
                            name="driverNIC"
                        />
                    </div>
                    <div className="row form-group">
                        <label>Contact Number</label>
                        <input
                            id="contactNumber"
                            className="form-control col"
                            name="contactNumber"
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
