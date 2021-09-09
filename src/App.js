import './assets/css/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/Navbar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import {BrowserRouter,Route} from "react-router-dom";
import AddNewService from "./components/HeathService/AddNewService";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Sidebar/>
                <div id="content">
                    <NavBar/>
                    <BrowserRouter>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/addNewService">
                            <AddNewService/>
                        </Route>
                    </BrowserRouter>

                </div>
            </div>
        </div>
    );

}

export default App;
