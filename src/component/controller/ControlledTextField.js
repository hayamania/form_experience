import React from "react";
import { TextField } from "@mui/material";
import { useController, useForm } from "react-hook-form";

export default function ControlledTextField(props) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields, errors },
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules,
    defaultValue: "",
  });
  // console.log(errors);
  return (
    <TextField
      onChange={onChange} // send value to hook form
      onBlur={props.onBlur}
      value={value} // input value
      name={name} // send down the input name
      label={props.label}
      inputRef={ref} // send input ref, so we can focus on input when error appear
      InputLabelProps={props.labelHandle}
      disabled={props.disabled}
      type={props.type}
      id={props.id}
      onFocus={props.onFocus}
      error={Object.keys(errors).includes(props.name)}
      helperText={
        Object.keys(errors).includes(props.name)
          ? errors[props.name].message
          : null
      }
      variant="filled"
      fullWidth
    />
  );
}
