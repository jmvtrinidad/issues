import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar';

export function DatePicker() {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Open</button>
      {isOpen ? <Calendar onChange={onChange} value={value} /> :null}
    </div>
  );
}