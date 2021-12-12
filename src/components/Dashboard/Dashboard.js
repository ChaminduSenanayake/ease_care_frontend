import {useEffect} from 'react';
import '../../assets/css/Dashboard-Style.css';
import $ from 'jquery';
import AmbulanceLocations from './AmbulanceLocations';
import TopCard from './TopCard';
function Dashboard(){
    useEffect(() => {
        $('#navBarTitle').text('Dashboard');
    });
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
                        <TopCard
                            name="Total Ambulance Services"
                            value={18}
                            id="top-card-1"
                        />
                        <TopCard
                            name="Total Ambulances"
                            value={100}
                            id="top-card-2"
                        />
                        <TopCard
                            name="Total General Users"
                            value={1000}
                            id="top-card-3"
                        />
                        <TopCard
                            name="Available Ambulances"
                            value={88}
                            id="top-card-4"
                        />
                    </div>
                </div>
                <AmbulanceLocations/>
                {/* <div className="row">*/}
                {/*    <div className="col-lg-8">*/}
                {/*        <div className="card mb-3">*/}
                {/*            <div className="card-header">*/}
                {/*                <i className="fa fa-bar-chart"></i> Bar Chart Example*/}
                {/*            </div>*/}
                {/*            <div className="card-body">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-sm-8 my-auto">*/}
                {/*                        <canvas id="myChart" width="100" height="50"></canvas>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-sm-4 text-center my-auto">*/}
                {/*                        <div className="h4 mb-0 text-primary">$34,693</div>*/}
                {/*                        <div className="small text-muted">YTD Revenue</div>*/}
                {/*                        <hr/>*/}
                {/*                        <div className="h4 mb-0 text-warning">$18,474</div>*/}
                {/*                        <div className="small text-muted">YTD Expenses</div>*/}
                {/*                        <hr/>*/}
                {/*                        <div className="h4 mb-0 text-success">$16,219</div>*/}
                {/*                        <div className="small text-muted">YTD Margin</div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-lg-4">*/}
                {/*        <div className="card mb-3">*/}
                {/*            <div className="card-header">*/}
                {/*                <i className="fa fa-pie-chart"></i> Pie Chart Example*/}
                {/*            </div>*/}
                {/*            <div className="card-body">*/}
                {/*                <canvas id="myPieChart" width="100%" height="100"></canvas>*/}
                {/*            </div>*/}
                {/*            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/* </div>*/}
            </div>
        )
}
export default Dashboard;


