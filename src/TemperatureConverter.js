import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

function cToF(c) {
  return (c * 9) / 5 + 32;
}
function fToC(f) {
  return ((f - 32) * 5) / 9;
}

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '' || isNaN(Number(value))) {
      setFahrenheit('');
    } else {
      setFahrenheit((cToF(Number(value))).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '' || isNaN(Number(value))) {
      setCelsius('');
    } else {
      setCelsius((fToC(Number(value))).toFixed(2));
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', maxWidth: 300, margin: '24px auto' }}>
      <TextField
        label="Цельсий"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
      />
      <TextField
        label="Фаренгейт"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
      />
    </Box>
  );
}
