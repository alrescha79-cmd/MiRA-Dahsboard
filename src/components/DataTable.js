import React from 'react'
import PropTypes from 'prop-types'
import DataTable from 'react-data-table-component'

const DataTableComponent = ({ columns, data }) => {
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
  )
}

DataTableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default DataTableComponent
