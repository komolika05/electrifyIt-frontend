export async function fetchReports() {
  const response = await fetch("http://localhost:3001/reports");
  return response.json();
}
