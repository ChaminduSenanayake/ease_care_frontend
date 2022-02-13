import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "../../assets/css/AmbulanceService-Style.css";
import { HiPlus } from "react-icons/all";
import AddNewAmbulance from "./AddNewAmbulance";
import AmbulanceTable from "./AmbulanceTable";
import addNewAmbulance from "../Ambulance/AddNewAmbulance";
import axios from "axios";
import { GET_AMBULANCE_SERVICES } from "../Common/Endpoints";
import { STATUS } from "../Common/const";
import { notifyToast } from "../Common/ToastNotification";

function AmbulanceService() {
  useEffect(() => {
    $("#navBarTitle").text("AMBULANCE ");
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
      method: "GET",
      url: GET_AMBULANCE_SERVICES,
    })
      .then((response) => {
        setLoading(false);
        setDataSet(response.data);
        if (
          response.data.paymentStatus === undefined ||
          response.data.paymentStatus === null
        ) {
          response.data.paymentStatus = STATUS[1];
        }
      })
      .catch((error) => {
        if (error.data) {
          notifyToast("Error", "error");
        } else {
          notifyToast("You are Offline!", "warning");
        }
        setLoading(false);
      });
  }, [count]);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = dataSet.filter(
    (item) =>
      item.serviceName &&
      item.serviceName.toLowerCase().includes(filterText.toLowerCase())
  );

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
