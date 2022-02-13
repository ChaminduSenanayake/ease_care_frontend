import DataTable from  'react-data-table-component'
import "../../assets/css/AmbulanceService-Style.css";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import EditService from "./EditService";
import {customStyles} from "../Common/styles";
import {ExpandedRow} from "./ExpandedRow";
import DeleteService from "./DeleteService";
function ServiceTable(props) {
    const [editModalVisible, setEditModalVisible] = useState(false);
    const handleEditClose = () => setEditModalVisible(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const handleDeleteClose = () => setDeleteModalVisible(false);

    const [selectedProvider, setSelectedProvider] = useState(null);
    const showEditModal = (data) => {
        setSelectedProvider(data);
        setEditModalVisible(true);
    }
    const showDeleteModal = (data) => {
        setSelectedProvider(data);
        setDeleteModalVisible(true);
    }
    const tableColumns = [
        {
            name: 'ServiceProviderName',
            selector: 'serviceProviderName',
            sortable: true,
            left: false,
            minWidth: '100px',
        },
        {
            name: 'Contact Number',
            selector: 'contactNumber',
            sortable: true,
            center: false,
            minWidth: '100px',
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
            center: false,
        },
        {
            name: 'Status',
            selector: 'paymentStatus',
            sortable: true,
            center: false,
        },
        {
            name: 'Actions',
            selector: 'actions',
            sortable: false,
            center: false,
            minWidth: '250px',
            format: row => {
                return (
                    <>
                        <button className="btn btn-sm btn-secondary" type="button"
                                onClick={() => showEditModal(row, true)}>Edit
                        </button>
                        <button className="btn btn-sm btn-danger mx-2" type="button"
                                onClick={() => showDeleteModal(row, true)}>Remove
                        </button>
                    </>
                )
            },
        },
    ];

    return (
        <div className="col">
            <Modal show={editModalVisible} onHide={handleEditClose} size="lg" centered>
                <EditService selectedProvider={selectedProvider} onClose={handleEditClose} refreshTable={props.refreshTable}/>
            </Modal>
            <Modal show={deleteModalVisible} onHide={handleDeleteClose} size="lg" centered>
                <DeleteService selectedProvider={selectedProvider} onClose={handleDeleteClose} refreshTable={props.refreshTable}/>
            </Modal>
            <div className="row">
                <div className="col mt-3 pl-0 pr-0">
                    {props.ambulanceServices.length !== 0?
                        <DataTable
                            className="table-sm w-100"
                            columns={tableColumns}
                            data={props.ambulanceServices}
                            striped={true}
                            center={true}
                            highlightOnHover
                            pointerOnHover
                            pagination={true}
                            customStyles={customStyles}
                            expandableRows={true}
                            expandOnRowClicked={true}
                            expandOnRowDoubleClicked={false}
                            expandableRowsHideExpander={false}
                            expandableRowsComponent={ExpandedRow}
                        />
                        :
                        <div className="row pl-3 pr-4 justify-content-center">
                            <label className="lblTableEmpty" htmlFor="exampleFormControlInput1">
                                There are no records to display
                            </label>
                        </div>
                    }


                </div>
            </div>
        </div>

    )

}

export default ServiceTable;
