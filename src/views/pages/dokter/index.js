import React from 'react'
import {
    CCol,
    CContainer,
    CRow,
  } from '@coreui/react'

const dokter = () => {
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="6">
                        <h1>Halaman dokter</h1>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default dokter