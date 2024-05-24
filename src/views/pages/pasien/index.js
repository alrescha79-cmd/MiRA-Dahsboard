import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTableComponent from '../../../../src/components/DataTable';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../../../src/config/firestore';

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
        name: 'Nama Pasien',
        selector: row => row.nama_pasien,
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

const Jadwal = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const dataCollection = await getDocs(collection(db, "pasien"));
            setData(dataCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };

        fetchData();
    }, []);

    return (
        <div>
            <DataTableComponent columns={columns(navigate)} data={data} />
        </div>
    );
}

export default Jadwal;