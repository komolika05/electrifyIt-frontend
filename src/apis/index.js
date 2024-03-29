export async function fetchReports(fromDate, toDate, frequency) {
  let url = "http://13.71.41.129/api/reports?";

  if (fromDate && toDate) {
    url += `fromDate=${fromDate}&toDate=${toDate}`;
  }

  if (frequency) {
    url += `&frequency=${frequency}`;
  }

  const response = await fetch(url);
  return response.json();
}
