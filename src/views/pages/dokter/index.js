import React from 'react'
import DataTableComponent from '../../../../src/components/DataTable'

const columns = [
  {
    name: 'Nama Dokter',
    selector: (row) => row.nama,
  },
  {
    name: 'Spesialis',
    selector: (row) => row.spesialis,
  },
  {
    name: 'Action',
    cell: (row) => (
      <div>
        <button className="btn btn-secondary text-white m-1">Cooming Soon</button>
      </div>
    ),
  },
]

const data = [
  {
    id: 1,
    nama: 'Dr. Ahmad',
    spesialis: 'Dokter Radiologi',
  },
  {
    id: 2,
    nama: 'Dr. Ahmad',
    spesialis: 'Dokter Radiologi',
  },
  {
    id: 3,
    nama: 'Dr. Ahmad',
    spesialis: 'Dokter Radiologi',
  },
]

const Jadwal = () => {
  return (
    <div>
      <button className="btn btn-success text-white m-2">Tambah Dokter</button>
      <DataTableComponent columns={columns} data={data} />
    </div>
  )
}

export default Jadwal
