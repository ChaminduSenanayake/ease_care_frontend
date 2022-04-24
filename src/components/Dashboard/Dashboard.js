import "../../assets/css/Dashboard-Style.css";
import AmbulanceLocations from "./AmbulanceLocations";
import TopCard from "./TopCard";

function Dashboard() {
    return (
        <div>
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">My Dashboard</li>
                </ol>
                <div className="row">
                    <TopCard name="Total Ambulance Services" value={5} id="top-card-1"/>
                    <TopCard name="Total Ambulances" value={10} id="top-card-2"/>
                    <TopCard name="Total General Users" value={1000} id="top-card-3"/>
                    <TopCard name="Available Ambulances" value={88} id="top-card-4"/>
                </div>
            </div>
            <AmbulanceLocations/>
        </div>
    );
}

export default Dashboard;
