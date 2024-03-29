import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Calendar from "@mui/icons-material/Event";
import "./style.css";

export default function SingleInputDateRangePicker({
  onDateSelect = () => {},
}) {
  const slotProps = {
    textField: {
      InputProps: {
        endAdornment: <Calendar />,
      },
    },
    layout: {
      sx: {
        // backgroundColor: "white"
      },
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["SingleInputDateRangeField"]}>
        <DateRangePicker
          slotProps={slotProps}
          placeholder={"Time Frame"}
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
          onChange={(newValue) => {
            const [start, end] = newValue;
            if (start && end) {
              const startDate = dayjs(start).format("YYYY/MM/DD");
              const endDate = dayjs(end).format("YYYY/MM/DD");
              console.log("calling on date select");
              onDateSelect(startDate, endDate);
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
