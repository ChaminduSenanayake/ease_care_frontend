import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "../../assets/css/Ambulance-Style.css";
import {HiPlus} from "react-icons/all";
import AddNewAmbulance from "./AddNewAmbulance";
import AmbulanceTable from "./AmbulanceTable";
import addNewAmbulance from "../Ambulance/AddNewAmbulance";
import axios from "axios";
import {GET_AMBULANCES, GET_AMBULANCES_BY_PROVIDER, GET_SERVICE_PROVIDERS} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import SelectDropdown from "./SelectDropdown";
import Spinner from "../Common/spinner";

function AmbulanceService() {
    useEffect(() => {
        $("#navBarTitle").text("AMBULANCE ");
    });
    const [modalVisible, setModalVisible] = useState(false);
    const handleClose = () => setModalVisible(false);
    const handleShow = () => setModalVisible(true);
    const [serviceProviders, setServiceProviders] = useState([]);
    const [ambulances, setAmbulances] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [serviceProviderId, setServiceProviderId] = useState(-1);

    useEffect(() => {
        axios({
            method: 'GET',
            url: GET_SERVICE_PROVIDERS,
        }).then(response => {
            if(response.data){
                let providers = [];
                for (let i = 0 ; i < response.data.length ; i++){
                    let provider = response.data[i];
                    providers.push({
                        label : provider.serviceProviderName,
                        value : provider.serviceProviderId,
                        chargePerKm : provider.chargePerKm
                    })
                }
                setServiceProviders(providers);
            }
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        });
        getAmbulances();
    },[])

    const addAllOption =(value) => {
        let providers = value.map(x =>x);
            providers.push({
                label : "All",
                value : -1
            })
        return providers;
    }

    useEffect(() => {
        getAmbulances();
    },[serviceProviderId,count ,serviceProviders])

    const getAmbulances =() => {
        console.log(serviceProviderId)
        setLoading(true);
        axios({
            method: 'GET',
            url: serviceProviderId === -1 ? GET_AMBULANCES : GET_AMBULANCES_BY_PROVIDER +"/" +serviceProviderId,
        }).then(response => {
            setLoading(false);
            if(response.data){
                setAmbulances(response.data);
                console.log(response.data)
            }
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
            setLoading(false);
        });
    }


    return (
        <div>
            <Modal show={modalVisible} onHide={handleClose} size="lg" centered>
                <AddNewAmbulance onClose={handleClose} serviceProviders={serviceProviders} refreshTable={() => setCount(count+1)}/>
            </Modal>
            <div className="mx-5">
                <div className="mt-5">
                    <label>Select Service Provider</label>
                    <SelectDropdown
                        id="serviceProvider"
                        name="serviceProvider"
                        options={addAllOption(serviceProviders)}
                        onChange={d => setServiceProviderId(d.value)}
                        className="selectDropdown"
                    />
                </div>
                <div className="topDiv text-end mt-5">
                    <button className="btn btn-addNew" onClick={handleShow}>
                        <HiPlus size="35px"/> Add New Ambulance
                    </button>
                </div>
                {loading ?
                    <Spinner/>
                    :
                    <AmbulanceTable
                        ambulances={ambulances}
                        totalData={15}
                        onActionClick={addNewAmbulance}
                        refreshTable={() => setCount(count+1)}
                    />
                }
            </div>
        </div>
    );
}

export default AmbulanceService;
