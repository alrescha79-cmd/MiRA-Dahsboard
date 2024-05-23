import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTableComponent from '../../../../src/components/DataTable';

const columns = (navigate) => [
  {
    name: 'No. Antrian',
    selector: row => row.nomorAntrian,
  },
  {
    name: 'Nama Pasien',
    selector: row => row.pasien,
  },
  {
    name: 'Waktu',
    selector: row => row.waktu,
  },
  {
    name: 'Action',
    cell: row => (
      <div>
        <button className="btn btn-secondary text-white m-1" onClick={() => navigate(`/detail-jadwal/${row.id}`)}>Lihat</button>
        <button className="btn btn-success text-white m-1" onClick={() => navigate(`/konfirmasi-jadwal/${row.id}`)}>Konfirmasi</button>
        <button className="btn btn-warning text-white m-1" onClick={() => navigate(`/jadwal-ulang/${row.id}`)}>Jadwal Ulang</button>
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    nomorAntrian: 1,
    pasien: 'Ahmad',
    waktu: '21/05/2024 08:00',
  },
  {
    id: 2,
    nomorAntrian: 2,
    pasien: 'Ahmad',
    waktu: '21/05/2024 09:00',
  },
  {
    id: 3,
    nomorAntrian: 3,
    pasien: 'Ahmad',
    waktu: '21/05/2024 09:30',
  },
];

const Jadwal = () => {
  const navigate = useNavigate();

  return (
    <div>
      <DataTableComponent columns={columns(navigate)} data={data} />
    </div>
  );
}

export default Jadwal;
