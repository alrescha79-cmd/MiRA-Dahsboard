import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const DatePickerWrapper = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
    }
    .react-datepicker__input-container {
        width: 100%;
    }
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
    }
`;

const DateTimePicker = ({ selectedDate, setSelectedDate }) => {
    return (
        <DatePickerWrapper>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="Pp"
                timeFormat="HH:mm"
                timeIntervals={15}
                placeholderText="Select date and time"
            />
        </DatePickerWrapper>
    );
};

export default DateTimePicker;
