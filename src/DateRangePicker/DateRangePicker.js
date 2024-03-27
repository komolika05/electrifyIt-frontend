import * as React from "react";
import dayjs from 'dayjs'

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function SingleInputDateRangePicker({onDateSelect = () => {}} ) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["SingleInputDateRangeField"]}           sx={{pt: 0}}
>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
          onChange={(newValue) => {
            const [start, end] = newValue;
            if (start && end) {
              const startDate = dayjs(start.$d).format("YYYY/MM/DD")
              const endDate = dayjs(end.$d).format("YYYY/MM/DD")
              console.log("calling on date select")
              onDateSelect(startDate, endDate)
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
