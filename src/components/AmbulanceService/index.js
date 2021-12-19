import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css";
import {HiPlus} from "react-icons/all";
import AddNewService from "./AddNewService";
import ServiceTable from "./ServiceTable";
import addNewAmbulance from "../Ambulance/AddNewAmbulance";
import {GET_AMBULANCE_SERVICES} from "../Common/Endpoints";
import {notifyToast} from "../Common/ToastNotification";
import axios from 'axios';

function AmbulanceService() {
    useEffect(() => {
        $("#navBarTitle").text("AMBULANCE  SERVICE");
    });
    const [modalVisible, setModalVisible] = useState(false);
    const handleClose = () => setModalVisible(false);
    const handleShow = () => setModalVisible(true);
    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: GET_AMBULANCE_SERVICES,
        }).then(response => {
            setDataSet(response.data);
        }).catch(error => {
            if (error.response) {
                notifyToast('Error', "error");
            } else {
                notifyToast("You are Offline!", "warning");
            }
        });
    })
    const [filterText, setFilterText] = useState("");
    const filteredItems = dataSet.filter(
        (item) =>
            item.serviceProviderName &&
            item.serviceProviderName.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <Modal show={modalVisible} onHide={handleClose} size="lg" centered>
                <AddNewService onClose={handleClose}/>
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
                <ServiceTable
                    ambulanceServices={filteredItems}
                    totalData={15}
                    onActionClick={addNewAmbulance}
                />
            </div>
        </div>
    );
}

export default AmbulanceService;
