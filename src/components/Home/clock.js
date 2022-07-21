import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);

  const time = date.toLocaleTimeString();
  const string = dayjs(date).format('MMMM D, YYYY');
  return (
    <div style={{ textAlign: 'right' }}>
      <div>
        {time}
      </div>
      <div>
        {string}
      </div>
    </div>
  );
}

export default Clock;
