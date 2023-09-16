import React from "react";
import LandingPage from "./components/LandingPage";
import AuditReport from "./components/AuditReport/AuditReport";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/audit_report" element={<AuditReport />} />
      </Routes>
    </div>
  );
}

export default App;
