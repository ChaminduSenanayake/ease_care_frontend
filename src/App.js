import "./assets/css/App.css";
import SideBar from "./components/Sidebar/SideBar";
import NavBar from "./components/Navbar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Ambulance from "./components/Ambulance";
import AmbulanceService from "./components/AmbulanceService";
import { useState } from "react";
import Login from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <SideBar />
          <div id="content">
            <NavBar />
            <Switch>
              <Route path="/ambulanceService">
                <AmbulanceService />
              </Route>
              <Route path="/ambulance">
                <Ambulance />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
