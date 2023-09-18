import React, { useContext } from "react";
import LandingPage from "./components/LandingPage";
import AuditReport from "./components/AuditReport/AuditReport";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/utils/Loader";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./context/application-context";

function App() {
  // accessing data from context API
  const appCtx = useContext(AppContext);
  const loading = appCtx.loading;

  console.log(
    process.env.REACT_APP_API_USERNAME,
    process.env.REACT_APP_API_PASSWORD
  );

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/audit_report" element={<AuditReport />} />
        </Routes>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
