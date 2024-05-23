import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'

const jadwal = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row">
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">No. Antrian</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nama Pasien</CTableHeaderCell>
            <CTableHeaderCell scope="col">Waktu</CTableHeaderCell>
            <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Ahmad</CTableDataCell>
            <CTableDataCell>21/05/2024 08:00</CTableDataCell>
            <CTableDataCell>
              <CButton color="secondary" style={{ marginRight: '10px' }}>Lihat</CButton>
              <CButton color="success" style={{ marginRight: '10px' }}>Konfirmasi</CButton>
              <CButton color="danger">Jadwal Ulang</CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>21/05/2024 11:00</CTableDataCell>
            <CTableDataCell>
              <CButton color="secondary" style={{ marginRight: '10px' }}>Lihat</CButton>
              <CButton color="success" style={{ marginRight: '10px' }}>Konfirmasi</CButton>
              <CButton color="danger">Jadwal Ulang</CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>21/05/2024 11:00</CTableDataCell>
            <CTableDataCell>
              <CButton color="secondary" style={{ marginRight: '10px' }}>Lihat</CButton>
              <CButton color="success" style={{ marginRight: '10px' }}>Konfirmasi</CButton>
              <CButton color="danger">Jadwal Ulang</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  )
}

export default jadwal