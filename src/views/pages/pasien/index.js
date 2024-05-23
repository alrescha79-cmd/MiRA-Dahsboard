import React from 'react'
import {
    CCol,
    CContainer,
    CRow,
  } from '@coreui/react'

const pasien = () => {
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="6">
                        <h1>Halaman Pasien</h1>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default pasien
