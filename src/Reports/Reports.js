import React, { useState, useEffect } from "react";
import { fetchReports } from "../apis";
import "./Reports.scss";
import Dropdown from "../Dropdown/Dropdown.js";
import DatePicker from "../DateRangePicker/DateRangePicker.js";

// Table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Reports() {
  const [reports, setReports] = useState([]);

  async function fetchData(startDate = "", endDate = "") {
    try {
      const reportsResponse = await fetchReports(startDate, endDate);
      setReports(reportsResponse);
    } catch (e) {
      console.log("error fetching reports", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          />
        </div>

        <div className="dropdown-item">
          <DatePicker
            onDateSelect={(startDate, endDate) => {
              console.log("On date select", startDate, endDate);
              fetchData(startDate, endDate);
            }}
          />
        </div>
      </div>

      {/* TABLE */}
      <div>
        <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#1c1c26", position: "sticky", top: 0 }}>
              <TableRow>
                <TableCell>License Plate</TableCell>
                <TableCell align="left">Make</TableCell>
                <TableCell align="left">VIN</TableCell>
                <TableCell align="left">Model</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Miles Driven</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.licenseType}
                  </TableCell>
                  <TableCell align="left">{row.make}</TableCell>
                  <TableCell align="left">{row.vin}</TableCell>
                  <TableCell align="left">{row.model}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.milesDriven}</TableCell>
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
