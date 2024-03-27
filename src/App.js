import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import Reports from "./Reports/Reports.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;
