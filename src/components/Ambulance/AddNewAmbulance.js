import React, {useEffect} from "react";
import $ from "jquery";
function AddNewAmbulance(){
    useEffect(()=>{
        $('#navBarTitle').text("New Ambulance");
    });

    return(
        <div className="row m-1">
            <div className="container col-md-12 col-md-offset-3">
                <div className="panel panel-primary p-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/addNewService">Ambulance Service</a>
                        </li>
                        <li className="breadcrumb-item active">Register New Ambulance Service</li>
                    </ol>
                    <div className="panel-body">
                        <form method="post" action="" accept-charset="UTF-8">
                            <div className="form-group mt-3">
                                <label>Service Name</label>
                                <input type="text" id="serviceName" className="form-control" name="serviceName"/>
                            </div>
                            <div className="form-group mt-4">
                                <label>Hospital Name</label>
                                <input type="text" id="hospitalName" className="form-control" name="hospitalName"/>
                            </div>
                            <div className="form-group mt-4">
                                <label>Address</label>
                                <input type="text" id="address" className="form-control" name="address"/>
                            </div>
                            <div className="form-group mt-4">
                                <label>Contact Number</label>
                                <input type="text" id="contactNumber" className="form-control" name="contactNumber"/>
                            </div>
                            <div className="form-group mt-4">
                                <label>Email</label>
                                <input type="text" id="email" className="form-control" name="email"/>
                            </div>

                            <div className="form-group text-end mt-4">
                                <button type="submit" className="btn btn-save btn-lg px-5" id="submitbtn"
                                        name="submit">Register
                                </button>
                                <button className="btn btn-danger btn-lg ms-4 px-5" id="clearbtn"
                                        name="submit">Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddNewAmbulance;