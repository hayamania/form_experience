import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useController, useForm } from "react-hook-form";

export default function ControlledSelectField(props) {
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
  const options = props.options;

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        disabled={props.disabled}
        label={props.label}
        sx={{ textAlign: "left" }}
        onFocus={props.onFocus}
        error={Object.keys(errors).includes(props.name)}
        variant="filled"
      >
        {options.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {props.helperText}
        {Object.keys(errors).includes(props.name)
          ? errors[props.name].message
          : null}
      </FormHelperText>
    </FormControl>
  );
}
