
import React, { useState } from "react";
import Converter from "./components/converter";

function App() {

  const [form, setForm] = useState("#9370DB");
  const [valid, setValid] = useState('#9370DB');

  const RegExp = /^#[0-9A-F]{6}$/i;
  const validateValue = (value) =>
    RegExp.test(value) ? setValid(value) : setValid(false);

  const handleChange = ({ target: { value } }) => {
    value.length === 7 && validateValue(value);
    value.length <= 7 && setForm(value);
  };

  return (
    <div
      className="App"
      style={valid ? { background: `${valid}` } : { background: "red" }}
    >
      <Converter
        form={form}
        valid={valid}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
