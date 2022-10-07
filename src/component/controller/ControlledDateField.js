import React from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import auLocale from "dayjs/locale/en-au.js";
import { useController, useForm } from "react-hook-form";

export default function ControlledDateField(props) {
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
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={auLocale}>
      <TextField
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        label={props.label}
        inputRef={ref} // send input ref, so we can focus on input when error appear
        InputLabelProps={{ shrink: true }}
        sx={{ width: "100%" }}
        type="date"
        disabled={props.disabled}
        error={Object.keys(errors).includes(props.name)}
        helperText={
          Object.keys(errors).includes(props.name)
            ? errors[props.name].message
            : null
        }
        variant="filled"
      />
    </LocalizationProvider>
  );
}
