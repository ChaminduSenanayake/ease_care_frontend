import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css"
import {HiPlus} from "react-icons/all";
import AddNewService from "./AddNewService";
import ServiceTable from "./ServiceTable";
import addNewAmbulance from "../Ambulance/AddNewAmbulance";

function AmbulanceService() {
    useEffect(() => {
        $('#navBarTitle').text("Ambulance Services");
    });
    const [modalVisible, setModalVisible] = useState(false);
    const handleClose = () => setModalVisible(false);
    const handleShow = () => setModalVisible(true);
    const [loading, setLoading] = useState(false);

    const dataset = [
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"General",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"10019",
            "email":"abc@gmail.com"
        },
        {
            "serviceName":"Suwaseriya",
            "hospitalName":"General",
            "contactNumber":"1919",
            "email":"abc@gmail.com"
        }
    ]

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = dataset.filter(
        item => item.serviceName && item.serviceName.toLowerCase().includes(filterText.toLowerCase()),
    );

    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };

    return (
        <div>
            <Modal show={modalVisible} onHide={handleClose} size="lg" centered>
                <AddNewService
                    onClose={handleClose}
                />
            </Modal>
            <div className="topDiv text-end mt-5 me-5">
                <button className="btn btn-addNew" onClick={handleShow}>
                    <HiPlus size="35px"/> Add New Service
                </button>
            </div>

            <div className="mx-5">
                <div className=" mb-4">
                    <input className="searchBox" placeholder="Search By Service Name" onChange={e => setFilterText(e.target.value)} onClear={handleClear} />
                </div>
                <ServiceTable
                    ambulanceServices={filteredItems}
                    totalData={15}
                    loading={loading}
                    onActionClick={addNewAmbulance}
                />
            </div>
        </div>

    );
}

export default AmbulanceService;
