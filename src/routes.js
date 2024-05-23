import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Jadwal = React.lazy(() => import('./views/pages/jadwal/jadwal'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/jadwal', name: 'Jadwal', element: Jadwal },
]

export default routes
