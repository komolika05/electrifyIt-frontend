export async function fetchReports(fromDate, toDate, frequency) {
  let url = "http://localhost:3001/api/reports?";

  if (fromDate && toDate) {
    url += `fromDate=${fromDate}&toDate=${toDate}`;
  }

  if (frequency) {
    url += `&frequency=${frequency}`;
  }

  const response = await fetch(url);
  return response.json();
}
