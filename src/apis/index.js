export async function fetchReports(fromDate, toDate) {
  let url = "http://13.71.41.129/reports/";

  if (fromDate && toDate) {
    url += `?fromDate=${fromDate}&toDate=${toDate}`;
  }

  const response = await fetch(url);
  return response.json();
}
