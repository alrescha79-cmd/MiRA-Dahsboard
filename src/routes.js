import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Jadwal = React.lazy(() => import('./views/pages/jadwal/jadwal'))
const JadwalDetail = React.lazy(() => import('./views/pages/jadwal/detail'))
const Pasien = React.lazy(() => import('./views/pages/pasien/'))
const PasienDetail = React.lazy(() => import('./views/pages/pasien/detail'))
const Dokter = React.lazy(() => import('./views/pages/dokter'))
const Laporan = React.lazy(() => import('./views/pages/laporan'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/jadwal', name: 'Jadwal', element: Jadwal },
  { path: '/detail-jadwal/:id', name: 'Jadwal Detail', element: JadwalDetail },
  { path: '/pasien', name: 'Pasien', element: Pasien },
  { path: '/detail-pasien/:id', name: 'Pasien Detail', element: PasienDetail },
  { path: '/dokter', name: 'Dokter', element: Dokter },
  { path: '/laporan', name: 'Laporan', element: Laporan },
]

export default routes
