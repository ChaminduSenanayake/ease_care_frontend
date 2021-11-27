import React, {useEffect} from "react";
import $ from "jquery";
function AddNewAmbulance(){
    useEffect(()=>{
        $('#navBarTitle').text("New Ambulance");
    });

    return(
        <div className="row m-1 ">
            <div className="container col-md-12 col-md-offset-3">
                <div className="panel panel-primary p-4 mt-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/addNewAmbulance">Ambulance</a>
                        </li>
                        <li className="breadcrumb-item active">Register New Ambulance</li>
                    </ol>
                    <div className="panel-body">
                        <form method="post" action="" accept-charset="UTF-8">
                            <div className="form-group">
                                <label>Ambulance Number</label>
                                <input type="text" id="ambulanceNumber" className="form-control" name="ambulanceNumber"/>
                            </div>
                            <div className="form-group">
                                <label>Service Name</label>
                                <input type="text" id="serviceName" className="form-control" name="serviceName"/>
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="text" id="contactNo" className="form-control" name="contactNo"/>
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" id="userName" className="form-control" name="userName"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" id="password" className="form-control" name="password"/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="text" id="cPassword" className="form-control" name="cPassword"/>
                            </div>
                            <div className="form-group text-end mb-4">
                                <button type="submit" className="btn btn-save btn-lg px-5" id="btnSubmmit"
                                        name="submit">Register
                                </button>
                                <button className="btn btn-danger btn-lg ms-4 px-5" id="btnClear"
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