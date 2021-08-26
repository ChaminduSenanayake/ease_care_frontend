import React, {Component} from "react";
import '../../assets/css/Dashboard-Style.css';
class Dashboard extends Component {

    render() {
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
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white o-hidden h-100" id="top-card-1">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-comments"></i>
                                    </div>
                                    <div className="mr-5">26 New Messages!</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white o-hidden h-100" id="top-card-2">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-list"></i>
                                    </div>
                                    <div className="mr-5">11 New Tasks!</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white o-hidden h-100" id="top-card-3">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                    </div>
                                    <div className="mr-5">123 New Orders!</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white o-hidden h-100" id="top-card-4">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                    </div>
                                    <div className="mr-5">13 New Tickets!</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="/#">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fa fa-area-chart"></i> Area Chart Example
                    </div>
                    <div className="card-body">
                        <canvas id="myAreaChart" width="100%" height="30">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                                width="600" height="450" frameBorder="0" style="border:0" allowFullScreen></iframe>
                        </canvas>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-3">
                            <div className="card-header">
                                <i className="fa fa-bar-chart"></i> Bar Chart Example
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-8 my-auto">
                                        <canvas id="myBarChart" width="100" height="50"></canvas>
                                    </div>
                                    <div className="col-sm-4 text-center my-auto">
                                        <div className="h4 mb-0 text-primary">$34,693</div>
                                        <div className="small text-muted">YTD Revenue</div>
                                        <hr/>
                                        <div className="h4 mb-0 text-warning">$18,474</div>
                                        <div className="small text-muted">YTD Expenses</div>
                                        <hr/>
                                        <div className="h4 mb-0 text-success">$16,219</div>
                                        <div className="small text-muted">YTD Margin</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <i className="fa fa-pie-chart"></i> Pie Chart Example
                            </div>
                            <div className="card-body">
                                <canvas id="myPieChart" width="100%" height="100"></canvas>
                            </div>
                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Dashboard;


