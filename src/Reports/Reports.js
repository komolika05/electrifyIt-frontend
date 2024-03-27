import React, { useState, useEffect } from "react";
import { fetchReports } from "../apis";
import "./Reports.scss";

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

  async function fetchData() {
    try {
      const reportsResponse = await fetchReports();
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
      {/* TABLE */}
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>License Plate</TableCell>
                <TableCell align="right">Make</TableCell>
                <TableCell align="right">VIN</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">Type </TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Miles Driven</TableCell>
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
                  <TableCell align="right">{row.make}</TableCell>
                  <TableCell align="right">{row.vin}</TableCell>
                  <TableCell align="right">{row.model}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.milesDriven}</TableCell>
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
