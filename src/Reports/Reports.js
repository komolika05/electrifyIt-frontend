import React, { useState, useEffect } from "react";
import { fetchReports } from "../apis";
import "./Reports.scss";
import Dropdown from "../Dropdown/Dropdown.js";
import DateRangePicker from "./../DateRangePicker/DateRangePicker.js";

// Table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Reports() {
  const [reports, setReports] = useState({ columns: [], rows: [[]] });
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [frequency, setFrequency] = useState("");

  async function fetchData(startDate = "", endDate = "") {
    try {
      const reportsResponse = await fetchReports(startDate, endDate, frequency);
      setReports(reportsResponse);
    } catch (e) {
      console.log("error fetching reports", e);
    }
  }

  

  return (
    <div className="container">
      <div className="dropdown-container">
        <div className="dropdown-item">
          <Dropdown
            fields={[
              "Total Miles Driven",
              "Energy Consumption",
              "Cost Analysis",
            ]}
            placeholder={"Reports"}
          />
        </div>

        <div className="dropdown-item">
          <Dropdown
            fields={["Daily", "Weekly", "Monthly", "Yearly"]}
            placeholder={"Frequency"}
            onSelect={(value) => {
              setFrequency(value);
            }}
          />
        </div>

        <div className="dropdown-item">
          <DateRangePicker
            onDateSelect={(startDate, endDate) => {
              setFromDate(startDate);
              setToDate(endDate);
            }}
          />
        </div>
        <button
          className="generate-button"
          onClick={() => {
            fetchData(fromDate, toDate);
          }}
        >
          Generate Report
        </button>
      </div>

      {/* TABLE */}
      <div>
        <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{ backgroundColor: "#1c1c26", position: "sticky", top: 0 }}
            >
              <TableRow>
                {reports.columns.map((coloumn) => (
                  <TableCell align="left">{coloumn}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* reports.rows=[["field1", "fild2", ....]] */}
              {reports.rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  {row.map((value) => (
                    <TableCell align="left">{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Reports;
