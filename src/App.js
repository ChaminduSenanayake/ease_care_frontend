import './assets/css/App.css';
import SideBar from "./components/Sidebar/SideBar";
import NavBar from "./components/Navbar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddNewAmbulance from "./components/Ambulance/AddNewAmbulance";
import AmbulanceService from "./components/AmbulanceService";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <BrowserRouter>
                    <SideBar/>
                    <div id="content">
                        <NavBar/>
                        <Switch>
                            <Route path="/ambulanceService">
                                <AmbulanceService/>
                            </Route>
                            <Route path="/addNewAmbulance">
                                <AddNewAmbulance/>
                            </Route>
                            <Route path="/">
                                <Dashboard/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
