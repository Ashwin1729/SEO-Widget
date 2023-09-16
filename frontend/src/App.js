import React, { useContext } from "react";
import LandingPage from "./components/LandingPage";
import AuditReport from "./components/AuditReport/AuditReport";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/utils/Loader";
import { AppContext } from "./context/application-context";

function App() {
  const appCtx = useContext(AppContext);
  const loading = appCtx.loading;

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/audit_report" element={<AuditReport />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
