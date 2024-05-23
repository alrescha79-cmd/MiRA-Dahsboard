import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTableComponent from '../../../../src/components/DataTable';

const getStatusBadge = (status) => {
    let className;
    switch (status) {
        case 'Selesai':
            className = "badge bg-success p-2 text";
            break;
        case 'Konfirmasi':
            className = 'badge bg-primary p-2 text-white';
            break;
        case 'Jadwal Ulang':
            className = 'badge bg-warning p-2 text-white';
            break;
        default:
            className = 'badge bg-secondary ';
    }
    return <span className={className}>{status}</span>;
};

const columns = (navigate) => [
    {
        name: 'Waktu Kunjungan',
        selector: row => row.waktu,
    },
    {
        name: 'Nama Pasien',
        selector: row => row.pasien,
    },
    {
        name: 'Status',
        cell: row => getStatusBadge(row.status),
    },
    {
        name: 'Action',
        cell: row => (
            <div>
                <button className="btn btn-secondary text-white m-1" onClick={() => navigate(`/detail-pasien/${row.id}`)}>Detail</button>
                <button className="btn btn-success text-white m-1">Tambah Catatan</button>
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
        status: 'Selesai',
    },
    {
        id: 2,
        nomorAntrian: 2,
        pasien: 'Ahmad',
        waktu: '21/05/2024 09:00',
        status: 'Konfirmasi',
    },
    {
        id: 3,
        nomorAntrian: 3,
        pasien: 'Ahmad',
        waktu: '21/05/2024 09:30',
        status: 'Jadwal Ulang',
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
