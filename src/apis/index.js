export async function fetchReports(fromDate, toDate) {
  let url = "http://localhost:3001/reports";

  if (fromDate && toDate) {
    url += `?fromDate=${fromDate}&toDate=${toDate}`;
  }

  const response = await fetch(url);
  return response.json();
}
