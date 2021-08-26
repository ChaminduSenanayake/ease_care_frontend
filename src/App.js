import './assets/css/App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/Navbar/NavBar";
import './assets/css/Navbar-Style.css'
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Sidebar/>
                <div id="content">
                    <NavBar/>
                    <Dashboard/>
                </div>
            </div>
        </div>
    );

}

export default App;
