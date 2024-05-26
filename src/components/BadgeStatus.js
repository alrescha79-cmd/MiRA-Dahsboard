import React from 'react'
import PropTypes from 'prop-types'

const BadgeStatus = ({ status = 'Menunggu Konfirmasi' }) => {
  let className
  switch (status) {
    case 'Selesai':
      className = 'badge bg-success p-2 text'
      break
    case 'Konfirmasi':
      className = 'badge bg-primary p-2 text-white'
      break
    case 'Jadwal Ulang':
      className = 'badge bg-warning p-2 text-white'
      break
    default:
      className = 'badge bg-danger p-2 text-white'
  }
  return <span className={className}>{status || 'Belum Terkonfirmasi'}</span>
}

BadgeStatus.propTypes = {
  status: PropTypes.string,
}

export default BadgeStatus
