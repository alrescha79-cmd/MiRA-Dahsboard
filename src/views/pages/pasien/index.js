import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTableComponent from '../../../../src/components/DataTable'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../src/config/firestore'
import BadgeStatus from '../../../../src/components/BadgeStatus'

const columns = (navigate) => [
  {
    name: 'Nama Pasien',
    selector: (row) => row.nama_pasien,
  },
  {
    name: 'Status',
    cell: (row) => <BadgeStatus status={row.status} />,
  },
  {
    name: 'Action',
    cell: (row) => (
      <div>
        <button
          className="btn btn-secondary text-white m-1"
          onClick={() => navigate(`/pasien/${row.id}`)}
        >
          Detail
        </button>
        <button className="btn btn-success text-white m-1">Tambah Catatan</button>
      </div>
    ),
  },
]

const Jadwal = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataCollection = await getDocs(collection(db, 'pasien'))
      const fetchedData = dataCollection.docs.map((doc) => {
        const docData = doc.data()
        return {
          ...docData,
          id: doc.id,
          status: docData.status || 'Menunggu Konfirmasi',
        }
      })
      setData(fetchedData)
    }

    fetchData()
  }, [])

  return (
    <div>
      <DataTableComponent columns={columns(navigate)} data={data} />
    </div>
  )
}

export default Jadwal
