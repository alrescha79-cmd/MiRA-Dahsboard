// src/routes.js
import React from 'react'
import PrivateRoute from './components/PrivateRoute'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Jadwal = React.lazy(() => import('./views/pages/jadwal/jadwal'))
const JadwalDetail = React.lazy(() => import('./views/pages/jadwal/detail'))
const Pasien = React.lazy(() => import('./views/pages/pasien/'))
const PasienDetail = React.lazy(() => import('./views/pages/pasien/detail'))
const Dokter = React.lazy(() => import('./views/pages/dokter'))
const Laporan = React.lazy(() => import('./views/pages/laporan'))
const TambahLaporan = React.lazy(() => import('./views/pages/laporan/TambahLaporan'))

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    element: Dashboard,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    element: Jadwal,
  },
  {
    path: '/jadwal/:id',
    name: 'Jadwal Detail',
    element: JadwalDetail,
  },
  {
    path: '/pasien',
    name: 'Pasien',
    element: Pasien,
  },
  {
    path: '/pasien/:id',
    name: 'Pasien Detail',
    element: PasienDetail,
  },
  {
    path: '/dokter',
    name: 'Dokter',
    element: Dokter,
  },
  {
    path: '/laporan',
    name: 'Laporan',
    element: Laporan,
  },
  {
    path: '/tambah-laporan/:id',
    name: 'Tambah Laporan',
    element: TambahLaporan,
  },
]

export default routes
