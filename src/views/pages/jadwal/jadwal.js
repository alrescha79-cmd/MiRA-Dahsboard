import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTableComponent from '../../../../src/components/DataTable'
import BadgeStatus from '../../../../src/components/BadgeStatus'
import { fetchData, updateDocument } from '../../../../src/utils/firestoreUtils'
import { showSuccessAlert, showDateInputAlert } from '../../../../src/utils/alertUtils'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

const confirmAppointment = async (id, reloadData) => {
  await updateDocument('pasien', id, { status: 'Konfirmasi' })
  showSuccessAlert('Berhasil mengkonfirmasi jadwal!')
  reloadData()
}

const rescheduleAppointment = async (id, reloadData) => {
  const date = await showDateInputAlert('Pilih tanggal baru', 'Jadwal baru')
  if (date) {
    await updateDocument('pasien', id, { waktu: date })
    await updateDocument('pasien', id, { status: 'Jadwal Ulang' })
    showSuccessAlert('Berhasil menjadwal ulang!')
    reloadData()
  }
}

const columns = (navigate, reloadData) => [
  {
    name: 'No. Antrian',
    selector: (row) => row.nomor_antrian,
  },
  {
    name: 'Nama Pasien',
    selector: (row) => row.nama_pasien,
  },
  {
    name: 'Jadwal Kunjungan',
    cell: (row) => (
      <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
        {format(row.waktu.toDate(), 'PPPPpppp', { locale: id })}
      </div>
    ),
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
          onClick={() => navigate(`/jadwal/${row.id}`)}
        >
          Detail
        </button>
        <button
          className="btn btn-success text-white m-1"
          onClick={() => confirmAppointment(row.id, reloadData)}
        >
          Konfirmasi
        </button>
        <button
          className="btn btn-warning text-white m-1"
          onClick={() => rescheduleAppointment(row.id, reloadData)}
        >
          Jadwal Ulang
        </button>
      </div>
    ),
  },
]

const Jadwal = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const loadData = async () => {
    const fetchedData = await fetchData('pasien')
    setData(fetchedData)
  }

  const reloadData = () => {
    loadData()
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <DataTableComponent columns={columns(navigate, reloadData)} data={data} />
    </div>
  )
}

export default Jadwal
