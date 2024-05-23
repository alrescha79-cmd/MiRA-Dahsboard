import React from 'react'
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const jadwal = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        {/* ini halaman untuk jadwal radiologi */}
        <CRow className="justify-content-center">
          <CCol md="6">
            <h1>Jadwal Radiologi</h1>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default jadwal
