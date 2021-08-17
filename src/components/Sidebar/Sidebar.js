
import React, {Component} from "react";
import '../../assets/css/SideBar-Style.css';
import {
    AiFillDashboard,
    AiFillFileAdd,
    FaAmbulance,
    FaHeartbeat, HiViewGridAdd,
    ImUsers,
    MdSettings,
    RiHeartAddFill, RiMapPinAddLine, SiAddthis
} from "react-icons/all";

class Sidebar extends Component{

    render() {
        return(
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Ease Care</h3>
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <a href="#"><AiFillDashboard/>  Dashboard</a>
                    </li>
                    <li>
                        <div className="dropdown dropend">
                            <a className="btn dropdown-toggle" href="/#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <FaHeartbeat/>  Health Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="/#"><RiHeartAddFill size='30px' /> Add new</a></li>
                                <li><a className="dropdown-item" href="/#"><HiViewGridAdd size='30px'/> View Services</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown dropend">
                            <a className="btn dropdown-toggle" href="/#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <FaAmbulance/>   Ambulances
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="/#"><RiMapPinAddLine size='30px'/> Add new</a></li>
                                <li><a className="dropdown-item" href="/#"><HiViewGridAdd size='30px'/> View Ambulances</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/#"><ImUsers/>  Users</a>
                    </li>
                    <li>
                        <a href="#"><MdSettings/> Settings</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Sidebar;