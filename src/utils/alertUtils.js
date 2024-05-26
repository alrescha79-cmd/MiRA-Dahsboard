import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DateTimePicker from '../components/DateTimePicker'

const MySwal = withReactContent(Swal)

export const showSuccessAlert = (message) => {
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  })
}

Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="#">Why do I have this issue?</a>',
})

export const showErrorAlert = (message) => {
  Swal.fire({
    position: 'top-center',
    icon: 'error',
    title: 'Oops...',
    text: message,
    footer: '<a href="#">Why do I have this issue?</a>',
  })
}

export const showConfirmAlert = async (title, text) => {
  const { isConfirmed } = await MySwal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  })

  return isConfirmed
}

export const showDateInputAlert = async (title, inputLabel) => {
  const { value: date } = await MySwal.fire({
    title,
    html: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>{inputLabel}</label>
        <DateTimePickerWrapper />
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <button
            className="swal2-confirm swal2-styled"
            onClick={() => {
              const datePicker = document.querySelector('.react-datepicker__input-container input')
              MySwal.clickConfirm()
              return datePicker ? new Date(datePicker.value) : null
            }}
          >
            OK
          </button>
          <button className="swal2-cancel swal2-styled" onClick={() => MySwal.clickCancel()}>
            Cancel
          </button>
        </div>
      </div>
    ),
    showCancelButton: false,
    showConfirmButton: false,
    preConfirm: () => {
      const datePicker = document.querySelector('.react-datepicker__input-container input')
      return datePicker ? new Date(datePicker.value) : null
    },
  })

  return date
}

const DateTimePickerWrapper = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return <DateTimePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
}
