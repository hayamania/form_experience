import React from "react";
import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useController, useForm } from "react-hook-form";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function ControlledMultiSelectFieldSchool(props) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields, errors },
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules,
    defaultValue: props.data,
  });

  function displaySelected(value) {
    if (props.selectMap != null) {
      let selectTitle = props.selectMap.find(({ userid }) => userid === value);
      return selectTitle?.school;
    } else {
      return null;
    }
  }
  const onChangeIntercept = (data) => {
    // console.log(data);
    onChange(data);
  };
  return (
    <FormControl sx={props.style}>
      <InputLabel id={props.name}>{props.label}</InputLabel>
      <Select
        onChange={onChangeIntercept} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        multiple={true}
        name={name}
        disabled={props.dataOption}
        label={props.label}
        variant="filled"
        sx={{ textAlign: "left" }}
        error={Object.keys(errors).includes(props.name)}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected?.map((value) => (
              <Chip key={value} label={displaySelected(value)} />
            ))}
          </Box>
        )}
        ref={ref}
        MenuProps={MenuProps}
      >
        {props.selectMap?.map((option) => (
          <MenuItem key={option.userid} value={option.userid}>
            {option.school}
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
