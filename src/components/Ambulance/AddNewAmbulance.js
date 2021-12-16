import React, { useEffect } from "react";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css";
import Dropdown from "react-bootstrap/Dropdown";

function AddNewAmbulance(props) {
  useEffect(() => {
    $("#navBarTitle").text("New Ambulance ");
  });
  return (
    <div className="p-5">
      <label>
        <b>Register New Ambulance </b>
      </label>
      <hr />
      <div>
        <form method="post" action="">
          <div className="row form-group">
            <label>Service Name</label>
            <input
              type="text"
              id="serviceName"
              className="form-control"
              name="serviceName"
            />
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Service Names
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Suwaseriya</Dropdown.Item>
                <Dropdown.Item>General</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="row form-group">
            <label>Vehicale Number</label>
            <input
              type="text"
              id="vehicaleNumber"
              className="form-control"
              name="vehicaleNumber"
            />
          </div>
          <div className="row form-group">
            <label>Driver Name</label>
            <input
              type="text"
              id="driverName"
              className="form-control"
              name="driverName"
            />
          </div>
          <div className="row form-group">
            <label>Driver NIC</label>
            <input
              type="text"
              id="driverNIC"
              className="form-control"
              name="driverNIC"
            />
          </div>
          <div className="row form-group">
            <label>Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              className="form-control"
              name="contactNumber"
            />
          </div>

          <div className=" form-group text-end mt-5">
            <button
              type="submit"
              className="btn btn-save btn-lg px-5 form-control"
              id="submitbtn"
              name="submit"
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-danger btn-lg px-5 form-control"
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
