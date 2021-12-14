import DataTable from  'react-data-table-component'
function ServiceTable(props) {
    const customStyles = {
        table:{
            style:{
                border: "1px solid #EAEAEA"
            }
        },
        rows: {
            style: {
                minHeight: '56px', // override the row height
            },
        },
        headCells:{
            style:{
                fontSize:'15px',
                fontWeight:'bold'
            }
        },
        cells: {
            style: {
                fontSize:'15px'
            },
        }
    };

    const tableColumns = [
        {
            name: 'ServiceName',
            selector: 'serviceName',
            sortable: true,
            left: false,
            minWidth: '100px',
        },
        {
            name: 'Hospital Name',
            selector: 'hospitalName',
            sortable: true,
            center: false,
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
            name: 'Payment Status',
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
                                onClick={() => props.onActionClick(row, true)}>Edit
                        </button>
                        <button className="btn btn-sm btn-danger mx-2" type="button"
                                onClick={() => props.onActionClick(row, false)}>Delete
                        </button>
                    </>
                )
            },
        },
    ];

    return (
        <div className="col">
            <div className="row">
                <div className="col mt-3 pl-0 pr-0">
                    {props.ambulanceServices.length !== 0 ?
                        <DataTable
                            className="table-sm w-100"
                            columns={tableColumns}
                            data={props.ambulanceServices}
                            striped={true}
                            center={true}
                            highlightOnHover
                            pointerOnHover
                            pagination={true}
                            progressPending={props.loading}
                            customStyles={customStyles}
                        />
                        :
                        <div className="row pl-3 pr-4 justify-content-center">
                            <label htmlFor="exampleFormControlInput1">
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
