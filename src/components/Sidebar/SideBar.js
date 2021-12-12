import React from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/SideBar-Style.css';
import {Link} from "react-router-dom";
import {
    AiFillDashboard,
    FaAmbulance,
    HiViewGridAdd,
    ImUsers,
    MdSettings,
    RiHeartAddFill
} from "react-icons/all";

function SideBar(){
        return(
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img src={logo} alt="Logo" />
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <Link to="/"><AiFillDashboard/>  Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/ambulanceService"><RiHeartAddFill/> Ambulance Services</Link>
                    </li>
                    <li>
                        <Link to="/addNewService"><HiViewGridAdd/> Payments</Link>
                    </li>
                    <li>
                        <Link to="/addNewAmbulance"><FaAmbulance/> Ambulances</Link>
                    </li>
                    <li>
                        <Link to="/#"><ImUsers/>  Users</Link>
                    </li>
                    <li>
                        <Link to="/#"><MdSettings/> Settings</Link>
                    </li>
                </ul>
            </nav>
        );
}
export default SideBar;
