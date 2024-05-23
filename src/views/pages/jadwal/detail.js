import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the data based on the ID
    const selectedData = data.find(item => item.id === parseInt(id));

    return (
        <div>
            <h1>Detail for ID: {id}</h1>
            {selectedData ? (
                <div>
                    <p>No. Antrian: {selectedData.nomorAntrian}</p>
                    <p>Nama Pasien: {selectedData.pasien}</p>
                    <p>Waktu: {selectedData.waktu}</p>
                </div>
            ) : (
                <p>No data found for this ID</p>
            )}
            <button onClick={() => navigate('/jadwal')} className="btn btn-primary">Back to Jadwal</button>
        </div>
    );
}

export default Detail;
