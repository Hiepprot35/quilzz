import { useEffect, useState } from "react";
import './formInput.css'

export default function InputForm(props) {

  const [focused, setFocused] = useState(false);
  const [test, setTest] = useState()
  const { label, name, errorMessage, onChange, id, placeholder, value, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput" style={props.style}>
      <input
        style={{ color: props.color }}
        {...inputProps}
        name={name}
        onBlur={onChange}
        value={value}
        focused={focused.toString()}
        placeholder={placeholder}
        required
      />

      <label htmlFor="" >{label}</label>
      <div className="underline"></div>

    </div>

  )
}