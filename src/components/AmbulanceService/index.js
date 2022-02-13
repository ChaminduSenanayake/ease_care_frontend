import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css";
import {HiPlus} from "react-icons/all";
import AddNewService from "./AddNewService";
import ServiceTable from "./ServiceTable";
import {GET_SERVICE_PROVIDERS} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import axios from 'axios';
import Spinner from "../Common/spinner";
import {STATUS} from "../Common/const";

function AmbulanceService() {
    useEffect(() => {
        $("#navBarTitle").text("AMBULANCE  SERVICES");
    });
    const [modalVisible, setModalVisible] = useState(false);
    const handleClose = () => setModalVisible(false);
    const handleShow = () => setModalVisible(true);
    const [dataSet, setDataSet] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: GET_SERVICE_PROVIDERS,
        }).then(response => {
            setLoading(false);
            setDataSet(response.data);
        }).catch(error => {
            if (error.data) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
            setLoading(false);
        });
    },[count])
    const [filterText, setFilterText] = useState("");
    const filteredItems = dataSet.filter(
        (item) =>
            item.serviceProviderName &&
            item.serviceProviderName.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <Modal show={modalVisible} onHide={handleClose} size="lg" centered>
                <AddNewService onClose={handleClose}  refreshTable={() => setCount(count+1)}/>
            </Modal>
            <div className="topDiv text-end mt-5 me-5">
                <button className="btn btn-addNew" onClick={handleShow}>
                    <HiPlus size="35px"/> Add New Service
                </button>
            </div>

            <div className="mx-5">
                <div className=" mb-4">
                    <input
                        className="searchBox"
                        placeholder="Search Service Name"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
                {loading?
                    <Spinner/>
                    :
                    <ServiceTable
                        ambulanceServices={filteredItems}
                        totalData={15}
                        refreshTable={() => setCount(count+1)}
                    />
                }
            </div>
        </div>
    );
}

export default AmbulanceService;
