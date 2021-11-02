import React, {Component} from "react";
import "../../assets/css/healthService-Style.css"
function AddNewService(){
        return(
            <form>
                <div className="row ms-2">
                    <div className="col-md-12 col-md-offset-3">
                        <div className="panel panel-primary">
                            <div className="panel-heading"><h3>Add New Health Service</h3></div>
                            <div className="panel-body">
                                <form method="post" action="" accept-charset="UTF-8">
                                    <div className="form-group m-2">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" name="fname"
                                               placeholder="Example: John"/>
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" name="lname"
                                               placeholder="Example: Doe"/>
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="states">Select your State</label>
                                        <select id="states" className="form-control" name="state">
                                            <option value="unknown">Unknown</option>
                                            <option value="alabama">Alabama</option>
                                            <option value="alaska">Alaska</option>
                                            <option value="arizona">Arizona</option>
                                            <option value="arkansas">Arkansas</option>
                                            <option value="california">California</option>
                                            <option value="colorado">Colorado</option>
                                            <option value="connecticut">Connecticut</option>
                                            <option value="delaware">Delaware</option>
                                            <option value="florida">Florida</option>
                                            <option value="georgia">Georgia</option>
                                            <option value="hawaii">Hawaii</option>
                                            <option value="idaho">Idaho</option>
                                            <option value="illinois">Illinois</option>
                                            <option value="indiana">Indiana</option>
                                            <option value="iowa">Iowa</option>
                                            <option value="kansas">Kansas</option>
                                            <option value="kentucky">Kentucky</option>
                                            <option value="louisiana">Louisiana</option>
                                            <option value="maine">Maine</option>
                                            <option value="maryland">Maryland</option>
                                            <option value="massachusetts">Massachusetts</option>
                                            <option value="michigan">Michigan</option>
                                            <option value="minnesota">Minnesota</option>
                                            <option value="mississippi">Mississippi</option>
                                            <option value="missouri">Missouri</option>
                                            <option value="montana">Montana</option>
                                            <option value="nebraska">Nebraska</option>
                                            <option value="nevada">Nevada</option>
                                            <option value="new hampshire">New Hampshire</option>
                                            <option value="new jersey">New Jersey</option>
                                            <option value="new mexico">New Mexico</option>
                                            <option value="new york">New York</option>
                                            <option value="north carolina">North Carolina</option>
                                            <option value="north dakota">North Dakota</option>
                                            <option value="ohio">Ohio</option>
                                            <option value="oklahoma">Oklahoma</option>
                                            <option value="oregon">Oregon</option>
                                            <option value="pennsylvania">Pennsylvania</option>
                                            <option value="rhode island">Rhode Island</option>
                                            <option value="south carolina">South Carolina</option>
                                            <option value="south dakota">South Dakota</option>
                                            <option value="tennessee">Tennessee</option>
                                            <option value="texas">Texas</option>
                                            <option value="utah">Utah</option>
                                            <option value="vermont">Vermont</option>
                                            <option value="virginia">Virginia</option>
                                            <option value="washington">Washington</option>
                                            <option value="west virginia">West Virginia</option>
                                            <option value="wisconsin">Wisconsin</option>
                                            <option value="wyoming">Wyoming</option>
                                        </select>
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="gender">Your Gender</label>
                                        <select id="gender" className="form-control" name="gender">
                                            <option value="unknown">Unknown</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="emailaddr">Email Address</label>
                                        <input type="text" id="emailaddr" className="form-control" name="email"
                                               placeholder="Example: john.doe@gmail.com"/>
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" className="form-control" name="password"
                                               placeholder=""/>
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="verifypass">Verify Password</label>
                                        <input type="password" id="confirmpass" className="form-control"
                                               name="verifypass" placeholder=""/>
                                    </div>
                                    <div className="form-group text-center m-2">
                                        <button type="submit" className="btn btn-primary btn-lg" id="submitbtn"
                                                name="submit">Sign up!
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
}
export default AddNewService;