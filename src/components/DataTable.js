import React from 'react';
import DataTable from 'react-data-table-component';

const DataTableComponent = ({ columns, data,}) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            pagination
            responsive
            selectableRows
            striped
            fixedHeader
        />
    );
};

export default DataTableComponent;
