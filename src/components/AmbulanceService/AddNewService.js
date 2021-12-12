import React, {useEffect} from "react";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css"

function AddNewService(props) {
    useEffect(() => {
        $('#navBarTitle').text("New Ambulance Service");
    });
    return (
        <div className="p-5">
            <label><b>Register New Ambulance Service</b></label>
            <hr/>
            <div className="panel-body">
                <form method="post" action="">
                    <div className="form-group">
                        <label>Service Name</label>
                        <input type="text" id="serviceName" className="form-control" name="serviceName"/>
                    </div>
                    <div className="form-group">
                        <label>Hospital Name</label>
                        <input type="text" id="hospitalName" className="form-control" name="hospitalName"/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" id="address" className="form-control" name="address"/>
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input type="text" id="contactNumber" className="form-control" name="contactNumber"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" id="email" className="form-control" name="email"/>
                    </div>

                    <div className="form-group text-end mt-5">
                        <button type="submit" className="btn btn-save btn-lg px-5" id="submitbtn"
                                name="submit">Register
                        </button>
                        <button type="button" className="btn btn-danger btn-lg ms-4 px-5" id="clearbtn"
                                onClick={props.onClose}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewService;
