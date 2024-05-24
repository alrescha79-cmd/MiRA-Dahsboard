import { CButton } from '@coreui/react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const TambahLaporan = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        MySwal.fire({
            title: 'Anda yakin ingin kembali?',
            text: "Perubahan yang Anda buat mungkin tidak akan disimpan.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, kembali',
            cancelButtonText: 'Tidak, tetap di sini'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/laporan');
            }
        });
    };

    return (
        <div>
            <h1>Tambah Laporan untuk Pasien ID: {id}</h1>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Catatan</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <label htmlFor="exampleFormControlTextarea1">Hasil Pemeriksaan</label>
                <input className="form-control" type="file" id="formFile" />
                <label htmlFor="exampleFormControlTextarea1">Dokumen Tambahan Radiologi</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <button onClick={handleBackClick} className="btn btn-danger m-4">Kembali</button>
            <CButton color="success">Simpan</CButton>
        </div>
    );
}

export default TambahLaporan;
