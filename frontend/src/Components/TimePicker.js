import React, { useState } from 'react';

function TimePicker() {
  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('AM');

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={hour}
        onChange={handleHourChange}
        placeholder="Hour"
        style={{ width: '40px', marginRight: '5px' }}
      />
      :
      <input
        type="text"
        value={minute}
        onChange={handleMinuteChange}
        placeholder="Minute"
        style={{ width: '40px', margin: '0 5px' }}
      />
      <select value={period} onChange={handlePeriodChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
}

export default TimePicker;
