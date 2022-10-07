import React from "react";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import { useController, useForm } from "react-hook-form";

export default function ControlledCheckboxField(props) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields, errors },
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules,
    defaultValue: props.default,
  });

  return (
    <FormControl error={Object.keys(errors).includes(props.name)}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => onChange(e.target.checked)}
              checked={value}
            />
          }
          label={props.label}
          disabled={props.disabled}
          sx={{ alignItems: "flex-start" }}
        />
      </FormGroup>
      <FormHelperText>
        {Object.keys(errors).includes(props.name)
          ? errors[props.name].message
          : null}
      </FormHelperText>
    </FormControl>
  );
}
