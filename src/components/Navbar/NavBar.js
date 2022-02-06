import React from "react";
import '../../assets/css/Navbar-Style.css';
import $ from "jquery";
import {BsLayoutSidebarInset, FcAssistant} from "react-icons/all";

function NavBar() {
    const toggleFunction = () => {
        $('#sidebar').toggleClass('active');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn"
                        onClick={toggleFunction}>
                    <span><BsLayoutSidebarInset size='30px'/></span>
                </button>
                <h3 id={"navBarTitle"}>Ease Care</h3>
                {/*className="collapse navbar-collapse"*/}
                <div id="navbarSupportedContent">
                    <ul className="nav navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#"><FcAssistant size='30px'/> Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default NavBar;

