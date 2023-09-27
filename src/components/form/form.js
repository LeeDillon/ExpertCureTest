import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import dayjs, { Dayjs } from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateField } from "@mui/x-date-pickers/DateField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          defaultValue="Cameroun"
        />
        <TextField label="Address" defaultValue="Cameroun" />
        <TextField label="HR Mobile Number" defaultValue="Cameroun" />
        <TextField label="HR Email ID" defaultValue="Cameroun" />
        <TextField
          label="Date of joining"
          InputLabelProps={{ shrink: true}}
          type="date"
        />
        <TextField label="Designation" defaultValue="Cameroun" />
        <TextField
          required
          id="outlined-required"
          label="Upload Employee ID"
          defaultValue="Upload"
        />
        <TextField label="Department" defaultValue="Cameroun" />
      </div>
    </Box>
  );
}
