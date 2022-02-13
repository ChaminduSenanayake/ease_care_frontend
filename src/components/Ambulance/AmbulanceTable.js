import DataTable from  'react-data-table-component'
import "../../assets/css/Ambulance-Style.css";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import EditAmbulance from "./EditAmbulance";
import {customStyles} from "../Common/styles";
import DeleteService from "./DeleteAmbulance";
function AmbulanceTable(props) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const handleEditClose = () => setEditModalVisible(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const handleDeleteClose = () => setDeleteModalVisible(false);

  const [selectedAmbulance, setSelectedAmbulance] = useState(null);
  const showEditModal = (data) => {
    setSelectedAmbulance(data);
    setEditModalVisible(true);
  }
  const showDeleteModal = (data) => {
    setSelectedAmbulance(data);
    setDeleteModalVisible(true);
  }
  const tableColumns = [
    {
      name: 'Vehicle Number',
      selector: 'vehicleNumber',
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
      name: 'Driver Name',
      selector: 'driverName',
      sortable: true,
      center: false,
    },
    {
      name: 'Driver NIC',
      selector: 'driverNIC',
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
                      onClick={() => showDeleteModal(row, true)}>Delete
              </button>
            </>
        )
      },
    },
  ];

  return (
      <div className="col">
        <Modal show={editModalVisible} onHide={handleEditClose} size="lg" centered>
          <EditAmbulance selectedAmbulance={selectedAmbulance} onClose={handleEditClose} refreshTable={props.refreshTable}/>
        </Modal>
        <Modal show={deleteModalVisible} onHide={handleDeleteClose} size="lg" centered>
          <DeleteService selectedAmbulance={selectedAmbulance} onClose={handleDeleteClose} refreshTable={props.refreshTable}/>
        </Modal>
        <div className="row">
          <div className="col mt-3 pl-0 pr-0">
            {props.ambulances.length !== 0?
                <DataTable
                    className="table-sm w-100"
                    columns={tableColumns}
                    data={props.ambulances}
                    striped={true}
                    center={true}
                    highlightOnHover
                    pointerOnHover
                    pagination={true}
                    customStyles={customStyles}
                    expandOnRowDoubleClicked={false}
                    expandableRowsHideExpander={false}
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

export default AmbulanceTable;
