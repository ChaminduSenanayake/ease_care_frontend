
import React, {Component} from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/SideBar-Style.css';
import {Link} from "react-router-dom";
import {
    AiFillDashboard,
    FaAmbulance,
    FaHeartbeat, HiViewGridAdd,
    ImUsers,
    MdSettings,
    RiHeartAddFill, RiMapPinAddLine
} from "react-icons/all";


class SideBar extends Component{
    render() {
        return(
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img src={logo} width="210" height="55" alt="Logo" />
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <Link to="/"><AiFillDashboard/>  Dashboard</Link>
                    </li>
                    <li>
                        <div className="dropdown dropend">
                            <Link className="btn dropdown-toggle" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <FaHeartbeat/>  Health Services
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" to="addNewService"><RiHeartAddFill size='30px' /> Add new</Link></li>
                                <li><Link className="dropdown-item" to="/#"><HiViewGridAdd size='30px'/> View Services</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown dropend">
                            <Link className="btn dropdown-toggle" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <FaAmbulance/>   Ambulances
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" to="/#"><RiMapPinAddLine size='30px'/> Add new</Link></li>
                                <li><Link className="dropdown-item" to="/#"><HiViewGridAdd size='30px'/> View Ambulances</Link></li>
                            </ul>
                        </div>
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
}
export default SideBar;