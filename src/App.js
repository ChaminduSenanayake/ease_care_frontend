import './assets/css/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/Navbars/NavBar";
import './assets/css/Navbar-Style.css'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Sidebar/>
                <div id="content">
                    <NavBar/>
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active">My Dashboard</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-primary o-hidden h-100">
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
                                <div className="card text-white bg-warning o-hidden h-100">
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
                                <div className="card text-white bg-success o-hidden h-100">
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
                                <div className="card text-white bg-danger o-hidden h-100">
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
                    <div class="card mb-3">
                        <div class="card-header">
                            <i class="fa fa-area-chart"></i> Area Chart Example
                        </div>
                        <div class="card-body">
                            <canvas id="myAreaChart" width="100%" height="30"></canvas>
                        </div>
                        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <i class="fa fa-bar-chart"></i> Bar Chart Example
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-8 my-auto">
                                            <canvas id="myBarChart" width="100" height="50"></canvas>
                                        </div>
                                        <div class="col-sm-4 text-center my-auto">
                                            <div class="h4 mb-0 text-primary">$34,693</div>
                                            <div class="small text-muted">YTD Revenue</div>
                                            <hr/>
                                            <div class="h4 mb-0 text-warning">$18,474</div>
                                            <div class="small text-muted">YTD Expenses</div>
                                            <hr/>
                                            <div class="h4 mb-0 text-success">$16,219</div>
                                            <div class="small text-muted">YTD Margin</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
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
            </div>
        </div>
    );

}

export default App;
