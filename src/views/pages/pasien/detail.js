import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../../src/config/firestore'

import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react'

const Detail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedData, setSelectedData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'pasien', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setSelectedData({ ...docSnap.data(), id: docSnap.id })
      } else {
        console.log('No such document!')
      }
    }

    fetchData()
  }, [id])

  return (
    <div>
      <button onClick={() => navigate('/pasien')} className="btn btn-primary my-2">
        Back to Pasien
      </button>
      {selectedData ? (
        <div>
          <CCard>
            <CCardHeader>Detail Pasien</CCardHeader>
            <CCardBody>
              <CCardTitle>Status: {selectedData.status}</CCardTitle>
              <CCardText>No. Antrian: {selectedData.nomor_antrian}</CCardText>
              <CCardText>Nama Pasien: {selectedData.nama_pasien}</CCardText>
              <CCardText>Alamat: {selectedData.alamat}</CCardText>
              <CCardText>Usia: {selectedData.usia}</CCardText>
              <CCardText>Jadwal Kunjungan: {selectedData.waktu.toDate().toString()}</CCardText>
            </CCardBody>
          </CCard>
          <CCard className="mt-4">
            <CCardHeader>Hasil Pemeriksaan Radiologi</CCardHeader>
            <CCardBody>
              <CCardTitle>Status: {selectedData.status}</CCardTitle>
            </CCardBody>
          </CCard>
        </div>
      ) : (
        <p>No data found for this ID</p>
      )}
    </div>
  )
}

export default Detail
