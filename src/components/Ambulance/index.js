import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css";
import { HiPlus } from "react-icons/all";
import AddNewAmbulance from "./AddNewAmbulance";
import AmbulanceTable from "./AmbulanceTable";
import addNewAmbulance from "../Ambulance/AddNewAmbulance";

function AmbulanceService() {
  useEffect(() => {
    $("#navBarTitle").text("AMBULANCE ");
  });
  const [modalVisible, setModalVisible] = useState(false);
  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);
  const [loading, setLoading] = useState(false);

  const dataset = [
    {
      serviceName: "Suwaseriya",
      vehicleNumber: "1234V",
      driverName: "Ariyapala",
      driverNIC: "87909089V",
      contactNumber: "0789098987",
    },
    {
      serviceName: "General",
      vehicleNumber: "5678V",
      driverName: "Sumanadasa",
      driverNIC: "81234567V",
      contactNumber: "0778965678",
    },
    {
      serviceName: "Suwaseriya",
      vehicleNumber: "1786v",
      driverName: "Nimal",
      driverNIC: "85674534V",
      contactNumber: "0712345678",
    },
    {
      serviceName: "Suwaseriya",
      vehicleNumber: "6756V",
      driverName: "Thiranga",
      driverNIC: "64567898V",
      contactNumber: "0779809890",
    },
    {
      serviceName: "General",
      vehicleNumber: "1245V",
      driverName: "Milan",
      driverNIC: "96787876V",
      contactNumber: "0775656789",
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = dataset.filter(
    (item) =>
      item.serviceName &&
      item.serviceName.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return (
    <div>
      <Modal show={modalVisible} onHide={handleClose} size="lg" centered>
        <AddNewAmbulance onClose={handleClose} />
      </Modal>
      <div className="topDiv text-end mt-5 me-5">
        <button className="btn btn-addNew" onClick={handleShow}>
          <HiPlus size="35px" /> Add New Ambulance
        </button>
      </div>

      <div className="mx-5">
        <div className=" mb-4">
          <input
            className="searchBox"
            placeholder="Search Service Name"
            onChange={(e) => setFilterText(e.target.value)}
            onClear={handleClear}
          />
        </div>
        <AmbulanceTable
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
