import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTableComponent from '../../../../src/components/DataTable';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore"; 
import { db } from '../../../../src/config/firestore';

const confirmAppointment = async (id) => {
  const docRef = doc(db, "pasien", id);
  await updateDoc(docRef, {
    status: "konfirmasi"
  });
  alert("Appointment confirmed successfully");
};

const columns = (navigate) => [
  {
    name: 'No. Antrian',
    selector: row => row.nomor_antrian,
  },
  {
    name: 'Nama Pasien',
    selector: row => row.nama_pasien,
  },
  {
    name: 'Jadwal Kunjungan',
    selector: row => row.waktu.toDate().toString(),
  },
  {
    name: 'Action',
    cell: row => (
      <div>
        <button className="btn btn-secondary text-white m-1" onClick={() => navigate(`/detail-jadwal/${row.id}`)}>Detail</button>
        <button className="btn btn-success text-white m-1" onClick={() => confirmAppointment(row.id)}>Konfirmasi</button>
        <button className="btn btn-warning text-white m-1" onClick={() => navigate(`/jadwal-ulang/${row.id}`)}>Jadwal Ulang</button>
      </div>
    ),
  },
];

const Jadwal = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    const dataCollection = await getDocs(collection(db, "pasien"));
    setData(dataCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DataTableComponent columns={columns(navigate)} data={data} />
    </div>
  );
}

export default Jadwal;