import React from "react";
import "../App.css";

function Converter ({ form, valid, handleChange}) {

  return (
    <div className="container">
      <input
        className="input"
        value={form}
        onChange={handleChange}
      />
      <div className="output">{valid ? `rgb ( ${hexToRgb(valid).r}, ${hexToRgb(valid).g}, ${hexToRgb(valid).b})` : 'Ошибка!!!'}</div>
    </div>
  );
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export default Converter;