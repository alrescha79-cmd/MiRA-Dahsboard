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

const pasien = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row">
      <CTable striped>
        <CTableHead color="primary">
          <CTableRow>
            <CTableHeaderCell scope="col">Riwayat Pemeriksaan</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nama Pasien</CTableHeaderCell>
            <CTableHeaderCell scope="col">Jenis Pemeriksaan</CTableHeaderCell>
            <CTableHeaderCell scope="col">Catatan</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">21/05/2024 08:00</CTableHeaderCell>
            <CTableDataCell>Ahmad</CTableDataCell>
            <CTableDataCell>CT-Scan</CTableDataCell>
            <CTableDataCell>
              <CButton color="success" style={{ marginRight: '10px' }}>Tambah Catatan</CButton>
              <CButton color="primary">Hasil Pemeriksaan</CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">21/05/2024 08:00</CTableHeaderCell>
            <CTableDataCell>Ahmad</CTableDataCell>
            <CTableDataCell>CT-Scan</CTableDataCell>
            <CTableDataCell>
              <CButton color="success" style={{ marginRight: '10px' }}>Tambah Catatan</CButton>
              <CButton color="primary">Hasil Pemeriksaan</CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">21/05/2024 08:00</CTableHeaderCell>
            <CTableDataCell>Ahmad</CTableDataCell>
            <CTableDataCell>CT-Scan</CTableDataCell>
            <CTableDataCell>
              <CButton color="success" style={{ marginRight: '10px' }}>Tambah Catatan</CButton>
              <CButton color="primary">Hasil Pemeriksaan</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  )
}

export default pasien